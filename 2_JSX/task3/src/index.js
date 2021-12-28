import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const rootElement = document.querySelector('#root');

const renderSeconds = time => {
  const seconds = time.getSeconds();
  const backgrondColor = seconds % 2 === 0 ? '#fff' : '#000';
  const textColor = seconds % 2 === 0 ? '#000' : '#fff';

  const styles = {
    color: textColor,
    backgroundColor: backgrondColor,
  };

  const element = (
    <div className="seconds" style={styles}>
      {seconds}
    </div>
  );

  ReactDOM.render(element, rootElement);
};
setInterval(() => renderSeconds(new Date()));
