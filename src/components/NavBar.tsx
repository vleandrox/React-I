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
            {navLinks.map((link) => (
                <NavButton link={link.link} title={link.title} />
            ))}
        </nav>
    );
}

export default NavBar