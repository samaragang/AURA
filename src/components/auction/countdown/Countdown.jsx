import React, { useState, useEffect } from 'react';
import './countdown.css'


const Countdown = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const endTime = new Date('2023-07-18T00:00:00').getTime();

    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeDifference = endTime - currentTime;

      const hoursRemaining = Math.floor(timeDifference / (1000 * 60 * 60));
      const minutesRemaining = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const secondsRemaining = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setHours(hoursRemaining);
      setMinutes(minutesRemaining);
      setSeconds(secondsRemaining);

      if (timeDifference <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bet__countdown">
      Окончание через:
      <div className="time">{hours.toString().padStart(2, '0')}</div>
      <div className="label">Час</div>

      <div className="time">{minutes.toString().padStart(2, '0')}</div>
      <div className="label">Мин</div>

      <div className="time">{seconds.toString().padStart(2, '0')}</div>
      <div className="label">Сек</div>
    </div>
  );
};

export default Countdown;
