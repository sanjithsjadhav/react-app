import React from 'react';
import {data} from './data'
import './App.css';

function App() {
  document.title = 'Tours';
  const [tours, setTours] = React.useState(data);
  const removeTour = (id) => {
    setTours((oldTours) => {
      let newTours = oldTours.filter((tour)=> tour.id!==id)
      return newTours
    })
  };
  return <>
    <h1>Our Tours</h1>
    {tours.map((tour) => {
      const {id, src, title, cost, desc} = tour;
      console.log(tour)
      return <div key={id} className='card'>
        <img src={src} width='620' height='320'/>
        <h2>{title}</h2> ${cost}
        <p>{desc}</p>
        <button onClick={() => removeTour(id)}>Not Interested</button>
      </div>
    })}
  </>;
}

export default App;
