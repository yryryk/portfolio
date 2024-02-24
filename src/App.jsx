import './App.css';
import About from './components/About/About';
import Cards from './components/Cards/Cards';
import projects from './constants/projects';

function App() {
  return (
    <div className="App">
      <header className="header">
      </header>
      <main className="main">
        <About />
        <section className="projects">
          <Cards cards={projects.petProjects} title={'Пет Проекты'} />
          <Cards cards={projects.petProjects} title={'Учебные Проекты'} />
        </section>
      </main>
      <footer className="footer">
      </footer>
    </div>
  );
}

export default App;
