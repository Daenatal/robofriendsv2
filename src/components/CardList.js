import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    // if (true) {
    //     throw new Error('Uh oh');
    // }
    const cardComponent = robots.map((user,i) => {
        return (
        <Card 
            key={i}
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email}
            />
        );
    }) //for robots.foreach()
    return (
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList;