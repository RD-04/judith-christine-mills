import React, { useState } from "react";
import { Link } from "react-router-dom";
import Firebase from "firebase/compat";



const Blog = () => {
    const [loading, setLoading] = useState(true);
    const [blogPosts, setBlogPosts] = useState([]);
     
    if (loading && !blogPosts.length) {
      Firebase.database()
        .ref("/posts")
        .orderByChild("dateFormatted")
        .once("value")
        .then(snapshot => {
          let posts = [];
          const snapshotVal = snapshot.val();
          for (let slug in snapshotVal) {
            posts.push(snapshotVal[slug]);
          }
     
          const newestFirst = posts.reverse();
          setBlogPosts(newestFirst);
          setLoading(false);
        });
    }
     
    if (loading) {
      return <h1>Loading...</h1>;
    }

  return (
    <>
         <h1 id="blogtitle">Blog Posts</h1>
         {blogPosts.map(blogPost => (
        <div class="container-fluid" id="main">
        <div class="row">
        <div class="col-md-12">
        <div key={blogPost.slug} className="card" id="blogposts">
          <img id="blogpic" src={blogPost.coverImage} alt={blogPost.coverImageAlt} />
          <div className="card-content">
            <h2>
              {blogPost.title} &mdash;{" "}
              <span style={{ color: "#5e5e5e" }}>{blogPost.datePretty}</span>
            </h2>
            <p
              dangerouslySetInnerHTML={{
                __html: `${blogPost.content}`
              }}
            ></p> 
          <a href={`/${blogPost.slug}`}><button id="link">Continue reading...</button></a>
           </div>
        </div>
        </div>
        </div>
        </div>
      ))}

    </>
  );
};

export default Blog; 