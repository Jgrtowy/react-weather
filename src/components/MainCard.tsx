import { OpenWeatherIconsToLucide } from "@/utility/openWeatherIconsToLucide";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { MapPinned } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile";
import BookmarkToggle from "./BookmarkToggle";

export default function MainCard({ data, location }: { data: any, location: any }) {
    const ConvertedIcon = OpenWeatherIconsToLucide[data.weather[0].icon]

    return (
        <Card className="h-1/2">
            <CardContent>
                <CardDescription>{new Date().toLocaleString()}</CardDescription>
            </CardContent>
            <CardHeader>
                <CardTitle className="font-bold text-3xl">
                    <div className="flex gap-2 items-center">
                        <MapPinned />
                        {location.name}, {data.sys.country}
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="flex gap-2">
                    <ConvertedIcon className="w-12 h-12"/>
                    <span className="text-5xl">{Math.round(data.main.temp)}°C</span>
                </div>
                <p>Feels like {Math.round(data.main.feels_like)}°C. {(data.weather[0].description).slice(0, 1).toUpperCase() + data.weather[0].description.slice(1)}.</p>
            </CardContent>
            <CardFooter>
                {!useIsMobile() && <CardDescription>
                    <p>Humidity: {data.main.humidity}% </p>
                    <p>Wind: {data.wind.speed} m/s </p>
                    <p>Pressure: {data.main.pressure} hPa</p>
                    <p>Lat: {data.coord.lat} Lon: {data.coord.lon}</p>
                </CardDescription> }
            </CardFooter>
            <BookmarkToggle location={location}/>

        </Card>
    )
}