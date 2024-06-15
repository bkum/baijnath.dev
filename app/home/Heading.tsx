import siteMetadata from '@/data/siteMetadata'
import { Twemoji } from './Twemoji'

const Heading = () => {
  return (
    <h1 className="font-medium text-neutral-900 dark:text-neutral-200">
      I'm <span>{siteMetadata.author}</span> - a <span>Software Engineer</span> & a{' '}
      <span>Father</span> from <span className="hidden">Bangalore, India</span>
      <span className="absolute ml-1.5 inline-flex pt-[3px]">
        <Twemoji emoji="flag-india" />
      </span>
    </h1>
  )
}

export default Heading
