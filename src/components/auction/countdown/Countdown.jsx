import React, { useEffect, useReducer, useRef } from 'react';
import './countdown.css';

const calculateTimeLeft = (endTime) => {
  const now = Date.now();
  const difference = endTime - now;

  const expired = difference <= 0;

  return {
    hours: expired ? 0 : Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: expired ? 0 : Math.floor((difference / (1000 * 60)) % 60),
    seconds: expired ? 0 : Math.floor((difference / 1000) % 60),
    expired,
  };
};

const countdownReducer = (state, action) => {
  switch (action.type) {
    case 'TICK':
      return calculateTimeLeft(action.endTime);
    default:
      return state;
  }
};

const CountdownItem = ({ value, label }) => (
  <div className="countdown-item">
    <div className="time">{value.toString().padStart(2, '0')}</div>
    <div className="label">{label}</div>
  </div>
);

const Countdown = ({ duration = 5000000 }) => {
  const endTimeRef = useRef(Date.now() + duration);
  const [timeLeft, dispatch] = useReducer(
    countdownReducer,
    calculateTimeLeft(endTimeRef.current)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: 'TICK', endTime: endTimeRef.current });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown">
      {timeLeft.expired ? (
        <div className="countdown-expired">Время вышло!</div>
      ) : (
        <>
          <CountdownItem value={timeLeft.hours} label="Час" />
          <CountdownItem value={timeLeft.minutes} label="Мин" />
          <CountdownItem value={timeLeft.seconds} label="Сек" />
        </>
      )}
    </div>
  );
};

export default Countdown;
