import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import { useEffect } from 'react';
function FilterNav({list,setlist,getData}) {
  const [value, setValue] = useState("")

  function find(){
  let newList = list.filter(x=>x.name.includes(value));
  setlist(newList) 
  setValue("")
  }

  useEffect(() => {
    const getFilter = async() => {
      const data = await fetch(`http://localhost:3525/filter`,{
        body:{value},
      });
      let jsonData = await data.json();
      setlist(jsonData)
    }
    getFilter();
  }, [value])

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand onClick={getData}>Search</Navbar.Brand>
        <input
        value ={value}
        onChange={(e)=>setValue(e.target.value)}
        ></input>
        <button onClick={find}>Buscar</button>
        <button onClick={getData}>Reiniciar</button>
      </Container>
    </Navbar>
  );
}

export {FilterNav};