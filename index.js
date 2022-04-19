import React from 'react';
import RractDom from 'react-dom';
import '.index.css';
// import App from './LoginComponent2';
import App from './LoginComponent1';
import reportWebVitals from './reportWebVitals';


ReactDom.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();