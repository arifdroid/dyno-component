import React, { useState } from 'react'

export default function ButtonComponent(props) {
    const [counter, setCounter] = useState(0);
    return (
        <div
            style={{ color: props.color, textDecoration: props.underline }}
            onClick={() => { setCounter(val => val + props.increment) }}
        >
            I am a button {counter}
        </div>
    )
}
