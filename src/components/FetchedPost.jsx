import React from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/actions";

export default () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.listItems);
  const loading = useSelector((state) => state.app.loading);
  if (!posts.length) {
    dispatch(fetchPosts());
    // return <button
    // onClick={() => dispatch(fetchPosts())}
    // >Загрузить</button>
  }
  return posts.map((post) => <Post post={post} key={post[0]} />);
};
