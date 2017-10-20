package cr.ac.una.prograiv.taxi.bl;

import cr.ac.una.prograiv.taxi.dao.*;
import java.util.LinkedHashMap;

public class BaseBL {
    private final LinkedHashMap<String, IBaseDAO> daos;

    public BaseBL() {
        daos = new LinkedHashMap();
        daos.put("cr.ac.una.prograiv.taxi.domain.Usuario", new UsuarioDAO());
        daos.put("cr.ac.una.prograiv.taxi.domain.Viaje",new ViajeDAO());
        daos.put("cr.ac.una.prograiv.taxi.domain.Conductor",new ConductorDAO());
        daos.put("cr.ac.una.prograiv.taxi.domain.Vehiculo", new VehiculoDAO());
    }

    public IBaseDAO getDao(String className) {
        return daos.get(className);
    }
}
