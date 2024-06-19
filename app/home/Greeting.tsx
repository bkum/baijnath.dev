import clsx from 'clsx'
import Emoji from '@/components/Emoji'

const divStyle = {
  display: 'inline-block',
  backgroundImage: 'url(https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f44b.svg)',
  margin: '0 .1em',
  height: '1em',
  width: '1em',
  'vertical-align': '-.1em',
  'background-repeat': 'no-repeat',
  'background-position': '50%',
  'background-size': '1em 1em',
}

export function Greeting() {
  const className = clsx(
    'bg-gradient-to-r from-yellow-600 to-red-600 dark:bg-gradient-to-l dark:from-emerald-500 dark:to-lime-600',
    'bg-clip-text text-4xl font-extrabold leading-[60px] tracking-tight text-transparent md:text-7xl md:leading-[86px]'
  )

  return (
    <div className={className}>
      Hello, visitor! <Emoji emoji={'waving-hand'}></Emoji>
    </div>
  )
}

export default Greeting
