import React from 'react'
import "./topbar.scss"
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topbar">
        <div className="topbarWrapper">
        <div className="topleft">
        <span className="logo">React Dashboard</span>
        </div>
        <div className="topRight">
        <div className="topbarIconsContainer">
        <NotificationsNone />
        <span className="topIconsBadge">2</span>
        </div>
        <div className="topbarIconsContainer">
        <Language />
        <span className="topIconsBadge">2</span>
        </div>
        <div className="topbarIconsContainer">
        <Settings />
        </div>
        <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="topAvatar" />
        </div>
        </div>
        </div>
    )
}
