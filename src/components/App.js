import React from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import Image from './Image'



// Refactoring into a class based component so that we can pass down a callback function
// to SearchBar to be invoked at the time it will be called. 


class App extends React.Component {
    state = { images: [] };

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
                {this.state.images.map(image => {
                    console.log(image)
                    return (<Image urlRaw={image.urls.raw} key={image.id} />)
                })}
            </>
        )
    }

};

// const App = () => {
//     return (
//         <div>
//             <SearchBar />
//         </div>
//     )
// }

export default App;