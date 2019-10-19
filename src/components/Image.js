import React from 'react'


class Image extends React.Component {

    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
    }
    // remember if you want to acces props from within a class component must use this

    componentDidMount() {
        // html and javascript event listener.
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () => {
        return (
            console.log(this.imageRef.current.clientHeight)
        )
    }

    render() {
        const { alt_description, urls } = this.props.image
        // console.log(this.props)
        return (
            <div className={`ui image medium rounded `}>
                {/* TODO props.TEXTOFURL 
                TODO destructure the constants from props passed into here  */}
                < img ref={this.imageRef} src={urls.raw} alt={alt_description} />

                {/* Calculate image length */}

            </div >
        )
    }
}

export default Image;