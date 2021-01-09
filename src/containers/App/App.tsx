import React, { useEffect } from 'react';
import Server from "../../server/fakeServer";

function App() {
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Server.request("ADD", "haha");
        console.log(data);
      } catch (e) {
        console.log(e);
      } 
    }
    fetchData();
  }, [])

  return (
    <div className="App">
      Hello world
    </div>
  );
}

export default App;
