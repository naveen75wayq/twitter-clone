import React, { ReactElement, ElementType } from 'react'
import sidebarOptions from '../css/sidebarOptions.module.css';
type IconType = ElementType
interface SidebarOptionsProps {
    active: boolean;
    text: string;
    Icon: IconType;

  }
  
function SidebarOptions({active, text, Icon}:SidebarOptionsProps):ReactElement {
  return (
    <div className={`${sidebarOptions.container} ${active && `sidebarOptions.container--active`} `}>
      <Icon className={sidebarOptions.icons}/>
      <h1>{text}</h1>
    </div>
  )
}

export default SidebarOptions