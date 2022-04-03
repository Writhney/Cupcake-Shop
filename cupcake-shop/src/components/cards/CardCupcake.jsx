import { useState, useEffect } from "react";
import CardCupcakeOne from "./CardCupcakeOne";
import axios from "axios";

const CardCupcakes = ({title, filter}) => {
    const [cupcakes, setCupcakes] = useState([]);
    const recurso = `/cupcakes${filter}`;

    useEffect(() => {
      const apiCupcakes = async ()=>{
        try {

            const response = await axios.get(`${process.env.REACT_APP_URL_API}${recurso}`);
            const data = response.data;

            setCupcakes(data);
        } catch (error) {
            console.log(error);
        }finally{
            console.log('Se consulto a la api');
        }
      }
      apiCupcakes();

    }, [recurso]);

    return ( <>
        
    <section className={`cupcakes cupcakes--pt-4`}>
        <div className='cupcakes-container'>
            <h1 className='titles-principal'>{title}</h1>
            {
                cupcakes.length === 0
                ?
                (
                <section className="spinner">
                    <div className="spinner-container">
                        <div className="spinner__double-bounce1"></div>
                        <div className="spinner__double-bounce2"></div>
                    </div>
                </section>
                )
                :(
                    <div className='cupcakes__cupcakes'>
                        {cupcakes.map((cupcakes) => {
                            return(
                                <CardCupcakeOne
                                key= {cupcakes.id}
                                cupcake = {cupcakes}
                                />
                                )
                            })
                        }

                        
                    </div>
                    
                )
            }
            
        </div>
    </section>
    </> );
}
 
export default CardCupcakes;