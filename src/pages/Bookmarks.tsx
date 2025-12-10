import { type useBookmarksReturn } from "@/hooks/useBookmarks"
import { useOutletContext } from "react-router-dom"

export default function Favorites() {
    const { bookmarks } = useOutletContext<useBookmarksReturn>()

    return(
        <div>
            {bookmarks.map(loc => loc.name)}
        </div>
    )
}