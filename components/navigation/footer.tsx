import siteConfig from '@/config/site';
import React from 'react';
import PaddingContainer from '../layout/padding-container';
import SocialLink from '../elements/social-link';
import { getDictionary } from '@/lib/getDictionary';
import Link from 'next/link';

const Footer = async ({ locale }: { locale: string }) => {
  const dictionary = await getDictionary(locale);
  return (
    <div className="py-8 mt-10 border-t">
      <PaddingContainer>
        <div>
          <h2 className="text-lg font-bold">{dictionary.footer.siteName} </h2>
          <p className="max-w-md mt-2 text-neutral-600">
            {dictionary.footer.description}{' '}
          </p>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 mt-16 border-t">
          <div className="text-sm text-neutral-400">
            {dictionary.footer.rightsText} {new Date().getFullYear()}
          </div>
          <div className="text-sm">
            <div>
              <div className="flex items-center gap-2 mt-2 text-red-500">
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
          </div>
        </div>
      </PaddingContainer>
    </div>
  );
};

export default Footer;
