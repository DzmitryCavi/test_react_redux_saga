import React from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import CharactersListItem from "./CharacterListItem/CharactersListItem";
import Loader from "../Loader/Loader";
import { fetchListItems, noMoreItems } from "../../store/actions/actions";

import "./CharactersList.scss";

export default () => {
  const dispatch = useDispatch();
  const { listItems, info, hasMore } = useSelector((state) => state.list);
  const { next, count } = info;

  const fetchMoreData = () => {
    if (listItems.length >= count) {
      dispatch(noMoreItems);
      return;
    }
    setTimeout(() => {
      dispatch(fetchListItems(next));
    }, 500);
  };

  if (!listItems.length) {
    dispatch(fetchListItems(next));
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
