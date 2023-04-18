import React from 'react';
import './FilterText.css';

const FilterText = (props) => {
  return (
    <>
      <div className="search-container">
        <div className="input-container" style={{width: props.width}}>
          <input type="text" className="search-input" placeholder="Recherche par nom..." />
          <button className="search-button">Filtrer</button>
        </div>
      </div>
    </>
  );
};

FilterText.defaultProps = {
  width: '300px',
};

export default FilterText;

