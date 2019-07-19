### watermark-enhancer
![case](https://cdn.fatdoge.cn/watermark-enhancer-user.png)![case](https://cdn.fatdoge.cn/watermark-enhancer-view.png)
> 移步[详细文档](https://fatdoge.github.io/watermark-enhancer)

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
}, renderEffectContent)(WrappedComponent)
```
3.注意

- 参数说明
  ``` 
  EnhancerWaterMark(
    options = {}, // 水印参数, 水印内容可异步获取
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
    + effectContentFunc // 异步获取水印内容的方法, 返回水印内容
  )(WrappedComponent)
  ```