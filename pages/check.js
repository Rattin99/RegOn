

export const getServerSideProps = async () => {

    const url = `https://us-central1-rather-cec85.cloudfunctions.net/api/list`;

    const res =  await fetch(url);
    const data = await res.json();

    if(!data) return {
        notFound: true
    }

    return {
        props : {data}
    }
}


const checking = ({data}) => {

    return (
        
            
            data.map((value,index) => {

                return (<p className=" w-full flex items-center justify-evenly bg-white m-2"><span className="bg-white">{value.name}</span> <span className="bg-white">{value.regNo}</span><span className="bg-white w-2">{value.tshirt}</span><span className="bg-white">{value.token}</span></p>)
            })
        
    )

}


export default checking;