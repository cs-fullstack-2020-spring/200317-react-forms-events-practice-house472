import React, { Component } from 'react'
import HereMyDear from './HereMyDear'
import InOurLifetime from './InOurLifetime'
import IWantYou from './IWantYou'
import TroubleMan from './TroubleMan'
import LiveAttheLondonPalladium from './LiveAttheLondonPalladium'
import {BrowserRouter as Router, Link, Route} from "react-router-dom"
import Biography from './Biography'

class AlbumContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            
            
        }
    }
    
    
    
    render() {
       
        
        return (
            <div id="albumContainer">
                
                <div id = "header">
                <h1>Marvin Gaye's Best Albums</h1>
                <header>Click Below to Learn About His Top 5 Albums!</header>         
                <Router>
               
                    <Link class="navbar"  to = "/home">Home</Link>
                    <Link class="navbar" to = "/live">Number 5</Link>
                    <Link class="navbar" to = "/trouble">Number 4</Link>                    
                    <Link class="navbar" to = "/want">Number 3</Link>
                    <Link  class="navbar"to = "/life">Number 2</Link>
                    <Link class="navbar" to = "/here">Number 1</Link>

                   <Route path ="/home" >
                   <Biography/>
                   </Route>
                                   
                   
                    <Route path= "/here">
                     <HereMyDear/>
                    </Route>

                    <Route path= "/life">
                    <InOurLifetime />
                    </Route>

                    <Route path= "/want">
                    <IWantYou />
                    </Route>

                    <Route path= "/trouble">
                    <TroubleMan />
                    </Route>

                    <Route path= "/live">
                    <LiveAttheLondonPalladium />
                    </Route>

                </Router>
                </div>
                

               
               
                


               

                
                


                

            </div>
        );
    }
}

export default AlbumContainer;