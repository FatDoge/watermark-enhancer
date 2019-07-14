import React, { Component } from 'react'
import WaterMark from './WaterMark/index'


const Enhancer = (
  options = {}, // 水印参数, 水印内容可异步获取
  effectContentFunc, // 异步获取水印内容的方法, 需返回一个Promise
  ) => WrappedComponent => {
    return class EnhancerWaterMark extends Component {

    constructor(props) {
      super(props)
      this.state = {
        options,
        content: '',
      }
      this.waterMark = React.createRef()
    }

    async componentDidMount() {
      if ( effectContentFunc ) {
        const content = await effectContentFunc();
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
      const { content } = this.state;
      return (<div ref={this.waterMark}>
        {
          (effectContentFunc && !content) ? null : <WrappedComponent {...this.props}/>
        }
      </div>)
    }
  }
}

export default Enhancer