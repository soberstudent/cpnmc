import CTACard from '@/components/elements/cta-card';
import SocialLink from '@/components/elements/social-link';
import PaddingContainer from '@/components/layout/padding-container';
import PostBody from '@/components/page/post-body';
import PostHero from '@/components/page/post-hero';
import siteConfig from '@/config/site';
import directus from '@/lib/directus';
import { getDictionary } from '@/lib/getDictionary';
import { notFound } from 'next/navigation';
import { cache } from 'react';

// Get Post Data
export const getPostData = cache(async (postSlug: string, locale: string) => {
  try {
    const Page = await directus.items('page').readByQuery({
      filter: {
        slug: {
          _eq: postSlug,
        },
      },
      fields: [
        '*',
        'category.id',
        'category.title',
        'auhtor.id',
        'author.first_name',
        'author.last_name',
        'translations.*',
        'category.translations.*',
      ],
    });

    const postData = Page?.data?.[0];

    if (locale === 'np') {
      return postData;
    } else {
      const localisedPostData = {
        ...postData,
        title: postData?.translations?.[0]?.title,
        description: postData?.translations?.[0]?.description,
        body: postData?.translations?.[0]?.body,
        category: {
          ...postData?.category,
          title: postData?.category?.translations?.[0]?.title,
        },
      };

      return localisedPostData;
    }
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching post');
  }
});

// Generate Metadata Function
export const generateMetadata = async ({
  params: { slug, lang },
}: {
  params: {
    slug: string;
    lang: string;
  };
}) => {
  // Get Post Data from Directus
  const page = await getPostData(slug, lang);

  return {
    title: page?.title,
    description: page?.description,
    openGraph: {
      title: page?.title,
      description: page?.description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/page/${slug}`,
      siteName: page?.title,
      /* images: [
        {
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/post/${slug}/opengraph-image.png`,
          width: 1200,
          height: 628,
        },
      ], */
      locale: lang,
      type: 'website',
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/page/${slug}`,
      languages: {
        'en-US': `${process.env.NEXT_PUBLIC_SITE_URL}/en/page/${slug}`,
        //"de-DE": `${process.env.NEXT_PUBLIC_SITE_URL}/de/post/${slug}`,
      },
    },
  };
};

// Generate Static Params Function
export const generateStaticParams = async () => {
  /* return DUMMY_POSTS.map((post) => {
    return {
      slug: post.slug,
    };
  }); */
  try {
    const page = await directus.items('page').readByQuery({
      filter: {
        status: {
          _eq: 'published',
        },
      },
      fields: ['slug'],
    });

    const params = page?.data?.map((page) => {
      return {
        slug: page.slug as string,
        lang: 'en',
      };
    });

    const localisedParams = page?.data?.map((page) => {
      return {
        slug: page.slug as string,
        lang: 'np',
      };
    });

    // Concat Localised and Regular Params
    //const allParams = params?.concat(localisedParams ?? []);

    return params || [];
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching posts');
  }
};

const Page = async ({
  params,
}: {
  params: {
    slug: string;
    lang: string;
  };
}) => {
  /*   const post = DUMMY_POSTS.find((post) => post.slug === params.slug); */

  const locale = params.lang;
  const postSlug = params.slug;

  const page = await getPostData(postSlug, locale);

  /* Structured Data for Google */
  const jsonLd = {
    context: 'https://schema.org',
    type: 'Article',
    headline: page.title,
    image: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/page/${postSlug}/opengraph-image.png`,
    author: page.author.first_name + ' ' + page.author.last_name,
    genre: page.category.title,
    publisher: siteConfig.siteName,
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/page/${postSlug}`,
    datePublished: new Date(page.date_created).toISOString(),
    dateCreated: new Date(page.date_created).toISOString(),
    dateModified: new Date(page.date_updated).toISOString(),
    description: page.description,
    articleBody: page.body,
  };

  // If there is no post found, return 404
  if (!page) {
    notFound();
  }

  const dictionary = await getDictionary(locale);

  return (
    <PaddingContainer>
      {/* Add JSON-LD to your page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Container */}
      <div className="space-y-10">
        {/* Post Hero */}
        <PostHero locale={locale} page={page} />
        {/* Post Body and Social Share */}
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="relative">
            <div className="sticky flex items-center gap-5 md:flex-col top-20">
              <div className="font-medium md:hidden">Share this content:</div>
              <SocialLink
                isShareURL
                platform="facebook"
                link={`https://www.facebook.com/sharer/sharer.php?u=${`${process.env.NEXT_PUBLIC_SITE_URL}/page/${page.slug}`}`}
              />
              <SocialLink
                isShareURL
                platform="twitter"
                link={`https://twitter.com/intent/tweet?url=${`${process.env.NEXT_PUBLIC_SITE_URL}/page/${page.slug}`}`}
              />
              <SocialLink
                isShareURL
                platform="linkedin"
                link={`https://www.linkedin.com/shareArticle?mini=true&url=${`${process.env.NEXT_PUBLIC_SITE_URL}/page/${page.slug}`}`}
              />
            </div>
          </div>
          <PostBody body={page.body} />
        </div>
        {/* CTA Card */}
        {/* ---@ts-expect-error Async Server Component */}
        <CTACard locale={locale} />
      </div>
    </PaddingContainer>
  );
};

export default Page;
