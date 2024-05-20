import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import axios from "axios";
import ImageCard from "../components/ImageCard"

function Home() {
  const fetchImages = async ({ pageParam }) => {
    const API_KEY = "urdmHM6y3XNQaPgEt88QG0ZZWVs1YiN6CQBwZF3ICiYAK5GDHNvlqdgN";
    const res = await axios.get(`https://api.pexels.com/v1/search`, {
      params: { query: "plant", page: pageParam, per_page: 10, color:"#00ff00" },
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

  // console.log(data);

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
  }, [inView, hasNextPage, fetchNextPage]);

  if (status === "pending") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="bg-[#ddd] ">
      <div className="grid grid-cols-4 gap-2 mx-auto w-max">{content}</div>
      {isFetchingNextPage && <h3>Loading...</h3>}
    </div>
  );
}

export default Home;
