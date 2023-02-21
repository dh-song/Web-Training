package com.newlecture.web;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.lang.reflect.Parameter;

import com.newlecture.web.controller.menu.ListPOJOController4;

public class ReflectProgram {

	public static void main(String[] args)
			throws InstantiationException, IllegalAccessException, IllegalArgumentException, InvocationTargetException,
			NoSuchMethodException, SecurityException, ClassNotFoundException {

		Object controller = Class.forName("com.newlecture.web.controller.menu.ListPOJOController4")
				.getDeclaredConstructor().newInstance();

		// 클래스 정보 얻기(모두 같은 결과)
		// 정보를 얻어 올 때 private정보도 다 불러오지만 메소드로 사용은 불가능
		// 클래스의 파라미터도 찾을 수 있음 (req 요청 같은 것 활용 가능)

		// 문자열에서
		Class clasInfo = Class.forName("com.newlecture.web.controller.menu.ListPOJOController4");

		// 개체에서
		Class clasInfo1 = ListPOJOController4.class;

		// 객체에서
		Class clasInfo2 = controller.getClass();

		Method[] methods = clasInfo1.getDeclaredMethods();

		Method meth = null;
		
		
		for (Method m : methods) {
			System.out.println(m.getName());
			if (m.getName().equals("test")) {
				meth = m;// 컨트롤러의 private test 메소드를 담음
			}
		}
		//파라미터 뽑는 법
		Parameter[] params = meth.getParameters();
		for (Parameter p : params) {
			System.out.println(p.getType().toString());
		}
		
		int result = (int) meth.invoke(controller, 3,4); 
		//클래스 정보에서 얻은 메소드를 사용, private이면 오류
		System.out.printf("%d",result);
	}

}
