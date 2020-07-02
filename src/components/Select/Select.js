import React from 'react';

import './Select.css';

const Select = ({data, placeholder, handleSelectChange}) => {
    return (
        <select className="select select-input" onChange={handleSelectChange}>
            <option value="">{placeholder}</option>
            {data.map(row => <option key={row} value={row}>{row}</option>)}
        </select>
    );
}

export default Select;