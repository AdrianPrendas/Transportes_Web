
package cr.ac.una.prograiv.taxi.test;

import cr.ac.una.prograiv.taxi.bl.ConductorBL;
import cr.ac.una.prograiv.taxi.domain.Conductor;

/**
 *
 * @author _Adrián_Prendas_
 */
public class TestConductor {
    
     public static void saveConductor(Conductor c){
        ConductorBL cBL = new ConductorBL();
        try {
            cBL.save(c);
            System.out.println("Se almaceno el Conductor correctamente");
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("hubo un error al tratar de salvar el Conductor");
        }
    }
    public static void deleteConductor(Conductor c){
        ConductorBL cBL = new ConductorBL();
        try {
            cBL.delete(c);
            System.out.println("Se elimino el Conductor correctamente");
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("hubo un error al tratar de eliminar el Conductor");
        }
    }
    public static Conductor findConductorById(String id){
        ConductorBL cBL = new ConductorBL();
        try {
            Conductor user = cBL.findById(id);
            System.out.format("se encontro el conductor id: %s %n", id);
            System.out.println(user);
            return user;
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("hubo un error al buscar el conductor id: "+id);
            return null;
        }
    }
    public static Conductor mergeConductor(Conductor u){
         ConductorBL cBL = new ConductorBL();
        try {
            System.out.format("Conductor antes del merge: %s %n", u.toString());
            Conductor driver = cBL.merge(u);
            System.out.format("Conductor despues del merge: %s %n", u.toString());
            return driver;
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("hubo un error con el merge");
            return null;
        }
    }
    
}
