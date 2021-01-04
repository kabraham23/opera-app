import React, { Component } from 'react';
import ReactPlayer from "react-player";

class Media extends Component {
    render () {
        return (
            <div className="homescreen">
                <div className="homeContainer">
                    <ReactPlayer className="soundcloudPlayer" url="https://soundcloud.com/kabraham23/sein-wir-wieder-gut" />
                    <ReactPlayer className="soundcloudPlayer" url="https://soundcloud.com/kabraham23/donde-lieta-81913" />
                    <ReactPlayer className="soundcloudPlayer" url="https://soundcloud.com/kabraham23/va-tk-2" />
                </div>
            </div>
        )
    }
};

export default Media;