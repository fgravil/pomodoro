import React from 'react';

const styles = {
    btnContainer: {
        margin: '15px 0'
    },
    btn: {
        margin: '0 10px',
        padding: '10px 20px',
        fontSize: '1em',
        color: '#FFF',
        border: 'none',
        borderRadius: 5,
        cursor: 'pointer'
    },
    startPauseBtn: {
        padding: '10px 40px'
    },
    resetBtn: {
        color: '#333',
        backgroundColor: '#D0D0D0',
        padding: '10px 40px'
    }
};
const getActiveColor = (selectedTime, btnType) => selectedTime === btnType ? '#9C301A' : 'transparent';

export const PomodoroButtons = ({ resetTimer, selectedTime }) => (
    <div style={styles.btnContainer}>
        <button
            style={{ ...styles.btn, backgroundColor: getActiveColor(selectedTime, 'pomodoroTime') }}
            onClick={() => resetTimer('pomodoroTime')}>
            Pomodoro
        </button>
        <button
            style={{ ...styles.btn, backgroundColor: getActiveColor(selectedTime, 'shortBreakTime') }}
            onClick={() => resetTimer('shortBreakTime')}>
            Short Break
        </button>
        <button
            style={{...styles.btn, backgroundColor: getActiveColor(selectedTime, 'longBreakTime')}}
            onClick={() => resetTimer('longBreakTime')}>
            Long Break
        </button>
    </div>
);

export const TimerButtons = ({ isPaused, selectedTime, resetTimer, toggleTimer }) => (
    <div style={styles.btnContainer}>
        <button
            style={{ ...styles.btn, ...styles.startPauseBtn, backgroundColor: isPaused ? '#4F9A60' : '#DC3545'}}
            onClick={() => toggleTimer()}>
            {isPaused ? 'Start' : 'Pause'}
        </button>
        <button
            style={{ ...styles.btn, ...styles.resetBtn }}
            onClick={() => resetTimer(selectedTime)}>
            Reset
        </button>
    </div>
)
