import { page } from '@/types/collection';
import Image from 'next/image';
import Link from 'next/link';
import PostContent from './post-content';

interface PostProps {
  page: page;
  layout?: 'vertical' | 'horizontal';
  reverse?: boolean;
  locale: string;
}

const PostCard = ({
  page,
  layout = 'horizontal',
  reverse = false,
  locale,
}: PostProps) => {
  return (
    <Link
      className={`@container ${
        layout === 'horizontal'
          ? 'grid items-center grid-cols-1 md:grid-cols-2 gap-10'
          : 'space-y-10'
      } `}
      href={`/${locale}/page/${page.slug}`}
    >
      {/* Post Image */}
      <Image
        className={`rounded-md w-full object-cover object-center h-full max-h-[300px] ${
          reverse ? 'md:order-last' : ''
        }`}
        alt={page.title}
        src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${page.image}?key=optimised`}
        width={600}
        height={300}
      />
      {/* Post Content */}
      <PostContent locale={locale} page={page} />
    </Link>
  );
};

export default PostCard;
