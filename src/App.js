import './App.css';
import {useState} from "react"
import { useEffect } from 'react';
import { ListPokemon } from './ListPokemon/ListPokemon';
import { FilterNav } from './FilterNav/FilterNav';
function App() {
  const getData = async() => {
    const data = await fetch(`http://localhost:3525/list`);
    let jsonData = await data.json();
    setlist(jsonData)
  }
  const [list, setlist] = useState([])


  return (
    
    <>
    <FilterNav
       list={list}
       setlist={setlist}
       getData={getData}
    />
    <ListPokemon
    list={list}
    setlist={setlist}
    getData={getData}
    />
    </>
  );
}

export default App;
