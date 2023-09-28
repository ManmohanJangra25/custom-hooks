import { useState, useEffect } from 'react';

import Card from './Card';
import useCounter from '../hooks/use-counter';

const ForwardCounter = () => {
  const counter = useCounter('ForwardCounter');

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
