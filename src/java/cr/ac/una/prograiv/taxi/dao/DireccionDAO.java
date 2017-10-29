
package cr.ac.una.prograiv.taxi.dao;

import cr.ac.una.prograiv.taxi.domain.Direccion;
import cr.ac.una.prograiv.taxi.utils.HibernateUtil;
import java.util.List;
import org.hibernate.HibernateException;

/**
 *
 * @author _Adrian_Prendas_
 */
public class DireccionDAO extends HibernateUtil implements IBaseDAO<Direccion, Integer> {

    @Override
    public void save(Direccion o) {
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
    public Direccion merge(Direccion o) {
        try {
            iniciaOperacion();
            o = (Direccion) getSesion().merge(o);
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
    public void delete(Direccion o) {
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
    public Direccion findById(Integer id) {
        Direccion add = null;

        try {
            iniciaOperacion();
            add = (Direccion) getSesion().get(Direccion.class, id);
        } finally {
            getSesion().close();
        }
        return add;
    }

    @Override
    public List<Direccion> findAll() {
        List<Direccion> listaDirecciones;
        try {
            iniciaOperacion();//HQL
            listaDirecciones = getSesion().createQuery("from Direccion").list();
        } finally {
            getSesion().close();
        }

        return listaDirecciones;

    }
}

