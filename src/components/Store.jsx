import React, { useState } from "react";
import { Link } from "react-router-dom";
import Firebase from "firebase/compat";



const Store = () => {
    const [loading, setLoading] = useState(true);
    const [blogPosts, setBlogPosts] = useState([]);
     
    if (loading && !blogPosts.length) {
      Firebase.database()
        .ref("/store")
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
        <h1 id="blogtitle">Store</h1>
        {blogPosts.map(blogPost => (
          <div class="container-fluid" id="main">
          <div class="row">
          <div class="col-md-12">
          <a href={blogPost.content}>
          <div key={blogPost.slug} className="card" id="blogposts">
            <img id="blogpic" src={blogPost.coverImage}/>
            <div className="card-content">
              <h1 id="">
                {blogPost.title} 
                
              </h1>
             
            </div>
          </div>
          </a>
          </div>
          </div>
          </div>
        ))}
      </>
    );
  };
  

export default Store;