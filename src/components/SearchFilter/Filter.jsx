import React from 'react';
import PropTypes from "prop-types";
import { Label, Input } from './Filter.style';


const Filter = ({value, onChange}) => {

  return (
    <Label>
      Find contacts by name
      <Input type='text'
        value={value}
        onChange={onChange}

      />
    </Label>

  );

};

// ContactList.propTypes = {

//     good: PropTypes.number.isRequired,
//     neutral: PropTypes.number.isRequired,
//     bad: PropTypes.number.isRequired,
//   total: PropTypes.number.isRequired,
//   positivePercentage: PropTypes.number.isRequired,
// }

  export default Filter;
