import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';import { FaGithub, FaGoogle, FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button variant='outline-primary'><FaGoogle />Login with Google</Button>
            <Button variant='outline-secondary'>< FaGithub/>Login with gitHub</Button>
            <div>
                <h4>Find Us on</h4>
            <ListGroup as="ul">
      <ListGroup.Item as="li" active>
        <FaFacebook></FaFacebook> Facebook
      </ListGroup.Item>
      <ListGroup.Item as="li">
        <FaTwitter></FaTwitter>Twitter
      </ListGroup.Item>
      <ListGroup.Item as="li" disabled>
        <FaInstagram></FaInstagram> Instagram
      </ListGroup.Item>
      
    </ListGroup>
            </div>
            <QZone></QZone>
            <div>
              <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;