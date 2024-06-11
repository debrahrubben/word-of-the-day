import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@webcomponents/webcomponentsjs/webcomponents-bundle.js';
import './index.css'
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
