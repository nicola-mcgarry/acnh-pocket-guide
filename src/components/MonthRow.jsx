import React from 'react';
import PropTypes from 'prop-types';
const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

const MonthRow = ({ label, values }) => {

    if (!values) {
        return <tr><td colSpan={months.length + 1}>Data unavailable</td></tr>;
    }

    return (
        <tr>
        <td style={{ paddingRight: '10px', fontWeight: '500' }}>{label}</td>
        {values.map((value, index) => (
          <td key={index} style={{ color: value ? '#0cc6b8' : 'lightgray', fontWeight:'500' }}>
            {months[index]}
          </td>
        ))}
      </tr>
    );
};

MonthRow.propTypes = {
    label: PropTypes.string.isRequired,
    values: PropTypes.arrayOf(PropTypes.number).isRequired,
  };

export default MonthRow;