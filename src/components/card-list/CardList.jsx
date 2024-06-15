import {useQuery} from "@tanstack/react-query"
import { getPosts } from "../../api"

export default function CardList() {
    const {data,isLoading,isError} = useQuery({queryKey:"post",queryFn:getPosts})
  return (
    <div>
        {data?.map(
            (post)=>(
                <div>
                    {post.title}
                </div>
            )
        )}
    </div>
  )
}
