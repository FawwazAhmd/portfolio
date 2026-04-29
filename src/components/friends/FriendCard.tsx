"use client"

import { ArrowUpRight } from '@phosphor-icons/react'
import { FriendItemType } from '@/config/infoConfig'
import { utm_source } from '@/config/siteConfig'
import Link from 'next/link'
import { Favicon } from 'favicon-stealer'

export function FriendCard({ friend, titleAs }: { friend: FriendItemType, titleAs?: keyof React.JSX.IntrinsicElements }) {
  const utmLink = `${friend.link.href}?utm_source=${utm_source}`
  let Component = titleAs ?? 'h2'
  return (
    <li className='group relative flex flex-col items-start h-full'>
      <div className="relative flex flex-col justify-between h-full w-full p-4 rounded-2xl border border-muted-foreground/20 shadow-sm transition-all group-hover:scale-[1.03] group-hover:shadow-md group-hover:bg-muted/5">
        <div className=''>
          <div className='flex flex-col sm:flex-row justify-center sm:justify-start items-start sm:items-center gap-4'>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full">
              <Favicon url={friend.link.href} src={friend.logo} alt={`${friend.name} logo`} />
            </div>
            <Component className="text-base font-semibold">
              {friend.name}
            </Component>
          </div>
          { friend.description && (
            <p className="relative z-10 mt-2 text-sm text-muted-foreground ml-2">
              {friend.description}
            </p>
          )}
        </div>

        <Link
          href={utmLink}
          target='_blank'
          rel='noopener noreferrer nofollow'
          className='h-full w-full absolute'>
          <ArrowUpRight size={32} weight="duotone" className="absolute top-2 right-8 h-4 w-4 group-hover:text-primary" />
        </Link>
      </div>
    </li>
  )
}