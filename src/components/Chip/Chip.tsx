import Icon, { IconNames } from '../Icon'
import cx from 'classnames'
import { MouseEventHandler } from 'react'

export interface ChipProps {
    icon: IconNames | null,
    text: string,
    disabled: boolean,
    onClick: MouseEventHandler<HTMLButtonElement>,
    clearable: boolean,
    expandable: boolean
}

const Chip = ({ icon = null, text, disabled = false, onClick }: ChipProps) => {
  return <button
    onClick={onClick}
    className={cx(
      'text-chip px-2.5 py-1.5 bg-primary-main rounded-full border-2 border-primary-main'
    )}>
    {icon ? <div className={cx('w-4 text-primary-600', disabled && 'text-neutral-600')}><Icon name={icon} /></div> : null}
    <span className=''>{text}</span>
    {/* {clearable || expandable ? <div className={cx('w-4 text-primary-600', disabled && 'text-neutral-600')}><Icon name={icon} /></div> : null} */}
  </button>
}

export default Chip
