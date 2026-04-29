// friends
export const friendsHeadLine = "People I Connect With"
export const friendsIntro = "Some of the people I collaborate and connect with."

export type FriendItemType = {
  name: string
  description?: string
  link: { href: string, label?: string }
  logo?: string
}

export const friends: Array<FriendItemType> = [
  {
    name: 'Suhayb Ahmed',
    link: { href: '#' },
  },
  {
    name: 'Sinan Mohammed',
    link: { href: '#' },
  },
  {
    name: 'Mujtaba Ali',
    link: { href: '#' },
  },
  {
    name: 'Afif Uddin',
    link: { href: '#' },
  },
]