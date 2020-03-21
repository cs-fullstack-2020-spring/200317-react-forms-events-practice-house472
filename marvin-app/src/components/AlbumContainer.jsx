import React, { Component } from 'react'
import HereMyDear from './HereMyDear'
import InOurLifetime from './InOurLifetime'
import IWantYou from './IWantYou'
import TroubleMan from './TroubleMan'
import LiveAttheLondonPalladium from './LiveAttheLondonPalladium'


class AlbumContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            HereMyDear: false,
            InOurLifetime: false,
            IWantYou: false,
            TroubleMan: false,
            LiveAttheLondonPalladium: false,
            
            
        }
    }
   
    hereDear = () => {
        this.setState({ HereMyDear: true })
        this.setState({ InOurLifetime: false })
        this.setState({ IWantYou: false })
        this.setState({ TroubleMan: false })
        this.setState({ LiveAttheLondonPalladium: false })
        


    }
    ourLifetime = () => {
        this.setState({ InOurLifetime: true })
        this.setState({ HereMyDear: false })
        this.setState({ IWantYou: false })
        this.setState({ TroubleMan: false })
        this.setState({ LiveAttheLondonPalladium: false })
        
    }
    Iwant = () => {
        this.setState({ HereMyDear: false })
        this.setState({ InOurLifetime: false })
        this.setState({ IWantYou: true })
        this.setState({ TroubleMan: false })
        this.setState({ LiveAttheLondonPalladium: false })
        
    }
    Trouble = () => {
        this.setState({ InOurLifetime: false })
        this.setState({ HereMyDear: false })
        this.setState({ IWantYou: false })
        this.setState({ TroubleMan: true })
        this.setState({ LiveAttheLondonPalladium: false })
        
    }
    London = () => {
        this.setState({ InOurLifetime: false })
        this.setState({ HereMyDear: false })
        this.setState({ IWantYou: false })
        this.setState({ TroubleMan: false })
        this.setState({ LiveAttheLondonPalladium: true })
        
    }
    
    render() {
        let bestAlbum;
        if (this.state.HereMyDear) {
            bestAlbum = <HereMyDear />
        } else if (this.state.InOurLifetime) {
            bestAlbum = <InOurLifetime />
        } else if (this.state.IWantYou) {
            bestAlbum = <IWantYou />
        } else if (this.state.TroubleMan) {
            bestAlbum = <TroubleMan />
        } else if (this.state.LiveAttheLondonPalladium) {
            bestAlbum = <LiveAttheLondonPalladium />
        }
        
        return (
            <div id="albumContainer">
                
                
               

                <div class="header">
                <header >Marvin Gaye's Best Albums</header>
                <div >
                <p>Click Below to Learn About His Top 5 Albums!</p>
                    <button onClick={this.hereDear}>Album #1</button>
                    <button onClick={this.ourLifetime}>Album #2</button>
                    <button onClick={this.Iwant}>Album #3</button>
                    <button onClick={this.Trouble}>Album #4</button>
                    <button onClick={this.London} >Album #5</button>
                   
                </div>

                </div>
               
                <div id="image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7XsO66wVCy-jmD_zR2eDMbutzoHpjycJA4dGagxDxYGThZbl2" alt="" />
                    </div>
                    <div id ="image_two">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTVDjEFvn9j39_RpUdZqmdxKynBPU7T5JQvD074p99pZ-s9B9CX" alt="" />
                    </div>


                <div id="bio">
                    <p>Marvin Gaye (born Marvin Pentz Gay Jr.; April 2, 1939 – April 1, 1984)[1] was an American singer, songwriter, and record producer. He helped to shape the sound of Motown in the 1960s, first as an in-house session player and later as a solo artist with a string of hits, earning him the nicknames "Prince of Motown" and "Prince of Soul".</p>
                     </div>
                {/* <div id= "bio_two">
                    <p>Gaye's Motown hits include "Ain't That Peculiar", "How Sweet It Is (To Be Loved By You)", and "I Heard It Through the Grapevine", and duet recordings with Mary Wells, Kim Weston, Diana Ross, and Tammi Terrell. During the 1970s, he recorded the albums What's Going On and Let's Get It On and became one of the first artists in Motown, along with Stevie Wonder, to break away from the reins of a production company. </p>
                     </div>

                <div id="bio_three" >
                    <p> On April 1, 1984, the day before his 45th birthday, Gaye's father, Marvin Gay Sr., fatally shot him at their house in the West Adams district of Los Angeles.[5][6] Many institutions have posthumously bestowed Gaye with awards and other honors including the Grammy Lifetime Achievement Award, and inductions into the Rhythm and Blues Music Hall of Fame, the Songwriters Hall of Fame, and the Rock and Roll Hall of Fame.[7]</p>
                    </div> */}
                

                



                {bestAlbum}

            </div>
        );
    }
}

export default AlbumContainer;