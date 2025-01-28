import { useEffect, useState } from "react"
import { getBooks } from "../helpers/getBooks"
import { Card } from "./Card"
import { NavBar } from "../layouts/NavBar"
import '../styles/Libreria.css'


export const Libreria = () => {

    const [books, setBooks] = useState([])

    const fetchBooks = async () => {
        const booksData = await getBooks();
        setBooks(booksData);
    };

    useEffect(() => {
        fetchBooks();
    }, [])
    
  return (
    <>
    
    <NavBar />
    
    <div className="libreria-container">
        <div className="cards-container">
            {
                books.map( book => (
                    <Card key={book.id} book={book}/>
                ))
            }
            
        </div>
    </div>
    </>
  )
}
