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
            LiveAttheLondonPalladium: false

        }
    }
    hereDear = () => {
        this.setState({ HereMyDear: true })
        this.setState({ InOurLifetime: false })
        this.setState({ IWantYou: false})
        this.setState({ TroubleMan: false})
        this.setState({ LiveAttheLondonPalladium: false })


    }
    ourLifetime = () => {
        this.setState({ InOurLifetime: true })
        this.setState({ HereMyDear: false })
        this.setState({ IWantYou: false})
        this.setState({ TroubleMan: false})
        this.setState({ LiveAttheLondonPalladium: false })
    }
    Iwant = () => {
        this.setState({ HereMyDear: false })
        this.setState({ InOurLifetime: false })
        this.setState({ IWantYou: true})
        this.setState({ TroubleMan: false})
        this.setState({ LiveAttheLondonPalladium: false})
    }
    Trouble = () => {
        this.setState({ InOurLifetime: false })
        this.setState({ HereMyDear: false })
        this.setState({ IWantYou: false})
        this.setState({ TroubleMan: true})
        this.setState({ LiveAttheLondonPalladium: false })
    }
    London = () => {
        this.setState({ InOurLifetime: false })
        this.setState({ HereMyDear: false })
        this.setState({ IWantYou: false})
        this.setState({ TroubleMan: false})
        this.setState({ LiveAttheLondonPalladium: true })
    }
    render() {
        let bestAlbum;
        if(this.state.HereMyDear) {
            bestAlbum =<HereMyDear />
        }else if (this.state.InOurLifetime) {
            bestAlbum = <InOurLifetime />
        }else if(this.state.IWantYou) {
            bestAlbum =<IWantYou />
        }else if (this.state.TroubleMan) {
            bestAlbum = <TroubleMan />
        }else if (this.state.London) {
            bestAlbum = <LiveAttheLondonPalladium />
        }
        
        
        
        
        
        
        
        
        
        
        return (
            <div>
                <header>Marvin Gaye's Best Albums</header>
               <button onClick = {this.hereDear}>Album #1</button> 
               <button onClick = {this.ourLifetime}>Album #2</button> 
               <button onClick = {this.Iwant}>Album #3</button> 
               <button onClick = {this.Trouble}>Album #4</button> 
               <button onClick = {this.London}>Album #5</button> 
               
              
              
              
               {bestAlbum}

            </div>
        );
    }
}

export default AlbumContainer;