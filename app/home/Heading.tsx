import siteMetadata from '@/data/siteMetadata'
import { Emoji } from '@/components/Emoji'

function getFlagEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt())
  return String.fromCodePoint(...codePoints)
}

const Heading = () => {
  return (
    <h1 className="font-medium text-neutral-900 dark:text-neutral-200">
      I'm <span>{siteMetadata.author}</span> - a <span>Software Engineer</span> & a{' '}
      <span>Father</span> from <span className="hidden">Bangalore, India</span>
      <span className="absolute ml-1.5 inline-flex pt-[3px]">
        <Emoji emoji="flag-india" />
      </span>
    </h1>
  )
}

export default Heading
