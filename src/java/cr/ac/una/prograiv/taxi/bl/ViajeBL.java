package cr.ac.una.prograiv.taxi.bl;

import cr.ac.una.prograiv.taxi.domain.Viaje;
import java.util.List;

/**
 *
 * @author Zeneida
 */
public class ViajeBL extends BaseBL implements IBaseBL<Viaje, Integer> {

    public ViajeBL() {
        super();
    }

    @Override
    public void save(Viaje o) {
        this.getDao(o.getClass().getName()).save(o);
    }

    @Override
    public Viaje merge(Viaje o) {
        return (Viaje) this.getDao(o.getClass().getName()).merge(o);
    }

    @Override
    public void delete(Viaje o) {
        this.getDao(o.getClass().getName()).delete(o);
    }

    @Override
    public Viaje findById(Integer o) {
        return (Viaje) this.getDao(Viaje.class.getName()).findById(o);
    }

    @Override
    public List<Viaje> findAll(String className) {
        return this.getDao(className).findAll();
    }
}
