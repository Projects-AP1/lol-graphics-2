import {BrowserRouter, Routes as ReactRoutes, Route, Navigate} from 'react-router-dom';

import SearchSummoner from '@Pages/SearchSummoner';
import Graphics from '@Pages/Graphic';
import {SideBar} from '@Components/Sidebar';

export default function Routes () {
    return <BrowserRouter>
    <SideBar>
        <ReactRoutes>
            <Route path="/" element={<Navigate to="/app"/>} />
            <Route path="/search" element={<SearchSummoner />}/>
            <Route path="/graphics" element={<Graphics />}/>
        </ReactRoutes>
    </SideBar>
</BrowserRouter>;
};