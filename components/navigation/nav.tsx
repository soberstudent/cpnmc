import Image from 'next/image';
import { getDictionary } from '@/lib/getDictionary';
import Link from 'next/link';
import PaddingContainer from '../layout/padding-container';
import { TableProperties } from 'lucide-react';
import React from 'react';
import { Code2, Home } from 'lucide-react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

import logo from '../assets/logo.png';

const Navbar = async ({ locale }: { locale: string }) => {
  const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
  ];
  const dictionary = await getDictionary(locale);
  return (
    <div className="sticky top-0 z-[999] right-0bg-gradient-to-r from-cyan-500 to-blue-500 ... border-b bg-opacity-90 backdrop-blur-md">
      <PaddingContainer>
        <div className="flex items-center justify-between gap-x-6  ">
          <div className="flex items-center uppercase justify-between py-1">
            <Link href={`/${locale}`}>
              <Image
                width="280"
                height="200"
                src={logo}
                alt="Communist Party of Nepal (Maoist Centre)"
              />
            </Link>
          </div>
          <div className="hidden lg:flex lg:gap-x-5">
            <nav>
              <ul className="hidden md:flex items-center gap-2 text-neutral-600">
                <li>
                  <Link
                    className="flex items-center gap-1 mt-1  lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900"
                    href={`/${locale}`}
                  >
                    {dictionary.navigation.links.index}
                  </Link>
                </li>
                <div className="flex relative items-center">
                  <div className="sticky top-0  z-[999] group ">
                    <button className="outline-none focus:outline-none  px-1  rounded-sm flex items-center ">
                      <span className="pflex items-center gap-1 mt-1  lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900 ">
                        <Link
                          className="flex items-center gap-1 mt-1  lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900"
                          href={`/${locale}/page/biography`}
                        >
                          {dictionary.MaoistCentre.links.biography}
                        </Link>
                      </span>
                    </button>
                  </div>
                  <div className="sticky top-0  z-[999] group ">
                    <button className="outline-none focus:outline-none  px-1  rounded-sm flex items-center">
                      <span className="flex items-start gap-1 mt-2  lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900 ">
                        {dictionary.MaoistCentre.links.activity}
                      </span>
                      <span>
                        <svg
                          className="fill-current h-3 w-3 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                    </button>
                    <ul
                      className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top"
                    >
                      {' '}
                      <li className="hover:text-primary flex w-full justify-start px-2 py-1 hover:bg-red-100">
                        <Link
                          className="flex items-start lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900"
                          href={`/${locale}/school-department`}
                        >
                          {dictionary.navigation.links['school-department']}
                        </Link>
                      </li>
                      <li className="hover:text-primary flex w-full justify-start px-2 py-1 hover:bg-red-100">
                        <Link
                          className="flex items-start lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900"
                          href={`/${locale}/maoistcenter`}
                        >
                          {dictionary.navigation.links.maoistcenter}
                        </Link>
                      </li>
                      <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                        <Link
                          className="flex items-start lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900"
                          href={`/${locale}/school-department`}
                        >
                          {' '}
                          <span className="pr-1 flex-1">
                            {' '}
                            {dictionary.navigation.links['school-department']}
                          </span>
                        </Link>
                      </li>
                      <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                        <button className="w-full text-left flex items-center outline-none focus:outline-none">
                          <span className="pr-1 flex-1">Girirajmani</span>
                          <span className="mr-auto">
                            <svg
                              className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </ul>
            </nav>
          </div>

          <div className="flex flex-1 items-center justify-end gap-x-6">
            <a
              href="#"
              className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900"
            >
              Log in
            </a>
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </a>
          </div>
        </div>
      </PaddingContainer>
    </div>
  );
};

//items-center justify-between gap-x-6 p-6 lg:px-8

