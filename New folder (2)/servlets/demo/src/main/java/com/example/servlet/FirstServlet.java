package com.example.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class FirstServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {

		res.setContentType("text/html");

		//We need printwriter object to write html content
		PrintWriter pw = res.getWriter();

		// writing html in the stream
		pw.println("<html><body>");
		pw.println("Welcome to my first servlet");
		pw.println("</body></html>");

		pw.close();// close the stream

	}
}