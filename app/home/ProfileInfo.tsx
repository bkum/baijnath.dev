import siteMetadata from '@/data/siteMetadata'
import Emoji from '@/components/Emoji'

import { Briefcase, MapPin, Mail } from 'lucide-react'
import SocialIcon from '@/components/social-icons'

export const ProfileCardInfo = () => {
  return (
    <div className="p-3">
      <h3 className="text-lg font-medium text-gray-800 dark:text-white">Baijnath Kumar</h3>
      <h5 className="text-gray-700 dark:text-gray-400">Learner | Builder</h5>
      <div className="mb-2 mt-2 space-y-3">
        <div className="flex items-center">
          <Emoji emoji="briefcase" />
          <p className="px-2">
            Team Lead @{' '}
            <a
              className="hover:underline"
              target="_blank"
              href={siteMetadata.office}
              rel="noreferrer"
            >
              Software AG
            </a>
          </p>
        </div>
        <div className="flex items-center">
          <Emoji emoji="world-map" />
          <p className="px-2">
            <a href={siteMetadata.map}>
              Bangalore, KA, India <Emoji emoji="flag-india" />
            </a>
          </p>
        </div>
        <div className="flex items-center">
          <Emoji emoji="e-mail" />
          <p className="px-2">
            <a href={`mailto:${siteMetadata.email}`}>{siteMetadata.email}</a>
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <SocialIcon kind="github" href={siteMetadata.github} size={5} />
          <a
            target="_blank"
            href={siteMetadata.github}
            rel="noreferrer"
            className="flex items-center text-sm hover:underline"
            data-umami-event="profile-card-x"
          >
            <span className="ml-0.2">{siteMetadata.socialAccounts.github}</span>
          </a>

          <span className="text-gray-400 dark:text-gray-500">|</span>
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={5} />
          <a
            target="_blank"
            href={siteMetadata.linkedin}
            rel="noreferrer"
            className="flex items-center text-sm hover:underline"
            data-umami-event="profile-card-x"
          >
            <span className="ml-0.2">{siteMetadata.socialAccounts.linkedin}</span>
          </a>

          <span className="text-gray-400 dark:text-gray-500">|</span>
          <SocialIcon kind="x" href={siteMetadata.x} size={5} />
          <a
            target="_blank"
            href={siteMetadata.x}
            rel="noreferrer"
            className="flex items-center text-sm hover:underline"
            data-umami-event="profile-card-x"
          >
            <span className="ml-0.2">{siteMetadata.socialAccounts.x}</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProfileCardInfo
