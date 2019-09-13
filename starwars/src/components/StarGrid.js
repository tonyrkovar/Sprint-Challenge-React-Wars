import React from 'react';
import styled from 'styled-components';

const ContainAll = styled.div`
width: 33%;
 display: flex;
 flex-wrap: wrap;
 justify-content: space-around;
`;

const CardContainer = styled.div`
    width: 125px;
    height: 250px;
    background: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 20px;
    border: 2px solid grey; 
    border-radius: 10%;
`;



const CardInfo = styled.p`
    color: red;
`;

const StarGrid = (props) => {
    return(
        <ContainAll>
            <CardContainer>

                <CardInfo>{props.name}</CardInfo>
                <p>{props.name} has {props.eye} eyes, appeared in {props.films.length} films and has {props.vehicles.length} vehicles</p>
            </CardContainer>
        </ContainAll>
    )
}




export default StarGrid