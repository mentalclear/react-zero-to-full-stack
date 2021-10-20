import React from "react";
import { PeopleList } from "../PeopleList";


const people = [{
    "name": "John",
    "age": 35,
    "hairColor": "brown"
}, {
    "name": "Joe",
    "age": 20,
    "hairColor": "blonde"
}, {
    "name": "Jane",
    "age": 40,
    "hairColor": "red"
}]

export const PeopleListPage = () => {
    return (
        <>
            <h1> The People list page</h1>
            <PeopleList people={people} />
        </>
    )
}