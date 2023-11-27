'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SocialLink from '../elements/social-link';
import development from '../assets/hero-image.png';
const HeroCard = () => {
  return (
    <div className="rounded-md bg-stone-100  py-10 px-6 relative overflow-hidden">
      <div className="absolute grid grid-cols-1 inset-0 z-10 bg-gradient-to-br from-white/95 via-white/70 to-white/30" />
      <Image
        src="https://images.unsplash.com/photo-1672600830594-ae4ccc159578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1263&q=80"
        fill
        alt="CTA Card Image"
        className="object-cover object-center"
      />
      {/*Content contaier*/}

      <div className="justify-between relative z-20">
        <div className="flex items-center col-span-2 justify-between py-10 ">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <h3 className="mt-0 text-4xl font-semibold">
              {' '}
              नेपाल कम्युनिष्ट पार्टी (माओवादी केन्द्र)
            </h3>
            <div className="px-2 py-1 font-bold rounded-md text-rose-600 ">
              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  'गिरिराजमणि पोखरेल:उपमहासचिव,  ',
                  1500,
                  'गिरिराजमणि पोखरेल:केन्द्रीय पार्टी स्कूल विभाग प्रमुख ',
                  1000,
                  'गिरिराजमणि पोखरेल:केन्द्रीय पार्टी सम्पर्क समन्वय प्रदेश समिति इन्चार्ज', // initially rendered starting point
                  1000,
                  'गिरिराजमणि पोखरेल:पूर्व शिक्षा, विज्ञान, प्रविधि, स्वास्थ्य',
                  1000,
                  'गिरिराजमणि पोखरेल:जनसंख्या मन्त्री संविधानसभा सदस्य संस्थापक अध्यक्ष अधारशिला',
                  500,
                ]}
                speed={50}
                style={{ fontSize: '1.5em' }}
                repeat={Infinity}
              />
            </div>

            <p className="max-w-lg mt-2 text-lg">
              आफूलाई बुझ्ने र आफ्नो परिवेशलाई बुझ्ने यात्रामा अघि बढौं
            </p>
            <div>
              <Link
                href="/"
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
              >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </Link>
              <Link
                href="/"
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
              >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </Link>
            </div>

            <div className="mt-5 text-neutral-700">
              उपमहासचिव, केन्द्रीय पार्टी स्कूल विभाग प्रमुख तथा सम्पर्क समन्वय
              प्रदेश समिति इन्चार्ज नेपाल कम्युनिष्ट पार्टी (माओवादी केन्द्र){' '}
              पूर्व शिक्षा, विज्ञान, प्रविधि, स्वास्थ्य, जनसंख्या मन्त्री
              संविधानसभा सदस्य संस्थापक अध्यक्ष अधारशिला
              <div className="px-2 py-1 font-bold rounded-md text-rose-600">
                {' '}
                नेपाल कम्युनिष्ट पार्टी (माओवादी केन्द्र)
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0"
          >
            <div className="rounded-full bg-yellow-200 hover:from-pink-500 hover:to-yellow-500 ...w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] ss::hidden relative ">
              <Image
                src={development}
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={350}
                height={250}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
