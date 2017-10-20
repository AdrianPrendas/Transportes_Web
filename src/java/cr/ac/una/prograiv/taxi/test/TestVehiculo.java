
package cr.ac.una.prograiv.taxi.test;

import cr.ac.una.prograiv.taxi.bl.VehiculoBL;
import cr.ac.una.prograiv.taxi.domain.Vehiculo;

/**
 *
 * @author _Adrián_Prendas_
 */
public class TestVehiculo {
      public static void saveVehiculo(Vehiculo v){
        VehiculoBL vBL = new VehiculoBL();
        try {
            vBL.save(v);
            System.out.println("Se almaceno el Vehiculo correctamente");
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("hubo un error al tratar de salvar el Vehiculo");
        }
    }
    public static void deleteVehiculo(Vehiculo u){
        VehiculoBL vBL = new VehiculoBL();
        try {
            vBL.delete(u);
            System.out.println("Se elimino el Vehiculo correctamente");
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("hubo un error al tratar de eliminar el Vehiculo");
        }
    }
    public static Vehiculo findVehiculoById(String id){
        VehiculoBL vBL = new VehiculoBL();
        try {
            Vehiculo auto = vBL.findById(id);
            System.out.format("se encontro al vehiculo id: %s %n", id);
            System.out.println(auto);
            return auto;
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("hubo un error al buscar al vehiculo id: "+id);
            return null;
        }
    }
    public static Vehiculo mergeVehiculo(Vehiculo v){
         VehiculoBL vBL = new VehiculoBL();
        try {
            System.out.format("Vehiculo antes del merge: %s %n", v.toString());
            Vehiculo user = vBL.merge(v);
            System.out.format("Vehiculo despues del merge: %s %n", v.toString());
            return user;
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("hubo un error con el merge");
            return null;
        }
    }
}
