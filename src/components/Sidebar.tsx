import React from 'react'
import sidebar from '../css/sidebar.module.css'
import SidebarOptions from './SidebarOptions'
import { Twitter, Home, Search, NotificationsNone, BookmarkBorder, MoreHoriz, PermIdentity, ListAlt, MailOutline } from '@mui/icons-material'
import { Button } from '@mui/material'

export default function Sidebar() {
  return (
    <div className={sidebar.container}>
        {/* twitter icon */}
        <Twitter className={sidebar.twitter_icon}/>

        <SidebarOptions active Icon={Home} text="Home"/>
        <SidebarOptions active Icon={Search} text="Explore"/>
        <SidebarOptions active Icon={NotificationsNone} text="Notifications"/>
        <SidebarOptions active Icon={MailOutline} text="Messages"/>
        <SidebarOptions active Icon={BookmarkBorder} text="Bookmarks"/>
        <SidebarOptions active Icon={ListAlt} text="Lists"/>
        <SidebarOptions active Icon={PermIdentity} text="Profile"/>
        <SidebarOptions active Icon={MoreHoriz} text="More"/>


        {/* feed */}

        {/* BUTTON -> tweet */}
        <Button variant="outlined" className={sidebar.tweet} fullWidth={true} >Tweet</Button>
       
    </div>
  )
}
