import React, { Component } from 'react'
import style from '../styleFolder/style.module.css'
import updatedComponent from '../Hocs';
class Wrapper extends Component {
    /**need to fix so the children component so that it will appear */
    render() {
        const {showContent, hideShowContent, child} = this.props
        return (
            <React.Fragment>
                <div className={style.container}>
                {showContent ? (<div>{child}</div>): null}
                <button onClick={hideShowContent} className="btn btn-success">Show content </button>
                </div>
                
            </React.Fragment>
        )
    }
}
export default updatedComponent(Wrapper)