import { useAppContext } from '../context/useAppContext';
import sublinks from '../data';
import { MouseEvent, useRef } from 'react';

const Submenu = () => {
	const { pageID, setPageID } = useAppContext();
	let result: DOMRect;

	const currentPage = sublinks.find((item) => item.pageId === pageID);

	const subMenuContainer = useRef<HTMLDivElement>(null);

	const handleMouseLeave = (event: MouseEvent) => {
		const { clientX, clientY } = event;
		const submenu = subMenuContainer.current;

		if (submenu instanceof HTMLDivElement) {
			result = submenu.getBoundingClientRect();
		}

		if (clientX < result.left - 1 || clientX > result.right - 1 || clientY > result.bottom - 1) {
			setPageID('');
		}
	};

	return (
		<div
			className={currentPage ? 'submenu show-submenu' : 'submenu'}
			onMouseLeave={handleMouseLeave}
			ref={subMenuContainer}
		>
			<h5>{currentPage?.page}</h5>
			<div
				className="submenu-links"
				style={{ gridTemplateColumns: currentPage !== undefined && currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr' }}
			>
				{currentPage?.links?.map((link) => {
					const { id, url, label, icon } = link;
					return (
						<a key={id} href={url}>
							{icon}
							{label}
						</a>
					);
				})}
			</div>
		</div>
	);
};

export default Submenu;
