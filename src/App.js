import { useState, useEffect  } from 'react';
import './App.css';
import { RenderData } from './RenderData';

function App() {
  let [data, setData] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=9")
    .then(response => response.json())
    .then(data => setData(data))
  },[])

  return (
    <div className="App">
      {data.map((el) => (
      <RenderData
       key={el.id} 
       id={el.id} 
       title={el.title} 
       text={el.text} 
       thumbnailUrl={el.thumbnailUrl} />
      ))}
    </div>
  );
}

export default App;
