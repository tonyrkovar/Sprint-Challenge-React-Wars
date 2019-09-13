import React, { useState, useEffect} from 'react';
import axios from 'axios';
import StarGrid from './StarGrid';
import styled from 'styled-components';

const ParentDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

function StarCard(){
    const [starPeople, setStarPeople] = useState([])
    useEffect(() => {
        axios
            .get('https://swapi.co/api/people')
            .then(response => {
                const results = response.data.results;
                console.log(response)
                setStarPeople(results);
                console.log('THIS IS results',results)
            })
            .catch(error => {
                console.log('Sorry, there was an error', error)
            })
    }, []);

    return (
        <ParentDiv>
            {starPeople.map((e,i) => {
                return <StarGrid 
                name={e.name}
                eye={e.eye_color}
                key={i}
                vehicles={e.vehicles}
                films={e.films}
                />
            })}


        </ParentDiv>
        
    )


}

export default StarCard;
