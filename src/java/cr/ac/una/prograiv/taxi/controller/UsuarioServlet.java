
package cr.ac.una.prograiv.taxi.controller;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.typeadapters.RuntimeTypeAdapterFactory;
import cr.ac.una.prograiv.taxi.bl.BaseBL;
import cr.ac.una.prograiv.taxi.bl.UsuarioBL;
import cr.ac.una.prograiv.taxi.domain.Jsonable;
import cr.ac.una.prograiv.taxi.domain.Usuario;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Adrian
 */
@WebServlet(name = "UsuarioServlet", urlPatterns = {"/UserServices"})
public class UsuarioServlet extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            response.setContentType("text/xml");
            RuntimeTypeAdapterFactory<Jsonable> rta = RuntimeTypeAdapterFactory.of(Jsonable.class, "_class")
                    .registerSubtype(Usuario.class, "Usuario");
                    //.registerSubtype(Usuario.class, "Usuario");
                    
            Gson gson = new GsonBuilder().registerTypeAdapterFactory(rta).setDateFormat("dd/mm/yyyy").create();
            
            BaseBL bbl = new BaseBL();
            UsuarioBL ubl = new UsuarioBL();
            String json;
            Usuario user;
            
            String accion = request.getParameter("action");
System.out.println("accion: "+accion);
            switch(accion){
                case "registrarCliente":
                    json = request.getParameter("cliente");
                    user = gson.fromJson(json, Usuario.class);
System.out.println(user);
                    try{
                        bbl.getDao(user.getClass().getName()).save(user);
System.out.println("se almaceno el cliente correctamente");
                    json = gson.toJson(new Exception("se almaceno el cliente correctamente"));
                    }catch(Exception e){
                        json = gson.toJson(new Exception("error: no se pudo almacenar el cliente"));
                        e.printStackTrace();
                    }
                    out.write(json);
                    break;
                case "login":
                    user = new Usuario();
                    json = request.getParameter("userName");
                    user.setNombre(json);
                    json = request.getParameter("password");
                    user.setPassword(json);
                    
                    user = ubl.login(user);
                    if(user != null)
                        json = gson.toJson(user);
                    else
                        json = gson.toJson(new Exception("error: usuario y/o contraseña invalidos"));
System.out.println(json);                    
                    out.write(json);
                    break;
            }
            
        }catch(Exception e){e.printStackTrace();}
        
        
        
        
        
        
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
