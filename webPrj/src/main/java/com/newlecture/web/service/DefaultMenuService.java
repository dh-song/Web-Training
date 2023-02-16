package com.newlecture.web.service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.newlecture.web.entity.GList;
import com.newlecture.web.entity.Menu;
import com.newlecture.web.repository.MenuDao;
import com.newlecture.web.repository.jdbc.JdbcMenuDao;

public class DefaultMenuService implements MenuService {
	
	private MenuDao menuDao;
	
	public DefaultMenuService() {
		menuDao = new JdbcMenuDao();
	}
	@Override
	public List<Menu> getList() {
		
		List<Menu> list = menuDao.findAll();
	

		return list;
	}

}
