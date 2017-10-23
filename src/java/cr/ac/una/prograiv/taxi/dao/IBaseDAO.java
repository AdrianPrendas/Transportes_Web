
package cr.ac.una.prograiv.taxi.dao;

/**
 *
 * @author _Adrian_Prendas_
 */
import java.util.List;
public interface IBaseDAO<T, K> {

    public void save(T o);

    public abstract T merge(T o);

    public abstract void delete(T o);

    public abstract T findById(K o);

    public abstract List<T> findAll();
}
