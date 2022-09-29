import React, { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Body from './components/body/Body';
import report from '../data/buttons.json';


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [state, setState] = useState(
    {
                      good,
                      neutral,
                      bad
                    }
    );

  useEffect(() => {
    setState({
      good,
      neutral,
      bad
    })
    console.log(state);
  }, [good, neutral, bad])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#E7ECF2'
      }}
    >
      <Header
        report={report}
        setBad={setBad}
        setGood={setGood}
        setNeutral={setNeutral}
      />
      <Body
        state={state}
        report={report}
      />
    </div>
  );
};
