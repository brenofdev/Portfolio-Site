import '../styles/menu.css';
import { Contact } from './Contact';

export function Menu() {

  function closeMenu() {
    document.body.classList.remove('menu-expanded');
  }

  return (
    <nav className="menu">
      <div className="contact">
        <div className="data">
          <h4>Contato</h4>
          <button
            aria-expanded="true"
            aria-label="Fechar menu"
            onClick={closeMenu}
            className="close-menu"
          >
            <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7499 10.75L31.6537 31.6539" stroke="#81D8F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.7499 32.25L31.6537 11.3461" stroke="#81D8F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
            
        <div className="data-links">
          <Contact />
        </div>

        <div className="technology">
          <h4>Tecnologias</h4>

          <div className="languages">
            <div>
              <strong>JAVASCRIPT</strong>
            </div>

            <div>
              <strong>REACTJS</strong>
            </div>

            <div>
              <strong>NODEJS</strong>
            </div>

            <div>
              <strong>TYPESCRIPT</strong>
            </div>

            <div>
              <strong>GITHUB</strong>
            </div>

            <div>
              <strong>HTML</strong>
            </div>

            <div>
              <strong>CSS</strong>
            </div>
          </div>
        </div>

        <div className="experience"> 
          <h4>Certificados</h4>

          <ul>
            <li>
              <strong>RocketSeat</strong>  <br /> 
              <small>Discover Fundamentar</small> <br /> 
              <small>09.06.2022</small>
            </li>
            <li>
              <strong>RocketSeat</strong>  <br /> 
              <small>Discover Especializar</small> <br /> 
              <small>20.06.2022</small>
            </li>
            <li>
              <strong>RocketSeat</strong>  <br /> 
              <small>Ignite ReactJS</small> <br /> 
              <small>12.07.2022</small>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  )
}