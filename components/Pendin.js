



const Pending = ({name,phone,timeSent,transId, payment}) => {

    const payStyle = (payment) => {

        if(payment === 'bkash') return "bg-red-600 text-sm m-5 p-3 rounded";

        return "bg-purple-600 text-sm m-5 p-3 rounded"
    }


    return (
        <div className="max-w-1/2 sm:w-full p-5 flex items-center justify-evenly
        bg-white border-2 rounded-lg m-10">
            <span className="bg-white sm:m-0 m-5">name:{name}</span>
            <span className="bg-white sm:m-0  m-5">phone:{phone}</span>
            <span className="bg-white sm:m-0  m-5">time sent:{timeSent}</span>
            <span className="bg-white sm:m-0  m-5">transaction ID: {transId}</span>
            <span className={payStyle(payment)}>{payment}</span>

            <button>confirm</button>
        </div>
    )
}


export default Pending;