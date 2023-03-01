import Pending from "@/components/Pending";


export const getServerSideProps = async () => {
 const url = `https://us-central1-rather-cec85.cloudfunctions.net/api/pending`;

 const res =  await fetch(url);
 const data = await res.json();

 if(!data) return {
    notFound: true
 }

 return {
    props : {data}
 }

}


const Admin = ({data}) => {

   
    
    return (
        <>
        <div className="w-full h-full flex flex-col items-center justify-center">
        {
            data.map((value,index) => {
                return (<Pending name={value.name} phone = {value.phone} timeSent = {value.time_sent} transId = {value.transId} payment = {value.paymethod}
                key = {index} email = {value.email} reg = {value.regNo} tshirt ={value.tshirt} dept = {value.dept}/>)
            })
        }
        </div>
        </>
    )
}



export default Admin;