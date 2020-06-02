import React from 'react'
/**
 * this class render users and color and users from dashboard component
 */
const RenderComponent =props=> {
    
    return (
        <div>
            <li key = {props.index}>{props.user}</li>
            
        </div>
    )
}
export default RenderComponent;
