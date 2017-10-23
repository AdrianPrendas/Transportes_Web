
package cr.ac.una.prograiv.taxi.test;

import cr.ac.una.prograiv.taxi.bl.DireccionBL;
import cr.ac.una.prograiv.taxi.domain.Direccion;

/**
 *
 * @author _Adrián_Prendas_
 */
public class TestDireccion {
      public static void saveDireccion(Direccion v){
        DireccionBL vBL = new DireccionBL();
        try {
            vBL.save(v);
            System.out.println("Se almaceno el Direccion correctamente");
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("hubo un error al tratar de salvar el Direccion");
        }
    }
    public static void deleteDireccion(Direccion u){
        DireccionBL vBL = new DireccionBL();
        try {
            vBL.delete(u);
            System.out.println("Se elimino el Direccion correctamente");
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("hubo un error al tratar de eliminar el Direccion");
        }
    }
    public static Direccion findDireccionById(Integer id){
        DireccionBL vBL = new DireccionBL();
        try {
            Direccion auto = vBL.findById(id);
            System.out.format("se encontro al direccion id: %s %n", id);
            System.out.println(auto);
            return auto;
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("hubo un error al buscar al direccion id: "+id);
            return null;
        }
    }
    public static Direccion mergeDireccion(Direccion v){
         DireccionBL vBL = new DireccionBL();
        try {
            System.out.format("Direccion antes del merge: %s %n", v.toString());
            Direccion user = vBL.merge(v);
            System.out.format("Direccion despues del merge: %s %n", v.toString());
            return user;
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("hubo un error con el merge");
            return null;
        }
    }
}
