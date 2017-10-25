
package initDataBase;


import cr.ac.una.prograiv.taxi.domain.Conductor;
import cr.ac.una.prograiv.taxi.domain.Direccion;
import cr.ac.una.prograiv.taxi.domain.Usuario;
import cr.ac.una.prograiv.taxi.domain.Vehiculo;
import cr.ac.una.prograiv.taxi.domain.Viaje;
import cr.ac.una.prograiv.taxi.test.TestConductor;
import cr.ac.una.prograiv.taxi.test.TestDireccion;
import cr.ac.una.prograiv.taxi.test.TestUsuario;
import cr.ac.una.prograiv.taxi.test.TestVehiculo;
import cr.ac.una.prograiv.taxi.test.TestViaje;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

/**
 *
 * @author _Adrián_Prendas_
 */
public class DataTest {
    
    private static List<Usuario> getListaUsuarios(){
        List lista = new ArrayList();
        Direccion d = new Direccion(11.5,14.6);
        d.setId(0);
        //Usuario(String idUsuario, Direccion direccion, String nombre, String apellidos, Date fechaNacimiento, int telefono, String correo, String password, boolean esAdministrador) {
        lista.add(new Usuario("a6r2an",d,"josue","prendas prendas",new Date(),86574632,"a6r1an@hotmail.com","abcd",false));
        d.setId(1);
        lista.add(new Usuario("itzumarpa2",d,"pedro","rodriguez rodriguez",new Date(),37462937,"pedro@gmail.com","abcd",false));
        d.setId(2);
        lista.add(new Usuario("carl21",d,"carlos","sanchez sanchez",new Date(),28374620,"carlos@gmail.com","abcd",false));
        d.setId(3);
        lista.add(new Usuario("eri.k",d,"erick","algo nose",new Date(),28374625,"erick@gmail.com","abcd",false));
        d.setId(4);
        lista.add(new Usuario("est.banao",d,"esteban","perez sanchez",new Date(),28374659,"este@gmail.com","abcd",false));
        d.setId(5);
        lista.add(new Usuario("josy.az",d,"josias","pandereta pande",new Date(),84932034,"joto@gmail.com","abcd",false));
        d.setId(6);
        lista.add(new Usuario("emma.wa",d,"emanuel","calsifer prendas",new Date(),76543587,"emma@gmail.com","abcd",false));
        d.setId(7);
        lista.add(new Usuario("jor.7",d,"jordi","alva ramirez",new Date(),87483745,"jordi@gmail.com","abcd",false));
        d.setId(8);
        lista.add(new Usuario("stev.v1",d,"steven","lopez carrillo",new Date(),87944857,"stev3n@gmail.com","abcd",false));
        d.setId(9);
        lista.add(new Usuario("kar.ol",d,"karol","matarrita suarez",new Date(),38472649,"caro.lito@gmail.com","abcd",false));
        d.setId(10);
        lista.add(new Usuario("a6r1an",d,"Adrian","Prendas Araya",new Date(),87950618,"a6r2an@gmail.com","abcd",true));
        d.setId(11);
        
        return lista;
    }
    
    private static List<Vehiculo> getListaVehiculos(){
        List<Vehiculo> lista = new ArrayList();
        //Vehiculo(String placa, int ano, String modelo, String marca, String color, boolean estado) {
        lista.add(new Vehiculo("BBH-332", 1990, "Tilda","nissan", "rojo", false));
        lista.add(new Vehiculo("855136", 2000, "Versa","nissan", "azul", false));
        lista.add(new Vehiculo("72568", 1999, "Sentra","nissan", "negro", false));
        lista.add(new Vehiculo("PBB-3239", 1989, "March","nissan", "verde", false));
        lista.add(new Vehiculo("CBS-214", 1993, "X-Trail","nissan", "gris", false));
        lista.add(new Vehiculo("4zlx795", 1994, "Pathfinder","nissan", "negro", false));
        lista.add(new Vehiculo("44922", 2001, "Patrol","nissan", "cafe", false));
        lista.add(new Vehiculo("CD-1760", 2003, "Murano","nissan", "verde", false));
        lista.add(new Vehiculo("139940", 2004, "Frontier","nissan", "negro", false));
        lista.add(new Vehiculo("EPR-812", 2005, "Urvan","nissan", "rojo", false));
        
        return lista;
    }
    
