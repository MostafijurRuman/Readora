import { useEffect, useState } from "react"
import Book from "../Book/Book";

export default function Books() {
  const [books,setBooks] =useState([]);
  useEffect(()=>{
    fetch('../../../public/booksData.json')
    .then(res => res.json())
    .then(data => setBooks(data))
  },[])

  return (
    <div >
       <h1 className="font-playfair font-bold text-4xl text-center mt-24 mb-9">Books</h1>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6">
        {books.map(book => <Book book={book} key={book.bookId}></Book> )}
       </div>

    </div>
  )
}
