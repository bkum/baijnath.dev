'use client'

import React from 'react'
import Typed from 'typed.js'

import { Twemoji } from './Twemoji'

const TypedBios = () => {
  const el = React.useRef(null)

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          I'm aliased as <b className="font-medium">bkum</b> at work.
        </li>
        <li>
          I live in <b className="font-medium">Bangalore, KA, India</b>.
        </li>
        <li>
          My first programming language I learned was <b className="font-medium">C</b>.
        </li>
        <li>I love software development.</li>
        <li>
          I work mostly with <b className="font-medium">Java, Spring/Spring-boot </b> technologies.
        </li>
        <li>
          I'm an independent introvert, and a technophile obsessed with the latest technology.
        </li>
        <li>
          I love cooking and keeps experimenting with recipes <Twemoji emoji="twa-cooking" />.
        </li>
        <li>
          I love listening <Twemoji emoji="musical-keyboard" />.
        </li>
        <li>
          Currently I am learning to play <Twemoji emoji="musical-keyboard" />.
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}

export default TypedBios
