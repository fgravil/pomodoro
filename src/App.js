import React from 'react';
import { CountdownTimer } from './CountdownTimer';
import { PomodoroButtons, TimerButtons } from './PomodoroButtons';
import Modal from './Modal';

const styles = {
  topContainer: {
    backgroundColor: '#FF795E',
    padding: '40px 80px',
    borderRadius: 5
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: 1500,
      availableTimes: {
        pomodoroTime: 1500,
        shortBreakTime: 30,
        longBreakTime: 900
      },
      selectedTime: 'pomodoroTime',
      isPaused: true,
      displayModal: false
    };
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer = () => {
    this.setState(state => ({ 
      isPaused: false, 
      displayModal: state.selectedTime !== 'pomodoroTime' 
    }));
    this.timerID = setInterval(
      () => this.state.timer === 0 ? this.resetTimer() : this.updateTimer(),
      1000
    );
  }

  toggleTimer = () => this.state.isPaused ? this.startTimer() : this.stopTimer();

  updateTimer = () => this.setState(state => ({ timer: state.timer - 1 }));

  stopTimer = () => {
    this.setState({ isPaused: true });
    clearInterval(this.timerID);
  }

  resetTimer = (selectedTime = 'pomodoroTime') => {
    this.stopTimer();
    this.setState(state => ({
      timer: state.availableTimes[selectedTime],
      selectedTime: selectedTime
    }));
  }

  render() {
    const { timer, isPaused, selectedTime, displayModal } = this.state;

    return (
      <div style={styles.topContainer}>
        <PomodoroButtons selectedTime={selectedTime} resetTimer={this.resetTimer} />
        <CountdownTimer time={timer} />
        <TimerButtons
          isPaused={isPaused}
          selectedTime={selectedTime}
          resetTimer={this.resetTimer}
          toggleTimer={this.toggleTimer}
        />
        <Modal 
          onClose={() => this.setState({displayModal: false})} 
          title="Exercise Break" 
          show={displayModal} 
          Footer={() => <CountdownTimer time={timer} size={20}/>}>
          <iframe width="720" height="480"
            src="https://youtube.com/embed/ECxYJcnvyMw">
          </iframe>
        </Modal>
      </div>
    );
  }

}

export default App;
