package com.newlecture.web;

import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/input")
public class InputControllerr extends HelloServlet {
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		resp.setContentType("text/html; charset=utf-8");
//		req.setCharacterEncoding("UTF-8");
//		resp.setCharacterEncoding("UTF-8");
		String p = req.getParameter("p");
		String q = req.getParameter("q");
		String s = req.getParameter("s");
		String qr = req.getQueryString();
		String web = req.getParameter("web");
		PrintWriter out = resp.getWriter();
		out.printf(" %s,<br> %s,<br> %s,<br>",p,q,s);
		out.print(qr+"<br>");
		

		
		out.printf(" %s<br>",web);
		System.out.printf(" %s, %s, %s\n",p,q,s);
		System.out.println(web);
//		System.out.println(page);
		req.setAttribute("p", p);
		req.setAttribute("q", q);
		req.setAttribute("s", s);
		req.setAttribute("web", web);
		
//		req.setAttribute("menus", menus);
		req.getRequestDispatcher("/WEB-INF/view/input.jsp").forward(req, resp);
	}
}
