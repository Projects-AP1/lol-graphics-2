import {useState} from 'react';
import {Nav, NavLink} from 'reactstrap';

export default function RoutedTabs({tabs} : any) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Nav tabs>
        {tabs?.map((tab : any, index : number) => {
          if (!tab.disabled) {
            return (
                <NavLink
                  color="link"
                  className={`cursor-pointer text-dark bg-${activeTab === index ? 'light' : 'info'}`}
                  onClick={() => setActiveTab(index)}
                >
                {tab.title}
                </NavLink>
            );
          };
        })}
      </Nav>
      {tabs[activeTab].content}
    </>
  );
};
