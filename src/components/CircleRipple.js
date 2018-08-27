import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const hexToRgba = (hex, alpha) => {
  const color = []
  const rgb = []

  hex = hex.replace(/#/, '')

  if (hex.length === 3) {
    const tmp = []
    for (let i = 0; i < 3; i += 1) {
      tmp.push(hex.charAt(i) + hex.charAt(i))
    }
    hex = tmp.join('')
  }

  for (let i = 0; i < 3; i += 1) {
    color[i] = `0x${hex.substr(i * 2, 2)}`
    rgb.push(parseInt(Number(color[i])))
  }
  return `rgb(${rgb.join(',')}, ${alpha})`
}

const ripple = color => keyframes`
  0% {
    box-shadow: 0 0 0 0 ${hexToRgba(color, 0.15)},
    0 0 0 3px ${hexToRgba(color, 0.15)},
    0 0 0 5px ${hexToRgba(color, 0.15)}
  }
  100% {
    box-shadow: 0 0 0 10px ${hexToRgba(color, 0.15)},
    0 0 0 3px ${hexToRgba(color, 0.15)},
    0 0 0 5px ${hexToRgba(color, 0)}
  }
`

const Ripple = styled.div`
  background-color: ${props => props.color}
  width: ${props => props.size}px
  height: ${props => props.size}px
  border-radius: 50%
  animation: ${props => ripple(props.color)} ${props => props.animationDuration}s linear infinite
`

const propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
  animationDuration: PropTypes.number,
  style: PropTypes.object,
}

const defaultProps = {
  size: 12,
  color: '#ffffff',
  className: 'circle-ripple',
  animationDuration: 1.5,
}

const CircleRipple = ({
  size,
  color,
  className,
  animationDuration,
  style,
  ...props
}) => (
    <Ripple
      size={size}
      color={color}
      animationDuration={animationDuration}
      className={className}
      style={style}
      {...props}
    />
  )

CircleRipple.propTypes = propTypes
CircleRipple.defaultProps = defaultProps

export default CircleRipple
