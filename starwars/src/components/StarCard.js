import React, { useState, useEffect} from 'react';
import axios from 'axios';
import StarGrid from './StarGrid';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';


const ParentDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

function StarCard(){
    const [starPeople, setStarPeople] = useState([])
    const [whichPage, setWhichPage] = useState(1)
    // function toggleUp(e){
    //     return (setWhichPage(whichPage +1))
    // }
    // function toggleDown(e){
    //     return (e - 1)
    // }

    const toggleUp = e => {
        setWhichPage(whichPage + 1)
    };

    const toggleDown = e => {
        setWhichPage(whichPage - 1)
    };


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
        <Pagination aria-label="Page navigation example">
      <PaginationItem>
          <PaginationLink first href={"https://swapi.co/api/people/?page=2" } />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink first href="https://swapi.co/api/people/?page=2" />
        </PaginationItem>
        </Pagination>
        </>
    )


}

export default StarCard;
