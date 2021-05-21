import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { FaBeer, FaCheck, FaComment, FaFigma, FaHandPointer, FaPause, FaPlay, FaQuestion, FaStop } from 'react-icons/fa';
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'


class NavbarComponent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Navbar bg="dark" variant="dark">
                    <FaFigma className="text-light"/>
                    <Tippy content = "Main menu">
                        <NavDropdown title="" id="basic-nav-dropdown" className="text-light">
                            <NavDropdown.Item href="#action/3.1" className="bg-dark text-light m-0"><FaCheck /> Page 1</NavDropdown.Item>
                        </NavDropdown>
                    </Tippy>
                    <FaHandPointer className="text-light bg-primary mb-0 p-2" style={{width:'30',height:'40'}}/>
                    <div className="mx-auto text-light">
                        Dashboard (Copy)
                    </div>
                    <div className="text-dark m-2">
                        <FaQuestion className="bg-danger rounded-circle p-2" style={{width:'30',height:'30'}}/>
                    </div>
                    <div className="text-light mx-2 border px-2 py-1 rounded" style={{width:'40',height:'20'}}>
                        Log in
                    </div>
                    <div className="text-light m-2">
                        <Tippy content = "Add comment  c">
                            <div><FaComment/></div>
                        </Tippy>
                    </div>
                    <div className="text-light mx-4">
                        <Tippy content = "Present">
                            <div><FaPlay/></div>
                        </Tippy>
                    </div>
                    <div className="text-light m-1">
                        <Tippy content = "Zoom/view option">
                            <div>25%</div>
                        </Tippy>
                    </div>
                </Navbar>
            </div>
        )
    }
}

export default NavbarComponent