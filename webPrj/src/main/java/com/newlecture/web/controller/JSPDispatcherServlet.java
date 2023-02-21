package com.newlecture.web.controller;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.lang.reflect.Parameter;

import com.newlecture.web.controller.menu.DetailPOJOContriller;
import com.newlecture.web.controller.menu.ListPOJOController4;

/**
 * Servlet implementation class JSPDispatcherServlet
 */
@WebServlet("/")
public class JSPDispatcherServlet extends HttpServlet {

	String[] urls = { "menu/list", "menu/detail;" };
	String[] controllers = {"com.newlecture.web.controller.menu.ListPOJOController4", ""};

	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		PrintWriter out = resp.getWriter();
		out.write("Hello Front!\n");

		String uri = req.getRequestURI();
		String url = req.getRequestURL().toString();
		out.printf("uri: %s\n", uri);
		out.printf("url: %s\n", url);

		
		String viewSrc = "/WEB-INF/view/menu/notFound.jsp";

//    	if (uri.equals("/menu/list")) {
//    		viewSrc = new ListPOJOContriller4().requestHandler();
//		}
//    	if (uri.equals("/menu/detail")) {
//    		viewSrc = new DetailPOJOContriller().requestHandler();
//		}

		req.getRequestDispatcher(viewSrc).forward(req, resp);
		
		Object controller;
		try {
			controller = Class.forName("com.newlecture.web.controller.menu.ListPOJOController4")
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
			
			
		} catch (InstantiationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IllegalArgumentException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (NoSuchMethodException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SecurityException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}


	}
}
