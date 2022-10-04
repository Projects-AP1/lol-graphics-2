import React, {useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {VscChromeClose} from 'react-icons/vsc';
import {Link} from 'react-router-dom';

import {Sidebardata} from './SidebarData';

export default function LeftSideBar({children} : any){
  const[isOpen, setIsOpen] = useState<boolean>(false);
  const [isLink, setIsLink] = useState<string>('');
  const [isSelectedLink, setIsSelectedLink] = useState<string>('');

  const toggle = () : void => setIsOpen(prev => !prev);

   return <div className="d-flex container-sidebar" >
    <div className="sidebar vh-100" style={{width: isOpen ? "200px" : "50px"}}>
      <div className="top_section d-flex align-items-center">
        <h1 className="logo" style={{display: isOpen ? "block" : "none"}}>Logo</h1>
        <div className="bars" style={{marginLeft: isOpen ? "50px" : "0px"}}>
          {isOpen ? <VscChromeClose onClick={toggle}/> : <FaBars onClick={toggle} />}
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
            <div className={`icon ${isOpen ? 'd-block' : 'd-none' }`}>{item.icon}</div>
            <div className={`link_text mt-1 ${isOpen ? 'd-block' : 'd-none' }`}>{item.name}</div>
          </Link>
        ))}
    </div>
    <main className="w-100">{children}</main>
   </div>
};