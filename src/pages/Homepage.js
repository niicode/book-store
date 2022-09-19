import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';
import '../index.css';

function HomePage() {
  const books = useSelector((state) => state.books);
  return (
    <>
      {books.length > 0
        ? books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
            book_id={book.id}
            progress={book.progress}
          />
        ))
        : null}
      <hr className="container" />
      <div className="container">
        <h3>ADD NEW BOOK</h3>
      </div>
      <Form className="container" />
    </>
  );
}

export default HomePage;
