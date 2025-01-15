import React, { useState } from 'react';

const DataPostingComponent = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { title, body };

    // Replace with your API URL
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setResponseMessage('Data submitted successfully');
      })
      .catch((error) => {
        setResponseMessage('Error submitting data');
      });
  };

  return (
    <div>
      <h1>Submit Data to API</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Body:
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default DataPostingComponent;
