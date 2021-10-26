import React from 'react';

const Card = ({ name, email, id }) => {
    //const { name, email, id } = props;
    return(
        <div className='bg-light-green w20 dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200&set=set4`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;