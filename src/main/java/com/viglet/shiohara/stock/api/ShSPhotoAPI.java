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

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.viglet.shiohara.stock.beans.ShSPhotoBean;
import com.viglet.shiohara.stock.beans.ShSPhotoPreviewBean;

import io.swagger.annotations.Api;

/**
 * @author Alexandre Oliveira
 * @since 0.3.0
 */
@RestController
@RequestMapping("/api/v2/photos")
@Api(value="/photos", tags="Photos", description="Photos")
public class ShSPhotoAPI {
	@GetMapping
	public List<ShSPhotoBean> shApiInfo() {

		List<ShSPhotoBean> shSPhotoBeans = new ArrayList<>();
		
		ShSPhotoBean shSPhotoBean01 = new ShSPhotoBean();
		shSPhotoBean01.setName("image001.jpg");
		shSPhotoBean01.setDate(new Date());
		shSPhotoBean01.setPreview_xxs(new ShSPhotoPreviewBean("https://oidamo.de/assets/img/gallery/preview_xxs/image001.jpg", 500, 375));
		shSPhotoBean01.setPreview_xs(new ShSPhotoPreviewBean("https://oidamo.de/assets/img/gallery/preview_xs/image001.jpg", 1024, 768));
		shSPhotoBean01.setPreview_s(new ShSPhotoPreviewBean("https://oidamo.de/assets/img/gallery/preview_s/image001.jpg", 1440, 1080));
		shSPhotoBean01.setPreview_m(new ShSPhotoPreviewBean("https://oidamo.de/assets/img/gallery/preview_m/image001.jpg", 2133, 1600));
		shSPhotoBean01.setPreview_l(new ShSPhotoPreviewBean("https://oidamo.de/assets/img/gallery/preview_l/image001.jpg",2880, 2160));
		shSPhotoBean01.setPreview_xl(new ShSPhotoPreviewBean("https://oidamo.de/assets/img/gallery/preview_xl/image001.jpg",3840,2880));
		shSPhotoBean01.setRaw(new ShSPhotoPreviewBean("https://oidamo.de/assets/img/gallery/raw/image001.jpg", 4000, 3000));
		shSPhotoBean01.setDominantColor("#7e8659");
		shSPhotoBeans.add(shSPhotoBean01);
		
		ShSPhotoBean shSPhotoBean02 = new ShSPhotoBean();
		shSPhotoBean02.setName("image002.jpg");
		shSPhotoBean02.setDate(new Date());
		shSPhotoBean02.setPreview_xxs(new ShSPhotoPreviewBean("https://oidamo.de/assets/img/gallery/preview_xxs/image002.jpg", 259, 375));
		shSPhotoBean02.setPreview_xs(new ShSPhotoPreviewBean("https://oidamo.de/assets/img/gallery/preview_xs/image002.jpg", 531, 768));
		shSPhotoBean02.setPreview_s(new ShSPhotoPreviewBean("https://oidamo.de/assets/img/gallery/preview_s/image002.jpg", 746, 1080));
		shSPhotoBean02.setPreview_m(new ShSPhotoPreviewBean("https://oidamo.de/assets/img/gallery/preview_m/image002.jpg", 1106, 1600));
		shSPhotoBean02.setPreview_l(new ShSPhotoPreviewBean("https://oidamo.de/assets/img/gallery/preview_l/image002.jpg",1493, 2160));
		shSPhotoBean02.setPreview_xl(new ShSPhotoPreviewBean("https://oidamo.de/assets/img/gallery/preview_xl/image002.jpg",1990,2880));
		shSPhotoBean02.setRaw(new ShSPhotoPreviewBean("https://oidamo.de/assets/img/gallery/raw/image003.jpg", 1769, 2560));
		shSPhotoBean02.setDominantColor("#74725a");
		
		shSPhotoBeans.add(shSPhotoBean02);
		
		ShSPhotoBean shSPhotoBean03 = new ShSPhotoBean();
		shSPhotoBean03.setName("image003.JPG");
		shSPhotoBean03.setDate(new Date());
		shSPhotoBean03.setPreview_xxs(new ShSPhotoPreviewBean("https://oidamo.de/assets/img/gallery/preview_xxs/image003.JPG", 500, 375));
		shSPhotoBean03.setPreview_xs(new ShSPhotoPreviewBean("https://oidamo.de/assets/img/gallery/preview_xs/image003.JPG", 1024, 768));
		shSPhotoBean03.setPreview_s(new ShSPhotoPreviewBean("https://oidamo.de/assets/img/gallery/preview_s/image003.JPG", 1440, 1080));
		shSPhotoBean03.setPreview_m(new ShSPhotoPreviewBean("https://oidamo.de/assets/img/gallery/preview_m/image003.JPG", 2133, 1600));
		shSPhotoBean03.setPreview_l(new ShSPhotoPreviewBean("https://oidamo.de/assets/img/gallery/preview_l/image003.JPG",2880, 2160));
		shSPhotoBean03.setPreview_xl(new ShSPhotoPreviewBean("https://oidamo.de/assets/img/gallery/preview_xl/image003.JPG",3840,2880));
		shSPhotoBean03.setRaw(new ShSPhotoPreviewBean("https://oidamo.de/assets/img/gallery/raw/image003.JPG", 4608, 3456));
		shSPhotoBean03.setDominantColor("#253712");

		shSPhotoBeans.add(shSPhotoBean03);
		
		return shSPhotoBeans;
	}
}
