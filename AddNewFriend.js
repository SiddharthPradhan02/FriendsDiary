import React, {useState}from 'react'
import'./AddNewFriend.css'



const AddNewFriend = (props) => {

const[enteredName, setEnteredName] = useState('')
const[enteredMobile, setEnteredMobile]= useState('')
const[enteredDate, setEnteredDate]= useState('')



  const nameChangeHandler = (event)=>{
    setEnteredName(event.target.value)
  }
 
  const mobileChangeHandler = (event)=>{
    setEnteredMobile(event.target.value)
  }

  const dateChangeHandler = (event)=>{
    setEnteredDate(event.target.value)
  }
   const submitHandler = (event) =>{
     event.preventDefault()

     const friendData = {

       name : enteredName,
       Mobile : enteredMobile,
       date : new Date(enteredDate)
      }
      props.onSaveFriendsData(friendData)
      console.log(friendData)
      setEnteredName("")
      setEnteredMobile("")
      setEnteredDate("")
      }
  return (
    <div className='new-friend'> 
    <form onSubmit={submitHandler}>
      <div className='new-friend__controls'>
        <div className='new-friend__control'>
          <label>Name</label>
          <input type="text"value={enteredName} onChange={nameChangeHandler}/>
        </div>
        </div>
        <div className='new-friend__controls'>
        <div className='new-friend__control'>
          <label>Mobile</label>
          <input type="text"value={enteredMobile} onChange={mobileChangeHandler}/>
          </div>
        </div>
        <div className='new-friend__controls'>
        <div className='new-friend__control'>
          <label>Date</label>
          <input type="date"value={enteredDate} onChange={dateChangeHandler}/>
        </div>
      

        </div>
        <div className='new-friend__actions'>
          <button type="submit">Add Friend</button>
        </div>
      
    </form>

     </div>
  )
}

export default AddNewFriend
