import React from "react";

interface GreeterProps {
    person: string
}

function Greeter({ person }: GreeterProps) {
    return <h1>Hello, {person}!</h1>
}

export default Greeter;