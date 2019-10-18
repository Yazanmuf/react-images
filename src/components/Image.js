import React from 'react'
import ImageStyles from '../style/Image.module.css'

const Image = (props) => {
    return (
        <div className={`ui image medium rounded ${ImageStyles.main}`}>
            {/* TODO props.TEXTOFURL  */}
            <img src={props.urlRaw} />
        </div>
    )
}

export default Image;