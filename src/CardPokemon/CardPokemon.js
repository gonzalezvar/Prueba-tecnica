import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardPokemon({name,image,abilities}) {
 console.log(abilities);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        {abilities.map(x=>(
          <p>Habilidad: {x.ability.name}</p>
        ))}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export { CardPokemon};