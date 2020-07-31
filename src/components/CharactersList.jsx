import React from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import CharactersListItem from "./CharactersListItem";
import Loader from "./Loader";
import { fetchListItems, noMoreItems } from "../store/actions";

import "./CharactersList.scss";

export default () => {
  const dispatch = useDispatch();
  const { listItems, maxListCount, url, hasMore } = useSelector(
    (state) => state.list
  );

  const fetchMoreData = () => {
    if (listItems.length >= maxListCount) {
      dispatch(noMoreItems);
      return;
    }
    setTimeout(() => {
      dispatch(fetchListItems(url));
    }, 500);
  };

  if (!listItems.length) {
    dispatch(fetchListItems(url));
    return <Loader />;
  }

  return (
    <InfiniteScroll
      style={{ overflowY: "hidden" }}
      dataLength={listItems.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<Loader />}
    >
      {listItems.map((item) => (
        <CharactersListItem data={item} key={item.id} />
      ))}
    </InfiniteScroll>
  );
};
