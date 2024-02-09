import React from 'react'
import './FriendsData.css'

const FriendsData = (props) => {

    const editStyle = {
         color : "white",
         background : "green",
         padding : "10px",
         fontFamily: "Arial",
         fontSize: "15px",
         borderRadius: "10px",
         width: "100px"
    }
    const month = props.date.toLocaleString('en-US', { month: 'long' })
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US', { day: '2-digit' })

    const editHandler = (id) => {
        alert(id);
    }

    return (

        <div className='friends-item'>
    
                <div className='friends-date'>
                    <div className='friends-date__month'>{month}</div>
                    <div className='friends-date__year'>{year}</div>
                    <div className='friends-date__day'>{day}</div>
                </div>

            <div className='friends-item__description'>
            

                <h1>
                    {props.name}
                </h1>
    
            <div className='friends-item__mobile'>
                {props.mobile}
            </div>
            <div>
                <input type='button' className='friends-delete'
                 value={'Delete' + props.id} ></input>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div>
                <input type="button" className='friends-edit' onClick={() => editHandler(props.id)} value={'edit'}style={editStyle}></input> 
        </div>
        </div>
        </div>
        
    
        
    )
}

export default FriendsData