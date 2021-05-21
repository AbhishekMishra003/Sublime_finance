import React, { Component } from 'react';
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'
import { FaFigma, FaGoogle } from 'react-icons/fa';


class Page extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className = "mt-5">
                <div className="shadow p-3 mb-5 rounded doMargin">
                    <FaFigma className="mr-4"/> 
                    <span><b>Welcome to figma!</b> 
                    Make an account to edit and collaborate on this file.</span>
                    <button className="ml-5 border px-2 py-2 rounded btn-height">
                        <FaGoogle/> Signup with google
                    </button>
                    <button className="ml-1 bg-success text-light border px-2 py-2 rounded btn-height" data-toggle="modal" data-target="#myModal">
                         Signup with email
                    </button>
                </div>
                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content mx-5">
                            <div className="modal-header">
                                <h4 className="modal-title">Create an Account to Collaborate on Dashboard(Copy)</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <button className="border px-2 py-2 rounded btn-height">
                                    <FaGoogle/> Signup with google
                                </button>
                                <div className="my-2">
                                    or
                                </div>
                                <div className="my-2">
                                    <input type="text" className="border_width rounded" placeholder="Email"/>
                                </div>
                                <div className="my-2">
                                    <input type="text" className="border_width rounded" placeholder="Password"/>
                                </div>
                                <div>
                                    <button className="custom_button rounded"> Create Account</button>
                                </div>
                                <div className="my-1 text-primary">
                                    Sign up with a SAML SSO
                                </div>
                                <div className="my-1">
                                    Already Have an account?<span className="text-primary">Log in</span>
                                </div>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Page