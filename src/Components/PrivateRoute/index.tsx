import {Route, Navigate} from 'react-router-dom';

import {isAuthenticated, RedirectToLogin} from '@Auth/index';

export default function PrivateRoute ({Component, path} : any){
    if(!isAuthenticated()) return <Route path={path} element={<Navigate to="/app/search"/>}/>

    return <Route path={path} element={<Component />}/>
};