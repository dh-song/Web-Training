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

@WebServlet("/menu/list3")
public class ListView extends HttpServlet {
	
//	private MenuService service;
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setCharacterEncoding("UTF-8");
		resp.setContentType("text/html; charset=utf-8"); //html 이면 out 태그로 인식
		PrintWriter out = resp.getWriter();
		
		out.print("hello");
		
//		Menu[] list = service.getList();
//		int count = service.count();
		
		
		String query = "";
		String sql = String.format("select * from member where nicname like '%s'", "%"+query+"%") ;
//		Menu[] menus = new Menu[100];
//		GList<Menu> menus = new GList<Menu>();
		List<Menu> menus1 = new ArrayList<>();
		
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			String url = "jdbc:oracle:thin:@oracle.newlecture.com:1521/xepdb1";
			Connection con = DriverManager.getConnection(url, "NEWLEC", "rland");
			
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery(sql);

			
			// 필터링, 집계, 정렬
			while(rs.next())	// 서버의 커서를 한칸 내리고 그 위치의 레코드를 옮겨 오는 것. -> 레코드 하나가 저장되는 공간은?
			{
				int id = rs.getInt("id");
				String name = rs.getString("name");
				String nicName = rs.getString("nicname");
//				String format = String.format("id:%d, name:%s, nicname:%s\n" , id, name, nicName);
//				System.out.println(format);
//				out.print(format);
				
//				out.println("</tr>");
//				out.println("</table>");\
				Menu menu = new Menu(id, name, 1000, "");
//				menus.add(menu);
				menus1.add(menu);
			}
			con.close();
			
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
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