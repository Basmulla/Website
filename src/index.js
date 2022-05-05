import React from 'react';
import './index.css';
import App from './App';
import {createRoot} from 'react-dom/client';
import firebase from 'firebase/compat/app';
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyB1zWnTfYd2qDElOB2LN6jjWPLsLyyMZlw",
    projectId: "portfolio-58204"
})

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <App />
);
