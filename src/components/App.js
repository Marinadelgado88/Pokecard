import '../stylesheets/App.css';
import PokeList from './PokeList';
import data from '../data/data.json';

function App() {
  return (
    <>
      <h2 className='header'>Mi lista de Pokemon</h2>
      <PokeList data={data} />;
    </>
  );
}

export default App;
