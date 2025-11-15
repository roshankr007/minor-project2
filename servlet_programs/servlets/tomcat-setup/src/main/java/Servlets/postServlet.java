package Servlets;

import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import java.util.*;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/formPost")
public class postServlet extends HttpServlet {

    @Override
    protected void doGet (HttpServletRequest req, HttpServletResponse res) throws IOException {
        res.setContentType("text/html");
        PrintWriter out = res.getWriter();
        String name = req.getParameter("name");
        String email = req.getParameter("email");
        String age = req.getParameter("age");

        out.println("this is inside  get method");
         if(name == null || email == null || age == null) {
            System.out.println("name or email or age are null");
        }
        else {
            out.println("the name is :" + name);
            out.println("the email is :" + email);
            out.println("the age is :" + age);
        }
    }
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException {
        res.setContentType("text/html");
        PrintWriter out = res.getWriter();

        String name = req.getParameter("name");
        String email = req.getParameter("email");
        String age = req.getParameter("age");
        String prof = req.getParameter("prof");
//        String location = req.getParameter("location");
        String[] locations = req.getParameterValues("locations");
        System.out.println(Arrays.toString(locations));
        //printing lines
        out.println("the name is :" + name+"<br>");
        out.println("the email is :" + email+"<br>");
        out.println("the age is :" + age+" <br>");
        out.println("Your profession is :" + prof+"<br>");
        out.println("Your are at " +locations.length+ "locations:" + "<br>");
        for (String location : locations) {
            out.println(location+"<br>" );
            System.out.println(location);
        }
    }
}
