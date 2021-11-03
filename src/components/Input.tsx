import React, { ReactElement } from 'react'

interface Props {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    value: string
    
}

export default function Input(props: Props): ReactElement {
    return (
        <div>
            <input type="text" value={props.value} onChange={props.handleChange}/>
        </div>
    )
}
