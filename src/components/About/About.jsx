import './About.css';
import Picture from '../../images/1234.jpg';

function About() {
  return (
    <section className="about">
      <div className="aboutContainer">
        <img className="aboutPicture" src={Picture} alt="Фото"></img>
        <div className="aboutInfo">
          <h1 className="aboutTitle">Александр Товченников</h1>
          <p className="aboutSubtitle">Веб-разработчик.</p>
          <div className="aboutLinkContainer">
            <p className="aboutLinkParagraph">Github: <a href="https://github.com/yryryk" target="_blank" rel="noreferrer" className="aboutLink">https://github.com/yryryk</a></p>
            <p className="aboutLinkParagraph">Email: <a href="mailto:kpotopbi6@gmail.com" target="_blank" rel="noreferrer" className="aboutLink">kpotopbi6@gmail.com</a></p>
            <p className="aboutLinkParagraph">Tg: <a href="https://t.me/noJIb30BaTeJIb" target="_blank" rel="noreferrer" className="aboutLink">https://t.me/noJIb30BaTeJIb</a></p>
            <p className="aboutLinkParagraph">Portfolio: <a href="https://www.extra-develop.ru/" target="_blank" rel="noreferrer" className="aboutLink">https://www.extra-develop.ru</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

