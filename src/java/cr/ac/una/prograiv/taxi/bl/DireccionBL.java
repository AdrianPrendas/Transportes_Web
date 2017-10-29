package cr.ac.una.prograiv.taxi.bl;

import cr.ac.una.prograiv.taxi.domain.Direccion;
import java.util.List;

/**
 *
 * @author _Adrian_Prendas
 */
public class DireccionBL extends BaseBL implements IBaseBL<Direccion, Integer>{
    
    public DireccionBL(){
        super();
    }

    @Override
    public void save(Direccion o) {
        this.getDao(o.getClass().getName()).save(o);
    }

    @Override
    public Direccion merge(Direccion o) {
        return (Direccion)this.getDao(o.getClass().getName()).merge(o);
    }

    @Override
    public void delete(Direccion o) {
        this.getDao(o.getClass().getName()).delete(o);
    }

    @Override
    public Direccion findById(Integer o) {
        
     return (Direccion) this.getDao(Direccion.class.getName()).findById(o);
    
    }

    @Override
    public List<Direccion> findAll(String className) {
        return this.getDao(className).findAll();
    }
}
