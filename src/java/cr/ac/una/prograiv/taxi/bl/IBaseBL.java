
package cr.ac.una.prograiv.taxi.bl;

import java.util.List;

/**
 *
 * @author _Adrian_Prendas_
 */

public interface IBaseBL <T,K> {
    public abstract void save (T o);
    public abstract T merge (T o);
    public abstract void delete (T o);
    public abstract T findById (K o);
    public abstract  List<T> findAll(String className);
}
