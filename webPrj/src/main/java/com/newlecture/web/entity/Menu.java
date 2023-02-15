package com.newlecture.web.entity;

import java.util.Date;

public class Menu {
	
	private int id;
	private String name;
	private int price;
	private String img;
	private Date regDate;

public Menu() {
	
}



public Menu(int id, String name, int price, String img, Date regDate) {
	super();
	this.id = id;
	this.name = name;
	this.price = price;
	this.img = img;
	this.regDate = regDate;
}



public int getId() {
	return id;
}

public void setId(int id) {
	this.id = id;
}

public String getName() {
	return name;
}

public void setName(String name) {
	this.name = name;
}

public int getPrice() {
	return price;
}

public void setPrice(int price) {
	this.price = price;
}

public String getImg() {
	return img;
}

public void setImg(String img) {
	this.img = img;
}



public Date getRegDate() {
	return regDate;
}



public void setRegDate(Date regDate) {
	this.regDate = regDate;
}



@Override
public String toString() {
	return "Menu [id=" + id + ", name=" + name + ", price=" + price + ", img=" + img + ", regDate=" + regDate + "]";
}



}
