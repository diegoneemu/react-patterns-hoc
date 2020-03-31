import React from "react";
import BlogPost from "./Components/BlogPost";
import withSubscription from "./Components/withSubscription";
import CommentList from "./Components/CommentList";

function App() {
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

  return (
    <>
      <div className="App">
        <BlogPost id="a1" />
        <CommentList />
      </div>
      <div>
        <BlogPostWithSubscription id={"a1"} />
        <CommentListWithSubscription />
      </div>
    </>
  );
}

export default App;
