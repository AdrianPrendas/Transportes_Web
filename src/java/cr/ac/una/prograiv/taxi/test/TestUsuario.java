
package cr.ac.una.prograiv.taxi.test;

import cr.ac.una.prograiv.taxi.bl.UsuarioBL;
import cr.ac.una.prograiv.taxi.domain.Usuario;

/**
 *
 * @author _Adrián_Prendas_
 */
public class TestUsuario {
    
    public static void saveUsuario(Usuario u){
        UsuarioBL uBL = new UsuarioBL();
        try {
            uBL.save(u);
            System.out.println("Se almaceno el Usuario correctamente");
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("hubo un error al tratar de salvar el Usuario");
        }
    }
    public static void deleteUsuario(Usuario u){
        UsuarioBL uBL = new UsuarioBL();
        try {
            uBL.delete(u);
            System.out.println("Se elimino el Usuario correctamente");
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("hubo un error al tratar de eliminar el Usuario");
        }
    }
    public static Usuario findUsuarioById(String id){
        UsuarioBL uBL = new UsuarioBL();
        try {
            Usuario user = uBL.findById(id);
            System.out.format("se encontro al usuario id: %s %n", id);
            System.out.println(user);
            return user;
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("hubo un error al buscar al usuario id: "+id);
            return null;
        }
    }
    public static Usuario mergeUsuario(Usuario u){
         UsuarioBL uBL = new UsuarioBL();
        try {
            System.out.format("Usuario antes del merge: %s %n", u.toString());
            Usuario user = uBL.merge(u);
            System.out.format("Usuario despues del merge: %s %n", u.toString());
            return user;
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("hubo un error con el merge");
            return null;
        }
    }
    
}
