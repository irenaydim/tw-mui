import cx from 'classnames'
import { MouseEventHandler } from 'react'

export type ButtonTypes = 'button' | 'submit' | 'reset'

export interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>,
  type: ButtonTypes,
  primary: boolean,
  label: string,
  disabled: boolean
}

// https://m3.material.io/components/buttons/specs#0eea2a85-b4d7-4c74-b08e-98410b9412c7
const Button = ({ onClick, type = 'button', label, primary = false, disabled }: ButtonProps) => {
  return <button
    className={cx(
      'px-3 py-2.5 rounded-lg text-button hover:transition-colors',
      primary && 'border-2 bg-primary-main hover:brightness-105 border-primary-main hover:bg-blend-darken ',
      !primary && 'border-2 border-primary-main hover:brightness-95'
    )}
    type={type}
    onClick={onClick}
    disabled={disabled}>{label}</button>
}

export default Button
