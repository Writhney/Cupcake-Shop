import heroImg from '../asets/img/hero.jpg';
import riseImg from '../asets/img/rise.svg';
import arrowImg from '../asets/img/arrow.svg';
import bubblesImg from '../asets/img/bubbles.svg';
import blobImg from '../asets/img/blob.svg';
import asteriskImg from '../asets/img/asterisk.svg';

import '../styles/css/Hero.css'
//import '../styles/sass/Hero.scss'
import { NavLink } from 'react-router-dom';
import CardCupcake from '../components/cards/CardCupcake';
import Services from '../components/Services';

const Home = () => {
    return ( 
        <>
        <article className="hero">
      <div className="hero-container">
        <div className="hero__message">
          <h2 className="hero__message-title">
            Cupcake feliz, Los mejores cupcakes
          </h2>
          <h1 className="hero__message-subtitle">
            La mejor panadería peruana
          </h1>
          <p className="hero__message-paragraph">
            🧁 El verdadero lugar con las 4B. Bueno, Bonito, Barato y Bastante. Siempre con fe y humildad 🧁
          </p>
          <div className="hero__message-shopping-container">
            <div className="hero__message-cheapest-price-container">
              <span className="hero__message-cheapest-price">Desde:</span>
              <span className="hero__message-cheapest-price hero__message-cheapest-price--normal">S/ 4.50</span>
              <span className="hero__message-cheapest-price hero__message-cheapest-price--offer">S/ 3.50</span>
            </div>
            <NavLink to="/cupcakes" className="hero__message-buy-button">
              Productos
            </NavLink>
          </div>
        </div>
        <div className="hero__figure">
          <figure className="hero__figure-image-container">
            <img src={heroImg} alt="Imagen de portada" className="hero__figure-image" />
          </figure>
        </div>
      </div>
      <figure className="hero__rise-container">
        <img src={riseImg} alt="Rise de adorno" className="hero__rise" />
      </figure>
      <figure className="hero__arrow-container">
        <img src={arrowImg} alt="Arrow de adorno" className="hero__arrow" />
      </figure>
      <figure className="hero__bubbles-container">
        <img src={bubblesImg} alt="Bubbles de adorno" className="hero__bubbles" />
      </figure>
      <figure className="hero__blob-container">
        <img src={blobImg} alt="Blob de adorno" className="hero__blob" />
      </figure>
      <figure className="hero__asterisk-container">
        <img src={asteriskImg} alt="Asterisk de adorno" className="hero__asterisk" />
      </figure>
    </article>
    <CardCupcake
    title= "All Cupcakes"
    //filter="?sabor_like=Vainilla"
    filter=""
    />
    <Services
    title = {'🧁 Servicios 🧁'}
    filter=""/>
        </>
     );
}
 
export default Home;