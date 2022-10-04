import {createContext, useContext} from 'react';


const AppContext = createContext({});

export function AppWrapper ({children} : any) {
    
    return <AppContext.Provider value={{}}>
        {children}
    </AppContext.Provider>
};
export const useAppContext = () : any => useContext(AppContext);