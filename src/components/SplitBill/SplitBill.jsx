import React from 'react'
import { useState } from 'react'

function SplitBill({friendlist,selectFriend,setFriendlist}) {
    console.log(selectFriend,friendlist)
    const [billValue, setBillValue] = useState(0)
    const [expense, setExpense] = useState(0)
    const [friendexpense,setFriendExpense] = useState(0)
    const [whoPayBill, setWhoPayBill] = useState("")

    const splitBillHandler = () => {
        const totalBill = Number(billValue);
        const yourExpense = Number(expense);
        const friendExpenseAmount = Number(friendexpense);

        // Check if total expense matches the bill value
        if (yourExpense + friendExpenseAmount !== totalBill) {
            alert(`The sum of your expense (Rs. ${yourExpense}) and your friend's expense (Rs. ${friendExpenseAmount}) does not match the total bill (Rs. ${totalBill}). Please check the values.`);
            return;
        }

        const updatedFriendList = friendlist.map((friend) => {
            if (friend.name === selectFriend.name) {
                let payment = 0;
                if (whoPayBill === selectFriend.name) {
                    
                    payment = -yourExpense; 
                } else {
                    
                    payment = friendExpenseAmount; 
                }
                return {
                    ...friend,
                    payment,
                };
            }
            return friend;
        });

        setFriendlist(updatedFriendList); 

        // Reset input fields
        setBillValue(0);
        setExpense(0);
        setFriendExpense(0);
        setWhoPayBill("");
    };
    
    


    // const splitBillHandler = ()=>{
    //     const friendfilter = friendlist.filter((friend)=>friend.name === selectFriend.name)
    //     console.log(billValue,"billvalue")
    //     console.log(expense,"expense")
    //     console.log(friendexpense,"friendexpense")
    //     console.log(whoPayBill,"whoPayBill")
    //     console.log(friendexpense,whoPayBill)
    //     if(whoPayBill===selectFriend.name){
    //         const calculate = billValue - friendexpense
    //         if(calculate>0){
    //             friendfilter[0].payment = calculate
    //             setFriendlist((prev)=>[...prev,])
    //             setFriendExpense(0)
    //             setWhoPayBill("")
    //         }
    //     }

    //     if(whoPayBill!==selectFriend.name){
    //         const calculate = expense - 
    //         if(calculate>0){
    //             friendfilter[0].payment = calculate
    //             setFriendlist((prev)=>[...prev,])
    //             setExpense(0)
    //             setWhoPayBill("")
    //         }
    //     }
        
        
        
        
    //     setBillValue(0)
    //     setExpense(0)
    //     setFriendExpense(0)
    //     setWhoPayBill("")

    // }


    return (
        <div className='bg-[#fcf2e0] shadow-md pt-[50px] flex  flex-col p-[20px] w-[85%] gap-[10px] h-[100%] '>
            <div className='text-[#000] font-bold text-[30px] ml-[10px]'>
                <h3>SPLIT A BILL WITH {selectFriend?.name.toUpperCase()}</h3>
            </div>
            <div className='flex justify-between items-center gap-[20px]'>
                <div className='flex items-center'>
                    <div className='w-[40px] h-[40px] overflow-hidden'>
                        <img className='w-[100%] h-[100%]' src="assests/bagicon.png" alt="" />
                    </div>
                    <label className='text-[#000] font-bold text-[20px]'>Bill Value</label>
                </div>
                <div>
                    <input value={billValue} onChange={(e) => setBillValue(e.target.value)} placeholder='Enter Bill Value' type="number" className='p-[7px] outline-none border-[2px] border-[solid] border-[rgb(212,192,89)]' />
                </div>
            </div>
            <div className='flex justify-between items-center gap-[20px]'>
                <div className='flex items-center gap-[5px]'>
                    <div className='w-[40px] h-[40px] overflow-hidden'>
                        <img className='w-[100%] h-[100%]' src="assests/expense.png" alt="" />
                    </div>
                    <label  className='text-[#000] font-bold text-[20px]'>Your Expense</label>
                </div>
                <div>
                    <input value={expense} onChange={(e) => setExpense(e.target.value)} placeholder='Enter Your Expense' type="number" className='p-[7px] outline-none border-[2px] border-[solid] border-[rgb(212,192,89)]' />
                </div>
            </div>
            <div className='flex justify-between items-center gap-[20px]'>
                <div className='flex items-center'>
                    <div className='w-[40px] h-[40px] overflow-hidden'>
                        <img className='w-[100%] h-[100%]' src="assests/ficon.png" alt="" />
                    </div>
                    <label className='text-[#000] font-bold text-[20px]'>{selectFriend.name} Expense</label>
                </div>
                <div>
                    <input value={friendexpense} onChange={(e) => setFriendExpense(e.target.value)} placeholder={`Enter ${selectFriend.name} Expense`} type="number" className='p-[7px] outline-none border-[2px] border-[solid] border-[rgb(212,192,89)]' />
                </div>
            </div>
            <div className='flex justify-between items-center gap-[20px]'>
                <div className='flex items-center'>
                    <div className='w-[40px] h-[40px] overflow-hidden'>
                        <img className='w-[100%] h-[100%]' src="assests/emoji.png" alt="" />
                    </div>
                    <label className='text-[#000] font-bold text-[20px]'>Who is Paying the Bill?</label>
                </div>
                <div>
                    <select onChange={(e) => setWhoPayBill(e.target.value)} className='w-[198px] text-center p-[7px] outline-none border-[2px] border-[solid] border-[rgb(212,192,89)]'>

                        <option>You</option>
                        <option>{selectFriend.name}</option>
                    </select>
                </div>

            </div>
            <div className='flex  justify-end'>
                <button onClick={splitBillHandler} className='bg-[#fd9e3f] w-[197px] text-[#88592a] font-bold rounded-md p-[5px]'>Split Bill</button>
            </div>
        </div>
    )
}
export default SplitBill
