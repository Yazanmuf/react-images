import React from 'react'

class SearchBar extends React.Component {

    state = {
        term: ''
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        // console.log("submitted", this.state.term)

        this.props.onSubmit(this.state.term)
        // this.setState({ term: '' });
    }

    // If you want to see everything as it happens
    // componentDidUpdate() {
    //     console.log(this.state.term)
    // }

    render() {
        return (
            <div className='ui segment'>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Search your image</label>
                        <input type="text" name="first-name" placeholder="What are you looking for?" value={this.state.term} onChange={(e) => { this.setState({ term: e.target.value }) }} />
                    </div>
                    <button className="ui button" type="submit" >Submit</button>
                </form >
            </div>

        )
    }
}

export default SearchBar;