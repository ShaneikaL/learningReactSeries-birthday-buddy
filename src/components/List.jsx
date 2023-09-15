import React from 'react';
import Person from './Person.jsx';

const List = ({people}) => {
    return (
        <div>
            {people.map((person)=>{
                return <Person key={person.id} {...person} />
            })}
        </div>
    );
};

export default List;