import { getIconName } from './helper'
import React, { Suspense } from 'react'

export type IconTypes = 'filled' | 'outlined' | 'rounded'| 'two-tone' | 'sharp'
export type IconNames = 'circle' | 'clear' | 'radio-checked' | 'radio-unchecked'

export interface IconProps {
  name: IconNames,
  type?: IconTypes
}

const Icon = ({ name, type = 'filled' }: IconProps) => {
  const iconName = getIconName(name, type)
  const Icon = React.lazy(() => import(`./icons/${iconName}`))

  return <Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </Suspense>
}

export default Icon
