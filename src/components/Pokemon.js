const Pokemon = (props) => {
  const itemTypes = props.dataItem.types.map((type, index) => {
    return (
      <li key={index} className=''>
        {type}
      </li>
    );
  });
  return (
    <article className='main__list-item'>
      <img src={props.dataItem.url} alt={props.dataItem.name} />
      <h2 className='main__list-title'>{props.dataItem.name}</h2>
      <ul className='main__list-types'>{itemTypes}</ul>
    </article>
  );
};

Pokemon.defaultProps = {
  types: 'No pertenece a ningún tipo',
};

export default Pokemon;
