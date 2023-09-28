import { useState, useEffect } from 'react';

import Card from './Card';
import useCounter from '../hooks/use-counter';

const BackwardCounter = () => {
  const counter = useCounter('BackwordCounter');

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
