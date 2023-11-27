import directus from '@/lib/directus';
import { getDictionary } from '@/lib/getDictionary';
import { error } from 'console';
import { revalidateTag } from 'next/cache';
import Image from 'next/image';
import React from 'react';

export const CTACard = async ({ locale }: { locale: string }) => {
  const dictionary = await getDictionary(locale);
  const formAction = async (fomrData: FormData) => {
    'use server';
    try {
      const email = fomrData.get('email');
      await directus.items('subscribers').createOne({
        email,
      });
      revalidateTag('subscribers-count');
    } catch (error) {
      console.log(error);
    }
  };
  const subscribersCount = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}items/subscribers?meta=total_count&access_token=${process.env.ADMIN_TOKEN}`,
    {
      next: {
        tags: ['subscribers-count'],
      },
    }
  )
    .then((res) => res.json())
    .then((res) => res.meta.total_count)
    .catch((error) => console.log(error));
  return (
    <div className="rounded-md bg-stone-100 py-10 px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/95 via-white/70 to-white/30" />

      <Image
        fill
        alt="CTA Card Image"
        className="object-cover object-center"
        src="https://images.unsplash.com/photo-1672600830594-ae4ccc159578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1263&q=80"
      />
      {/*Content contaier*/}
      <div className="relative z-20">
        <h3 className="mt-3 text-4xl font-semibold">
          {dictionary.ctaCard.title}{' '}
        </h3>
        <p className="max-w-lg mt-2 text-lg">
          {dictionary.ctaCard.description}
        </p>
        <form
          key={subscribersCount + 'subscribers-form'}
          //action={formAction}
          className="flex items-center w-full gap-2 mt-6"
        >
          <input
            type="email"
            name="email"
            placeholder={dictionary.ctaCard.placeholder}
            className=" px-3 py-2 text-base rounded-md outline-none placeholder:text-sm bg-white/80 focus:ring-2 ring-neutral-600"
          />
          <button className="bg-neutral-900 px-3 py-2 rounded-md text-neutral-200">
            {dictionary.ctaCard.button}
          </button>
        </form>
        <div className="mt-5 text-neutral-700">
          {dictionary.ctaCard.subscriberText1}{' '}
          <span className="px-2 py-1 text-sm bg-neutral-700 rounded-md text-neutral-100">
            {subscribersCount}
          </span>{' '}
          {dictionary.ctaCard.subscriberText2}
        </div>
      </div>
    </div>
  );
};

export default CTACard;
