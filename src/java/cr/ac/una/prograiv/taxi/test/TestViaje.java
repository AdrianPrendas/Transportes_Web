
package cr.ac.una.prograiv.taxi.test;

import cr.ac.una.prograiv.taxi.bl.ViajeBL;
import cr.ac.una.prograiv.taxi.domain.Viaje;

/**
 *
 * @author _Adrián_Prendas_
 */
public class TestViaje {
      public static void saveViaje(Viaje v){
        ViajeBL vBL = new ViajeBL();
        try {
            vBL.save(v);
            System.out.println("Se almaceno el Viaje correctamente");
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("hubo un error al tratar de salvar el Viaje");
        }
    }
    public static void deleteViaje(Viaje v){
        ViajeBL vBL = new ViajeBL();
        try {
            vBL.delete(v);
            System.out.println("Se elimino el Viaje correctamente");
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("hubo un error al tratar de eliminar el Viaje");
        }
    }
    public static Viaje findViajeById(Integer id){
        ViajeBL vBL = new ViajeBL();
        try {
            Viaje trip = vBL.findById(id);
            System.out.format("se encontro al viaje id: %d %n", id);
            System.out.println(trip);
            return trip;
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("hubo un error al buscar al viaje id: "+id);
            return null;
        }
    }
    public static Viaje mergeViaje(Viaje v){
         ViajeBL vBL = new ViajeBL();
        try {
            System.out.format("Viaje antes del merge: %s %n", v.toString());
            Viaje user = vBL.merge(v);
            System.out.format("Viaje despues del merge: %s %n", v.toString());
            return user;
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("hubo un error con el merge");
            return null;
        }
    }
}
