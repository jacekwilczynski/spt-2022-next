import { ReactNode } from 'react'

export const AriaContent = (props: {
  sr: ReactNode
  visual: ReactNode
}) => <>
  <span className="visually-hidden">{props.sr}</span>
  <span aria-hidden={true}>{props.visual}</span>
</>
