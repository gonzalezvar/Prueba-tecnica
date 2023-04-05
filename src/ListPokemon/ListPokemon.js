import './ListPokemon.css';
import {useState} from "react"
import { useEffect } from 'react';
import { CardPokemon } from '../CardPokemon/CardPokemon';

function ListPokemon({list,setlist,getData}) {
    

    useEffect(() => {
      getData();
    }, [])

      console.log(list)

    return (
       <div className="container">{list.map(x=>(
        <CardPokemon
        name={x.name}
        image={x.image}
        abilities={x.abilities}
        ></CardPokemon>
       ))}</div>
    );
}

export { ListPokemon };
