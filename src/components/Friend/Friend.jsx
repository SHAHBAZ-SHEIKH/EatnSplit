import React from 'react'

function Friend({ friend, setSelectFriend }) {
   
    const selectHandler = () => {
        setSelectFriend(friend)
    }


    return (
        <div className='flex justify-between items-center p-[5px] bg-[#ffffff] shadow-md rounded-md my-[10px]'>
            <div className='flex gap-[20px] items-center'>
                <div className='w-[70px] h-[70px] overflow-hidden'>
                    <img className='w-[100%] h-[100%] rounded-full' src={friend.image} alt="" />
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-[#616769] font-bold'>{friend.name}</h3>
                    <p className={`text-[#ad3f3d] font-bold ${friend.payment > 0 ? "text-[#3d9f3d]" : "text-[#ad3f3d]"}`}>you need to {friend.payment > 0 ? "receive" : "pay"} Rs. {friend.payment} to {friend.name}  </p>
                </div>
            </div>
            <div>
                <button onClick={selectHandler} className='bg-[#fd9e3f] text-[#88592a] font-bold rounded-md p-[5px] '>Select</button>
            </div>

        </div>
    )
}
export default Friend
