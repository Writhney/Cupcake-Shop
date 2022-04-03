import '../styles/css/Nosotros.css'
const Nosotros = () => {
    return ( 
        <>
        <section className="nosotros">
          <div className='nosotros-container'>
            <h1 className='titles-principal'>Nosotros</h1>
            <p className='notros-about'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Cum ipsam recusandae nulla totam eligendi corporis! 
            Ipsa vitae quisquam ipsam facilis nobis dicta expedita, 
            veniam numquam temporibus dignissimos suscipit qui? Voluptatem.
            </p>
            <div className='contactos'>
            <div class="footer-container">
                <a href="https://www.linkedin.com/in/writhney-lazo-mart%C3%ADnez-a7610922b/" class="footer__link-icon-container">
                    <img src="https://cdn-icons-png.flaticon.com/512/1383/1383329.png" alt="LinkedIn" class="footer__link-icon" />
                  </a>
                  <a href="https://www.instagram.com/ximena_lml/" class="footer__link-icon-container">
                    <img src="https://cdn-icons-png.flaticon.com/512/725/725339.png" alt="Instagram" class="footer__link-icon" />
                  </a>
                  <a href="https://www.facebook.com/Writhney.LM" class="footer__link-icon-container">
                    <img src="https://cdn-icons-png.flaticon.com/512/725/725350.png" alt="Facebook" class="footer__link-icon" />
                  </a>
                  <a href="https://github.com/Writhney" class="footer__link-icon-container">
                    <img src="https://cdn-icons-png.flaticon.com/512/1322/1322104.png" alt="GitHub" class="footer__link-icon" />
                  </a>
                  <a href="mailto:writhney@gmail.com" class="footer__link-icon-container">
                    <img src="https://cdn-icons-png.flaticon.com/512/324/324100.png" alt="Gmail" class="footer__link-icon" />
                  </a>
            </div>
            </div>
            </div>
        </section>
        </>
     );
}
 
export default Nosotros;