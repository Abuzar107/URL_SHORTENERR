import React, { useState } from "react";
import axios from "axios";

function Home() {
  const [url, setUrl] = useState("");
  const [newUrl, setNewUrl] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/short/url", { url })
      .then((result) => {
        const getUrl = `http://localhost:5000/${result.data.id.shortId}`;
        setNewUrl((prevLinks) => [...prevLinks, getUrl]);
      })
      .catch((error) => {
        alert("Invalid URL");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-space-between bg-secondary vh-100 gap-20">
      <div className="bg-white p-3 rounded w-25">
        <h2>URL SHORTENER</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>URL</strong>
            </label>
            <input
              placeholder="Enter URL"
              type="text"
              name="url"
              className="form-control rounded-0"
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Generate
          </button>
        </form>
        <br />
        <div>
          <ol>
            {newUrl.map((link, index) => (
              <strong>
                <li key={index+1}>{link}</li>
              </strong>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Home;
