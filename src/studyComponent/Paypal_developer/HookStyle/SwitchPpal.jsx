import React, { useContext, useState } from 'react'
import { Switch } from './Switch'


// compound styling component
// this pattern enable user to render however they like , without having to learn extra API to render the props
// this pattern expose the state of the component statically
// hook, functional


const Toggle = () => {
    const [on, setOn] = useState(false)

    // return(
    //     <ToggleContext.
    // )
}




function Usage({
    onToggle = (...args) => console.log('onToggle', ...args)
}) {
    return (
        <Toggle onToggle={onToggle}>
            <Toggle.Button />
            <Toggle.On >The button is On</Toggle.On>
            <Toggle.Off >The button is Off</Toggle.Off>
        </Toggle>


    )
}


export default Usage;