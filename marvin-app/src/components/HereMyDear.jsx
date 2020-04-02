import React, { Component } from 'react'
class HereMyDear extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div >
                <h1>Number 1 Album!</h1>
                <img id="here_image" src="https://2.bp.blogspot.com/-XBs0wSn_Doc/WpcmA6xLHlI/AAAAAAAAZH8/SkSSk9emaA4-ieUyxa_p4S6iDPAPYVk3ACLcBGAs/s320/CS610455-01A-BIG.jpg" alt="" />

                <div id="myDear" >
                    <p>This Album was created as part of his divorce settlement from Anna Gordy, daughter of Berry Gordy. As part of the settlement, Gaye was to give half of the royalties from his next recording to Anna. </p>
                    <p>Initially, he planned to record something quick, with little thought to artistry. But as the reality of what he was doing became clear he realized he had to record what what on his mind and in his heart. The result, while panned by critics and the public at its release, has in time become recognized as his best recording. </p>
                    <p>One piece of advice. While listening to this recording do two things: 1). Listen through quality headphones, and 2). Pay VERY close attention to the background lyrics!</p>
                    </div>
            </div>
        );
    }
}

export default HereMyDear;