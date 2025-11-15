package Servlets;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/third")
public class thirdServlet extends HttpServlet{
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        System.out.println("this is a get request in third servlet");
        PrintWriter out= res.getWriter();
        String username = req.getParameter("userName");
        String userId = req.getParameter("userId");
        String pass = req.getParameter("password");
        out.println("hello "+ username);
        out.println("hello "+ userId);
        out.println("hello "+ pass);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        System.out.println("this is a post request in third servlet");
        String action= req.getParameter("action");
        System.out.println(action);
        if(action.equals("submit")){
            System.out.println("resources is being submitted");

        }
        else if(action.equals("delete")){
            System.out.println("resources is being deleted");
        }
        else{
            System.out.println("nothing is triggered");
        }
    }
}
