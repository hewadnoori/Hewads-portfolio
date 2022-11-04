import React from 'react';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/hewad-noori-3850b7b1/" target="blank"><BsLinkedin /></a>
    </div>
    <div>
      <a href="https://www.facebook.com/hewad.noori" target="blank"><FaFacebookF /></a>
    </div>
    <div>
      <a href="https://www.instagram.com/hewadnoori16/?hl=en" target="blank"><BsInstagram /></a>
    </div>
  </div>
);

export default SocialMedia;