import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import Image from './Image'



// Refactoring into a class based component so that we can pass down a callback function
// to SearchBar to be invoked at the time it will be called. 


class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (value) => {

        const promise = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: value },
            headers: {
                Authorization: 'Client-ID 3c4b3d92c230741ad63101de58fab2126e86e6a4fa4da7aafbca9e2fed94f97b'
            }
        });


        this.setState({ images: promise.data.results });
        console.log('state', this.state)

    };

    onComponentdidUpdate() {
        console.log(this.state)
    }


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