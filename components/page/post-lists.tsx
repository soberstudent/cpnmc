import React from 'react';
import { page } from '@/types/collection';
import PostCard from '@/components/post/post-card';
interface PostListProps {
  page: page[];
  layout?: 'vertical' | 'horizontal';
  locale: string;
}
const PostList = ({ page, layout = 'vertical', locale }: PostListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-flow-col lg:auto-cols-fr">
      {page.map((page) => (
        <PostCard locale={locale} layout={layout} post={page} key={page.id} />
      ))}
    </div>
  );
};

export default PostList;
