import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h3>Terms and Conditions</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore nesciunt ad eveniet repudiandae necessitatibus! Dolorum, iure eligendi sed quisquam officiis voluptas quos officia, totam soluta obcaecati suscipit inventore illum non.</p>
            <p>Go back to<Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;