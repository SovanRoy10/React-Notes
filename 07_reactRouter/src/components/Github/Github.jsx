// import  { useEffect, useState } from 'react'

import { useLoaderData } from "react-router-dom"

export default function Github() {

    // const [data, setData] = useState({})

    // useEffect(() => {
    //     fetch('https://api.github.com/users/SovanRoy10')
    //         .then(Response => Response.json())
    //         .then((data) => {
    //             setData(data)
    //         })
    // }, [])

    const data = useLoaderData()
    
    return (
        <>
            <div className='text-center m-4 bg-gray-600 text-white text-3xl p-4'>Github followers : {data?.followers}</div>
            <img src={data?.avatar_url} alt="avatar" className='text-center mx-auto rounded-lg'/>
        </>
    )
}

export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/SovanRoy10')
    return response.json()

}