import sun from "./../../img/icons/sun.svg";
import moon from "./../../img/icons/moon.svg";
import "./style.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {

    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>Portfolio - </strong> superfolio! 
          </NavLink>

          {/* <button className="dark-mode-btn">
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
          </button> */}

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to="/" className={({isActive})=>isActive ? activeLink : normalLink}>
              Домой
              </NavLink>
            </li>


            <li className="nav-list__item">
              <NavLink to="/projects" className={({isActive})=>isActive ? activeLink : normalLink}>
                Мои проекты
              </NavLink>
            </li>

            <li className="nav-list__item">
              <NavLink to="/contacts" className={({isActive})=>isActive ? activeLink : normalLink}>
              Контакты
              </NavLink>
            </li>
        

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
