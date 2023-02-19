<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>


<%!
	private int y=3;
 %>
 
<% 
int x = 77;
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
		
		<% for(int i=0; i<10; i++){%>
		<tr>
			<td>i=<%=i %></td>
			<td>아메리카노</td>
			<td><%out.print(i); %></td>
			<td>x=<%=x %></td>
			<td>y=<%=y %></td>
		</tr>
		<%}%>
		
		
	</table>
</body>
</html>