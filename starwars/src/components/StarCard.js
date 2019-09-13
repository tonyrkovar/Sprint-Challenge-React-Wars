import React, { useState, useEffect} from 'react';
import axios from 'axios';
import StarGrid from './StarGrid';
import styled from 'styled-components';
import { Button } from 'reactstrap';


const ParentDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

function StarCard(){
    const [starPeople, setStarPeople] = useState([])
    const [whichPage, setWhichPage] = useState(1)
    function toggleUp(){
        return (setWhichPage(whichPage +1))
    }
    function toggleDown(){
        return (setWhichPage - 1)
    }

    // const toggleUp = e => {
    //     setWhichPage(whichPage + 1)
    // };

    // const toggleDown = e => {
    //     setWhichPage(whichPage - 1)
    // };


    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people/?page=${whichPage}`)
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
        <>
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
        <Button color='danger' onClick={toggleDown}>Last Page</Button>{''}
      <Button color='danger' onClick={toggleUp}>Next Page</Button>{''}
        </>
    )


}

export default StarCard;
