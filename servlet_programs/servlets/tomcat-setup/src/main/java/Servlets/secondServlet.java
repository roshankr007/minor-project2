package Servlets;

import jakarta.servlet.GenericServlet;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;

public class secondServlet extends GenericServlet {
    @Override
    public  void service(ServletRequest req, ServletResponse res){
        System.out.println("this is second servlet");
    }
}
