import React from 'react';
import MonthRow from '../MonthRow';
import Bells from '../../../public/assets/Bells.png';
const FishDetails = ({ data }) => {
    return (
        <tr scope="row" className="text-center">
            <td >{data.displayId}</td>
            <td>{data.name}</td>
            <td><img src={data.icon} alt={data.name} style={{ width: 50, height: 50 }} /></td>
            <td><img src={Bells} alt="Bells" className="pb-2" style={{width: 50}}></img>{data.sellPrice} Bells</td>
            <td><img src={data.shadowSize} alt={data.name} style={{ width: 50, height: 50 }} /></td>
            <td>{data.location}</td>
            <td>{data.time}</td>
            <td>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <tbody>
                        {data.north && <MonthRow label="North:" values={data.north} />}
                        {data.south && <MonthRow label="South:" values={data.south} />}
                    </tbody>
                </table>
            </td>
        </tr>
    );
};

export default FishDetails;