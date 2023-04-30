import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {

    return (
        <div className='container mt-4'>
         <div className="text-center">
            <img src={logo} alt="" />
            <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
            <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
         </div>
         <div className='d-flex my-4'>
            <Button variant="danger">Leatest</Button>
            <Marquee speed={100}>
            I can be a React component, multiple React components, or just some text.
            </Marquee>
            </div>
          
        </div>
    );
};

export default Header;