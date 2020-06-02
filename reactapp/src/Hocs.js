import React from 'react';

// import React, {useState,useEffect} from 'react';
// import axios from 'axios'

const updatedComponent = (OriginalComponent) => {
    class NewComponent extends React.Component {
        constructor(props){
            super(props)
            this.state = {
                showContent:true,
            };
        }
        // child(){
        //     const show = this.props.children
        // }
        hideShowContent=(e)=>{
            this.setState({showContent:!this.state.showContent})
            console.log(this.state.showContent)
        }

        render (){
            return (
                <OriginalComponent hideShowContent={this.hideShowContent} showContent={this.state.showContent} child={this.props.children} />
            )
        }
    }
    return NewComponent
}
export default updatedComponent