import React, { Component } from 'react'
class Biography extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    

    
    render() {
        return (
            <div >
                <header >Marvin Gaye's Best Albums</header>
                <p>Click Below to Learn About His Top 5 Albums!</p>
                <div id="image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7XsO66wVCy-jmD_zR2eDMbutzoHpjycJA4dGagxDxYGThZbl2" alt="" />
                    <div id="biography">
                        <p>Marvin Gaye, byname of Marvin Pentz Gay, Jr., (born April 2, 1939, Washington, D.C., U.S.—died April 1, 1984, Los Angeles, California), American soul singer-songwriter-producer who, to a large extent, ushered in the era of artist-controlled popular music of the 1970s. </p>
                        <p>Blessed with an exceptionally wide range that encompassed three distinct vocal styles—a piercing falsetto, a smooth mid-range tenor, and a deep gospel growl—Gaye combined great technical prowess with rare musical individuality. Gaye also displayed dazzling virtuosity by overdubbing (building sound track by track onto a single tape) his own voice three or four times to provide his own rich harmony, a technique he would employ for the rest of his career. </p>
                        <p>As an artist who employed urban soul music to express social and personal concerns, as well as a singer of exquisite sensitivity and romantic grace, Gaye left a legacy that has widened since his demise, and his music has become a permanent fixture in American pop.</p>
                    </div>

                </div>
                



            </div>
        );
    }
}

export default Biography;