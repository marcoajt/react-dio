import React from 'react'

function Index({children}) {
    return (
        <div>
            <a href="/" className="list-group-item list-group-item-action list-group-item-danger">
            {children}</a>
        </div>
    )
}

export default Index



