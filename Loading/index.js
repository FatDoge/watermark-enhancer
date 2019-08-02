import React, { Component } from 'react'

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'white',
  color: 'black',
  height: '-webkit-fill-available'
}
class LoadingContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      containerStyle: {
        ...containerStyle,
        ...props.loadingStyle,
      },
    }
  }

  render() {
    const { containerStyle = {} } = this.state
    const { loadingContent = 'Loading' } = this.props
    return <div style={containerStyle}>
      <p>{loadingContent}</p>
    </div>
  }
}

export default LoadingContainer