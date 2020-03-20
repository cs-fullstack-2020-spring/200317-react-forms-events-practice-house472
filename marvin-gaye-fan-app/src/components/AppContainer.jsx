import React, { Component } from 'react'
import MarvinsBlog from './MarvinsBlog'
import BlogDisplay from './BlogDisplay'
class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albumArray: []
        }
    }
    //TODO CALLBACK FUNCTION
    updateAlbumArray = (album) => {
        
        this.state.albumArray.push(album)
        this.setState({albumArray :this.state.albumArray})
        
    }
    
    render() {
        return (
            <div>
                <h1>Marvin Gaye Fanpage</h1>
                <MarvinsBlog  updateAlbumArray ={this.updateAlbumArray}                                />
                <BlogDisplay   albumArray = {this.state.albumArray}         />
            </div>
        );
    }
}

export default AppContainer;