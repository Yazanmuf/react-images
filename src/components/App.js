import React from 'react'
import './App.css'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import Image from './Image'



// Refactoring into a class based component so that we can pass down a callback function
// to SearchBar to be invoked at the time it will be called. 


class App extends React.Component {
    state = { images: [] };

    // TODO create a seperate function that extracts out all the api requests from the <App> component
    onSearchSubmit = async (value) => {

        const promise = await unsplash.get('/search/photos', {
            params: { query: value },
        });


        this.setState({ images: promise.data.results });
        console.log('state', this.state)

    };

    // onComponentdidUpdate() {
    //     console.log(this.state)
    // }


    render() {

        return (
            <>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <div className='grid-list'>
                    {this.state.images.map(image => {

                        return (<Image image={image} key={image.id} />)
                    })}
                </div>
            </>
        )
    }

};

export default App;