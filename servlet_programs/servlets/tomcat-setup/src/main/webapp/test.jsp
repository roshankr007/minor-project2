<%--
  Created by IntelliJ IDEA.
  User: KIIT
  Date: 12-05-2025
  Time: 10:39
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Test jsp file </title>
</head>
<body>
<%--    example of a for loop in jsp ---%>
<% for(int i=0;i<5;i++){ %>
        <br>
        the value of i :<b> <% out.println(i);%></b>

    <% } %>
</body>
</html>
