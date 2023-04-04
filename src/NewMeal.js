import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarDataNewMeal';
import './NewMeal.css';
import { IconContext } from 'react-icons';
import logo from './MealPicker-logo copy.png';
import AddNewMeal from './AddNewMeal';

function NewMeal() {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
return (
  <>
  <IconContext.Provider value ={{color: 'black'}}>
    <div className='navbar'>
      <Link to="#" className='menu-bars'>
        <FaIcons.FaBars onClick={showSidebar}/>
      </Link>
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul className='nav-menu-items' onClick={showSidebar}>
          <li className="navbar-toggle">
          <Link to="#" className='menu-bars'>
              <AiIcons.AiOutlineClose />
          </Link>
        </li>
        {SidebarData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                 {item.icon}
                 <span>{item.title}</span> 
              </Link>
            </li> 
          )

        })}
         </ul>
      </nav>

<img src={logo} alt='logo' className='mealpickerlogo'/>
    </IconContext.Provider>
      <div className='title-container'>
        <div className='column'>
      <h1 className='title'>ADD NEW MEAL</h1>
        <AddNewMeal />
    </div>
    </div>
    </>
)
}
export default NewMeal;
