import { Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import PaddingContainer from '../layout/padding-container';
import siteConfig from '@/config/site';
import SocialLink from '../elements/social-link';
import LangSwitch from './lang-switch';
import Image from 'next/image';
import logo from '../assets/leadershead.png';

const NavigationSub = async ({ locale }: { locale: string }) => {
  return (
    <div className="sticky top-0 right-0 bg-emerald-400 border-b bg-opacity-90 backdrop-blur-md">
      <PaddingContainer>
        <div className="flex items-center justify-between  py-1">
          <ul className="flex items-center gap-3">
            <li>
              <Link
                className="flex items-center gap-1 mt-1 text-slate-950"
                href="/"
              >
                <Mail color="black" size="16" />
                <div className="hidden md:flex">mp.giriraj2070@gmail.com</div>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-1 mt-1 text-slate-950"
                href="/Development"
              >
                <Phone size="16" />
                <div className="hidden md:flex">+977 985-1104063</div>
              </Link>
            </li>
          </ul>

          {/*Catagory link*/}
          <nav>
            <ul className="flex items-center gap-1 text-neutral-600">
              <li className="md:flex">
                <LangSwitch locale={locale} />
              </li>

              <li>
                <div>
                  <div className="flex items-center gap-2 mt-1 text-slate-950">
                    <div className="font-medium hidden md:flex">Touch Us </div>
                    <SocialLink
                      platform="facebook"
                      link={siteConfig.socialLinks.facebook}
                    />
                    <SocialLink
                      platform="twitter"
                      link={siteConfig.socialLinks.twitter}
                    />
                    <SocialLink
                      platform="instagram"
                      link={siteConfig.socialLinks.instagram}
                    />
                    <SocialLink
                      platform="youtube"
                      link={siteConfig.socialLinks.youtube}
                    />{' '}
                  </div>
                </div>
              </li>
              <li>
                {' '}
                <div className="flex items-center uppercase justify-between py-1">
                  <Image
                    width="40"
                    src={logo}
                    alt="Communist Party of Nepal (Maoist Centre)"
                  />
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </PaddingContainer>
    </div>
  );
};

export default NavigationSub;
