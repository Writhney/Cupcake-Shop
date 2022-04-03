import '../styles/css/Services.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Services = ({title,filter}) => {

    const recurso = `/servicios${filter}`;
    const edpoint = `${process.env.REACT_APP_URL_API}`
    const [servicios, setServicios] = useState([]);

    useEffect(() => {
        const apiCupcakes = async ()=>{
          try {
              const response = await axios.get(edpoint);
              const data = response.data;
              setServicios(data.servicios);
          } catch (error) {
              console.log(error);
          }finally{
              console.log('Se consulto a la api');
          }
        }
        apiCupcakes();
    
      }, [recurso]);

      return (
        <section className="services">
          <div className="services-container">
            <h1 className="titles-principal">{title}</h1>
            {
              servicios.length === 0
                ?
                (
                  <section className="spinner">
                    <div className="spinner-container">
                      <div className="spinnerdouble-bounce1"></div>
                      <div className="spinnerdouble-bounce2"></div>
                    </div>
                  </section>
                )
                :
                (
                  <div className="serviciosservices">
                    {
                      servicios.map(({ id, nombre, descripcion }) => {
                        return (
                          <article className="servicesservice" key={id}>
                            <div className="servicesservice-data">
                              <h2 className="servicesservice-data-nombre">Nombre: {nombre}</h2>
                              <p className="servicesservice-data-about">{id}: {descripcion}</p>
                            </div>
                            <div className="servicesservice-button-container">
                              <button className="servicesservice-button servicesservice-button--active">Ver</button>
                              <button className="servicesservice-button">Comprar</button>
                            </div>
                          </article>
                        );
                      })
                    }
                  </div>
                )
            }
          </div>
        </section>
      );
}
 
export default Services;