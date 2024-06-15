import siteMetadata from '@/data/siteMetadata'
import Twemoji from './Twemoji'

import { Briefcase, MapPin, Mail } from 'lucide-react'
import SocialIcon from '@/components/social-icons'

export const ProfileCardInfo = () => {
  return (
    <div className="p-3">
      <h3 className="text-lg font-medium text-gray-800 dark:text-white">Baijnath Kumar</h3>
      <h5 className="text-gray-700 dark:text-gray-400">Learner | Builder</h5>
      <div className="mb-2 mt-2 space-y-3">
        <div className="flex items-center">
          <SocialIcon kind="briefcase" href={siteMetadata.office} size={4} />
          <p className="px-2">
            Team Lead @{' '}
            <a
              className="hover:underline"
              target="_blank"
              href="https://www.softwareag.com/"
              rel="noreferrer"
            >
              Software AG
            </a>
          </p>
        </div>
        <div className="flex items-center">
          <SocialIcon kind="mappin" href={siteMetadata.map} size={4} />
          <p className="px-2">
            <a href={siteMetadata.map}>
              Bangalore, KA, India <Twemoji emoji="viet-nam-india-flag" />
            </a>
          </p>
        </div>
        <div className="flex items-center">
          <SocialIcon kind="mail" href={siteMetadata.email} size={4} />
          <p className="px-2">
            <a href={`mailto:${siteMetadata.email}`}>{siteMetadata.email}</a>
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <SocialIcon kind="github" href={siteMetadata.github} size={4} />
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
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={4} />
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
          <SocialIcon kind="x" href={siteMetadata.x} size={4} />
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
