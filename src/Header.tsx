import React, { ReactElement } from 'react'

interface Props {
    name : string,
}

function Header({name}: Props): ReactElement {
    return (
        <div>
            header
        </div>
    )
}

export default Header
