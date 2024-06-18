import { useQuery } from "@tanstack/react-query";
import PostCard from "../post-card/PostCard";
import { getPosts } from "../../api";
import { useSearchParams } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import "./CardList.css";

export default function CardList() {
  const { data, isLoading } = useQuery({
    queryKey: ["post"],
    queryFn: getPosts,
  });
  const [searchParams] = useSearchParams();

  const filter = searchParams.get("filter");

  if (isLoading) {
    return (
      <div className="card-list-spinner">
        <Spinner></Spinner>
      </div>
    );
  }

  if (filter === "popular") {
    return (
      <div>
        {data
          ?.filter((post) => post.isPopular === true)
          .map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              feed={post.feed}
              subFeed={post.subFeed}
              author={post.author.name}
              companyName={post.author.companyName}
              authorImage={post.author.imageUrl}
              publicationTime={post.publicationTime}
              content={post.content}
            ></PostCard>
          ))}
      </div>
    );
  }

  if (filter === "latest") {
    return (
      <div>
        {data
          ?.sort(
            (a, b) => new Date(b.publicationTime) - new Date(a.publicationTime)
          )
          .map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              feed={post.feed}
              subFeed={post.subFeed}
              author={post.author.name}
              companyName={post.author.companyName}
              authorImage={post.author.imageUrl}
              publicationTime={post.publicationTime}
              content={post.content}
            ></PostCard>
          ))}
      </div>
    );
  }

  return (
    <div>
      {data?.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          feed={post.feed}
          subFeed={post.subFeed}
          author={post.author.name}
          companyName={post.author.companyName}
          authorImage={post.author.imageUrl}
          publicationTime={post.publicationTime}
          content={post.content}
        ></PostCard>
      ))}
    </div>
  );
}
