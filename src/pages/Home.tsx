import { useEffect, useState } from "react";

const units = "metric"
const key = `7e780ac4265fd768b39167e356d06bfa`
const url = `https://api.openweathermap.org/data/2.5/weather?q=katowice&units=${units}&appid=${key}`

export default function Home() {
    const [data, setData] = useState<any>(null)

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(err => console.log(err))   
    }, [])

    if(!data) return null
    return(
        <div>
            {data.name}
            {data.main.temp}
            {data.weather.main}
            {data.weather.description}
        </div>
    )
}