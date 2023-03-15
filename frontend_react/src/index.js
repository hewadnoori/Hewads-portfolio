import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//The ReactDOM.createRoot() method creates a root for the React application to render to. This method is used in React version 18 and higher, and is designed to improve the performance of large applications.
//The render() method is called on the root object, which renders the App component to the DOM inside the root element, which is selected using the document.getElementById() method.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //The root.render() method renders the App component inside a React.StrictMode component. React.StrictMode is a tool that highlights potential problems in the application's code, such as deprecations and unsafe operations.
    <React.StrictMode>
    <App />
    </React.StrictMode>
);


