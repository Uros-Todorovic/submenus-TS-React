import { useContext } from 'react';
import { AppContext, AppContextValue } from './Context';

/**
 *
 * Access the context in any component using this hook
 *
 */

export const useAppContext = (): AppContextValue => {
	const context = useContext(AppContext);
	if (context === null) {
		throw new Error("Context can't be null");
	}
	return context;
};
