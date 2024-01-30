import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// ReactDOM.createRoot ka istemaal ho raha hai taake App ko 'root' yeh id wale DOM element mein render kya ja sake
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// main.jsx work :  react dom mai jakar reateroot(function) ka paramaeter mai index.html ki id root ko as a argument bheja
// or usko phr render karka  React.StrictMode karka uska andar App ko chalada