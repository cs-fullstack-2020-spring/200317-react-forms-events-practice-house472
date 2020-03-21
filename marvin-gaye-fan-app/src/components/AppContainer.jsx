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
    //FIXED 3/20
    //TODO WORK ON CSS STYLING AND COMPLETE WIREFRAME
    updateAlbumArray = (album) => {
        
        this.state.albumArray.push(album)
        this.setState({albumArray :this.state.albumArray})
        
    }
    
    render() {
        return (
            <div id ="container">
                <h1>Marvin Gaye Fanpage</h1>
                
                <BlogDisplay   albumArray = {this.state.albumArray}         />
                <MarvinsBlog  updateAlbumArray ={this.updateAlbumArray}                                />
                
            </div>
        );
    }
}

export default AppContainer;