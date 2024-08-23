import "./Header.css";
import { links } from "../../Data";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { BsMoon, BsSun } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { animateScroll } from "react-scroll";

import shapeOne from "../../assets/shape-1.png";
import { IoIosMail } from "react-icons/io";
const Header = () => {
  const [menu, setMenu] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [theme,setTheme]=useState(false)

  const scrollTop=()=>{
    animateScroll.scrollToTop()
  }
  const changeNav=()=>{
    if(window.scrollY>=80){
      setScroll(true)
    }else{
      setScroll(false)
    }
  }

  useEffect(()=>{
    let themes;
    if(theme){
      themes='light-theme';
    }else{
      themes='dark-theme'
    }
document.documentElement.className=themes
  },[theme])
  useEffect(()=>{
window.addEventListener('scroll',changeNav)
  },[])
  useEffect(() => {
    document.body.classList.toggle("no-scroll", menu);
  }, [menu]);
  return (
    <header className={scroll?"header scroll-header":"header"}>
      <nav className="nav">
        <Link to="/" onClick={scrollTop} className={scroll?"nav__logo text-cs visible":"nav__logo text-cs"}>
          Manoj
        </Link>
        <div className={menu ? "nav__menu show-menu" : "nav__menu"}>
          <div className="nav__data">
            <ul className="nav__list">
              {links.map(({ name, path }, index) => {
                return (
                  <li className="nav__item" key={index}>
                    <Link
                     className="nav__link text-cs"
                      to={path}
                      smooth={true}
                      offset={-120}
                      duration={500}
                      // spy={true}
                      // hashSpy={true}
                      onClick={()=>setMenu(!menu)}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="nav__socials">
            <a target="_blank" href="https://www.linkedin.com/in/manoj-amirthalingam-6a5394220/" className="nav__social-link">
              {" "}
              <FaLinkedin  />
            </a>
            <a href="https://wa.me/qr/CWYH77IQQSYQK1" target="_blank"  className="nav__social-link">
              {" "}
              <FaWhatsapp />
            </a>
            <a href="https://github.com/manoj-amirkalai" target="_blank"  className="nav__social-link">
              {" "}
              <FaGithub />
            </a>  <a href="#contact" className="nav__social-link">
              {" "}
              <IoIosMail />
            </a>
              
            </div>
            
          </div>

          <div className="section__deco deco__left header__deco">
        <img src={shapeOne} alt="" className="shape" />
      </div>

        </div>
        <div className="nav__btns">
          <div className="theme__toggle" onClick={()=>setTheme(!theme)}>
         {theme?  <BsMoon/>:  <BsSun />}

          </div>
          <div
            className={!menu ? "nav__toggle " : "nav__toggle animate-toggle"}
            onClick={() => setMenu(!menu)}
          >
            <span></span>
            <span></span>
          </div>
          
        </div>
      </nav>
     
    </header>
  );
};

export default Header;
