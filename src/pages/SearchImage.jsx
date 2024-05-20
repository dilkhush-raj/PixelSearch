import React from "react";
import { useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import axios from "axios";
import ImageCard from "../components/ImageCard"

function SearchImage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search");


  const fetchImages = async ({ pageParam }) => {
    const API_KEY = "urdmHM6y3XNQaPgEt88QG0ZZWVs1YiN6CQBwZF3ICiYAK5GDHNvlqdgN";
    const res = await axios.get(`https://api.pexels.com/v1/search`, {
      params: { query: searchQuery, page: pageParam, per_page: 10 },
      headers: {
        Authorization: API_KEY,
      },
    });
    return res.data.photos;
  };

  const { ref, inView } = useInView();

  const {
    data,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["images"],
    queryFn: fetchImages,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.length ? allPages.length + 1 : undefined;
      return nextPage;
    },
  });

  const content = data?.pages?.map((page) =>
    page.map((item, index) => {
      console.log(item);
      if (page.length == index + 1) {
        console.log("dlf");
        return <ImageCard innerRef={ref} key={item.id} pic={item} />;
      }
      return <ImageCard key={item.id} pic={item} />;
    })
  );

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage, searchQuery]);

  if (status === "pending") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="bg-[#222] ">
      <div className="grid grid-cols-4 gap-2 mx-auto w-max">{content}</div>
      {isFetchingNextPage && <div className="py-20 text-center"><span class="loader"></span></div>}
    </div>
  );
}


export default SearchImage;
