import React, { useState } from 'react';
import './Content.css';
import logo from '../assets/Logo UNP.png'; // Ruta de la imagen del logo

const Content = ({ isActivosSelected }) => {
  const [showQueryBox, setShowQueryBox] = useState(false);
  const [queryResult, setQueryResult] = useState([]);
  const [loading, setLoading] = useState(false);

  // Estados para los campos de búsqueda
  const [idUsuario, setIdUsuario] = useState('');
  const [nombre1, setNombre1] = useState('');
  const [nombre2, setNombre2] = useState('');
  const [apellido1, setApellido1] = useState('');
  const [apellido2, setApellido2] = useState('');

  // Función para manejar la consulta
  const handleQuery = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:5000/api/consultar?idUsuario=${idUsuario}&nombre1=${nombre1}&nombre2=${nombre2}&apellido1=${apellido1}&apellido2=${apellido2}`
      );
      const data = await response.json();
      setQueryResult(data); // Asignar el resultado de la consulta
    } catch (error) {
      console.error('Error al hacer la consulta', error);
    }
    setLoading(false);
  };

  return (
    <div className="content">
      {isActivosSelected ? (
        <div>
          {/* Opciones de Activos */}
          <div className="opciones-activos">
            <div className="opcion" onClick={() => setShowQueryBox(true)}>
              Asignación de Activos
            </div>
            <div className="opcion">Solicitud de Activos</div>
            <div className="opcion">Información de Activos</div>
            <div className="opcion">Depreciación de Activos</div>
          </div>

          {/* Cuadro de consulta, que aparece debajo de las opciones */}
          {showQueryBox && (
            <div className="query-box">
              <h2>Consulta de Activos</h2>

              {/* Formulario para los campos de búsqueda */}
              <div>
                <input
                  type="text"
                  placeholder="ID Usuario"
                  value={idUsuario}
                  onChange={(e) => setIdUsuario(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Nombre 1"
                  value={nombre1}
                  onChange={(e) => setNombre1(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Nombre 2"
                  value={nombre2}
                  onChange={(e) => setNombre2(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Apellido 1"
                  value={apellido1}
                  onChange={(e) => setApellido1(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Apellido 2"
                  value={apellido2}
                  onChange={(e) => setApellido2(e.target.value)}
                />
              </div>

              <button onClick={handleQuery} disabled={loading}>
                {loading ? 'Cargando...' : 'Realizar Consulta'}
              </button>

              <div>
                {queryResult.length > 0 ? (
                  <ul>
                    {queryResult.map((item, index) => (
                      <li key={index}>
                        {item.Nombre1} {item.Nombre2} {item.Apellido1} {item.Apellido2}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No se encontraron resultados</p>
                )}
              </div>
            </div>
          )}
        </div>
      ) : (
        <img
          src={logo}
          alt="Logo Universidad Nacional Politécnica"
          className="logo"
        />
      )}
    </div>
  );
};

export default Content;
