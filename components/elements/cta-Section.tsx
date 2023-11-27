'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { assets } from '@/utils/asset-utils';
import { type Framework, frameworks } from '@/utils/framework-utils';
import { cn } from '@/utils/tailwind-utils';
import { FrameworkRotation } from '@/components/framework-rotation';
import { Poppins } from 'next/font/google';
import development from '../assets/main.jpg';

const poppins = Poppins({
  weight: '700',
  subsets: ['latin'],
});
const CTASECTION = () => {
  const [currentFramework, setCurrentFramework] = useState<Framework>(
    frameworks[0]
  );

  useEffect(() => {
    let currentIndex = 0;
    const rotateFrameworks = () => {
      setCurrentFramework(frameworks[currentIndex]);
      currentIndex = (currentIndex + 1) % frameworks.length;
    };
    const intervalId = setInterval(rotateFrameworks, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main>
      {/* Background color */}

      {/* Content */}
      <div className="rounded-md bg-stone-100 py-10 px-6 relative overflow-hidden">
        <div className="inset-0 transition-color delay-100 duration-700 opacity-25" />
        <Image
          fill
          alt="CTA Card Image"
          className="object-cover object-center"
          src={development}
        />
        <div className="flex flex-col items-center relative z-10">
          {/* Heading */}
          <h1
            className={`text-4xl max-w-3xl text-center leading-snug mb-12 ${poppins.className}`}
          >
            <Image
              alt="Figma logo"
              className="inline-block mr-8 -mt-2"
              src={assets.figma}
              width="50"
              height="50"
            />
            today’s most
            <FrameworkRotation currentFramework={currentFramework} /> will{' '}
            <span
              className={cn('transition-colors duration-200', {
                'text-purple-300': currentFramework === 'qwik',
                'text-sky-300': currentFramework === 'safari',
                'text-yellow-300': currentFramework === 'chrome',
                'text-teal-300': currentFramework === 'tailwind',
                'text-blue-300': currentFramework === 'react',
                'text-green-300': currentFramework === 'vue',
                'text-orange-400': currentFramework === 'svelte',
                'text-red-300': currentFramework === 'mobile',
                'text-neutral-300': currentFramework === 'desktop',
              })}
            >
              गिरिराजमणि पोखरेल
            </span>{' '}
            be the same again
          </h1>
          {/* Sub heading */}
          <p className="mb-8">
            <span className="text-gray-300">
              आफूलाई बुझ्ने र आफ्नो परिवेशलाई बुझ्ने यात्रामा अघि बढौं{' '}
            </span>
            <Image
              alt="Builder.io logo"
              className="inline-block ml-1 -mt-1"
              width={100}
              height={20}
              src={assets.builder}
            />
            {' + '}
            <Image
              alt="Figma logo"
              className="inline-block mx-1"
              width={55}
              height={20}
              src={assets.figmatwo}
            />
          </p>
          {/* Claim ticket button */}
          <div className="mb-8"></div>
          {/* Countdown timer */}
        </div>
      </div>
    </main>
  );
};
export default CTASECTION;
