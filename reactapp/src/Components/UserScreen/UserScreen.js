import React,{useState, useEffect} from 'react'
import { useParams} from 'react-router-dom';
import propTypes from 'prop-types'
import "./UserScreen.css"
/**render here the clicked api users: name, id, */
function UserScreen (props) {
  const [users, setUsers]=useState([])
  const [toggle, setToggle] = useState(false);
  const [btnContent, setBtnContent] = useState('Show');

  const toggleBtn = () => {
    setToggle(!toggle)
    btnContent === "Show" ? setBtnContent('hide') : setBtnContent('Show')
  }


  const {id}=useParams();
  const Rules = props => {
    return(
    <div>
        <h1>{props.h1}</h1>
    </div>
    )
}
Rules.propTypes ={
    h1:propTypes.string,
}

useEffect(() => {
  fetch('https://api.softhouse.rocks/users/' + id)
    .then(response => {
      return response.json();
    })
    .then(data => {
      setUsers(data);
    });
}, [id]);

return (
  <>
  <div>
    {id ? <>
      <h3> {users.username}</h3>
      <h5> {users.name} </h5>
      <h5> {users.email}</h5>
      {toggle ? <>
        <hr />
        <h5>{users.address.city}</h5>
        <h5>{users.address.street}</h5>
        <h5>{users.address.suite}</h5>
      </> : null}
      <button onClick={toggleBtn}>{btnContent}</button>
    </>
      : <h3>no user</h3>}
  </div>
</>
  );
}
export default UserScreen

