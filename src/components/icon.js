import React from 'react';
import { BsCircleFill } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';

const Icon = ({ name }) => {
  if (name === 'circle') return <BsCircleFill size={40} color="white" />;
  if (name === 'cross') return <FaTimes size={40} color="white" />;
  else return null;
};

export default Icon;
