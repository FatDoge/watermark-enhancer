import React, { Component } from 'react'
import WaterMark from './WaterMark/index'
import LoadingContainer from './Loading/index'

const Enhancer = (
  watermarkOptions = {
    content,
    asyncContent,
  }, // 水印参数, 水印内容可异步获取
  loadingOptions = {
    content,
  }
  ) => WrappedComponent => {
    return class EnhancerWaterMark extends Component {

    constructor(props) {
      super(props)
      this.state = {
        options: watermarkOptions,
        content: '',
      }
      this.waterMark = React.createRef()
    }

    async componentDidMount() {
      const { options } = this.state
      const { asyncContent } = watermarkOptions
      if (typeof asyncContent === 'function' ) {
        const content = await asyncContent();
        this.setState({ content: content });
        WaterMark({
          ...options,
          content,
          container: this.waterMark.current
        })
        return
      }
      WaterMark({
        ...options,
        container: this.waterMark.current
      })
    }

    render() {
      const { content } = this.state
      const { asyncContent } = watermarkOptions
      const { content: loadingContent, ...loadingStyle } = loadingOptions
      return (<div ref={this.waterMark}>
        {
          (asyncContent && !content) ? <LoadingContainer loadingStyle={loadingStyle} loadingContent={loadingContent}/> : <WrappedComponent {...this.props}/>
        }
      </div>)
    }
  }
}

export default Enhancer