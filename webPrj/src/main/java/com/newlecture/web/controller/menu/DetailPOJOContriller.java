package com.newlecture.web.controller.menu;

import com.newlecture.web.service.DefaultMenuService;
import com.newlecture.web.service.MenuService;

public class DetailPOJOContriller {

	private MenuService service;

	public DetailPOJOContriller() {
		service = new DefaultMenuService();
	}

	public String requestHandler() {
		return "/WEB-INF/view/menu/list.jsp";
	}
}
