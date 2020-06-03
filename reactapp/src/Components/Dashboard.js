import React, { useState } from 'react'
import propTypes from 'prop-types'
import Wrapper from './Wapper';
import FetchingApi from '../FetchingApi';
/**
 * 
 * we have a propTypes thats checks if ur sticking to the rule you set
 * we have a form that does not have functionality at the time 
 */
function Dashboard(props) {
  const Rules = (props) => {
    return(
    <div>
        <h1>{props.h1}</h1>
    </div>
    )
}

Rules.propTypes ={
    h1:propTypes.string,
}
const [inputValue, setInputValue] =useState('');
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(inputValue)
  setInputValue('')
}

  return (
    <React.Fragment>
      <Rules h1={'Dashboard'}/>
      <Wrapper>
        <FetchingApi {...props}/>
      </Wrapper>
      <div style={{position:'absolute', marginLeft:'400px'}}>
        <Wrapper>
          <input type="text" name="name" placeholder="name" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} required />
          <input type="text" name="username" placeholder="username" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} required /><br/>
          <input type="text" name="email" placeholder="email" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} required /><br/>
          <hr/>
          <input type="submit" onClick={handleSubmit} className="btn btn-success"value="add"/>
        </Wrapper>
      </div>
  </React.Fragment>

  )
}
export default Dashboard
