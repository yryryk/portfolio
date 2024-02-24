import './Cards.css';
import Card from '../Card/Card'

function Cards({cards}) {
  return (
    <div className="cards">
      {cards[0]&&cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
}

export default Cards;
