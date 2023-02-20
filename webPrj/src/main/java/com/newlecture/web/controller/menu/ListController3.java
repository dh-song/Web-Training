package com.newlecture.web.controller.menu;



import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import com.newlecture.web.entity.Menu;
import com.newlecture.web.service.DefaultMenuService;
import com.newlecture.web.service.MenuService;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/menu/list3")
public class ListController3 extends HttpServlet {
	
	private MenuService service;
	
	public ListController3() {
		service = new DefaultMenuService();
	}
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setCharacterEncoding("UTF-8");
		resp.setContentType("text/html; charset=utf-8"); //html 이면 out 태그로 인식
		PrintWriter out = resp.getWriter();
		
		
		out.print("hello !");
		
//		Menu[] list = service.getList();
//		int count = service.count();
		
		List<Menu> menus = service.getList();
		
		System.out.println(menus.toString());
		req.setAttribute("menus", menus);
		req.getRequestDispatcher("/WEB-INF/view/menu/list.jsp").forward(req, resp);

	}
}