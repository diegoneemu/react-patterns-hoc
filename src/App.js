import React, { useState } from "react";
import BlogPost from "./Components/BlogPost";
import withSubscription from "./Components/withSubscription";
import CommentList from "./Components/CommentList";
import logProps from "./Components/logProps";

function App() {
  const [id, setId] = useState(1);

  const BlogPostWithSubscription = withSubscription(
    BlogPost,
    (Datasource, props) => {
      return Datasource.BlogPost.getBlogPost(props.id);
    }
  );

  const CommentListWithSubscription = withSubscription(
    CommentList,
    Datasource => {
      return Datasource.Comments.getComments();
    }
  );

  const BlogPostWithSubscriptionWithLogProps = logProps(
    BlogPostWithSubscription
  );

  const mComponent = (
    <BlogPostWithSubscriptionWithLogProps id={`a${id}`} a={"a"} b={"b"} />
  );

  const updateBlogPostComponent = () => {
    setId(id === 7 ? 0 + 1 : id + 1);
  };

  return (
    <>
      <div className="App">
        <BlogPost id="a1" />
        {<CommentList />}
      </div>
      <div>
        {mComponent}
        {<CommentListWithSubscription />}
        <button onClick={updateBlogPostComponent}>Click</button>
      </div>
    </>
  );
}

export default App;
