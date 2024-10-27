import React from 'react'
import Sidebar from './components/Sidebar'
import Sidebar1 from './components/Sidebar1'
import {SidebarItem} from './components/Sidebar1'

import {
  Apple,
  BadgeIndianRupee,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings
} from "lucide-react";

export default function App() {
  return (
    <div class = "h-screen bg-gradient-to-r from-[#d4c084] to-[#e60202]">
    {/* </div><div class = 'h-screen bg-gradient-to-r from-amber-600 to-gray-800'> */}


      {/* <div className='h-[90%] flex'>
        <Sidebar1  />
      </div> */}

      <Sidebar1>
        <SidebarItem 
          icon={<LayoutDashboard size={20} />}
          text='Dashboard'
          alert
        /> 
        <SidebarItem 
          icon={<BarChart3 size={20} />}
          text='Statistics'
          active
        />
        <SidebarItem 
          icon={<UserCircle size={20} />}
          text='Users'
        />
        <SidebarItem 
          icon={<Package size={20} />}
          text='Orders'
        />
        <SidebarItem 
          icon={<Boxes size={20} />}
          text='Inventory'
        />
        <SidebarItem 
          icon={<BadgeIndianRupee size={20} />}
          text='Invoices' 
        />
        <hr className='my-3' />
        <SidebarItem 
          icon={<Apple size={20} />}
          text='Support'
        />
        <SidebarItem 
          icon={<Settings size={20} />}
          text='Settings'
        />
      </Sidebar1>


    </div>
  )
}