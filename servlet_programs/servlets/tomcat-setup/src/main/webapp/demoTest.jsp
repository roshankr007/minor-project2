<%--
  Created by IntelliJ IDEA.
  User: KIIT
  Date: 12-05-2025
  Time: 11:06
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" import ="java.util.*"%>


<html>
<head>
    <title>Title</title>
</head>
<body>
    <%--example of a include directive here--%>
<%--<%@include file="/test.jsp"%>--%>
<%--    <br>--%>
<%--    the above prints the for loop--%>
<%--    <br>--%>
<%--    this is another loop:--%>

<%--
there are 3 implicit objects available to any jsp page :
session object, request object and the context object.
--%>
    <%String username = request.getParameter("name");
    if(username !=null){
        session.setAttribute("name", username); //session object here
        application.setAttribute("name", username); //context object here
    out.println("session saved name value: " + session.getAttribute("name")+"<br>");
    out.println("context saved name value: " + application.getAttribute("name"));
    }
    else{
      out.print("NO username saved here but Hey!!"+"<br>");
      out.print("session value :" +session.getAttribute("name") +"<br>");
      out.print("context object value : "+ application.getAttribute("name"));
    }
    %>

</body>
</html>
