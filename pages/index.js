
import { useState } from 'react'
import InfoForm from '../components/InfoForm'
import Pay from '@/components/Pay'
import { url } from '@/utils'

export default function Home() {

  const [data,setData] = useState({})
  const [home,setHome] = useState(true)
  const [pay,setPay] = useState(false)
  const [end, setEnd] = useState(false)

  const [payMethod,setPayMethod] = useState('')
  const [transId,setTransId] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    const formData = {
      name: e.target.name.value,
      reg: e.target.regNo.value,
      dept: e.target.dept.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      tshirt: e.target.drone.value,
    }


    setData(formData)
    setHome(false)
    setPay(true)

    console.log(data)
  }

  const onTransIdchange = (e) => {
    setTransId(e.target.value)
  }

  const onPayMethodChange = (e) => {
    setPayMethod(e.target.value)
  }

  const payHandler = async (e) => {
    e.preventDefault()

    if(payMethod === '' || transId === '' ) {
      alert('enter the payment method and transaction ID')

      return;
    }

    const info = {
      ...data,transId,payMethod
    }

    const response = await fetch(`${url}/pending`,{
      method:'POST',
      body: JSON.stringify(info)
    })
 
    const res =  await response.json()

    console.log(res)
  }

  return (
    <>
      <div>
        <img src= 'logos.jpeg' />
      </div>
      { home &&  <InfoForm  submitHandler= {submitHandler}/>}
      { pay && <Pay payHandler = {payHandler} onPayMethodChange = {onPayMethodChange} onTransIdchange={onTransIdchange} />}
      {end}
    </>
  )


}



