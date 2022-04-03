const CardCupcakeOne = ({cupcake}) => {
    const { id, sabor, color, descripcion, precio, imagen } = cupcake;
    return ( 
        <article className='cupcakes__cupcake' key={id}>
                            <figure className='cupcakes__cupcake-image-container'>
                                <img className='cupcakes__cupcake-image' src={imagen} alt={descripcion} />
                            </figure>
                            <div className='cupcakes__cupcake-data'>
                                <h2 className='cupcakes__cupcake-data-sabor'>Sabor: {sabor}</h2>
                                <h3 className='cupcakes__cupcake-data-precio'>Precio: {precio}</h3>
                                <h4 className='cupcakes__cupcake-data-color'>Color: {color}</h4>
                                <p className='cupcakes__cupcake-data-about'>{descripcion}</p>
                            </div>
                            <div className='cupcakes__cupcake-button-container'>
                                <a className='cupcakes__cupcake-button cupcakes__cupcake-button--active' href="">Ver</a>
                                <a className='cupcakes__cupcake-button' href="">Comprar</a>
                            </div>
                        </article>
     );
}
 
export default CardCupcakeOne;