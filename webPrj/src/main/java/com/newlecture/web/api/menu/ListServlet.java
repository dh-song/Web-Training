package com.newlecture.web.api.menu;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.newlecture.web.entity.Menu;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


@WebServlet("/admin/menus")
public class ListServlet extends HttpServlet{
	
	static List<Menu> list;
	
	static {
		list = new ArrayList<Menu>();
		list.add(new Menu(1,"아메리카노",4000,""));
		list.add(new Menu(2,"아이스 아메리카노",4500,""));
		list.add(new Menu(3,"카페라떼",5000,""));
		list.add(new Menu(4,"아이스 카페라떼",5500,""));
		list.add(new Menu(5,"카페모카",5000,""));
		list.add(new Menu(6,"아이스 카페모카",5500,""));
	}
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		

	}
}
