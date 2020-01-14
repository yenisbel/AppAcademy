import React from "react";

export class Headers extends React.Component{
    render(){
    
        let tabHeaders = this.props.tabContent.map( (obj, index) => {
            let title = obj.title;
            let activeClass = '';
            if (index === this.props.selected){
                activeClass = "active";
            }

            return (
                <li
                    key={index}
                    className={activeClass}
                    onClick={() => { this.props.selectTab(index)}}>
                    {title}
                </li>
            )
        })

        return (
            <ul class="tabHeaders">{tabHeaders}</ul>
        )
    }
}

export class Tab extends React.Component {
    constructor(props) {
        super(props)
        this.state = { selected: 0 };

        this.selectTab = this.selectTab.bind(this);
    }

    selectTab(index){
        this.setState({selected: index})
    }
    
    render() {
        let selectedPane = this.props.tabContent[this.state.selected];
        return(
            <div class="tabs">
                <h1>Tabs</h1>
                <Headers
                    selectedPane={this.state.selected}
                    selectTab={this.selectTab}
                    tabContent={this.props.tabContent}
                ></Headers>
                <div class="content">
                    <article>{selectedPane.content}</article>
                </div>
                
            </div>
        )
    }
}

