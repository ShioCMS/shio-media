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
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.viglet.shiohara.stock.beans.ShSPhotoBean;

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
		shSPhotoBean01.setHeight(1);
		shSPhotoBean01.setWidth(1);
		shSPhotoBean01.setSrc("http://placekitten.com/200/300");
		
		shSPhotoBeans.add(shSPhotoBean01);
		
		ShSPhotoBean shSPhotoBean02 = new ShSPhotoBean();
		shSPhotoBean02.setHeight(1);
		shSPhotoBean02.setWidth(1);
		shSPhotoBean02.setSrc("http://placekitten.com/300/300");
		
		shSPhotoBeans.add(shSPhotoBean02);
		
		ShSPhotoBean shSPhotoBean03 = new ShSPhotoBean();
		shSPhotoBean03.setHeight(1);
		shSPhotoBean03.setWidth(1);
		shSPhotoBean03.setSrc("http://placekitten.com/400/300");

		shSPhotoBeans.add(shSPhotoBean03);
		
		return shSPhotoBeans;
	}
}
