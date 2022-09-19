import './App.css';
import React, {useState} from 'react';
import logo from './Cabeza_Logo.jpg';

function App() {

  /*function openWindow(windowName) {
    var i;
    var x = document.getElementsByClassName("menuVista");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(windowName).style.display = "block";
  }*/

  const openWindow = (event) => {
    var i;
    var x = document.getElementsByClassName("modules");
    var y = event.target.id;
    for (i = 0; i < x.length; i++) {
      if (x[i].id === y) {
        x[i].style.display = "block";
      } else {
        x[i].style.display = "none";
      }
    }
  }

  const actualizarProgreso = (event) =>{
    var elem = document.getElementById("progreso");
    var width = 0;
		var id = setInterval(frame, 10);
		function frame() {
			if (width >= 100) {
				clearInterval(id);
			} else {
				width++;
				elem.style.width = width + '%';
				elem.innerHTML = width * 1 + '%';
			}
		}
  }

  const accordionData = {
    title: 'Nombre del trámite'
  };

  const { title } = accordionData;

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <div>
          <div className="content-section">
            <div className="contentSelector">
              <button id="bienvenidaEstudiante" className="button" onClick={openWindow}>Bienvenida</button>
              <button id="administrarSolicitudes" className="button" onClick={openWindow}>Tramites</button>
              <button id="solicitudEstudiante" className="button" onClick={openWindow}>Solicitudes</button>
              <button id="informacionUsuario" className="button" onClick={openWindow}>Información de Usuario</button>
            </div>
            <div>
              <div className="content">
                <div id="bienvenidaEstudiante" className="modules">
                  <p>
                    <span className="progreso_en_Solicitud">
                      Aquí se le avisa al estudiante que su solicitud ha avanzado en el proceso
                      </span>
                  </p>
                  <p>
                    <span className="impedimentos_en_Solicitud">
                      Aquí se le avisa al estudiante que su solicitud ha tenido algún impedimento
                    </span>
                  </p>
                </div>
                <div id="administrarSolicitudes" className="modules" style={{ display: 'none' }}>
                  <React.Fragment>
                    <div className="nombreTramite">
                      <div className="accordion-item">
                        <div
                          className="tituloAcordeon"
                          onClick={() => setIsActive(!isActive)}
                        >
                          <div>{title}</div>
                          <div>{isActive ? '-' : '+'}</div>
                        </div>
                        {isActive && <div className="contenidoAcordeon">
                          <p><label>Información:</label></p>
                          <p><label>Requisitos:</label></p>
                          <button className="solicitarTramite">Solicitar</button>
                        </div>}
                      </div>
                    </div>
                  </React.Fragment>
                </div>
                <div id="solicitudEstudiante" className="modules" style={{ display: 'none' }}>
                  <div className="contenedorSolicitud">
                    <p><label>Fecha en la que se solicitó: 23/10/2077</label></p>
                    <p><label>Trámite solicitado: Nombre del trámite solicitado</label></p>
                    <p><label>Estatus: Estatus en el que se encuentra la solicitud</label></p>
                    <p><label>Retroalimentación disponible</label></p>
                    <pre>
                        Aquí se encuentra la posible retroalimentación recibida de la encargada, <br></br>
                        la cual puede darnos una idea más clara de qué está pasando con respecto a <br></br>
                        anomalias, o simplemente un mensaje de confirmación.
                    </pre>
                    <input type="file" id="subirArchivos" name="Elegir archivos"></input>
                    <p><input type="submit" className="confirmDocumentUpload" value="Confirmar subida de documentos"></input></p>
                  </div>
                  <div>
                    <div className="progressBar">
                      <div id="progreso" className="progresando">0%</div>
                    </div>
                    <button className="debugProgressBar" onClick={actualizarProgreso}>Debug: Barra de
										progreso</button>
                  </div>
                </div>
                <div id="informacionUsuario" className="modules" style={{ display: 'none' }}>
                  <form className="info_usuario">
                    <label>Matricula</label>
                    <p>La matricula del usuario activo</p>
                    <label>Nombre: </label>
                    <p>El nombre completo del usuario activo</p>
                  </form>
                  <form className="info_usuario">
                    <p>
                      <label>Nueva contraseña: </label>
                      <input type="password" placeholder="Nueva contraseña"></input>
                    </p>
                    <p>
                      <label>Repetir nueva contraseña: </label>
                      <input type="password" placeholder="Nueva contraseña"></input>
                    </p>
                    <p>
                      <label>Contraseña actual: </label>
                      <input type="password" placeholder="Contraseña actual"></input>
                    </p>
                    <p>
                      <label>Correo electrónico: </label>
                      <input type="email" placeholder="Correo actual del usuario activo."></input>
                    </p>
                  </form>
                  <button className="confirmarCambios">Confirmar cambios</button>
                </div>
                <button id="salirButton" className="logout">Salir</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
