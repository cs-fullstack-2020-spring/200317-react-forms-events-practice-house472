import React, {Component} from 'react'
class BlogDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div class= "blogDisplay">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Marvinhere-my-dear.jpg/220px-Marvinhere-my-dear.jpg" alt=""/>
                    {
                        this.props.albumArray.map((album, index) => {
                            return (
                                <div key ={index}>
                                    <p>Album Rank {album.albumRank} </p>
                                    <p>Album Title {album.albumTitle} </p>
                                    <p>Album Release Date {album.releaseDate} </p>
                                    <p>Album Review {album.albumReview} </p>
                                </div>
                            )
                        }
                        )
                    }
                   

                </div>
            </div>
         );
    }
}
 
export default BlogDisplay;