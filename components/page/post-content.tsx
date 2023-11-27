import { getDictionary } from '@/lib/getDictionary';
import { getReadingTime, getRelativeDate } from '@/lib/helpers';
import { page } from '@/types/collection';
import { ArrowRight } from 'lucide-react';

interface PostContentProps {
  page: page;
  isPostPage?: boolean;
  locale: string;
}
const PostContent = async ({
  page,
  isPostPage = false,
  locale,
}: PostContentProps) => {
  const dictionary = await getDictionary(locale);
  return (
    <div className="space-y-2">
      {/* Tags */}
      <div
        className={`flex items-center flex-wrap gap-2  text-neutral-400 ${
          isPostPage ? 'text-sm' : 'text-xs @md:text-sm'
        }`}
      >
        <div
          className={`font-medium ${
            page.category.title === 'Cities'
              ? 'text-emerald-600'
              : 'text-indigo-600'
          }`}
        >
          {page.category.title}
        </div>
        <div className="w-2 h-2 rounded-full bg-neutral-200" />
        <div>{`${page.author.first_name} ${page.author.last_name}`}</div>
        <div className="w-2 h-2 rounded-full bg-neutral-200" />
        <div>{getReadingTime(page.body, locale)}</div>
        <div className="w-2 h-2 rounded-full bg-neutral-200" />
        <div>{getRelativeDate(page.date_created, locale)}</div>
      </div>
      {/* Title */}
      <h2
        className={`${
          isPostPage
            ? 'text-2xl md:text-3xl lg:text-4xl font-bold'
            : '@lg:text-3xl text-xl @md:text-2xl font-medium'
        } `}
      >
        {page.title}
      </h2>
      {/* Description */}
      <p className="text-base @lg:text-lg leading-snug text-neutral-600">
        {page.description}
      </p>
      {/* Read More */}
      {!isPostPage && (
        <div className="flex items-center gap-2 pt-3">
          {dictionary.buttons.readMore} <ArrowRight size="14" />
        </div>
      )}
    </div>
  );
};

export default PostContent;
