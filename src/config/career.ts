// career
export type CareerItemType = {
  company: string
  title: string
  image?: string
  logo: string
  start: string
  end: string
}

export const careerList: Array<CareerItemType> = [
  {
    company: 'Elfit Arabia',
    title: 'ERP & Data Management Intern',
    logo: 'database',
    start: 'Jan 2025',
    end: 'Jul 2025'
  },
  {
    company: 'Alrais Enterprises LLC',
    title: 'Software Developer Intern (Frontend - E-commerce)',
    logo: 'code',
    start: 'Jun 2023',
    end: 'Aug 2023'
  },
]