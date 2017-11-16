import React from 'react';
import Form from './form';

const Landing = (props) => {
  return (
    <div>
      <div className="left">
        <header>
          <div className="iconBox"><img src="" alt=""/></div>
          <h1>Route Worth</h1>
        </header>
        <main>
          <p>To drive or to take the GTA's public transit?</p>
          <p>Weigh the cost in money and time.</p>
          <Form 
              handleSubmit={props.handleSubmit} 
              startAdd={props.startAdd}
              endAdd= {props.endAdd}
              startAddvalue= {props.startAddvalue}
              endAddvalue= {props.endAddvalue}
              handleChangeStart={props.handleChangeStart}
              handleChangeEnd={props.handleChangeEnd}
          />
        </main>
      </div>
      <div className="right">
        <div className="logo"><img src="../../assets/002-gps.png" alt="Route Worth logo, two map markers with an S-shaped dotted line route between them where one marker has a dollar sign symbol and the other is a clock"/></div>
      </div>
    </div>
  );
};

export default Landing;