package cr.ac.una.prograiv.taxi.bl;

import cr.ac.una.prograiv.taxi.domain.Vehiculo;
import java.util.List;

/**
 *
 * @author Zeneida
 */
public class VehiculoBL extends BaseBL implements IBaseBL<Vehiculo, String> {

    public VehiculoBL() {
        super();
    }

    @Override
    public void save(Vehiculo o) {
        this.getDao(o.getClass().getName()).save(o);
    }

    @Override
    public Vehiculo merge(Vehiculo o) {
        return (Vehiculo) this.getDao(o.getClass().getName()).merge(o);
    }

    @Override
    public void delete(Vehiculo o) {
        this.getDao(o.getClass().getName()).delete(o);
    }

    @Override
    public Vehiculo findById(String o) {
        return (Vehiculo) this.getDao(Vehiculo.class.getName()).findById(o);
    }

    @Override
    public List<Vehiculo> findAll(String className) {
        return this.getDao(className).findAll();
    }
}
