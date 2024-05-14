import React, { useState, useEffect } from "react";
function Home() {
  const [data, setdata] = useState([]);
  const [salom, setsalom] = useState("posts");
  const [loading, setloading] = useState(false);
  const [src, setsrc] = useState("https://jsonplaceholder.typicode.com/");
  console.log(src + salom);
  useEffect(() => {
    setloading(true);
    fetch(src + salom)
      .then((response) => response.json())
      .then((json) => {
        setdata(json.slice(0, 20));
        console.log(json);
      })
      .finally(() => {
        setloading(false);
      });
  }, [salom]);
  return (
    <div className="container">
      <div className="ilob">
        <h1>JSON Placeholder</h1>
        <select
          onChange={(e) => {
            setsalom(e.target.value);
          }}
          className="select"
        >
          <option selected value="posts">
            Posts
          </option>
          <option value="comments">Comments</option>
          <option value="photos">Photos</option>
          <option value="todos">Todos</option>
          <option value="users">Users</option>
        </select>
      </div>
      <ul className="orrab">
        {salom == "posts"
          ? data.map(({ id, title, body }) => {
              return (
                <li key={id} className="area">
                  <div>
                    <h2>Id:{id}</h2>
                    <h2>Title:{title}</h2>
                    <p>Body:{body}</p>
                  </div>
                </li>
              );
            })
          : salom === "comments"
          ? data.map(({ id, name, email, body }) => {
              return (
                <li key={id} className="area">
                  <div>
                    <h2>Id:{id}</h2>
                    <h2>Name:{name}</h2>
                    <p>Email:{email}</p>
                    <p>Body:{body}</p>
                  </div>
                </li>
              );
            })
          : salom === "albums"
          ? data.map(({ id, title }) => {
              return (
                <li key={id} className="area">
                  <div>
                    <h2>Id:{id}</h2>
                    <h2>Title:{title}</h2>
                  </div>
                </li>
              );
            })
          : salom === "photos"
          ? data.map(({ id, title, thumbnailUrl }) => {
              return (
                <li key={id} className="area">
                  <div>
                    <h2>Id:{id}</h2>
                    <h2>Title:{title}</h2>
                    <img src={thumbnailUrl} alt={thumbnailUrl} />
                  </div>
                </li>
              );
            })
          : salom === "todos"
          ? data.map(({ id, title, completed }) => {
              return (
                <li key={id} className="area">
                  <div>
                    <h2>Id:{id}</h2>
                    <h2>Title:{title}</h2>
                    <p>completed:{`${completed}`}</p>
                  </div>
                </li>
              );
            })
          : salom === "users"
          ? data.map(({ id, name, username, phone, website }) => {
              return (
                <li key={id} className="area">
                  <div>
                    <h2>Id:{id}</h2>
                    <h2>Name:{name}</h2>
                    <h2>Username:{username}</h2>
                    <p>Phone:{phone}</p>
                    <p>Website:{website}</p>
                  </div>
                </li>
              );
            })
          : ""}
      </ul>
      {loading && <div className="loader "></div>}
    </div>
  );
}

export default Home;
