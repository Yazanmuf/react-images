import React from 'react'

const Image = (props) => {
    return (
        <div className='ui image medium rounded'>
            {/* TODO props.TEXTOFURL  */}
            <img src={props.urlRaw} />
        </div>
    )
}

export default Image;