/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';
import { getCategoryData } from './page';
export const size = {
  width: 1200,
  height: 630,
};
export const alt = 'Expolorer | Blog';
export const contentType = 'image/png';

export default async function og({
  params: { category, lang },
}: {
  params: { category: string; lang: string };
}) {
  // Get Data from CMS
  const categoryData = await getCategoryData(category, lang);

  return new ImageResponse(
    (
      <div tw="relative flex w-full h-full flex items-center justify-center">
        {/* Background */}
        <div tw="absolute flex inset-0">
          <img
            tw="flex flex-1 object-cover w-full h-full object-center"
            src="http://login.girirajmanipokharel.com:8055/assets/1aaff261-d30f-461c-9754-e14d3bf5e0f2?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA5M2QwZGRiLTcwMmMtNGZkYS1iYjQ1LWU1MzIxN2VlODY5MCIsInJvbGUiOiI5ZmY5Njk3Ni0zYzZiLTQwZTMtYTg0Mi0wZWRlOWU3YTc3MDkiLCJhcHBfYWNjZXNzIjoxLCJhZG1pbl9hY2Nlc3MiOjEsImlhdCI6MTcwMDU2MzM1NSwiZXhwIjoxNzAwNTY0MjU1LCJpc3MiOiJkaXJlY3R1cyJ9.y_Ffmorg3clc0k1KSUPfqjqdnN_4sCNCyHopPqxv6uE"
            alt="Explorer"
          />
          {/* Overlay */}
          <div
            tw={`absolute flex inset-0 bg-opacity-80 ${
              categoryData?.title === 'Programming' ||
              categoryData?.title === 'Programming'
                ? 'bg-emerald-600'
                : 'bg-indigo-600'
            }`}
          />
        </div>
        <div tw="flex flex-col text-white">
          {/* Title */}
          <div tw="text-[60px]">{categoryData?.title}</div>
          {/* Description */}
          <div tw="text-3xl max-w-4xl">{categoryData?.description}</div>
        </div>
      </div>
    ),
    size
  );
}
