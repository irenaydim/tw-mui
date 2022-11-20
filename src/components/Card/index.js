import { PropTypes } from 'prop-types'
import cx from 'classnames'
import Button from '../Button'

// https://m3.material.io/components/buttons/specs#0eea2a85-b4d7-4c74-b08e-98410b9412c7
const Card = ({ variant, secondaryText, title, subtitle, header, subheader }) => {
  return <div
    className={cx(
      'rounded-xl border',
      variant === 'outlined' && 'bg-white border-neutral-300')}>
    {title || subtitle ?
      <div className='p-4'>
        {title ? <div className='text-t-md text-neutral-900'>{title}</div> : null}
        {subtitle ? <div className='text-b-md text-neutral-800'>{subtitle}</div> : null}
      </div>
        : null}
    {header || subheader ?
      <div className='p-4'>
        {header ? <div className='text-b-lg text-neutral-900'>{header}</div> : null}
        {subheader ? <div className='text-b-md text-neutral-800'>{subheader}</div> : null}
      </div>
        : null}
    {secondaryText ? <div className='p-4 text-b-md text-neutral-800'>{secondaryText}</div> : null}
    {<div className='p-4 text-b-md text-neutral-800'>
      <Button variant='contained' label='Contained' />
      <Button variant='outlined' label='Outlined' />
    </div>}
  </div>
}

Card.defaultProps = {
  variant: 'outlined',
  secondaryText: '',
  title: '',
  subtitle: '',
  header: '',
  subheader: ''
}

Card.propTypes = {
  variant: PropTypes.oneOf('outlined'),
  secondaryText: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string
}

export default Card
