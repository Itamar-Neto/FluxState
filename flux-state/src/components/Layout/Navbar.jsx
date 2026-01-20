import NavIcons from '../Common/NavIcons/NavIcons';
import LogoFluxstate from '../../assets/Fluxstate.svg'
import Home from '../../assets/Home.svg'

function Navbar() {
    return (
        <>
            <nav className="h-full absolute left-0 rounded-l-lg p-2">
                <NavIcons
                    url='http://localhost:5173'
                    src={LogoFluxstate}
                    alt='FluxSate Logomarca' />

                <NavIcons
                    url='http://localhost:5173'
                    src={Home}
                    alt='Home Icon' />
            </nav>
        </>
    )
}

export default Navbar;