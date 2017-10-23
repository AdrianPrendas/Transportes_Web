
package initDataBase;

import com.vividsolutions.jts.geom.Coordinate;
import com.vividsolutions.jts.geom.GeometryFactory;
import com.vividsolutions.jts.geom.Point;
import cr.ac.una.prograiv.taxi.domain.Conductor;
import cr.ac.una.prograiv.taxi.domain.Usuario;
import cr.ac.una.prograiv.taxi.domain.Vehiculo;
import cr.ac.una.prograiv.taxi.domain.Viaje;
import cr.ac.una.prograiv.taxi.test.TestConductor;
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
        
        lista.add(new Usuario("a6r2an","josue","prendas","prendas",new Date(),86574632,"a6r1an@hotmail.com","abcd",false,"heredia"));
        lista.add(new Usuario("itzumarpa2","pedro","rodriguez","rodriguez",new Date(),37462937,"pedro@gmail.com","abcd",false,"barreal"));
        lista.add(new Usuario("carl21","carlos","sanchez","sanchez",new Date(),28374620,"carlos@gmail.com","abcd",false,"barva"));
        lista.add(new Usuario("eri.k","erick","algo","nose",new Date(),28374625,"erick@gmail.com","abcd",false,"limon"));
        lista.add(new Usuario("est.banao","esteban","perez","sanchez",new Date(),28374659,"este@gmail.com","abcd",false,"san jose"));
        lista.add(new Usuario("josy.az","josias","pandereta","pande",new Date(),84932034,"joto@gmail.com","abcd",false,"cartago"));
        lista.add(new Usuario("emma.wa","emanuel","calsifer","prendas",new Date(),76543587,"emma@gmail.com","abcd",false,"heredia"));
        lista.add(new Usuario("jor.7","jordi","alva","ramirez",new Date(),87483745,"jordi@gmail.com","abcd",false,"puntarenas"));
        lista.add(new Usuario("stev.v1","steven","lopez","carrillo",new Date(),87944857,"stev3n@gmail.com","abcd",false,"cartago"));
        lista.add(new Usuario("kar.ol","karol","matarrita","suarez",new Date(),38472649,"caro.lito@gmail.com","abcd",false,"san jose"));
        lista.add(new Usuario("a6r1an","Adrian","Prendas","Araya",new Date(),87950618,"a6r2an@gmail.com","abcd",true,"heredia"));
        
        return lista;
    }
    
    private static List<Vehiculo> getListaVehiculos(){
        List<Vehiculo> lista = new ArrayList();
        //Vehiculo(String placa, int ano, String modelo, String color, boolean estado)
        lista.add(new Vehiculo("BBH-332", 1990, "Tilda", "rojo", false));
        lista.add(new Vehiculo("855136", 2000, "Versa", "azul", false));
        lista.add(new Vehiculo("72568", 1999, "Sentra", "negro", false));
        lista.add(new Vehiculo("PBB-3239", 1989, "March", "verde", false));
        lista.add(new Vehiculo("CBS-214", 1993, "X-Trail", "gris", false));
        lista.add(new Vehiculo("4zlx795", 1994, "Pathfinder", "negro", false));
        lista.add(new Vehiculo("44922", 2001, "Patrol", "cafe", false));
        lista.add(new Vehiculo("CD-1760", 2003, "Murano", "verde", false));
        lista.add(new Vehiculo("139940", 2004, "Frontier", "negro", false));
        lista.add(new Vehiculo("EPR-812", 2005, "Urvan", "rojo", false));
        
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
        
        GeometryFactory gf = new GeometryFactory();
        
        Point origen = gf.createPoint( new Coordinate( 14.8, 19.3 ) );
        Point destino = gf.createPoint( new Coordinate( 21.8, 11.3 ) );
        
        Iterator<Usuario> itu = listaUsuarios.iterator();
        
        
        lista.add(new Viaje(0,itu.next(),itu.next(),new Date(),"10:28",5000,origen,destino,10));
        lista.add(new Viaje(0,itu.next(),itu.next(),new Date(),"9:38",5000,origen,destino,10));
        lista.add(new Viaje(0,itu.next(),itu.next(),new Date(),"8:50",5000,origen,destino,10));
        lista.add(new Viaje(0,itu.next(),itu.next(),new Date(),"13:30",5000,origen,destino,10));
        lista.add(new Viaje(0,itu.next(),itu.next(),new Date(),"15:00",5000,origen,destino,10));
        
        
        return lista;
    }
    
    public static void main(String [] args){
        List listaVehiculos = getListaVehiculos();
        List listaUsuarios = getListaUsuarios();
        List listaConductores = getListaConductores();
        List listaViajes = getListaViajes();
        
        Iterator<Vehiculo> itv = listaVehiculos.iterator();
        Iterator<Usuario> itu = listaUsuarios.iterator();
        Iterator<Conductor> itc = listaConductores.iterator();
        Iterator<Viaje> itV = listaViajes.iterator();
        
        try{
            for(;itv.hasNext();)
                TestVehiculo.saveVehiculo(itv.next());
            
            for(;itu.hasNext();)
                TestUsuario.saveUsuario(itu.next());
            
            for(;itc.hasNext();)
                TestConductor.saveConductor(itc.next());
            
            /*for(;itV.hasNext();)
                TestViaje.saveViaje(itV.next());*/
            
        }catch(Exception e){
            e.printStackTrace();
        }
    }
}
