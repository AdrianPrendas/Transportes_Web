
package cr.ac.una.prograiv.taxi.controller;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.typeadapters.RuntimeTypeAdapterFactory;
import cr.ac.una.prograiv.taxi.bl.BaseBL;
import cr.ac.una.prograiv.taxi.bl.UsuarioBL;
import cr.ac.una.prograiv.taxi.domain.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;
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
                    .registerSubtype(Usuario.class, "Usuario")
                    .registerSubtype(Direccion.class, "Direccion")
                    .registerSubtype(Conductor.class, "Conductor")
                    .registerSubtype(Vehiculo.class, "Vehiculo")
                    .registerSubtype(Viaje.class, "Viaje");
                    
            Gson gson = new GsonBuilder().registerTypeAdapterFactory(rta).setDateFormat("dd/mm/yyyy").create();
            
            BaseBL bbl = new BaseBL();
            UsuarioBL ubl = new UsuarioBL();
            String json;
            Usuario user;
            
            String accion = request.getParameter("action");
System.out.println("accion: "+accion);
            switch(accion){
                case "saveUsuario":
                    json = request.getParameter("cliente");
                    user = gson.fromJson(json, Usuario.class);
System.out.println(user);
                    try{
                        bbl.getDao(Direccion.class.getName()).save(user.getDireccion());
                        List<Direccion> listaDirecciones = bbl.getDao(Direccion.class.getName()).findAll();
                        Direccion d = listaDirecciones.get(listaDirecciones.size()-1);
                        user.setDireccion(d);
                        bbl.getDao(user.getClass().getName()).save(user);
System.out.println("se almaceno el cliente correctamente");
                    json = gson.toJson(new Exception("se almaceno el cliente correctamente"));
                    }catch(Exception e){
                        json = gson.toJson(new Exception("Error: no se pudo almacenar el cliente"));
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
                    if(user != null){
                        List<Conductor> listaConductores = ubl.getDao(Conductor.class.getName()).findAll();
                        Iterator<Conductor> it = listaConductores.iterator();
                        Conductor c = new Conductor();
                        for(;it.hasNext();){
                            c = it.next();
                            if(c.equals(user))
                                break;
                        }
                        if(c.equals(user))
                           json = gson.toJson(c);
                        else
                           json = gson.toJson(user);
                    }else
                        json = gson.toJson(new Exception("error: usuario y/o contraseña invalidos"));
System.out.println(json);                    
                    out.write(json);
                    break;
                case "getUsuarios":
                     try{
                        json = gson.toJson(bbl.getDao(Usuario.class.getName()).findAll());
                    }catch(Exception e){
                        e.printStackTrace();
                        json = gson.toJson(new Exception("Error en el servidor: no se encontraron Usuarios"));
                    }
System.out.println(json);
                    out.print(json);
                    break;
                case "getUsuarioId":
                        try {
                        json = gson.toJson(bbl.getDao(Usuario.class.getName()).findById(request.getParameter("id")));
                    } catch (Exception e) {
                        e.printStackTrace();
                        json = gson.toJson(new Exception("Error en el servidor: no se encontrol el Conductor : " + request.getParameter("id")));
                    }
System.out.println(json);
                    out.print(json);
                    break;
                     case "deleteUsuarioId":
                    try{
                        String id = request.getParameter("id");
                       
                        //se filtran los viajes del usuario, para eliminarlos
                        List<Viaje> listaViajes = bbl.getDao(Viaje.class.getName()).findAll();
                        listaViajes = listaViajes.stream()
                                                 .filter(v->
                                                         v.getUsuarioByConductor().getIdUsuario().equals(id)
                                                       ||v.getUsuarioByUsuario().getIdUsuario().equals(id))
                                                 .collect(Collectors.toList());
                        //se eliminan los viajes del usuario
                        listaViajes.stream()
                                   .forEach(v->bbl.getDao(Viaje.class.getName()).delete(v));
                        
                        //se filtran los Conductores del usuario, para eliminarlos
                        List<Conductor> listaConductores = bbl.getDao(Conductor.class.getName()).findAll();
                        listaConductores = listaConductores.stream()
                                                 .filter(c->c.getUsuario().getIdUsuario().equals(id))
                                                 .collect(Collectors.toList());
                        //se eliminan los Conductores del usuario
                        listaConductores.stream()
                                   .forEach(c->bbl.getDao(Conductor.class.getName()).delete(c));
                        
                        //se elimina el Usuario
                        user = (Usuario)bbl.getDao(Usuario.class.getName()).findById(id);
                        bbl.getDao(Usuario.class.getName()).delete(user);
                        
                        json = gson.toJson(new Exception("Se elimino el Usuario con exito"));
                    }catch(Exception e){
                        e.printStackTrace();
                        json = gson.toJson(new Exception("Error en el servidor no se pudo eliminar el Usuario : " + request.getParameter("id")));
                    }
System.out.println(json);
                    out.print(json);
                    break;
                    case "editUsuario":
                    json = request.getParameter("user");
                    user = gson.fromJson(json, Usuario.class);
System.out.println(user);
                    try{
                        Direccion d = user.getDireccion();
                        Usuario user2 = (Usuario)bbl.getDao(user.getClass().getName()).findById(user.getIdUsuario());
                        Direccion d2 = user2.getDireccion();
                        
                        d2.setLat(d.getLat());
                        d2.setLng(d.getLng());
                        d2.setNombre(d.getNombre());
                        d2.setZoom(d.getZoom());
                        bbl.getDao(Direccion.class.getName()).merge(d2);//se elimina la direccion anterior
                        user.setPassword(user2.getPassword());
                        user.setDireccion(d2);
                        
                        bbl.getDao(user.getClass().getName()).merge(user);
                        
                        json = gson.toJson(new Exception("Usuario editado correctamente"));
                    }catch(Exception e){
                        e.printStackTrace();
                        json = gson.toJson(new Exception("Error en el servidor no se edito el Usuario"));
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
