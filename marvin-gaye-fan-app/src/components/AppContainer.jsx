import React, { Component } from 'react'
import MarvinsBlog from './MarvinsBlog'
import BlogDisplay from './BlogDisplay'
class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    //TODO CALLBACK FUNCTION
    render() {
        return (
            <div>
                <h1>Marvin Gaye Fanpage</h1>
                <MarvinsBlog/>
                <BlogDisplay/>
            </div>
        );
    }
}

export default AppContainer;