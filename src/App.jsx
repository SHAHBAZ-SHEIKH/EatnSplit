import './App.css'
import Friends from './components/Friends/Friends'
import AddFriends from './components/AddFriends/AddFriends'
import SplitBill from './components/SplitBill/SplitBill'
import { useEffect, useState } from 'react'

function App() {

  const [addFriend, setFriend] = useState(false)
  const [selectFriend, setSelectFriend] = useState(null)

  const [friendlist, setFriendlist] = useState([
    {
      name: "Hamza",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSKbCFe_QYSVH-4FpaszXvakr2Eti9eAJpQ&s",
      payment: 30
    },
    {
      name: "Umer",
      image: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      payment: 400
    },
    {
      name: "Zubair",
      image: "https://www.shutterstock.com/image-photo/close-portrait-smiling-30s-caucasian-260nw-2246095709.jpg",
      payment: 100
    }
  ])
  useEffect(()=>{

    const data = JSON.parse(localStorage.getItem("friends"))
    if(data && data.length > 0){

      setFriendlist(data)
      
    }
  },[])

  useEffect(() => {

    localStorage.setItem("friends", JSON.stringify(friendlist))
  }, [friendlist])


  return (
    <div className='max-w-[1170px] mt-[30px] mx-auto grid grid-cols-[40%_auto] gap-[30px] py-[10px]'>
      <div className='flex flex-col gap-[8px]'>
        <Friends friendlist={friendlist} setFriend={setFriend} setSelectFriend={setSelectFriend}/>
        {
          addFriend && <AddFriends friendlist={friendlist} setFriendlist={setFriendlist} />
        }
        {
          addFriend ? <button className='bg-[#fd9e3f] w-[150px] text-[#88592a] font-bold rounded-md p-[5px]' onClick={() => setFriend(false)}>Close</button>:null
        }



      </div>
      {
        selectFriend && <SplitBill friendlist={friendlist} selectFriend={selectFriend} setFriendlist={setFriendlist} />
      }



    </div>
  )
}

export default App
