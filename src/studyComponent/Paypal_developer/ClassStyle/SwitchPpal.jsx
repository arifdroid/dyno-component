import React, { Component, useState } from 'react'
import { Switch } from './Switch'


// compound styling component
// this pattern enable user to render however they like , without having to learn extra API to render the props
// this pattern expose the state of the component statically

class Toggle extends Component {

    static On = ({ on, children }) => (on ? children : null)
    static Off = ({ on, children }) => (on ? null : children)
    static Button = ({ on, toggle, ...props }) => (
        <Switch on={on} onClick={toggle} {...props} />
    )

    state = {
        on: false,
    }

    toggle = () => this.setState(
        ({ on }) => ({ on: !on }),
        () => this.props.onToggle(this.state.on)
    )

    render() {
        return React.Children.map(this.props.children, childElement => (
            React.cloneElement(childElement, {
                on: this.state.on,
                toggle: this.toggle
            })
        ))
    }

}

function Usage({
    onToggle = (...args) => console.log('onToggle', ...args)
}) {
    return (
        <Toggle onToggle={onToggle}>
            <Toggle.Button/>
            <Toggle.On >The button is On</Toggle.On>
            <Toggle.Off >The button is Off</Toggle.Off>
        </Toggle>
        

    )
}


export default Usage;