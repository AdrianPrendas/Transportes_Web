/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.taxi.utils;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.cfg.AnnotationConfiguration;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

/**
 * Hibernate Utility class with a convenient method to get Session Factory
 * object.
 *
 * @author Zeneida
 */
public class HibernateUtil {

    private static final SessionFactory sessionFactory;
    private Session sesion;
    private Transaction tran;
    
     public Session getSesion() {
        return sesion;
    }

    public Transaction getTran() {
        return tran;
    }

    public void setSesion(Session sesion) {
        this.sesion = sesion;
    }

    public void setTran(Transaction tran) {
        this.tran = tran;
    }
    
    public void iniciaOperacion() throws HibernateException{
        this.sesion= HibernateUtil.getSessionFactory().openSession();
        this.tran=sesion.beginTransaction();
    }
    
    public void manejaExcepcion(HibernateException he)throws HibernateException{
        tran.rollback();
        throw new HibernateException("Ocurrio un error en la capa de acceso a datos", he);
    }
    
    static {
        try {
            // Create the SessionFactory from standard (hibernate.cfg.xml) 
            // config file.
            sessionFactory = new AnnotationConfiguration().configure().buildSessionFactory();
        } catch (Throwable ex) {
            // Log the exception. 
            System.err.println("Initial SessionFactory creation failed." + ex);
            throw new ExceptionInInitializerError(ex);
        }
    }
    
    public static SessionFactory getSessionFactory() {
        return sessionFactory;
    }
}
