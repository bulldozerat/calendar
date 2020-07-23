import React from 'react';
import ReactDOM from 'react-dom';

// Other
import './global.css';

// Components
import CalendarApp from './containers/CalendarApp';

ReactDOM.render(
  <React.StrictMode>
    <CalendarApp />
  </React.StrictMode>,
  document.getElementById('root')
);
