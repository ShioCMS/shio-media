/*
 * Copyright (C) 2016-2020 the original author or authors. 
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
package com.viglet.shiohara.stock.api;

import java.awt.image.BufferedImage;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Date;
import java.util.List;

import javax.imageio.ImageIO;

import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.ResponseHandler;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.BasicResponseHandler;
import org.apache.http.impl.client.HttpClientBuilder;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.net.HttpHeaders;
import com.viglet.shiohara.stock.beans.ShPostTinyBean;
import com.viglet.shiohara.stock.beans.ShSPhotoBean;
import com.viglet.shiohara.stock.beans.ShSPhotoPreviewBean;

import de.androidpit.colorthief.ColorThief;
import io.swagger.annotations.Api;

/**
 * @author Alexandre Oliveira
 * @since 0.3.0
 */
@RestController
@RequestMapping("/api/v2/photos")
@Api(value = "/photos", tags = "Photos", description = "Photos")
public class ShSPhotoAPI {
	private static final String REST_IMAGE_SERVICE = "https://demo.shiohara.org/api/v2/object/8f6aa05a-4f4f-4f5a-adc5-b8b33955d6f5/list";
	private ResponseHandler<String> responseHandler = new BasicResponseHandler();

	@GetMapping
	public List<ShSPhotoBean> getPhotos() throws ClientProtocolException, IOException {

		HttpClient httpClient = HttpClientBuilder.create().build();
		String username = "admin";
		String password = "admin";
		String encoding = "Basic " + Base64.getEncoder().encodeToString((username + ":" + password).getBytes());
		HttpGet httpGet = new HttpGet(REST_IMAGE_SERVICE);
		httpGet.setHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON.toString());
		httpGet.setHeader(HttpHeaders.ACCEPT, MediaType.APPLICATION_JSON.toString());
		httpGet.setHeader(HttpHeaders.AUTHORIZATION, encoding);
		HttpResponse response = httpClient.execute(httpGet);

		JSONObject jsonObj = new JSONObject(responseHandler.handleResponse(response));
		ObjectMapper mapper = new ObjectMapper();
		List<ShSPhotoBean> shSPhotoBeans = new ArrayList<>();

		try {

			String folderPath = jsonObj.getString("folderPath").toString();
			String siteName = jsonObj.getJSONObject("shSite").getString("name");
			List<ShPostTinyBean> shPosts = mapper.readValue(jsonObj.getJSONArray("shPosts").toString(),
					new TypeReference<List<ShPostTinyBean>>() {
					});

			for (ShPostTinyBean shPost : shPosts) {
				URL url = new URL(String.format("%s/store/file_source/%s%s%s", "https://demo.shiohara.org", siteName,
						folderPath, shPost.getTitle()));

				HttpURLConnection connection = (HttpURLConnection) url.openConnection();
				connection.setRequestProperty("User-Agent",
						"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.65 Safari/537.31");
				BufferedImage image = ImageIO.read(connection.getInputStream());
				int height = image.getHeight();
				int width = image.getWidth();

				int[] rgbArray = ColorThief.getColor(image);
				String rgb = String.format("rgb(%d,%d,%d)", rgbArray[0], rgbArray[1], rgbArray[2]);

				System.out.println(url.toString() + " " + rgb);
				ShSPhotoBean shSPhotoBean = new ShSPhotoBean();

				shSPhotoBean.setName(shPost.getTitle());
				shSPhotoBean.setDate(shPost.getDate());
				shSPhotoBean.setPreview_xxs(new ShSPhotoPreviewBean(url.toString(), width, height));
				shSPhotoBean.setPreview_xs(new ShSPhotoPreviewBean(url.toString(), width, height));
				shSPhotoBean.setPreview_s(new ShSPhotoPreviewBean(url.toString(), width, height));
				shSPhotoBean.setPreview_m(new ShSPhotoPreviewBean(url.toString(), width, height));
				shSPhotoBean.setPreview_l(new ShSPhotoPreviewBean(url.toString(), width, height));
				shSPhotoBean.setPreview_xl(new ShSPhotoPreviewBean(url.toString(), width, height));
				shSPhotoBean.setRaw(new ShSPhotoPreviewBean(url.toString(), width, height));
				shSPhotoBean.setDominantColor(rgb);
				shSPhotoBeans.add(shSPhotoBean);
			}
		} catch (JSONException | IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return shSPhotoBeans;
	}
}
