/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.taxi.dao;

import cr.ac.una.prograiv.taxi.domain.Usuario;
import cr.ac.una.prograiv.taxi.domain.Vehiculo;
import cr.ac.una.prograiv.taxi.utils.HibernateUtil;
import java.util.List;
import org.hibernate.HibernateException;

/**
 *
 * @author Zeneida
 */
public class VehiculoDAO extends HibernateUtil implements IBaseDAO<Vehiculo, String> {

   @Override
    public void save(Vehiculo o) {
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
    public Vehiculo merge(Vehiculo o) {
        try {
            iniciaOperacion();
            o = (Vehiculo) getSesion().merge(o);
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
    public void delete(Vehiculo o) {
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
    public Vehiculo findById(String id) {
        Vehiculo user = null;

        try {
            iniciaOperacion();
            user = (Vehiculo) getSesion().get(Vehiculo.class, id);
        } finally {
            getSesion().close();
        }
        return user;
    }

    @Override
    public List<Vehiculo> findAll() {
        List<Vehiculo> listaVehiculo;
        try {
            iniciaOperacion();//HQL
            listaVehiculo = getSesion().createQuery("from Vehiculo").list();
        } finally {
            getSesion().close();
        }

        return listaVehiculo;

    }
}
