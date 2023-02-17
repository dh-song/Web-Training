<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
 	P:${p}, Q:${q}, S:${s}, INPUT:${web} <br>
 	param: ${param.p}
 	<br>
 	header : ${header["User-Agent"]}
	<form action="/input">
		<label>page:</label>
		<input type="text" name="p">
	  	<label>HO:</label>
		<input type="text" name="q">
	  	<label>size:</label>
	  	<input type="text" name="s">
	  	<input type="submit" value="확인">
	</form>
</body>
</html>