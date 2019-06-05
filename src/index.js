import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from '../components/Countdown'

class App extends React.Component {
	render() {
		return <Countdown  timeTillDate="05 26 2019, 6:00 am" 
		timeFormat="MM DD YYYY, h:mm a"/>;
	}
}
ReactDOM.render(<App />, document.getElementById('root'));
