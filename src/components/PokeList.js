import '../stylesheets/PokeList.css';
import Pokemon from './Pokemon';

const PokeList = (props) => {
  console.log(props.data);
  const item = props.data.map((dataItem, i) => {
    return (
      <li key={i} className='main__list-items'>
        <Pokemon dataItem={dataItem} />
      </li>
    );
  });
  return (
    <div>
      <ul className='main__list'>{item}</ul>
    </div>
  );
};

export default PokeList;
