import React from 'react';

const MonthRow = ({ label, values }) => {
    const monthNames = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];

    if (!values) {
        return <tr><td colSpan={monthNames.length + 1}>Data unavailable</td></tr>;
    }

    return (
        <tr>
            <td>{label}</td>
            {values.map((value, index) => (
                <td key={index} style={{ textAlign: 'center', color: value ? 'black' : '#d3d3d3' }}>
                    {monthNames[index]}
                </td>
            ))}
        </tr>
    );
};

export default MonthRow;