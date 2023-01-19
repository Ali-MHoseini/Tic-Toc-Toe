import React from 'react'
import "./Footer.css";


export default function Footer() {

  const [counter, setCounter] = React.useState(60);

  // Third Attempts
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="footer-box">
        <span className='Timer'>Countdown: {counter}</span>
    </div>
  )
}
