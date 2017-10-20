
package cr.ac.una.prograiv.taxi.bl;

import cr.ac.una.prograiv.taxi.domain.Usuario;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 *
 * @author Zeneida
 */
public class UsuarioBL  extends BaseBL implements IBaseBL<Usuario, String>{
    
    public UsuarioBL(){
        super();
    }

    @Override
    public void save(Usuario o) {
        this.getDao(o.getClass().getName()).save(o);
    }

    @Override
    public Usuario merge(Usuario o) {
        return (Usuario)this.getDao(o.getClass().getName()).merge(o);
    }

    @Override
    public void delete(Usuario o) {
        this.getDao(o.getClass().getName()).delete(o);
    }

    @Override
    public Usuario findById(String o) {
        return (Usuario) this.getDao(Usuario.class.getName()).findById(o);
    }

    @Override
    public List<Usuario> findAll(String className) {
        return this.getDao(className).findAll();
    }
    
    public Usuario login(Usuario user){
        String emailPatron = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
        Pattern pMail = Pattern.compile(emailPatron);
        Matcher m = pMail.matcher(user.getNombre());
        if(m.matches()){
            List<Usuario> arr = findAll(user.getClass().getName());
            for(Usuario u : arr){
                if(u.getCorreo().equals(user.getNombre()) && u.getPassword().equals(user.getPassword()))
                    return u;
            }
        }else{
            Usuario usuario = findById(user.getNombre());
            if(usuario!=null &&usuario.getPassword().equals(user.getPassword()))
                return usuario;
        }
        return null;
    }
}
