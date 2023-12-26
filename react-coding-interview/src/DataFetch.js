import { useEffect, useState } from "react";

const DataFetch = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch('https://randomuser.me/api');
            let result = await response.json();
            console.log(result.results)
            setData(result.results);
        }

        fetchData();
    },[])

    return (
        <div>
        <div> Data </div>
        <ul>
            {data.map((item) => {
                return  <li key={item.id.name}>{item.name.first } <img src={item.picture.thumbnail} alt={`{item.name.first}- thumbnail`}/></li>
            }
            )}
        </ul>
        
        </div>
    )
}

export default DataFetch;