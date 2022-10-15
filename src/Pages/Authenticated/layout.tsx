import {Routes as ReactRoutes, Route} from 'react-router-dom';

import SearchSummoner from '@Pages/Authenticated/SearchSummoner';
import Graphics from '@Pages/Authenticated/Graphic/SummonerLevel';
import Summoners from '@Pages/Authenticated/Summoners';
import {SideBar} from '@Components/Sidebar';

export default function AuthenticatedLayout() {
    return <>
        <SideBar />
        <ReactRoutes>
            <Route path="/search" element={<SearchSummoner />}/>
            <Route path="/graphics" element={<Graphics />}/>
            <Route path="/summoners" element={<Summoners />}/>
        </ReactRoutes>
    </>
};