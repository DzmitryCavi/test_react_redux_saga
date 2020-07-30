import React from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, noMorePosts } from "../store/actions";
import InfiniteScroll from "react-infinite-scroll-component";

export default () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.fetchedPosts);
  const url = useSelector((state) => state.posts.url);
  const hasMore = useSelector((state) => state.posts.hasMore);

  const fetchMoreData = () => {
    if (posts.length >= 500) {
      dispatch(noMorePosts);
      return;
    }
    setTimeout(() => {
      dispatch(fetchPosts(url));
    }, 500);
  };

  if (!posts.length) {
    dispatch(fetchPosts(url));
  }

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {posts.map((post) => (
        <Post data={post} key={post.id} />
      ))}
    </InfiniteScroll>
  );
};
