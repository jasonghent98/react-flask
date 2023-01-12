import { useState, useEffect } from 'react';
import './App.css';

function App() {
  interface Data {
    members?: string[]
  }

  const [data, setData] = useState<any>([{}])

  useEffect(() => {
    fetch("/members").then((res: any) => res.json()).then((data: any) => {
      setData(data);
      console.log(data, "from app.tsx");
    })
  }, [])

  return (
    <div className="App">
      fdsa
      {(data.length) ? <div>Loading ... </div> : 
      (<div>{data.map((object: Data, i: number) => (
        <p key={i.toString()}>{"fjdsa"}</p>
      ))}</div>)
      }
     
    </div>
  );
}

export default App;
