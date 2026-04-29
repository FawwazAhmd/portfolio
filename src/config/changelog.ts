// changelog
export const changelogHeadLine = "Website Updates"
export const changelogIntro = "Recent updates and improvements to my portfolio."

export type ChangelogItemType = {
  date: string
  content: [{
    title: string
    description: string
  }]
}

export const changelogList: Array<ChangelogItemType> = [
  {
    date: '2026-04-29',
    content: [
      {
        title: '🚀 Portfolio Launched',
        description: 'Initial version of my personal portfolio website deployed, showcasing my projects, experience, and skills.'
      },
    ]
  },
  {
    date: '2026-04-30',
    content: [
      {
        title: '🛠️ Content Updated',
        description: 'Added projects, experience, and refined overall design for better presentation.'
      },
    ]
  }
]