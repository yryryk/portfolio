import './Cards.css';
import Card from '../Card/Card'

function Cards({cards, title}) {
  return (
    <div className="cards">
      <h2 className="cardsTitle">{title}</h2>
      {cards[0]&&cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
}

export default Cards;
