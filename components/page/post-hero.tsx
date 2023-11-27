import { page } from '@/types/collection';
import Image from 'next/image';
import PostContent from './post-content';

interface PostHeroProps {
  page: page;
  locale: string;
}
const PostHero = ({ page, locale }: PostHeroProps) => {
  return (
    <div>
      <PostContent locale={locale} isPostPage page={page} />
      <Image
        priority
        className="rounded-md object-cover object-center h-[300px] md:h-[500px] mt-6"
        src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${page.image}?key=optimised`}
        width={1280}
        height={500}
        alt={page.title}
      />
    </div>
  );
};

export default PostHero;
