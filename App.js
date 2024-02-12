import React, {useState, useEffect} from 'react'
import Banner from './components/Title/banner'
import FriendsData from './components/Friends/FriendsData'
import AddNewFriend from './components/Friends/AddNewFriend'
import'./App.css'
import EditFriend from './components/Friends/EditFriend'

let DummyFriendslist = [
  
]

//JSX CODE(HTML AND JAVASCRIPT COMBINE CODE)
const App = () => {

  const [friends, setFriends] = useState(DummyFriendslist)
 
  // useEffect(() => {
    let fetchdata = () => {
  fetch('http://localhost/reactapi/list.php').then(
  response => {
    return response.json()
  }
).then(
  data => {
   // console.log(data)
    setFriends(data)
  }
)
    }


    useEffect(() => {
      fetchdata()
    },[]) 

  
  
    const addFriendsHandler = (friend) => {
    // console.log(enterdFriendsData)
    //const updatedFriend = [newFriend,...friends]
    //setFriends(updatedFriend)
    fetch('http://localhost/reactapi/insert.php',{
     method : 'POST',
    body: JSON.stringify(friend),
    headers: {
      'content-type' : 'application/json'
    }
    }).then(
        response => {
          fetchdata()
        }
    )
  }


  return (
    <div>
      <Banner />
     <AddNewFriend onSaveFriendsData={addFriendsHandler}/>
      <div className='friends'>
        {friends.map((friend)=> (
          <FriendsData
          key={friend.id}
          id = {friend.id}
          name = {friend.name}
          mobile ={friend.mobile}
          date = {new Date(friend.date)}
          />
        ))
        }
     

    {/* <FriendsData date={friendslist[0].fdate} name={friendslist[0].fname} mobile={friendslist[0].fmobile}/>
  
    <FriendsData date={friendslist[1].fdate} name={friendslist[1].fname} mobile={friendslist[1].fmobile}/>
   
   <FriendsData date={friendslist[2].fdate} name={friendslist[2].fname} mobile={friendslist[2].fmobile}/>
   
   <FriendsData date={friendslist[3].fdate} name={friendslist[3].fname} mobile={friendslist[3].fmobile}/>
   
   <FriendsData date={friendslist[4].fdate} name={friendslist[4].fname} mobile={friendslist[4].fmobile}/> */}
   </div>
   <EditFriend/>
    </div>
  )
}

export default App


