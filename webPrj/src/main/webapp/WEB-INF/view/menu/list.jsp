<%@page import="com.newlecture.web.entity.Menu"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="f" uri="http://java.sun.com/jsp/jstl/fmt" %>


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
			<td>등록일</td>
		</tr>

		<c:forEach items="${menus}" var="i">
		<f:formatNumber var="price" value="${i.price}" pattern="#,###"/>
		<f:formatDate var="date" value="${i.regDate}" pattern="yyyy.M.d / hh:mm"/>
		<tr>
		<td>${i.id}</td>
		<td><c:out value="${i.name}"></c:out></td>
		<td>${price}</td>
		<td>${date}</td>
		<tr>
		<td colspan="4"> 
		<c:forTokens var="img"  items="${i.img}" delims=" " varStatus="st">
		<a download href="/${img}">${img}</a>
		<c:if test="${!st.last}">|</c:if>
		</c:forTokens>
		</td>
		</tr>
		</c:forEach>
		  

	</table>
</body>
</html>