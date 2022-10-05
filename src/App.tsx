
import {ToastContainer} from 'react-toastify';

import {AppWrapper} from '@Components/container';

import Routes from './Routes';

import './_index.scss';

export default function App (){

  return <AppWrapper>
    <Routes />
    <ToastContainer />
  </AppWrapper>
};