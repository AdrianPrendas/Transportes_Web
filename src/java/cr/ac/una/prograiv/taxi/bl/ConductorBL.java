package cr.ac.una.prograiv.taxi.bl;

import cr.ac.una.prograiv.taxi.domain.Conductor;
import java.util.List;

/**
 *
 * @author _Adrian_Prendas
 */
public class ConductorBL extends BaseBL implements IBaseBL<Conductor, String>{
    
    public ConductorBL(){
        super();
    }

    @Override
    public void save(Conductor o) {
        this.getDao(o.getClass().getName()).save(o);
    }

    @Override
    public Conductor merge(Conductor o) {
        return (Conductor)this.getDao(o.getClass().getName()).merge(o);
    }

    @Override
    public void delete(Conductor o) {
        this.getDao(o.getClass().getName()).delete(o);
    }

    @Override
    public Conductor findById(String o) {
        
     return (Conductor) this.getDao(Conductor.class.getName()).findById(o);
    
    }

    @Override
    public List<Conductor> findAll(String className) {
        return this.getDao(className).findAll();
    }
}
