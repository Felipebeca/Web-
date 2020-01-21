import React from 'react';
import './global.css';
import './app.css';
import './soudebar.css';
import './main.css';


 

function App() {
  return (
   <div id="app">
     <aside>
      <strong>Cadastrar</strong>
      <form>
        <div className="input-block">
          <label htmlFor="github_username">Úsuario do github</label>
          <input name="github_username" id="github_username" required></input>
        </div>

        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input name="techs" id="techs" required></input>
        </div>
        <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input name="latitude" id="latitude" required></input>
        </div>
        <div className="input-block">
          <label htmlFor="Longitude">Longitude</label>
          <input name="Longitude" id="Longitude" required></input>
        </div>
        </div>
            <button type="submit">Salvar</button>
      </form>
     </aside>
     <main>
       <ul>
         <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/47892105?s=460&v=4" alt="Felipebeca"/>
              <div className="user-info">
                  <strong>Felipe</strong>
                  <span>Reac.js, Node.js</span>
              </div>
            </header>
            <p>Felipe de Sousa Alves</p>
            <a href="https://github.com/Felipebeca">Acessar perfil no github</a>
         </li>
         <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/47892105?s=460&v=4" alt="Felipebeca"/>
              <div className="user-info">
                  <strong>Felipe</strong>
                  <span>Reac.js, Node.js</span>
              </div>
            </header>
            <p>Felipe de Sousa Alves</p>
            <a href="https://github.com/Felipebeca">Acessar perfil no github</a>
         </li>
         <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/47892105?s=460&v=4" alt="Felipebeca"/>
              <div className="user-info">
                  <strong>Felipe</strong>
                  <span>Reac.js, Node.js</span>
              </div>
            </header>
            <p>Felipe de Sousa Alves</p>
            <a href="https://github.com/Felipebeca">Acessar perfil no github</a>
         </li>
         <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/47892105?s=460&v=4" alt="Felipebeca"/>
              <div className="user-info">
                  <strong>Felipe</strong>
                  <span>Reac.js, Node.js</span>
              </div>
            </header>
            <p>Felipe de Sousa Alves</p>
            <a href="https://github.com/Felipebeca">Acessar perfil no github</a>
         </li>
       </ul>
     </main>

   </div>
  );
}

export default App;
