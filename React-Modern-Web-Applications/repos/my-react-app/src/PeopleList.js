import React from "react";
import { PeopleListItem } from "./PeopleListItem";
import styled from 'styled-components';

// Warpper added to use styled components. Another
// way to add CSS to the project
const Wrapper = styled.div`
    border: 2px solid white;
    padding: 32px;
`;

export const PeopleList = ({ people }) => (
    <Wrapper>
        {people.map(person => <PeopleListItem person={person} key={person.name} />)}
    </Wrapper>
);
