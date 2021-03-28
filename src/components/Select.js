import React, { useState } from 'react';
const Select = ({items}) => {
    let region = items.map((reg) => {
        return reg.region;
    });
    console.log(region)
    const [r] = useState(region)
            const Add = r.map(Add => Add
            )
            const handleAddrTypeChange = (e) => console.log((r[e.target.value]))

    return (
        <>
            <select
                onChange={e => handleAddrTypeChange(e)}
                className="browser-default custom-select">
                {
                    Add.map((address, key) => <option value={key}>{address}</option>)
                }
            </select>  
        </>
    )
}

export default Select
