import React from 'react';

export default class extends React.Component {
    render() {
        return(
            <div className="homeContainer">
                <div>Welcome to Music World. Click to continue</div>
                <div>
                    <button className="homeBtn glyphicon glyphicon-chevron-right"
                            onClick={e => this.props.history.push("/songs")}></button>
                </div>
            </div>
        );
    }
}