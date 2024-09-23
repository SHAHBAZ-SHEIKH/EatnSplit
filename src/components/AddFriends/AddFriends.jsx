import React from 'react'
import { useState } from 'react'

function AddFriends({ friendlist, setFriendlist }) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")

    const addHandler = () => {
        
        // const newFriend = [...friendlist]
        // newFriend.push({ name: name, image: image, payment: 0 })
        // setFriendlist(newFriend)

        setFriendlist((prev) => [...prev, { name: name, image: image, payment: 0 }])
        setName("")
        setImage("")
    }


    return (
        <div className='flex flex-col gap-[20px]  bg-[#fcf2e0] shadow-md p-[10px] '>
            <div className='flex justify-between items-center gap-[20px]'>
                <div className='w-[40px] h-[40px] overflow-hidden'>
                    <img className='w-[100%] h-[100%]' src="assests/ficon.png" alt="" />
                </div>
                <label className='text-[#000] font-bold'>Add Friend </label>
                <input value={name} onChange={(e) => setName(e.target.value)} className='w-[250px] p-[8px] border-[2px] border-[solid] border-[#fffef9] outline-none' type="text" placeholder='Enter Friends' />
            </div>

            <div className='flex justify-between items-center gap-[20px]'>
                <div className='w-[40px] h-[40px] overflow-hidden'>
                    <img className='w-[100%] h-[100%]' src="https://hips.hearstapps.com/countryliving/assets/18/02/1515470256-levi-guzman-268866.jpg" alt="" />
                </div>
                <label className='text-[#000] font-bold'>Image URL </label>
                <input value={image} onChange={(e) => setImage(e.target.value)} className='w-[250px] p-[8px] border-[2px] border-[solid] border-[#fffef9] outline-none' type="text" placeholder='Enter Image URL' />
            </div>

            <div className='flex  justify-end'>
                <button onClick={addHandler}  className='bg-[#fd9e3f] w-[250px] text-[#88592a] font-bold rounded-md p-[5px]'>Add</button>
            </div>

            

        </div>
        
    )
}
export default AddFriends
