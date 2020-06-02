import React, {useState} from 'react'
import Wrapper from './Wapper'
import propTypes from 'prop-types';

const AddUser =props=> {
const [inputValue, setInputValue] = useState('');

const handleSubmit = (e) => {
let val = inputValue.length;
    e.preventDefault();
    if(val>10){
        props.history.push('/Dashboard')
    }else{
        alert('it must be 10 letters')
    }
    setInputValue("")
}

const Rules = (props) => {
    return(
    <div>
        <h1>{props.h1}</h1>
    </div>
    )
}

Rules.propTypes = {
    h1:propTypes.string,
}
return (
    <React.Fragment>
        <Rules h1={'LoginScreen'}/>
            <Wrapper>
                <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder="Enter User Name" />
                <br/>
                <input type="submit" onClick={handleSubmit} className="btn btn-success"value="login"/>
            </Wrapper>
    </React.Fragment>

    )
}
export default (AddUser)
