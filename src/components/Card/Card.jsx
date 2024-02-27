import './Card.css';

function Card({card}) {
  return (
    <div className="card">
      <h3 className="cardTitle">{card.name}</h3>
      <div className="cardInfoContainer">
        <div className="cardAboutContainer">
          <p className="cardParagraph"><span className="cardSpan">Технологии: </span>{card.techs}</p>
          <p className="cardParagraph"><span className="cardSpan">Описание: </span>{card.about}</p>
          <p className="cardParagraph"><span className="cardSpan">Примечание: </span>{card.note}</p>
        </div>
        <a href={card.link} target="_blank" rel="noreferrer" className="cardLink">
          <img className="previewImage" src={card.preview} alt={`Скриншот проекта: ${card.name}`}></img>
        </a>
      </div>
      <div className="cardLinkContainer">
        Сайт: &nbsp;
        <a href={card.link} target="_blank" rel="noreferrer" className="cardLink">
          {card.link}
        </a>
      </div>
      <div className="cardLinkContainer">
        GitHub: &nbsp;
        {
          typeof card.gitHubLink === 'string'
            ? <a href={card.gitHubLink} target="_blank" rel="noreferrer" className="cardLink">
                {card.gitHubLink}
              </a>
            : <div className="">
              {card.gitHubLink.map((item) =>
               (
                <div className="cardLinkContainer">
                  {item.name + ': '}
                  <a id={item.id} href={item.link} target="_blank" rel="noreferrer" className="cardLink">
                    {item.link}
                  </a>
                </div>)
                )
              }
              </div>
        }
      </div>
    </div>
  );
}

export default Card;
