import {BrowserRouter, Routes as ReactRoutes, Route, Navigate} from 'react-router-dom';

import Login from '@Pages/Register';
import {isAuthenticated} from '@Auth/index';
import AuthenticatedLayout from '@Pages/Authenticated/layout';

export default function Routes () {
    const authenticated = isAuthenticated();
    return <BrowserRouter>
    <ReactRoutes>
        <Route path="/"  element={<Navigate to={authenticated ? '/app' : 'app/login'}/>} />
        <Route path="/app/*" element={authenticated ? <AuthenticatedLayout /> : <Navigate to="/app/login"/>}/>
        <Route path="/app/login" element={<Login />}/>
    </ReactRoutes>
</BrowserRouter>;
};