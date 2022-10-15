import React, {useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {VscChromeClose} from 'react-icons/vsc';
import {Link} from 'react-router-dom';

import {Sidebardata} from './SidebarData';
import {useAppContext} from '@Components/container';

export default function LeftSideBar(){
  const {isSideBar, setIsSideBar} = useAppContext();
  const [isLink, setIsLink] = useState<string>('');
  const [isSelectedLink, setIsSelectedLink] = useState<string>('');

  const toggle = () : void => setIsSideBar((prev : boolean) => !prev);

   return <div className="d-flex container-sidebar" >
    <div className="sidebar vh-100" style={{width: isSideBar ? "200px" : "50px"}}>
      <div className="top_section d-flex align-items-center">
        <h1 className={`logo ${isSideBar ? 'd-block' : 'd-none'}`}>Logo</h1>
        <div className={`bars`} style={{marginLeft: isSideBar ? "50px" : "0px"}}>
          {isSideBar ? <VscChromeClose onClick={toggle}/> : <FaBars onClick={toggle} />}
        </div>
      </div>
      {Sidebardata.map((item, key) => (
          <Link 
            to={item.path} 
            key={key}
            className={` link-container mt-2 d-flex align-items-center gap-4 ${isLink === item.name || isSelectedLink === item.name ? 'active' : ''}`} 
            onMouseEnter={()=> setIsLink(item.name)}
            onMouseLeave={()=> setIsLink('')}
            onClick={()=> setIsSelectedLink(item.name)}
          >
            <div className={`icon ${isSideBar ? 'd-block' : 'd-none' }`}>{item.icon}</div>
            <div className={`link_text mt-1 ${isSideBar ? 'd-block' : 'd-none' }`}>{item.name}</div>
          </Link>
        ))}
    </div>
   </div>
};