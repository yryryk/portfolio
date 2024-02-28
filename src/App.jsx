import './App.css';
import About from './components/About/About';
import Cards from './components/Cards/Cards';
import projects from './constants/projects';

function App() {
  return (
    <div className="App">
      <header className="header">
        ПОРТФОЛИО
      </header>
      <main className="main">
        <About />
        <section className="projects">
          <Cards cards={projects.petProjects} title={'Пет Проекты'} />
          <Cards cards={projects.educationalProjects} title={'Учебные Проекты'} />
        </section>
      </main>
      <footer className="footer">
        <span>&copy; {(new Date()).getFullYear()}</span>
      </footer>
    </div>
  );
}

export default App;
