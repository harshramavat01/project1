import logo from './logo.svg';
import './App.css';
import Gt from './components/Gt';
import Data from './components/Data';
import Countryfun from './components/container/Countryfun';
import Country from './components/container/Country';
import City from './components/container/City';
import Cityfun from './components/container/Cityfun';
import Time from './components/container/Time';
import Timefun from './components/container/Timefun';
import Counter from './components/container/Counter';
import Loading from './components/container/Loading';
import Home from './components/container/Home';
import { useEffect, useState } from 'react';

const HomeWithLoading = Loading(Home)

function App(props) {
  const [Loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  let orgData = [
    { id: 101, name: "jenish" },
    { id: 102, name: "harsh" }
  ];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => { setLoading(false); setData(orgData) }, 2000);
  }, [])
  return (
    <div>
      <HomeWithLoading
        isLoading={Loading}
        data={data} 
        />
    </div>
  );
}

export default App;