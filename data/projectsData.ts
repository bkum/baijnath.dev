interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'webMethods.io B2B',
    description: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    imgSrc: '/static/images/b2b-logo.svg',
    href: '/blog/b2b/webmethods-io-b2b',
  },
  {
    title: 'webMethods.io Integration AS2',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/as2-logo.jpg',
    href: '/blog/b2b/webmethods-io-as2',
  },
  {
    title: 'webMethods Module for EDI',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/what-is-edi.jpg',
    href: '/blog/b2b/webmethods-io-edi',
  },
  {
    title: 'DahadIndia',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/dahadindia.png',
    href: '/blog/dahadindia',
  },
]

export default projectsData
