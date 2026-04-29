// education 
export type EducationItemType = {
  school: string
  major: string
  image?: string
  logo: string
  start: string
  end: string
}

export const educationList: Array<EducationItemType> = [
  {
    school: 'University of Liverpool',
    major: 'MSc Cybersecurity',
    logo: 'university',
    start: '2025',
    end: 'Present'
  },
  {
    school: 'BITS Pilani, Dubai Campus',
    major: 'B.E. Computer Science Engineering',
    logo: 'university',
    start: '2021',
    end: '2025'
  },
]