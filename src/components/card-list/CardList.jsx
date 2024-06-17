import {useQuery} from "@tanstack/react-query"
import Card from "../card/Card"
import { getPosts } from "../../api"

export default function CardList() {
    const {data,isLoading,isError} = useQuery({queryKey:"post",queryFn:getPosts})
  return (
    <div>
      {data?.map((post) => (
        <Card
          key={post.id}
          title={post.title}
          feed={post.feed}
          subFeed={post.subFeed}
          author={post.author.name}
          companyName={post.author.companyName}
          authorImage={post.author.imageUrl}
          publicationTime={post.publicationTime}
          content={post.content}
        ></Card>
      ))}
    </div>
  );
}
