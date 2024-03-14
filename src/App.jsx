import React, { useState } from 'react';

function BookSearch() {
  const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);

      const handleChange = (e) => {
          setQuery(e.target.value);
            };

              const handleSubmit = async (e) => {
                  e.preventDefault();
                      try {
                            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
                                  const data = await response.json();
                                        setBooks(data.items);
                                            } catch (error) {
                                                  console.error('Error fetching books:', error);
                                                      }
                                                        };

                                                          return (
                                                              <div>
                                                                    <form onSubmit={handleSubmit}>
                                                                            <input type="text" value={query} onChange={handleChange} placeholder="Enter book title" />
                                                                                    <button type="submit">Search</button>
                                                                                          </form>
                                                                                                <div>
                                                                                                        {books.map((book) => (
                                                                                                                  <div key={book.id}>
                                                                                                                              <h3>{book.volumeInfo.title}</h3>
                                                                                                                                          <p>Author: {book.volumeInfo.authors}</p>
                                                                                                                                                      <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
                                                                                                                                                                  <p>Description: {book.volumeInfo.description}</p>
                                                                                                                                                                            </div>
                                                                                                                                                                                    ))}
                                                                                                                                                                                          </div>
                                                                                                                                                                                              </div>
                                                                                                                                                                                                );
                                                                                                                                                                                                }

                                                                                                                                                                                                export BookSearch;
