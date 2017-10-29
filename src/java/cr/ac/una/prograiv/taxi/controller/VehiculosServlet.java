
package cr.ac.una.prograiv.taxi.controller;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.typeadapters.RuntimeTypeAdapterFactory;
import cr.ac.una.prograiv.taxi.bl.BaseBL;
import cr.ac.una.prograiv.taxi.bl.UsuarioBL;
import cr.ac.una.prograiv.taxi.domain.Conductor;
import cr.ac.una.prograiv.taxi.domain.Direccion;
import cr.ac.una.prograiv.taxi.domain.Jsonable;
import cr.ac.una.prograiv.taxi.domain.Usuario;
import cr.ac.una.prograiv.taxi.domain.Vehiculo;
import cr.ac.una.prograiv.taxi.domain.Viaje;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Iterator;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author _Adrián_Prendas_
 */
@WebServlet(name = "VehiculosServlet", urlPatterns = {"/CarServices"})
public class VehiculosServlet extends HttpServlet {

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
                    .registerSubtype(Usuario.class, "Usuario")
                    .registerSubtype(Direccion.class, "Direccion")
                    .registerSubtype(Conductor.class, "Conductor")
                    .registerSubtype(Vehiculo.class, "Vehiculo")
                    .registerSubtype(Viaje.class, "Viaje");
                    
            Gson gson = new GsonBuilder().registerTypeAdapterFactory(rta).setDateFormat("dd/mm/yyyy").create();
            
            BaseBL bbl = new BaseBL();
            String json;
            Vehiculo car;
            
            
            String accion = request.getParameter("action");
System.out.println("accion: "+accion);
            switch(accion){
                case "getVehiculos":
                    try{
                        json = gson.toJson(bbl.getDao(Vehiculo.class.getName()).findAll());
                    }catch(Exception e){
                        e.printStackTrace();
                        json = gson.toJson(new Exception("Error en el servidor no se encontraron autos"));
                    }
System.out.println(json);
                    out.print(json);
                    break;
                case "getVehiculoId":
                    try {
                        json = gson.toJson(bbl.getDao(Vehiculo.class.getName()).findById(request.getParameter("id")));
                    } catch (Exception e) {
                        e.printStackTrace();
                        json = gson.toJson(new Exception("Error en el servidor no se encontrol el Vehiculo : " + request.getParameter("id")));
                    }
System.out.println(json);
                    out.print(json);
                    break;
                case "saveVehiculo":
                    json = request.getParameter("car");
                    car = gson.fromJson(json, Vehiculo.class);
System.out.println(car);
                    try{
                        bbl.getDao(Vehiculo.class.getName()).save(car);
                        json = gson.toJson(new Exception("Vehiculo almacenado correctamente"));
                    }catch(Exception e){
                        e.printStackTrace();
                        json = gson.toJson(new Exception("Error en el servidor no se guardo el Vehiculo"));
                    }
System.out.println(json);
                    out.print(json);
                    break;
                case "editVehiculo":
                    json = request.getParameter("car");
                    car = gson.fromJson(json, Vehiculo.class);
System.out.println(car);
                    try{
                        bbl.getDao(Vehiculo.class.getName()).merge(car);
                        json = gson.toJson(new Exception("Vehiculo editado correctamente"));
                    }catch(Exception e){
                        e.printStackTrace();
                        json = gson.toJson(new Exception("Error en el servidor no se edito el Vehiculo"));
                    }
System.out.println(json);
                    out.print(json);
                    break;
                case "deleteVehiculoId":
                    car = (Vehiculo)bbl.getDao(Vehiculo.class.getName()).findById(request.getParameter("id"));
System.out.println(car);
                    try{
                        bbl.getDao(Vehiculo.class.getName()).delete(car);
                        json = gson.toJson(new Exception("Vehiculo eliminado correctamente"));
                    }catch(Exception e){
                        e.printStackTrace();
                        json = gson.toJson(new Exception("Error al tratar de eliminar el Vehiculo, hay un conductor asignado "));
                    }
System.out.println(json);
                    out.print(json);
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
