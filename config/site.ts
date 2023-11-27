export interface SiteConfig {
  siteName: string;
  description: string;
  currentlyAt: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    youtube: string;
    instagram: string;
  };
}

const siteConfig: SiteConfig = {
  siteName: 'गिरिराजमणि पोखरेल',
  description:
    'Former Health & population,Education,science & technology Minister. Leader-Maoist Center.',
  currentlyAt: 'Giriraj Mani Pokharel',
  socialLinks: {
    facebook: 'https://www.facebook.com/girirajmanipokharelofficial',
    twitter: 'https://twitter.com/giriajmani',
    youtube: 'https://www.youtube.com/@girirajmanipokharelofficial',
    instagram: 'https://www.instagram.com/girirajmanipokharel?',
  },
};

export default siteConfig;
