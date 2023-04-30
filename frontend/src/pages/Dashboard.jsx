import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import GoalForm from '../components/GoalForm'
import { FaRocket } from 'react-icons/fa'

function Dashboard() {
  const navigate = useNavigate()
  const {user} = useSelector((state)=>state.auth)

  useEffect(()=>{
    if(!user){
      navigate('/login')
    }
  },[user,navigate])
  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>set your goals! <FaRocket/></p>
      </section>

      <GoalForm />
    </>
  )
}

export default Dashboard