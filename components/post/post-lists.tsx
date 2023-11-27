import React from 'react'
import { Post } from '@/types/collection'
import PostCard from '@/components/post/post-card';
interface PostListProps{
posts:Post[];
layout?:"vertical" | "horizontal";
locale:string;

}
const PostList = ({posts,layout="vertical",locale} :PostListProps) => {
  return (
   <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-flow-col lg:auto-cols-fr">
    {posts.map((post)=>(
   <PostCard locale={locale} layout={layout} post={post} key={post.id}/>
  ))}
   
   </div>
  );
};

export default PostList;