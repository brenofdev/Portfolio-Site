import { Menu } from './components/Menu';

import './styles/app.css';

export function App() {

  function openMenu() {
    document.body.classList.add('menu-expanded');
  }

  return (
    <header>
      <div className="wrapper">
        <nav className="container">
          <Menu />
          <button
            aria-expanded="false"
            aria-label="Abrir menu"
            onClick={openMenu}
            className="open-menu"
          >
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none"     xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3604_8)">
<path d="M6.76465 21.6471H36.5294" stroke="#81D8F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.76465 10.8235H36.5294" stroke="#81D8F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.76465 32.4706H36.5294" stroke="#81D8F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_3604_8">
<rect width="43.2941" height="43.2941" fill="white"/>
</clipPath>
</defs>
            </svg>
          </button>
          <img src="https://github.com/brenofdev.png" alt="Foto de perfil" />
          <strong>Breno Fernandes</strong>
          <small>Front End Development</small>
        </nav>

        
        
        <div>
          <h1>CLEITIN VIADO

          </h1>
        </div>
        
        

      </div>
      
    </header>
  );
}

