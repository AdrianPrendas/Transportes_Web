package cr.ac.una.prograiv.taxi.test;

import cr.ac.una.prograiv.taxi.domain.*;
import java.awt.geom.Point2D;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

/**
 *
 * @author _Adrian_Prendas_ a simple class to test BL's
 */
public class Test {

    private static Usuario getUsuarioBase() {
        String idUsuario = "itzumarpa",
                nombre = "Pedro",
                apellidos = "Valverde valverde",
                correo = "pedro@gmail.com",
                password = "1234",
                direccion = "barreal";
        int telefono = 89743821;
        boolean esAdministrador = false;
        Date fechaNacimiento;
        try {
            SimpleDateFormat dateformat = new SimpleDateFormat("dd/mm/yyyy");
            fechaNacimiento = dateformat.parse("22/01/1994");
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
        Usuario u = new Usuario(
                idUsuario,
                new Direccion(0,13.5,12.5),
                nombre,
                apellidos,
                fechaNacimiento,
                telefono,
                correo,
                password,
                esAdministrador);
        return u;
    }

    private static Vehiculo getVehiculoBase() {
        //Vehiculo(String placa, int ano, String modelo, String marca, String color, boolean estado) {
        return new Vehiculo("BBH-322", 1990, "tilda","nisan", "negro", false);
    }
    
    private static Conductor getConductorBase(){
        Date vencimietoLicencia;
        try {
            SimpleDateFormat dateformat = new SimpleDateFormat("dd/mm/yyyy");
            vencimietoLicencia = dateformat.parse("22/01/1994");
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
        //Conductor(Usuario usuario, Vehiculo vehiculo, String tipoLicencia, Date licenciaVence, int puntuacion, int cedula)
        Usuario u = getUsuarioBase();
        Conductor c = new Conductor(
                u,
                getVehiculoBase(),
                "B1",
                vencimietoLicencia,
                10,
                67890521);
        return c;
    }
    
    private static List<Viaje> getViajesBase(){
        List lista = new ArrayList();
        /*Conductor c = getConductorBase();
        Usuario u = getUsuarioBase();
        //Viaje(int idViaje, Conductor conductor, Usuario usuario, Date fecha, String duracion, int monto, Serializable direccionNombreOrigen, Serializable direccionNombreDestino, int puntaje) {
        Point2D.Double origen = new Point2D.Double(10.9,11.3);
        Point2D.Double destino = new Point2D.Double(13.9,12.8);
        lista.add(new Viaje(0,c,u,new Date(),"10:28",5000,origen,destino,10));
        /*lista.add(new Viaje(0,c,u,new Date(),"9:38",5000,origen,destino,10));
        lista.add(new Viaje(0,c,u,new Date(),"8:50",5000,origen,destino,10));
        lista.add(new Viaje(0,c,u,new Date(),"13:30",5000,origen,destino,10));
        lista.add(new Viaje(0,c,u,new Date(),"15:00",5000,origen,destino,10));
        lista.add(new Viaje(0,c,u,new Date(),"12:12",5000,origen,destino,10));
        lista.add(new Viaje(0,c,u,new Date(),"17:20",5000,origen,destino,10));
        lista.add(new Viaje(0,c,u,new Date(),"10:28",5000,origen,destino,10));
        lista.add(new Viaje(0,c,u,new Date(),"11:58",5000,origen,destino,10));
        lista.add(new Viaje(0,c,u,new Date(),"14:10",5000,origen,destino,10));*/
        
        return lista;
    }

    public static void usuarioBLTest() {
        Usuario u = getUsuarioBase();

        TestUsuario.saveUsuario(u);

        u = TestUsuario.findUsuarioById(u.getIdUsuario());

        u.setNombre("Jafeth");
        u.setApellidos("Campos campos");
        u.setCorreo("jafeth@gmail.com");

        u = TestUsuario.mergeUsuario(u);

        //TestUsuario.deleteUsuario(u);

    }

    public static void conductorBLTest() {
      
        Conductor c = getConductorBase();
        
        Usuario u = getUsuarioBase();
        
        TestConductor.saveConductor(c);

        c = TestConductor.findConductorById(c.getUsuarioIdUsuario());

        u.setNombre("Jafeth");
        u.setApellidos("Campos campos");
        u.setCorreo("jafeth@gmail.com");
        c.setPuntuacion(100);
        c.setUsuario(u);

        c = TestConductor.mergeConductor(c);

        //TestConductor.deleteConductor(c);

    }

    public static void vehiculoBLTest() {
        Vehiculo auto = getVehiculoBase();

        TestVehiculo.saveVehiculo(auto);

        auto = TestVehiculo.findVehiculoById(auto.getPlaca());

        auto.setAno(1998);
        auto.setColor("verde");
        auto.setModelo("picap");

        TestVehiculo.mergeVehiculo(auto);

        //TestVehiculo.deleteVehiculo(auto);

    }
    
    public static void viajeBLTest(){
        
        List viajes = getViajesBase();
        Iterator<Viaje> it = viajes.iterator();
        for(;it.hasNext();){
            TestViaje.saveViaje(it.next());
        }
        
        
        
    }

    public static void main(String[] args) {

        usuarioBLTest();

        vehiculoBLTest();

        conductorBLTest();
        
        viajeBLTest();

    }

}
