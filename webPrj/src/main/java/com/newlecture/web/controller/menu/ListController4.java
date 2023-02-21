package com.newlecture.web.controller.menu;



import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import com.newlecture.web.entity.Menu;
import com.newlecture.web.service.DefaultMenuService;
import com.newlecture.web.service.MenuService;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/menu/list4")
public class ListController4 extends HttpServlet {
	
	private MenuService service;
	
	public ListController4() {
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
		Cookie[] cookies = req.getCookies();
		for (Cookie cookie : cookies) {
			if (cookie.getName().equals("dadad")) {
				System.out.println(cookie.getValue());
				break;
			}
		}
		
		List<Menu> menus = service.getList();
		
		System.out.println(menus.toString());
		req.setAttribute("menus", menus);
		req.getRequestDispatcher("/WEB-INF/view/menu/list.jsp").forward(req, resp);

	}
}