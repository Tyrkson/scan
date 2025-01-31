import { SVGProps } from 'react'

export function dTLT (props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg width='32' height='32' viewBox='0 0 32 32' fill='none' {...props}>
      <circle cx='16' cy='16' r='16' fill='#769F43' />
      <path d='M9.06475 13.479V20H10.8239V13.479H13.2216V12H6.66699V13.479H9.06475Z' fill='white' />
      <path d='M14.1441 12V20H19.8023V18.521H15.9032V12H14.1441Z' fill='white' />
      <path d='M21.5275 13.479V20H23.2867V13.479H25.6844V12H19.1298V13.479H21.5275Z' fill='white' />
    </svg>
  )
}
