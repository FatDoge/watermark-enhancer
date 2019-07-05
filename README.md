### watermark-enhancer
1.安装
```
npm i watermark-enhancer -d
```
2.使用
```
import EnhancerWaterMark from 'watermark-enhancer'
export default EnhancerWaterMark({
  width: '100',
  height: '80',
  rotate: '17',
}, true, renderEffectContent)(WrappedComponent)
```
3.注意

- 参数说明
  ``` 
  EnhancerWaterMark(
    options = {}, // 水印参数, 水印内容可异步获取
    needEffectContent = false, // 判断水印是否需要异步获取
    effectContentFunc, // 异步获取水印内容的方法, 需返回一个Promise
  )(WrappedComponent) // 传入需要加上水印的组件
  ```
- 同步的水印内容
  ```
  EnhancerWaterMark(
    options = {
      + content: '水印',
      width,
      height,
      ...  
    }, 
  )(WrappedComponent)
  ```
- 异步的水印内容 
  ```
  EnhancerWaterMark(
    - content  
    options = {
      width,
      height,
      ...  
    }, 
    + true, // 代表需要异步获取水印内容
    + effectContentFunc
  )(WrappedComponent)
  ```