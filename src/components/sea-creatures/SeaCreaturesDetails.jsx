import React from 'react';
import MonthRow from '../MonthRow';
import Bells from '../../../public/assets/Bells.png';
const SeaCreaturesDetails = ({ data }) => {
    return (
        <tr scope="row" className="text-center">
            <td >{data.displayId}</td>
            <td>{data.name}</td>
            <td><img src={data.icon} alt={data.Name} style={{ width: 50, height: 50 }} /></td>
            <td><img src={Bells} alt="Bells" className="pb-2" style={{width: 50}}></img>{data.sellPrice} Bells</td>
            <td>{data.shadowSize}</td>
            <td>{data.shadowMovement}</td>
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

export default SeaCreaturesDetails;