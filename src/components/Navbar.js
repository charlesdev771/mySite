import '../App.css';
import Image from '../imgs/Icon_hacker.png';

function App() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

      <a class="navbar-brand" href="index.html">
        <img src={Image}></img>
      </a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMain">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navMain">

        <div class="justify-content-end">

          <ul class="navbar-nav mr-auto">

            <li class="nav-item">
              <a class="nav-link active" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#services">Serviços</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#about">Sobre</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#qualifications">Qualificações</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#contact">Contato</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Redes Sociais
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                
                <a class="dropdown-item" target="_blank" href="https://github.com/charlesdev771">
                <i class="fa-brands fa-github pr-1"></i>
                  Github
                  </a>
                <a class="dropdown-item" target="_blank" href="https://steamcommunity.com/id/chameleonplayer0771/">
                <i class="fa-brands fa-steam pr-1"></i>
                  Steam
                  </a>
                <div class="dropdown-divider"></div>
              </div>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default App;
