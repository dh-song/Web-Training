package com.newlecture.web;

import java.io.IOException;
import java.io.PrintStream;
import java.io.PrintWriter;

import org.apache.catalina.connector.Response;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/hello")
public class HelloServlet extends HttpServlet{
	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setCharacterEncoding("UTF-8"); // tf-8로 보냄
		response.setContentType("text/html; charset=utf-8"); //utf-8로 읽으라 알려 줌
		request.setCharacterEncoding("UTF-8");
		
		String name = request.getParameter("name");
		int c = Integer.parseInt(request.getParameter("c"));
		
		
		PrintWriter out = response.getWriter();
//		PrintStream out = new PrintStream(response.getOutputStream());
		
		for (int i = 0; i < c; i++) {
			out.println(name + " 안녕 안녕~");
		}
		
	}
}