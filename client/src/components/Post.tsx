import { NewsType } from "../utils/types"

const Post = ({ news }: { news: NewsType }) => {
  return (
    <div className="border p-4">
        <h2 className="font-semibold text-2xl">{news.heading}</h2>
        <div>{news.description}</div>
    </div>
  )
}

export default Post