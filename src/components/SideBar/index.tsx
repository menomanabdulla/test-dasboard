import React from 'react';
import { Link, BrowserRouter as Router, } from "react-router-dom";

import {FaClipboardList, FaThList, FaUsers} from "react-icons/fa";

import SidebarWrapper from './sidebar.style';
interface Props{}

const Sidebar: React.FC<Props> = ({
}) => {
    return (
        <SidebarWrapper>
            <Router>
                <ul>
                    <li className="active">
                        <Link to="/"><FaThList/></Link>
                    </li>
                    <li>
                        <Link to="/home-2"><FaClipboardList /></Link>
                    </li>
                    <li>
                        <Link to="/home-3"><FaUsers/></Link>
                    </li>
                </ul>
            </Router>
        </SidebarWrapper>
    )
}

export default Sidebar;