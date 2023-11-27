import React from 'react';
import { getDictionary } from '@/lib/getDictionary';
import Link from 'next/link';
import PaddingContainer from '../layout/padding-container';
import { TableProperties } from 'lucide-react';
import Image from 'next/image';
import development from '../assets/biography.jpg';

const CategoryList = async ({ locale }: { locale: string }) => {
  const dictionary = await getDictionary(locale);
  return (
    <div className="w-full bg-blue-50 p-2">
      <h1 className="font-bold text-xl text-center md:text-3xl md:mt-5 mb-4">
        <span className="text-red-500">Category</span>
      </h1>
      <PaddingContainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-6 w-full  mb-4">
          <div
            className="relative p-2 w-full bg-white rounded-lg overflow-hidden hover:shadow flex flex-col justify-center items-center"
            //style="min-height: 160px"
          >
            <div className=" bg-gray-100 rounded-lg"></div>
            <Link href={`/${locale}/page/biography`}>
              <Image
                className="h-25"
                src={development}
                alt="TutorialsMaterials"
              />
              <h2 className="mt-2 text-gray-800 text-sm font-semibold line-clamp-1 text-center">
                {dictionary.MaoistCentre.links.biography}
              </h2>
            </Link>
          </div>

          <div
            className="relative p-4 w-full bg-white rounded-lg overflow-hidden hover:shadow flex flex-col justify-center items-center"
            //style="min-height: 160px"
          >
            <div className=" bg-gray-100 rounded-lg"></div>

            <h2 className="mt-2 text-gray-800 text-sm font-semibold line-clamp-1">
              <Link href={`/${locale}/maoistcenter`}>
                <Image
                  className="h-25"
                  src={development}
                  alt="TutorialsMaterials"
                />
                <h2 className="mt-2 text-gray-800 text-sm font-semibold line-clamp-1 text-center">
                  {dictionary.navigation.links.maoistcenter}
                </h2>
              </Link>
            </h2>
          </div>

          <div
            className="relative p-4 w-full bg-white rounded-lg overflow-hidden hover:shadow flex flex-col justify-center items-center"
            //style="min-height: 160px"
          >
            <h2 className="mt-2 text-gray-800 text-sm font-semibold line-clamp-1">
              <Link href={`/${locale}/school-department`}>
                <Image
                  className="h-25"
                  src={development}
                  alt="TutorialsMaterials"
                />
                <h2 className="mt-2 text-gray-800 text-sm font-semibold line-clamp-1 text-center">
                  {dictionary.navigation.links['school-department']}
                </h2>
              </Link>
            </h2>
          </div>
        </div>
      </PaddingContainer>
    </div>
  );
};

export default CategoryList;

/*  <div
            className="relative p-4 w-full bg-white rounded-lg overflow-hidden hover:shadow flex flex-col justify-center items-center"
            //style="min-height: 160px"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-lg"></div>

            <h2 className="mt-2 text-gray-800 text-sm font-semibold line-clamp-1">
              Category 4
            </h2>
          </div>

          <div
            className="relative p-4 w-full bg-white rounded-lg overflow-hidden hover:shadow flex flex-col justify-center items-center"
            //style="min-height: 160px"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-lg"></div>

            <h2 className="mt-2 text-gray-800 text-sm font-semibold line-clamp-1">
              Category 5
            </h2>
          </div>

          <div
            className="relative p-4 w-full bg-white rounded-lg overflow-hidden hover:shadow flex flex-col justify-center items-center"
            //style="min-height: 160px"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-lg"></div>

            <h2 className="mt-2 text-gray-800 text-sm font-semibold line-clamp-1">
              Category 6
            </h2>
          </div>*/
