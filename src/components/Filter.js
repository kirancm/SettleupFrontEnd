import React from 'react'

const members = [
	"kiran",
	"santhosh"
] 
const Filter = ({member,onChange}) => (
    <select>
        {members.map((member,key) => (
            <option key={key} onChange={onChange}>{member}</option>
        ))}
    </select>
)

export default Filter;