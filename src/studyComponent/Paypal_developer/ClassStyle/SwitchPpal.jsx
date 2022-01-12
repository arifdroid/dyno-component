import React, { Component, createContext, useState } from 'react'
import { Switch } from './Switch'


// compound styling component
// this pattern enable user to render however they like , without having to learn extra API to render the props
// this pattern expose the state of the component statically

const ToggleContext = createContext();

class Toggle extends Component {

    constructor(props) {
        super(props)
    }

    // static On = ({ on, children }) => (on ? children : null) // rather than accept as props, we need to consume it 

    static On = ({ children }) => (
        <ToggleContext.Consumer>
            {contextValue => (contextValue.on ? children : null)}
        </ToggleContext.Consumer>
    )

    static Off = ({ children }) => (
        <ToggleContext.Consumer>
            {contextValue => contextValue.on ? null : children}
        </ToggleContext.Consumer>
    )

    static Button = (props) => (
        <ToggleContext.Consumer>
            {contextValue => <Switch
                on={contextValue.on}
                onClick={contextValue.toggle}
                {...props}
            ></Switch>}
        </ToggleContext.Consumer>
    )

    state = {
        on: false,
    }

    toggle = () => this.setState(
        ({ on }) => ({ on: !on }),
        () => this.props.onToggle(this.state.on)
    )

    render() {
        return <ToggleContext.Provider
            value={{
                on: this.state.on,
                toggle: this.toggle
            }}
        >{this.props.children}
        </ToggleContext.Provider>

        // return React.Children.map(this.props.children, childElement => (
        //     React.cloneElement(childElement, {
        //         on: this.state.on,
        //         toggle: this.toggle
        //     })
        // ))
    }

}

function Usage({
    onToggle = (...args) => console.log('onToggle', ...args)
}, props) {
    return (
        <Toggle onToggle={onToggle} style={{ marginLeft: 100 }} >
            <Toggle.Button />
            {/* <Toggle.On >The button is On</Toggle.On>
            <Toggle.Off >The button is Off</Toggle.Off> */}
        </Toggle>
    )
}


export default Usage;