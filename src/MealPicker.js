import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './MealPicker.css';
import { IconContext } from 'react-icons';
import logo from './MealPicker-logo copy.png';
import MealTimebuttons from './MealTimebuttons';
import MealOutput from './MealOutput';

function MealPicker() {
    const [sidebar, setSidebar] = useState(false);
    const [mealName, setMeal] = useState('');

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
      </IconContext.Provider>
      <img src={logo} alt='logo' className='mealpickerlogo'/>
      <div className='title-container'>
        <div className='column'>
      <h1 className='title'>RANDOM MEAL PICKER</h1>
      <MealTimebuttons mealName={setMeal} />
      </div>
      <div className='column'>
      <h1 className='subtitle'>YOUR RANDOM MEAL IS:</h1>
      <MealOutput mealName={mealName} />
       </div>
      </div>
    </>
  )
}

export default MealPicker