export default Navbar;
/*   
     {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}<div className="hidden lg:flex lg:gap-x-12">
            <nav className="gap-x-6">
              <ul className="hidden md:flex items-center gap-2 text-neutral-600">
                <li>
                  <Link
                    className="flex items-center gap-1 mt-1  lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900"
                    href={`/${locale}`}
                  >
                    <Home color="black" size="16" />
                    {dictionary.navigation.links.index}
                  </Link>
                </li>
                <li></li>
                <li>
                  <Link href={`/${locale}/programming`}>
                    {dictionary.navigation.links.programming}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/experiences`}>
                    {dictionary.navigation.links.experience}
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="sticky   top-0  z-[999] group hidden md:inline-block ">
              <button className="outline-none focus:outline-none gap-0  px-1 py-1  rounded-sm flex items-center min-w-32">
                <TableProperties size="15" />
                <span className="pr-0 font-semibold flex-0 ">Categories</span>
                <span>
                  <svg
                    className="fill-current h-3 w-3 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <ul
                className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
              >
                <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                  <Link href={`/${locale}/programming`}>
                    {dictionary.navigation.links.programming}
                  </Link>
                </li>
                <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                  <Link href={`/${locale}/experiences`}>
                    {dictionary.navigation.links.experience}
                  </Link>
                </li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button className="w-full text-left flex items-center outline-none focus:outline-none">
                    <span className="pr-1 flex-1">Langauges</span>
                    <span className="mr-auto">
                      <svg
                        className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                  </button>
                  <ul
                    className="bg-white border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
                  >
                    <li className="px-3 py-1 hover:bg-gray-100">Javascript</li>
                    <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                      <button className="w-full text-left flex items-center outline-none focus:outline-none">
                        <span className="pr-1 flex-1">Python</span>
                        <span className="mr-auto">
                          <svg
                            className="fill-current h-4 w-4
                transition duration-150 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </span>
                      </button>
                      <ul
                        className="bg-white border rounded-sm absolute top-0 right-0 
      transition duration-150 ease-in-out origin-top-left
      min-w-32
      "
                      >
                        <li className="px-3 py-1 hover:bg-gray-100">2.7</li>
                        <li className="px-3 py-1 hover:bg-gray-100">3+</li>
                      </ul>
                    </li>
                    <li className="px-3 py-1 hover:bg-gray-100">Go</li>
                    <li className="px-3 py-1 hover:bg-gray-100">Rust</li>
                  </ul>
                </li>
                <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                  Testing
                </li>
              </ul>
            </div>
          </div>
          
          -----------

          <div className="relative  md:hidden">
            <div className="sticky top-0  z-[999] group ">
              <button className="outline-none focus:outline-none gap-0  px-1 py-1  rounded-sm flex items-center min-w-32">
                <TableProperties size="15" />
                <span className="pr-0 font-semibold flex-0 ">Categorie</span>
                <span>
                  <svg
                    className="fill-current h-3 w-3 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <ul
                className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
              >
                <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                  <Link href={`/${locale}/programming`}>
                    {dictionary.navigation.links.programming}
                  </Link>
                </li>
                <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                  <Link href={`/${locale}/experiences`}>
                    {dictionary.navigation.links.experience}
                  </Link>
                </li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button className="w-full text-left flex items-center outline-none focus:outline-none">
                    <span className="pr-1 flex-1">Langauges</span>
                    <span className="mr-auto">
                      <svg
                        className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                  </button>
                  <ul
                    className="bg-white border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
                  >
                    <li className="px-3 py-1 hover:bg-gray-100">Javascript</li>
                    <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                      <button className="w-full text-left flex items-center outline-none focus:outline-none">
                        <span className="pr-1 flex-1">Python</span>
                        <span className="mr-auto">
                          <svg
                            className="fill-current h-4 w-4
                transition duration-150 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </span>
                      </button>
                      <ul
                        className="bg-white border rounded-sm absolute top-0 right-0 
      transition duration-150 ease-in-out origin-top-left
      min-w-32
      "
                      >
                        <li className="px-3 py-1 hover:bg-gray-100">2.7</li>
                        <li className="px-3 py-1 hover:bg-gray-100">3+</li>
                      </ul>
                    </li>
                    <li className="px-3 py-1 hover:bg-gray-100">Go</li>
                    <li className="px-3 py-1 hover:bg-gray-100">Rust</li>
                  </ul>
                </li>
                <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                  Testing
                </li>
              </ul>
            </div>
          </div>          
          
          
          
          
          */
