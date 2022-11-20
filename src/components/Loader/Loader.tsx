import Icon from '../Icon'

const Loader = () => {
  return <div role="status" className='animate-loader text-primary-main'>
    <Icon name='circle' />
  </div>
}

Loader.defaultProps = {
}

Loader.propTypes = {
}

export default Loader
