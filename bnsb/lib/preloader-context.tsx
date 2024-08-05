import { createContext, useContext, useState, ReactNode } from 'react';

interface PreloaderContextProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const PreloaderContext = createContext<PreloaderContextProps | undefined>(undefined);

export const PreloaderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <PreloaderContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </PreloaderContext.Provider>
    );
};

export const usePreloader = () => {
    const context = useContext(PreloaderContext);
    if (context === undefined) {
        throw new Error('usePreloader must be used within a PreloaderProvider');
    }
    return context;
};
