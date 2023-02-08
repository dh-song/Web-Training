package com.newlecture.web.jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Scanner;

public class JDBCTest {

	public static void main(String[] args) throws Exception {

		Class.forName("oracle.jdbc.driver.OracleDriver");

		String url = "jdbc:oracle:thin:@oracle.newlecture.com:1521/xepdb1";
		String id = "NEWLEC";
		String pw = "rland";

		Connection conn = DriverManager.getConnection(url, id, pw);
		Statement st = conn.createStatement();

		Scanner scan = new Scanner(System.in);

		System.out.print("입력 이름: ");
		String str = scan.nextLine();
		System.out.println(str);

		ResultSet rs = st.executeQuery("select id, name, nicname from member where name = '"+str+"'");
		//id LIKE % _
		while (rs.next()) {
			int id2 = rs.getInt(1);
			String name = rs.getString(2);
			String nicname = rs.getString(3);
			System.out.printf("ID:%d, NAME:%s, NICNAME:%s\n", id2, name, nicname);
		}

		ResultSet rs2 = st.executeQuery(
				"select 'id: '||id||', name: '||name||', nicname: '||nicname from member where name = '"+str+"'");

		while (rs2.next()) {
			String rsStr = rs2.getString(1);
			System.out.println(rsStr);
		}
		conn.close();
	}
}
