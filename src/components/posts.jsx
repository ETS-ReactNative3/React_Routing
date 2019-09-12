import React from "react";
import queryString from "query-string";

const Posts = ({ match, location }) => {
  // This creates an object with properties based on the parameters in the query string.
  const result = queryString.parse(location.search);
  console.log(result);
  return (
    <div>
      <h1>Posts</h1>
      Year: {match.params.year}, Month: {match.params.month}
    </div>
  );
};

export default Posts;
