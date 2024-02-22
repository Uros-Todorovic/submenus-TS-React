import { FaBars } from 'react-icons/fa';
import NavLinks from './NavLinks';
import { useAppContext } from '../context/useAppContext';

const Navbar = () => {
	const { openSidebar } = useAppContext();

	return (
		<nav>
			<div className="nav-center">
				<h3 className="logo">Uros</h3>
				<button className="toggle-btn" onClick={openSidebar}>
					<FaBars />
				</button>
				<NavLinks />
			</div>
		</nav>
	);
};

export default Navbar;
