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
    case 'RESET':
      return calculateTimeLeft(action.endTime);
    default:
      return state;
  }
};

const CountdownItem = ({ value, label, isCard }) => (
  <div className={`countdown-item countdown-item${isCard ? '__card' : ''}`}>
    <div className="time">{value.toString().padStart(2, '0')}</div>
    <div className="label">{label}</div>
  </div>
);

const Countdown = ({ duration, isCard = false }) => {
  const endTimeRef = useRef(Date.now() + duration);
  const [timeLeft, dispatch] = useReducer(
    countdownReducer,
    calculateTimeLeft(endTimeRef.current)
  );

  useEffect(() => {
    endTimeRef.current = Date.now() + duration;
    dispatch({ type: 'RESET', endTime: endTimeRef.current });
  }, [duration]);

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
          <CountdownItem isCard={isCard} value={timeLeft.hours} label="Час" />
          <CountdownItem isCard={isCard} value={timeLeft.minutes} label="Мин" />
          <CountdownItem isCard={isCard} value={timeLeft.seconds} label="Сек" />
        </>
      )}
    </div>
  );
};

export default Countdown;
