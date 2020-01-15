import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date()
        }
        this.tick = this.tick.bind(this);
    }

    componentDidMount(){
        //call tick every second with setInterval
        this.intervalId = setInterval(this.tick, 1000);
    }

    componentWillUnmount(){
        //clear setInterval
        clearInterval(this.intervalId);
    }

    tick(){
        this.setState({time: new Date()})
    }

    render() {
        let hours = this.state.time.getHours();
        let mins = this.state.time.getMinutes();
        let secs = this.state.time.getSeconds();
        let date = this.state.time.toDateString();
        
        return (
        <div class="clock">
        <h1>Clock</h1>
        <section>    
            <h2>
                <p>Time:</p>
                <p>Date:</p>
                
            </h2>
            <h2>
                <p>{hours}:{mins}:{secs}</p> 
                <p>{date}</p>
            </h2>
        </section>
        </div>
        )
    }
}

export default Clock;