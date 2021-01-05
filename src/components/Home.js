import React, { Component } from 'react';
import headshot from './images/headshot.jpg';

class Home extends Component {
    render () {
        return (
            <div className="homescreen">
                <div className= "title">
                    <img className="headshot" src={headshot} alt="red headshot"/>
                </div>
                <div className="homeContainer">
                    <h3>WELCOME</h3>
                    <p>Welcome to Katie Abraham's website! Here you will find information on the career of this up-and-coming mezzo-soprano, as well as photos, recordings, and engagements.</p>
                    <h3>PRESS</h3>
                    <p>"Abraham’s tone is commanding and penetrating, and she succeeds in being simultaneously fearsome and a bit silly."- Brian Schuth, The Boston Musical Intelligencer</p>
                    <p>Abraham sang with a cool tone that highlighted the sophisticated language of Ronald Duncan's libretto."- Melanie O'Neill, examiner.com</p>
                    </div>
            </div>
        )
    }
};

export default Home;