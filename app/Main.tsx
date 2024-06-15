import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'


import Image from '@/components/Image';
import Greeting from './home/Greeting';
import Heading from './home/Heading';
import TypedBios from './home/TypedBios';
import ShortDescription from './home/ShortDescription';
import { Twemoji } from './home/Twemoji'
import { ProfileCard } from './home/ProfileCard'
import BlogLinks from './home/BlogLinks'

const MAX_DISPLAY = 3;


export default function Home({ posts }) {
  const { headerTitle, title, description } = siteMetadata;

  return (
    <div className="mt-8 divide-y divide-gray-200 dark:divide-gray-700 md:mt-16">
        <div className="space-y-2 md:my-4 md:space-y-5 md:pb-8 md:pt-6 xl:grid xl:grid-cols-3">
          <div className="md:pr-8 xl:col-span-2 space-y-6 md:space-y-8">
            <Greeting />
            <div className="text-base leading-7 md:text-lg md:leading-8 text-gray-600 dark:text-gray-400">
              <Heading />
              <TypedBios />
              <ShortDescription />
              <BlogLinks/>
              <p className="my-3 flex">
                <span className="mr-2">Happy reading</span>
                <Twemoji emoji="clinking-beer-mugs" />
              </p>
              
            </div>
          </div>
          <div className="hidden xl:block">
            <ProfileCard />
          </div>
        </div>
      </div>
  );
}