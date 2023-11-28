import React, {useState, useEffect} from "react";

export default function MyComponent() {
    const [resourcetype, setResourceType] = useState('posts');
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log('resource type changed');
        fetch(`https://jsonplaceholder.typicode.com/${resourcetype}`)
        .then(response => response.json())
        .then(json => setData(json))
    },[resourcetype])

    return (
        <>
        <div>
            <button onClick={()=> setResourceType('posts')}>posts</button>
            <button onClick={()=>setResourceType('comments')}>comments</button>
            <button onClick={()=>setResourceType('users')}>users</button>
            <h2>{resourcetype}</h2>
            {resourcetype ==='posts' && <div>
                <ul>
                    {data.map((item,index) => {
                        return <li key={index}>{item.userId}</li>
                    })}
                </ul>
            </div>
            }
            {resourcetype !=='posts' &&
            <div>
                {data.map(item => {
                    return <div>{JSON.stringify(item)}</div>
                })}
            </div>
            }
        </div>
        </>
    )
}