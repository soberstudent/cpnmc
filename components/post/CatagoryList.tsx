import React from "react";
import { getDictionary } from "@/lib/getDictionary";
import Link from "next/link";
import PaddingContainer from "../layout/padding-container";
import { TableProperties } from "lucide-react";
import Image from "next/image";
import development from "../assets/database-icon.svg";

const CategoryList = async ({ locale }: { locale: string }) => {
  const dictionary = await getDictionary(locale);
  return (
    <div className="w-full bg-blue-50 p-6">
    <h1 className="font-bold text-xl text-center md:text-3xl md:mt-2 mb-4">
      Check out the <span className="text-red-500">Categories</span> of our
      Materials
    </h1>
      <PaddingContainer>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 w-full">

  <div className="relative p-1 w-full bg-white rounded-lg overflow-hidden hover:shadow flex flex-col justify-center items-center"
	   //style="min-height: 160px"
	   >
	<div className=" bg-gray-100 rounded-lg">

  </div>
  <h2 className=" text-gray-800 text-sm font-semibold  text-center">
  <Link href={`/${locale}/programming`}>
              <Image
                className="h-25 m-2"
                src={development}
                alt="TutorialsMaterials"
              />
	
  {dictionary.navigation.links.programming}
  </Link>
	</h2>
  
  </div>

  <div className="relative p-1 w-full bg-white rounded-lg overflow-hidden hover:shadow flex flex-col justify-center items-center"
	   //style="min-height: 160px"
	   >
	<div className=" bg-gray-100 rounded-lg">

  </div>
  <h2 className="mt-1 text-gray-800 text-sm font-semibold line-clamp-1 text-center">

  <Link href={`/${locale}/programming`}>
              <Image
                className="h-25 m-2"
                src={development}
                alt="TutorialsMaterials"
              />
  {dictionary.navigation.links.programming}
  </Link>
	</h2>
  
  </div>

  <div className="relative p-1 w-full bg-white rounded-lg overflow-hidden hover:shadow flex flex-col justify-center items-center"
	   //style="min-height: 160px"
	   >
	<div className=" bg-gray-100 rounded-lg">

  </div>
  <h2 className=" text-gray-800 text-sm font-semibold  text-center">
  <Link href={`/${locale}/programming`}>
              <Image
                className="h-25 m-2"
                src={development}
                alt="TutorialsMaterials"
              />
	
  {dictionary.navigation.links.programming}
  </Link>
	</h2>
  
  </div>

  <div className="relative p-1 w-full bg-white rounded-lg overflow-hidden hover:shadow flex flex-col justify-center items-center"
	   //style="min-height: 160px"
	   >
	<div className=" bg-gray-100 rounded-lg">

  </div>
  <h2 className=" text-gray-800 text-sm font-semibold  text-center">
  <Link href={`/${locale}/programming`}>
              <Image
                className="h-25 m-2"
                src={development}
                alt="TutorialsMaterials"
              />
	
  {dictionary.navigation.links.programming}
  </Link>
	</h2>
  
  </div>

  <div className="relative p-1 w-full bg-white rounded-lg overflow-hidden hover:shadow flex flex-col justify-center items-center"
	   //style="min-height: 160px"
	   >
	<div className=" bg-gray-100 rounded-lg">

  </div>
  <h2 className=" text-gray-800 text-sm font-semibold  text-center">
  <Link href={`/${locale}/programming`}>
              <Image
                className="h-25 m-2"
                src={development}
                alt="TutorialsMaterials"
              />
	
  {dictionary.navigation.links.programming}
  </Link>
	</h2>
  
  </div>

  <div className="relative p-1 w-full bg-white rounded-lg overflow-hidden hover:shadow flex flex-col justify-center items-center"
	   //style="min-height: 160px"
	   >
	<div className=" bg-gray-100 rounded-lg">

  </div>
  <h2 className=" text-gray-800 text-sm font-semibold  text-center">
  <Link href={`/${locale}/programming`}>
              <Image
                className="h-25 m-2"
                src={development}
                alt="TutorialsMaterials"
              />
	
  {dictionary.navigation.links.programming}
  </Link>
	</h2>
  
  </div>
  <div className="relative p-1 w-full bg-white rounded-lg overflow-hidden hover:shadow flex flex-col justify-center items-center"
	   //style="min-height: 160px"
	   >
	<div className=" bg-gray-100 rounded-lg">

  </div>
  <h2 className=" text-gray-800 text-sm font-semibold  text-center">
  <Link href={`/${locale}/programming`}>
              <Image
                className="h-25 m-2"
                src={development}
                alt="TutorialsMaterials"
              />
	
  {dictionary.navigation.links.programming}
  </Link>
	</h2>
  
  </div>
  <div className="relative p-1 w-full bg-white rounded-lg overflow-hidden hover:shadow flex flex-col justify-center items-center"
	   //style="min-height: 160px"
	   >
	<div className=" bg-gray-100 rounded-lg">

  </div>
  <h2 className=" text-gray-800 text-sm font-semibold  text-center">
  <Link href={`/${locale}/programming`}>
              <Image
                className="h-25 m-2"
                src={development}
                alt="TutorialsMaterials"
              />
	
  {dictionary.navigation.links.programming}
  </Link>
	</h2>
  
  </div>
</div>
      </PaddingContainer>
    </div>
  );
};

export default CategoryList;
