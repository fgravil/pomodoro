import React from 'react';

export const CountdownTimer = ({ time, size }) => {
    const numToString = (num) => (num < 10 ? '0' : '') + num;

    const displayTime = () => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time - (minutes * 60));

        return `${numToString(minutes)}:${numToString(seconds)}`;
    }

    return <div style={{fontSize: size || 100}}>{displayTime()}</div>;
}