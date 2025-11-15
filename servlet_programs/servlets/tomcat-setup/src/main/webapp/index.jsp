<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    this is heading
    <link rel="stylesheet" href="<%=application.getContextPath()%>/css/styles.css" />
</head>
<body>
    <div class="container">
        <%@include file="menu.jsp" %>
        <h1>This is servlet crash course</h1>
        <p>my name is roshan kumar.</p>
        <%
            out.println("This is inside the scriplet block, nice to meet you ");
        %>

        <form action="<%=application.getContextPath()%>/third" method="post">
            <button type="submit" name="action" value="submit">Submit</button>
            <button type="submit" name="action" value="delete">delete</button>
        </form>
    </div>
    <br>
    <br>
    <div>
        <form action="<%=application.getContextPath()%>/formPost" method = "post">
            <input type="text" name="name" placeholder="Enter name "/><br>
            <input type="number"  name="age" placeholder="Enter age"/><br>
            <input type="text"  name="email" placeholder ="Enter email"/><br>

<%--            radio buttons--%>
            Select Profession:
            <input type="radio" value="developer" name ="prof">Developer</input>
            <input type="radio" value="tester" name ="prof" >Tester</input><br>

<%--            select --%>
            Select location :
            <select name ="locations" multiple size=3>
                <option value="Kanpur" >Kanpur</option>
                <option value="Lucknow">luckhnow</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    </div>

    <script src="<%=application.getContextPath()%>/js/script.js"></script>
</body>
</html>
