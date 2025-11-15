package Servlets;

import jakarta.servlet.*;
import jakarta.servlet.ServletConfig;
import jakarta.servlet.annotation.WebServlet;

@WebServlet("/first")
public class firstServlet implements Servlet{

     private ServletConfig servletConfig;

     //lifecycle methods
     @Override
     public void init(ServletConfig config) throws ServletException{
           this.servletConfig = config;
           System.out.println("Initializing Servlet");
     }

     @Override
     public void destroy() {
          System.out.println("destroying...");
     }
     
     @Override
     public void service(ServletRequest request, ServletResponse response) throws ServletException{
          System.out.println("service request");
     }
     
     //non life cycle methods
     @Override 
     public ServletConfig getServletConfig(){
          //return the configuration variable  of the servlet object
          return this.servletConfig;
     }

     @Override
     public String getServletInfo(){
          //return the information about the servlet.
          return "this servlet is created by : roshan";
     }
}
