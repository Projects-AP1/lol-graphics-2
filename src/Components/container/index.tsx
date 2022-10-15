import {createContext, useContext, useState} from 'react';


const AppContext = createContext({});

export function AppWrapper ({children} : any) {
    const [isSideBar, setIsSideBar] = useState<boolean>(false);
    
    return <AppContext.Provider value={{isSideBar, setIsSideBar}}>
        <div className="d-flex">
            {children}
        </div>
    </AppContext.Provider>
};
export const useAppContext = () : any => useContext(AppContext);