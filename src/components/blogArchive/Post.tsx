import React from "react";
import blog from "../../images/blog.jpeg";
interface Props {}

const Post = (props: Props) => {
  return (
    <div className="card mb-3">
      <img className="card-img-top" src={blog} alt="Cardimg" />
      <div className="card-body">
        <p className="card-text">
          Vacation Plans Cancelled? Here’s How to Plan a Staycation Instead
        </p>
        <p className="card-text">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  );
};

export default Post;
