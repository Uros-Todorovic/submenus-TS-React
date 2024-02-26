import { useAppContext } from '../context/useAppContext';
import sublinks from '../data';

const NavLinks = () => {
	const { setPageID } = useAppContext();

	return (
		<div className="nav-links">
			{sublinks.map((item) => {
				const { pageId, page } = item;
				return (
					<button key={pageId} className="nav-link" onMouseEnter={() => setPageID(pageId)}>
						{page}
					</button>
				);
			})}
		</div>
	);
};

export default NavLinks;
