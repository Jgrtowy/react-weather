import { useEffect, useState } from "react";
import { type SearchResult } from "@/components/SearchBar";

const BOOKMARKS_KEY = 'bookmarks'

export interface useBookmarksReturn {
    bookmarks: SearchResult[]
    isBookmarked: (c: SearchResult) => Boolean
    addBookmark: (c: SearchResult) => void
    removeBookmark: (c: SearchResult) => void
}

export default function useBookmarks() {
    const [bookmarks, setBookmarks] = useState<SearchResult[]>([])

    useEffect(() => {
        const stored = localStorage.getItem(BOOKMARKS_KEY)
        if(stored) {
            setBookmarks(JSON.parse(stored))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks))
    }, [bookmarks])

    function isBookmarked(city: SearchResult) {
        return bookmarks.some(c => c.lat === city.lat && c.lon === city.lon)
    }

    function addBookmark(city: SearchResult) {
        if(!isBookmarked(city)) {
            setBookmarks(prev => [...prev, city])
        }
    }

    function removeBookmark(city: SearchResult) {
        setBookmarks(prev => prev.filter(c => !(c.lat === city.lat && c.lon === city.lon)))
    }

    return {
        bookmarks, isBookmarked, addBookmark, removeBookmark
    }
}