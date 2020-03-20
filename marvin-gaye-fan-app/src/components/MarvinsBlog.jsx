import React, { Component } from 'react'
class MarvinsBlog
    extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albumRank: 0,
            albumTitle: "",
            releaseDate: "",
            albumReview: "",


        }
    };
    handleSubmission = (event) => {
        event.preventDefault();
        // console.log(this.state)
        this.props.updateAlbumArray(this.state)
        
        // console.log(this.props.updateAlbumArray[0])
        this.setState({
            albumRank: 0,
            albumTitle: "",
            releaseDate: "",
            albumReview: "",

        })
        
    }
    handleInputchange = (event) => {
        if (event.target.name == "albumRank") {
            this.setState({ albumRank: event.target.value })
        } else if (event.target.name == "albumTitle") {
            this.setState({ albumTitle: event.target.value })
        } else if (event.target.name == "releaseDate") {
            this.setState({ releaseDate: event.target.value })
        } else if (event.target.name == "albumReview") {
            this.setState({ albumReview: event.target.value })
        }

    }
    render() {
        return (
            <div class = "formDisplay">
                <form action="">
                    <fieldset>
                        <legend>Marvin Gaye's Best Albums</legend>
                        <label htmlFor="">Album Rank</label>
                        <input type="number" name="albumRank" id="albumRank" value={this.state.albumRank} onChange={this.handleInputchange} />

                        <label htmlFor="">Album Title</label>
                        <input type="text" name="albumTitle" id="albumTitle" value={this.state.albumTitle} onChange={this.handleInputchange} />

                        <label htmlFor="">Release Date</label>
                        <input type="date" name="releaseDate" id="releaseDate" value={this.state.releaseDate} onChange={this.handleInputchange} />

                        <label htmlFor="">Album Review</label>
                        <input type="text" name="albumReview" id="albumReview" value={this.state.albumReview} onChange={this.handleInputchange} />

                        <button onClick={this.handleSubmission}>Submit</button>


                    </fieldset>
                </form>
                {/* //TODO MAP FUNCTION */}
                




            </div>
        );
    }
}

export default MarvinsBlog;
;