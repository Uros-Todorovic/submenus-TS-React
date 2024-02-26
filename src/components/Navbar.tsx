import { FaBars } from 'react-icons/fa';
import NavLinks from './NavLinks';
import { useAppContext } from '../context/useAppContext';
import { MouseEvent } from 'react';

const Navbar = () => {
	const { openSidebar, setPageID } = useAppContext();

	const handleSubmenu = (event: MouseEvent) => {
		const { target } = event;
		if (target instanceof HTMLElement && !target.classList.contains('nav-link')) {
			setPageID('');
		}
	};

	return (
		<nav onMouseOver={handleSubmenu}>
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
