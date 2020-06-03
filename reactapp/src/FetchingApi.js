import React, {useState,useEffect} from 'react';
/**here im creating a api fetching that will be used in other Components that is in need of fetching api
 * * here we fetch api usernames that is clickable, and when you click a username u will get to userScreen where everything will be shown
 */

const  FetchingApi = props => {
    const [posts,setPost]= useState([])

 useEffect(() => {
    fetch('https://api.softhouse.rocks/users')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setPost(data);
      });
    },[])

    const clickedUser = e => {
        e.preventDefault();
        const found = posts.find(user => {
            if(user.name === e.target.innerHTML)return user
        })
        props.history.push('/UserScreen'+ found.id)
      }
    return(
        <div>

        {posts.map((post,index) => {
            return(
                <li onClick={clickedUser} key={index}>{post.name}</li>
            )
            })}
        </div>
    )
}
export default FetchingApi;