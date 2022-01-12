import React from 'react'

const DynoLabel = ({ children }) => {
    return children && (
        <React.Fragment>
            {React.Children.map(children, child => React.cloneElement(child, {
                
            }))}
        </React.Fragment>
    )
}


export default DynoLabel;