package com.newlecture.web.jdbc;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;

import com.newlecture.web.entity.Menu;
//{
//FileInputStream fis = new FileInputStream("res/setting.txt");
//Scanner scan = new Scanner(fis);
//
//String clsName = scan.nextLine();
//Menu mn = (Menu)Class.forName(clsName).newInstance();
//mn.setName("카페라떼");
//System.out.println(mn);
//} 클래스 이름을 스트링으로 받아 new 생성 원리

public class JDBCProgram {

	public static void main(String[] args) throws FileNotFoundException, InstantiationException, IllegalAccessException,
			ClassNotFoundException, SQLException {

		Class.forName("oracle.jdbc.driver.OracleDriver");

		String url = "jdbc:oracle:thin:@oracle.newlecture.com:1521/xepdb1";
		String id = "NEWLEC";
		String pw = "rland";

		Connection conn = DriverManager.getConnection(url, id, pw);

		System.out.println(conn.isClosed() ? "연결 OFF" : "연결 ON");

		Statement st = conn.createStatement();
		ResultSet rs = st.executeQuery("select * from member");
		ResultSet rs2 = st.executeQuery("select * from member where id >= 100");
		ResultSet rs3 = st.executeQuery("select id || '(' || name || ')' from member");

//		rs.next();
//		String nicName = rs.getString("nicname");
//		System.out.println(nicName);
//		
//		rs.next();
//		String nicName1 = rs.getString("nicname");
//		System.out.println(nicName1);
//		
//		rs.next();
//		String nicName2 = rs.getString("nicname");
//		System.out.println(nicName2);

//		while (rs.next()) {
//			int idn = rs.getInt(1);
//			if (idn > 100) {
//				String name = rs.getString(2);
//				int pwd = rs.getInt(3);
//				String email = rs.getString(4);
//				String nicName = rs.getString(5);
//
//				String fm = String.format("id = %d, name = %s, pwd = %d, email = %s, nicName = %s", 
//						idn, name, pwd,email, nicName);
//				System.out.println(fm);
//			}
//		}

//		while (rs2.next()) {
//			int idn = rs2.getInt(1);
//			String name = rs2.getString(2);
//			int pwd = rs2.getInt(3);
//			String email = rs2.getString(4);
//			String nicName = rs2.getString(5);
//
//			String fm = String.format("id = %d, name = %s, pwd = %d, email = %s, nicName = %s", idn, name, pwd, email,
//					nicName);
//			System.out.println(fm);
//		}
		while (rs3.next()) {
		System.out.println(rs3.getString(1));
		}
		
		
		
		conn.close();
//		DriverManager
//		Connection
//		Statement
//		Resultset

	}

}
