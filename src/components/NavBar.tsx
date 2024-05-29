import './NavBar.module.css'
import NavButton from './NavButton';

const navLinks = [
    { title: 'Ofertas', link: '#' },
    { title: 'Como Comprar', link: '#' },
    { title: 'Costos y Tarifas', link: '#' },
    { title: 'Mis Pedidos', link: '#' },
    { title: 'Garantia', link: '#' }
];

function NavBar() {
    return (
        <nav id="navbar" >
            {navLinks.map((title, index) => (
                <NavButton key={index} link={title.link} title={title.title} />
            ))}
        </nav>
    );
}

export default NavBar