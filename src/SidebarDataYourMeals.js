import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Meal Picker',
        path: '/mealpicker',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Add new meal',
        path: '/newmeal',
        icon: <AiIcons.AiOutlinePlus />,
        cName: 'nav-text'
    }


]