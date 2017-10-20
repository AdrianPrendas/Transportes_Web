package cr.ac.una.prograiv.taxi.dao;

import cr.ac.una.prograiv.taxi.domain.Usuario;
import cr.ac.una.prograiv.taxi.utils.HibernateUtil;
import java.util.List;
import org.hibernate.HibernateException;

/**
 *
 * @author Zeneida
 */
public class UsuarioDAO extends HibernateUtil implements IBaseDAO<Usuario, String> {

    @Override
    public void save(Usuario o) {
        try {
            iniciaOperacion();
            getSesion().save(o);
            getTran().commit();
        } catch (HibernateException he) {
            manejaExcepcion(he);
            throw he;
        } finally {
            getSesion().close();
        }

    }

    @Override
    public Usuario merge(Usuario o) {
        try {
            iniciaOperacion();
            o = (Usuario) getSesion().merge(o);
            getTran().commit();
        } catch (HibernateException he) {
            manejaExcepcion(he);
            throw he;
        } finally {
            getSesion().close();
        }
        return o;

    }

    @Override
    public void delete(Usuario o) {
        try {
            iniciaOperacion();
            getSesion().delete(o);
            getTran().commit();
        } catch (HibernateException he) {
            manejaExcepcion(he);
            throw he;
        } finally {
            getSesion().close();
        }

    }

    @Override
    public Usuario findById(String id) {
        Usuario user = null;

        try {
            iniciaOperacion();
            user = (Usuario) getSesion().get(Usuario.class, id);
        } finally {
            getSesion().close();
        }
        return user;
    }

    @Override
    public List<Usuario> findAll() {
        List<Usuario> listaUsuarios;
        try {
            iniciaOperacion();//HQL
            listaUsuarios = getSesion().createQuery("from Usuario").list();
        } finally {
            getSesion().close();
        }

        return listaUsuarios;

    }
}
