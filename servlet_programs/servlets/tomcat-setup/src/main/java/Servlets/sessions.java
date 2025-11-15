package Servlets;

import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpSession;

@WebServlet("/session")
public class sessions extends HttpServlet{
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException {
        PrintWriter out = res.getWriter();
        String name = req.getParameter("userName");
        HttpSession session = req.getSession();
        if(name != null && !name.isEmpty() ){
            session.setAttribute("userName" , name);
        }
        out.println("the name from url parameter is :"+name);
        out.println("the name from session attribute is :"+ session.getAttribute("userName"));

    }
}