    private static List<Conductor> getListaConductores(){
        List listaConductores = new ArrayList();
        List listaVehiculos = getListaVehiculos();
        List listaUsuarios = getListaUsuarios();
        Iterator<Vehiculo> itv = listaVehiculos.iterator();
        Iterator<Usuario> itu = listaUsuarios.iterator();
        
        //Conductor(Usuario usuario, Vehiculo vehiculo, String tipoLicencia, Date licenciaVence, int puntuacion, int cedula)
        
        listaConductores.add(new Conductor(itu.next(),itv.next(),"B1",new Date(),10,1));
        listaConductores.add(new Conductor(itu.next(),itv.next(),"B1",new Date(),20,2));
        listaConductores.add(new Conductor(itu.next(),itv.next(),"B1",new Date(),30,3));
        listaConductores.add(new Conductor(itu.next(),itv.next(),"B1",new Date(),40,4));
        listaConductores.add(new Conductor(itu.next(),itv.next(),"B1",new Date(),50,5));
        
        return listaConductores;
    }
    
    private static List<Viaje> getListaViajes(){
        List lista = new ArrayList();
        List listaUsuarios = getListaUsuarios();
        
          Direccion d1 = new Direccion(11.5,14.6);
        d1.setId(0);
          Direccion d2 = new Direccion(11.5,14.6);
        d2.setId(1);
        
        Iterator<Usuario> itu = listaUsuarios.iterator();
        
        //Viaje(int idViaje, Direccion direccionByDireccionDestino, Direccion direccionByDireccionOrigen, Usuario usuarioByConductor, Usuario usuarioByUsuario, Date fecha, String duracion, int monto, int puntaje) {
        lista.add(new Viaje(d1,d2,itu.next(),itu.next(),new Date(),"10:28",5000,10));
        d1.setId(2);
        d2.setId(3);
        lista.add(new Viaje(d1,d2,itu.next(),itu.next(),new Date(),"9:38",5000,10));
        d1.setId(4);
        d2.setId(5);
        lista.add(new Viaje(d1,d2,itu.next(),itu.next(),new Date(),"8:50",5000,10));
        d1.setId(6);
        d2.setId(7);
        lista.add(new Viaje(d1,d2,itu.next(),itu.next(),new Date(),"13:30",5000,10));
        d1.setId(8);
        d2.setId(9);
        lista.add(new Viaje(d1,d2,itu.next(),itu.next(),new Date(),"15:00",5000,10));
        
        return lista;
    }
    private static List<Direccion> getListaDirecciones(){
        List<Direccion> lista = new ArrayList();
        
        lista.add(new Direccion(19.5,14.6));
        lista.add(new Direccion(19.5,14.6));
        lista.add(new Direccion(19.5,14.6));
        lista.add(new Direccion(19.5,14.6));
        lista.add(new Direccion(19.5,14.6));
        lista.add(new Direccion(19.5,14.6));
        lista.add(new Direccion(19.5,14.6));
        lista.add(new Direccion(19.5,14.6));
        lista.add(new Direccion(19.5,14.6));
        lista.add(new Direccion(19.5,14.6));
        lista.add(new Direccion(19.5,14.6));
        lista.add(new Direccion(19.5,14.6));
        lista.add(new Direccion(19.5,14.6));
        lista.add(new Direccion(19.5,14.6));
        lista.add(new Direccion(19.5,14.6));
        lista.add(new Direccion(19.5,14.6));
        lista.add(new Direccion(19.5,14.6));
        lista.add(new Direccion(19.5,14.6));
        lista.add(new Direccion(19.5,14.6));
        lista.add(new Direccion(19.5,14.6));
        
        return lista;
    }
    
    public static void main(String [] args){
        List listaVehiculos = getListaVehiculos();
        List listaUsuarios = getListaUsuarios();
        List listaConductores = getListaConductores();
        List listaViajes = getListaViajes();
        List listaDirecciones = getListaDirecciones();
        
        Iterator<Vehiculo> itv = listaVehiculos.iterator();
        Iterator<Usuario> itu = listaUsuarios.iterator();
        Iterator<Conductor> itc = listaConductores.iterator();
        Iterator<Viaje> itV = listaViajes.iterator();
        Iterator<Direccion> itD = listaDirecciones.iterator();
        
        try{
            for(;itv.hasNext();)
                TestVehiculo.saveVehiculo(itv.next());
            
            for(;itD.hasNext();)
                TestDireccion.saveDireccion(itD.next());
            
            for(;itu.hasNext();)
                TestUsuario.saveUsuario(itu.next());
            
            for(;itc.hasNext();)
                TestConductor.saveConductor(itc.next());
            
            for(;itV.hasNext();)
                TestViaje.saveViaje(itV.next());
            
        }catch(Exception e){
            e.printStackTrace();
        }
    }
}
