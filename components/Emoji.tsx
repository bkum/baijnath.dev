import React from 'react'

const symbol = {
  'waving-hand': '1f44b',
  'flag-india': '1f1ee-1f1f3',
  'memo': '1f4dd',
  'hammer-and-wrench': '1f6e0',
  'face-with-monocle': '1f9d0',
  'briefcase': '1f4bc',
  'world-map': '1f5fa',
  'e-mail': '1f4e7',
  'musical-keyboard': '1f3b9',
  'cooking': '1f373',
  'clinking-beer-mugs': '1f37b',
}

const prop = {
  default: {
    height: '1em',
    width: '1em',
    margin: '0.1em',
    'vertical-align': '-.1em',
    'background-size': '1em 1em',
  },
}

export function Emoji({ emoji, size = 'default' }) {
  const imgUrl =
    'url(https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/' + symbol[emoji] + '.svg)'

  const divStyle = {
    display: 'inline-block',
    backgroundImage: imgUrl,
    'background-repeat': 'no-repeat',
    'background-position': 'center center',
    ...prop.default,
  }
  return <i style={divStyle}></i>
}

export default React.memo(Emoji)
