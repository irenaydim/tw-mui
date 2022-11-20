import { IconNames, IconTypes } from "./Icon"

export const getIconName = (name: IconNames, type: IconTypes) => {
  const nameC = name.split('-').map(item => item.toUpperCase() + item.slice(1)).join()
  const typeC = type.split('-').reduce((res, item) => res + item[0].toUpperCase() + item.slice(1), '')
  return nameC + typeC
}
