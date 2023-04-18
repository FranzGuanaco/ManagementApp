import React from 'react';
import PropTypes from 'prop-types';
import './Filter.css'

const FilterButton = ({ Name, options, backgroundColor, color, borderRadius, boxShadow, width }) => {
  const [showOptions, setShowOptions] = React.useState(false);

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="Filter">
      <button
        className="dropbtn"
        style={{
          backgroundColor: backgroundColor,
          color: color,
          borderRadius: borderRadius,
          width: width
        }}
        onClick={handleToggleOptions}
      >
        {Name}
      </button>
      {showOptions && (
        <div
          className="dropdown-content"
          style={{
            borderRadius: borderRadius,
            boxShadow: boxShadow
          }}
        >
          {options.map((option, index) => (
            <a key={index} href="#">
              {option}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

FilterButton.defaultProps = {
    options: [],
    Name: 'Search',
    color: 'white',
    borderRadius: '10px',
    width: '200px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)'
  };
  

FilterButton.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  borderRadius: PropTypes.string,
  boxShadow: PropTypes.string
};

export default FilterButton;
