<%@page import="com.newlecture.web.entity.Menu"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>


<%!
	private int y=3;
 %>
 
<% 
int x = 77;
List<Menu> menus = (List<Menu>)request.getAttribute("menus");
%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>메뉴 목록</h1>
	<table>
		<tr>
			<td>번호</td>
			<td>이름</td>
			<td>가격</td>
		</tr>
		<%-- 
		<% for(int i=0; i<10; i++){%>
		<tr>
			<td>i=<%=i %></td>
			<td>아메리카노</td>
			<td><%out.print(i); %></td>
			<td>x=<%=x %></td>
			<td>y=<%=y %></td>
		</tr>
		<%}%>
		--%>
		
		
		
		<% for (int i = 0; i < menus.size(); i++) {
			Menu m = menus.get(i);
		 %>
		<tr>	
		<td><%=m.getId()%> </td>
		<td><%=m.getName()%> </td>
		<td>50001</td>		
		</tr>
		<%};%>
		<c:forEach var="i" begin="0" end="3">
			<p><c:out value="${i}"></c:out></p>
		</c:forEach>
		  
		  
<!-- 		<tr>
			<td>2</td>
			<td>카페라떼</td>
			<td>5000</td>
		</tr>
		<tr>
			<td>3</td>
			<td>카푸치노</td>
			<td>5000</td>
		</tr>
 -->
	</table>
</body>
</html>