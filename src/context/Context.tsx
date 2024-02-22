import { type ReactNode, createContext, useState } from 'react';

/**
 *
 * Context for sharing the current modal and sidebar state throughout the app.
 *
 */

type AppState = {
	isSidebarOpen: boolean;
};

export type AppContextValue = AppState & {
	openSidebar: () => void;
	closeSidebar: () => void;
};

export const AppContext = createContext<AppContextValue | null>(null);

/**
 *
 * Provider component to wrap around your whole application. This provides access to the context values defined above.
 *
 */

type AppProviderProps = {
	children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const openSidebar = () => setIsSidebarOpen(true);
	const closeSidebar = () => setIsSidebarOpen(false);

	const ctx: AppContextValue = {
		openSidebar,
		closeSidebar,
		isSidebarOpen,
	};

	return <AppContext.Provider value={ctx}>{children}</AppContext.Provider>;
};
