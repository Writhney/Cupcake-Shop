const Footer = (props) => {
    const {currentYear , author} = props.credits;

    return (
        <footer className="footer animate__animated animate__fadeIn">
            Copyright  © {currentYear} {author} . Todos los derechos reservados
        </footer>
    );
}
export default Footer;