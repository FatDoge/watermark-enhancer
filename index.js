import React, { Component } from 'react'
import WaterMark from './WaterMark/index'


const Enhancer = (
  options = {}, // 水印参数, 水印内容可异步获取
  needEffectContent = false, // 判断水印是否需要异步获取
  effectContentFunc, // 异步获取水印内容的方法, 需返回一个Promise
  ) => WrappedComponent => {
    return class EnhancerWaterMark extends Component {

    constructor(props) {
      super(props)
      this.state = {
        options
      }
      this.waterMark = React.createRef()
    }

    async componentDidMount() {
      if ( needEffectContent ) {
        const content = await effectContentFunc();
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
      return (<div ref={this.waterMark}>
        <WrappedComponent {...this.props}/>
      </div>)
    }
  }
}

export default Enhancer