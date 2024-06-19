import siteMetadata from '@/data/siteMetadata'

import Greeting from './home/Greeting'
import Heading from './home/Heading'
import TypedBios from './home/TypedBios'
import ShortDescription from './home/ShortDescription'
import { Emoji } from '@/components/Emoji'
import { ProfileCard } from './home/ProfileCard'
import BlogLinks from './home/BlogLinks'

const MAX_DISPLAY = 3

export default function Home({ posts }) {
  const { headerTitle, title, description } = siteMetadata

  return (
    <div className="mt-8 divide-y divide-gray-200 dark:divide-gray-700 md:mt-16">
      <div className="space-y-2 md:my-4 md:space-y-5 md:pb-8 md:pt-6 xl:grid xl:grid-cols-3">
        <div className="space-y-6 md:space-y-8 md:pr-8 xl:col-span-2">
          <Greeting />
          <div className="text-base leading-7 text-gray-600 dark:text-gray-400 md:text-lg md:leading-8">
            <Heading />
            <TypedBios />
            <ShortDescription />
            <BlogLinks />
            <p className="my-3 flex">
              <span className="mr-2">Happy reading</span>
              <Emoji emoji="clinking-beer-mugs" />
            </p>
          </div>
        </div>
        <div className="hidden xl:block">
          <ProfileCard />
        </div>
      </div>
    </div>
  )
}
