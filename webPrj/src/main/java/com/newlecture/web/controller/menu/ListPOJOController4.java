package com.newlecture.web.controller.menu;

import com.newlecture.web.service.DefaultMenuService;
import com.newlecture.web.service.MenuService;

public class ListPOJOController4 {

	private MenuService service;

	public ListPOJOController4() {
		service = new DefaultMenuService();
	}

	public String requestHandler() {
		return "/WEB-INF/view/menu/list.jsp";
	}
//	private
	public int test(int x, int b) {
		return x+b;
	}
}
