import React from 'react'
import "./Footer.css";


export default function Footer({isDark, stop}) {

  const [seconds, setSeconds] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);

  // Third Attempts
  React.useEffect(() => {
    const timer =
    !stop && setInterval(() => {if(seconds<60) setSeconds(seconds + 1); else {setSeconds(0); setMinutes(minutes + 1)} }, 1000);
    return () => clearInterval(timer);
  }, [seconds, minutes, stop]);

  return (
    <div className="footer-box" style={{backgroundColor:isDark===true?'#0EF0FF':'#FFE79E'}}>
        <span className='Timer'>{String(minutes).padStart(2, '0')} : {String(seconds).padStart(2, '0')}</span>
    </div>
  )
}
