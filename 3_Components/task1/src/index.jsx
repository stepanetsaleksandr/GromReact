import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.jsx';
import './index.scss';
import './search.scss';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Search name={'Tom'} />, rootElement);
