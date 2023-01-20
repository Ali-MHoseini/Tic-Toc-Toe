import React from 'react'
import "./Footer.css";


export default function Footer({isDark}) {

  const [counter, setCounter] = React.useState(60);

  // Third Attempts
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="footer-box" style={{backgroundColor:isDark===true?'#0EF0FF':'#FFE79E'}}>
        <span className='Timer'>Countdown: {counter}</span>
    </div>
  )
}
