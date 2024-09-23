import React from 'react'
import Friend from '../Friend/Friend'

function Friends({ friendlist, setFriend,setSelectFriend }) {
    


    return (
        <div className='flex flex-col bg-[#ffffff] shadow-md rounded-md p-[15px]'>

            {
                friendlist.map((friend, index) => {
                    return <Friend key={index} friend={friend} setSelectFriend={setSelectFriend} />
                })
            }
            <div className='flex justify-end'>
                <button onClick={() => setFriend(true)} className='bg-[#fd9e3f] text-[#88592a] font-bold rounded-md p-[5px]'>Add Friend</button>
            </div>
        </div>
    )
}
export default Friends
