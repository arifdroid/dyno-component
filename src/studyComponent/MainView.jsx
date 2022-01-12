import React from 'react'
import ButtonComponent from './ButtonComponent'
import Usage from './Paypal_developer/ClassStyle/SwitchPpal'



export default function MainView() {

    const props = {
        increment: 2,
        underline: true,
        color: 'black'
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>

            {/* Lesson 1 */}

            <ButtonComponent increment={2} underline={true} color={'green'} />
            <ButtonComponent increment={2} underline={true} color={'blue'} />
            <ButtonComponent increment={2} underline={true} color={'red'} />
            {/* since we are passing the same value we could group that in single props */}
            <div style={{ margin: 20 }}></div>

            <ButtonComponent {...props} color={'green'} />
            <ButtonComponent {...props} color={'blue'} />
            <ButtonComponent {...props} color={'red'} />

            {/* this works because JSX code -> React.createElement('Button',{
                prop1:'100'
            })

            like we write <Button prop1=100/>
             */}

            <div style={{ margin: 20 }}></div>
            <ButtonComponent color={'red'} {...props} />
            {/* prop at the back will override 
            the initial prop we set */}

            {/* Lesson 2 */}

            <div style={{ margin: 20 }}></div>
            {/* Lesson Paypal */}

            <Usage />

        </div>
    )
}
