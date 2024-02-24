import React, { useEffect } from 'react';
import { useAlert } from '../context/AlertContext';
import {motion, AnimatePresence} from "framer-motion";

const Alert = () => {
  const { alert, hideAlert } = useAlert();

  useEffect(() => {
    // Auto-hide the alert after a certain duration (e.g., 3000 milliseconds)
    const timeout = setTimeout(() => {
      hideAlert();
    }, 1500);

    return () => clearTimeout(timeout); // Cleanup the timeout on component unmount
  }, [alert, hideAlert]);

  return (
    <AnimatePresence>
    
      {alert && 
      <motion.div role="alert" className={`alert alert-${alert.status} absolute inset-x-2 m-auto w-[90%] z-10 border border-primary`} initial={{scale: 0}} animate={{scale: 1}} exit={{scale: 0}}>
        {alert.status === 'error' ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={2}>
              <path strokeDasharray={60} strokeDashoffset={60} d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z">
                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"></animate>
              </path>
              <path strokeDasharray={8} strokeDashoffset={8} d="M12 7V13">
                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></animate>
                <animate attributeName="stroke-width" begin="1s" dur="3s" keyTimes="0;0.1;0.2;0.3;1" repeatCount="indefinite" values="2;3;3;2;2"></animate>
              </path>
            </g>
            <circle cx={12} cy={17} r={1} fill="currentColor" fillOpacity={0}>
              <animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.4s" values="0;1"></animate>
              <animate attributeName="r" begin="1.3s" dur="3s" keyTimes="0;0.1;0.2;0.3;1" repeatCount="indefinite" values="1;2;2;1;1"></animate>
            </circle>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 1024 1024">
            <path fill="currentColor" d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896m-55.808 536.384l-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"></path>
          </svg>
        )}
        <p>{alert.message}</p>
      </motion.div> }
    </AnimatePresence>
  );
};

export default Alert;