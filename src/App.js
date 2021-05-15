import './App.css';
import Sides from './Sides';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Letter Boxed Solver</h1>
        <span>Solve the New York Times <a href='https://www.nytimes.com/puzzles/letter-boxed'>Letter Boxed</a> Puzzle</span>
      </header>
      <main>
        <Sides /> 
      </main>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
