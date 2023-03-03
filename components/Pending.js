



const Pending = ({name,phone,timeSent,transId, payment,email,reg,tshirt,dept,router}) => {

    const payStyle = (payment) => {

        if(payment === 'bkash') return "bg-red-600 text-sm m-5 p-3 rounded";

        return "bg-purple-600 text-sm m-5 p-3 rounded"
    }

    const onConfirm = async (e) => {
        e.preventDefault();

        console.log(email)

        const payload = {
            email,
            name,
            email,
            reg,
            tshirt,
            dept
        }

        const res = await fetch('https://us-central1-rather-cec85.cloudfunctions.net/api/confirm',{
            method:'POSt',
            body: JSON.stringify(payload)
        })

        const response = await res.json()

        console.log(response)

        router.push('/admin')
    }


    return (
        <div className="max-w-1/2  p-5 flex items-center justify-evenly
        bg-white border-2 rounded-lg m-10">
            <span className="bg-white  m-5">name:{name}</span>
            <span className="bg-white  m-5">phone:{phone}</span>
            <span className="bg-white  m-5">time sent:{timeSent}</span>
            <span className="bg-white  m-5">transaction ID: {transId}</span>
            <span className={payStyle(payment)}>{payment}</span>

            <button onClick={onConfirm}>confirm</button>
        </div>
    )
}


export default Pending;