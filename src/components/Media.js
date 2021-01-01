import React, { Component } from 'react';

class Media extends Component {
    componentDidUpdate(prevProps, prevState) {
        if(this.state.selectedTrack !== prevState.selectedTrack) {
            let track;
            switch(this.state.selectedTrack) {
                case "Sein wir wieder Gut":
                    track = seinWirWiederGut
                break;
                case "I Am Not My Own":
                    track = iAmNotMyOwn
                    break;
                    default:
                    break;
            }
            if(track) {
                this.player.src = track;
                this.player.play()
            }
        }
    }

    render () {
        const list = [{id: 1, title: "Sein wir wieder Gut"}, {id: 2, title: "I am not my own"}].map(item => {
            return (
                <button>
                    <li key={item.id}
                    onClick={() => this.setState({selectedTrack: item.title })}>
                        {item.title}
                    </li>
                </button>
            );
        });

        return (
            <div className="homescreen">
                <div className="homeContainer">
                    <ul>{list}</ul>
                    <audio ref={ref => this.player = ref}></audio>
                </div>
            </div>
        )
    }
};

export default Media;