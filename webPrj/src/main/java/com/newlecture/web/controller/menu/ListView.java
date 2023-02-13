package com.newlecture.web.controller.menu;



import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.newlecture.web.entity.GList;
import com.newlecture.web.entity.Menu;
import com.newlecture.web.entity.NList;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/menu/listview")
public class ListView extends HttpServlet {
	
//	private MenuService service;
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setCharacterEncoding("UTF-8");
		resp.setContentType("text/html; charset=utf-8"); //html 이면 out 태그로 인식
		PrintWriter out = resp.getWriter();
		
		List<Menu> menus1 = (List<Menu>)req.getAttribute("menus");
		out.print("hello");		
		
		
//		Menu[] list = service.getList();
//		int count = service.count();
		
		
		out.write("<!DOCTYPE html>");
		out.write("<html>");
		out.write("<head>");
		out.write("<meta charset=\"UTF-8\">");
		out.write("<title>Insert title here</title>");
		out.write("</head>");
		out.write("<body>");
		out.write("<h1>메뉴 목록</h1>");
		out.write("<table>");
		out.write("	<tr>");
		out.write("	<td>번호</td>");
		out.write("<td>이름</td>");
		out.write("<td>가격</td>");
		out.write("</tr>");
		
//		for (int i = 0; i < menus.size(); i++) {
//			Menu m = (Menu)menus.get(i);
//		out.write("<tr>");	
//		out.write("	<td>"+m.getId()+"</td>");	
//		out.write("	<td>"+m.getName()+"</td>");	
//		out.write("	<td>5000</td>");				
//		out.write("</tr>");	
//		}
		
		for (int i = 0; i < menus1.size(); i++) {
			Menu m = (Menu)menus1.get(i);
		out.write("<tr>");	
		out.write("	<td>"+m.getId()+"</td>");	
		out.write("	<td>"+m.getName()+"</td>");	
		out.write("	<td>5000</td>");				
		out.write("</tr>");	
		}
		
		out.write("</table>");	
		out.write("</body>");	
		out.write("</html>");
		
		
		
		
//		try {
//		Class.forName("oracle.jdbc.driver.OracleDriver");
//		
//		String url = "jdbc:oracle:thin:@oracle.newlecture.com:1521/xepdb1";
//		String id = "NEWLEC";
//		String pw = "rland";
//
//		Connection conn = DriverManager.getConnection(url, id, pw);
//
//		System.out.println(conn.isClosed() ? "연결 OFF" : "연결 ON");
//
//		Statement st = conn.createStatement();
//		ResultSet rs = st.executeQuery("select * from member");
//		ResultSet rs2 = st.executeQuery("select * from member where id >= 100");
//		ResultSet rs3 = st.executeQuery("select id || '(' || name || ')' from member");
//		conn.close();
//		
//		while (rs3.next()) {
////		System.out.println(rs3.getString(1));
//		out.print(rs3.getString(1));
//		}
//		
//		
//		} catch (ClassNotFoundException e) {
//			System.out.println("오류");
//			e.printStackTrace();
//		} catch (SQLException e) {
//			System.out.println("오류");
//			e.printStackTrace();
//		}
		
	}
}