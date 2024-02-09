import React from 'react'
import './EditFriend.css'

const EditFriend = () => {
  return (
    <div className='edit-friend'>
        <form>
            <div className='edit-friend__controls'>
                <div className='edit-friend__control'>
                    <label>Name</label>
                    <input type="text" autofocus required={true}/>
                </div>
                <div className='edit-friend__control'>
                    <label>Mobile</label>
                    <input type="text" required={true}/>
                </div>
                <div className='edit-friend__control'>
                    <label>Date</label>
                    <input type="date" required={true}/>
                </div>
            </div>
            <div className='edit-friend__actions'>
                    <button type="submit">Edit Friend</button> 
                </div>
        </form>
    </div>
  )
}

export default EditFriend
