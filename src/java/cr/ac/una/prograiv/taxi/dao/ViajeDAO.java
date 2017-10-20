/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.taxi.dao;

import cr.ac.una.prograiv.taxi.domain.Vehiculo;
import cr.ac.una.prograiv.taxi.domain.Viaje;
import cr.ac.una.prograiv.taxi.utils.HibernateUtil;
import java.util.List;
import org.hibernate.HibernateException;

/**
 *
 * @author Zeneida
 */
public class ViajeDAO extends HibernateUtil implements IBaseDAO<Viaje, String> {

   @Override
    public void save(Viaje o) {
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
    public Viaje merge(Viaje o) {
        try {
            iniciaOperacion();
            o = (Viaje) getSesion().merge(o);
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
    public void delete(Viaje o) {
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
    public Viaje findById(String id) {
        Viaje user = null;

        try {
            iniciaOperacion();
            user = (Viaje) getSesion().get(Viaje.class, id);
        } finally {
            getSesion().close();
        }
        return user;
    }

    @Override
    public List<Viaje> findAll() {
        List<Viaje> listaViaje;
        try {
            iniciaOperacion();//HQL
            listaViaje = getSesion().createQuery("from Viaje").list();
        } finally {
            getSesion().close();
        }

        return listaViaje;

    }
}
