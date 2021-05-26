import './App.scss';
import { useState } from 'react'
import { nanoid } from 'nanoid';
import Form from './Components/Form/Form';
import Watches from './Components/Watches/Watches';
import Clock from './Components/Clock/Clock';

export default function App() {
  const [state, setState] = useState([
    {
      city: 'Moscow',
      timestamp: '+3',
      key: nanoid(5)
    },
    {
      city: 'London',
      timestamp: '0',
      key: nanoid(5)
    }
  ])

  const addWatch = (city, timestamp) => {
    if (!city || !timestamp) return null;
    setState(prev => ([
      ...prev,
      {
        city,
        timestamp,
        key: nanoid(5)
      }
    ]))
  }

  const deleteWatch = (index) => {
    console.log(index);
    const arr = [ ...state ];
    console.log(arr[index]);
    arr.splice(index, 1);
    setState(() => arr);
  }

  return (
    <div className="app">
      <Form state={state} addWatch={addWatch} />
      <Watches state={state} deleteWatch={deleteWatch} />
    </div>
  );
}