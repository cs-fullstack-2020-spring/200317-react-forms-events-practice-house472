import React, { Component } from 'react'
class LiveAttheLondonPalladium extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div class="live" >
                <div id="live_image">
                    <h1>Number 5 Album!</h1>
                    <img  src="https://upload.wikimedia.org/wikipedia/en/thumb/8/84/Gaye_live.jpg/220px-Gaye_live.jpg" alt="" />
                    </div>


                <div id="live_bio">
                    <p>The best live example of his work! A great display of his vocal depth! But the most important thing about this album is the hit song "Got To Give It Up". You can hear it playing now can't you?</p>
                </div>




            </div>
        );
    }
}

export default LiveAttheLondonPalladium;