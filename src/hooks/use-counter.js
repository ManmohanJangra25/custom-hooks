import { useState, useEffect } from "react";

const useCounter = (type) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if(type === 'ForwardCounter'){
                setCounter((prevCounter) => prevCounter + 1);
            } if(type === 'BackwordCounter'){
                setCounter((prevCounter) => prevCounter - 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return counter;
};

export default useCounter;