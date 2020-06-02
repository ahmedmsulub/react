import React, {useState,useEffect} from 'react';

const  FetchingApi = props => {
    const [posts,setPost]= useState([])

 useEffect(() => {
    fetch('https://api.softhouse.rocks/users')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setPost(data);
        // console.log(data)
      });

    },[])

    const clickedUser = e => {
        // let target = e.target;
        e.preventDefault();
        // const found = posts.find(user => {
        //     if(e.target.innerHTML === user.name)
        // })
        
        const found = posts.find(user => {
            if(user.name === e.target.innerHTML)return user
        })

        // console.log(e.target.innerHTML)
        // console.log( found.address.city)
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