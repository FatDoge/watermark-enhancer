## watermark-enhancer
> Add watermark to your react components in a more elegent way.

![](https://img.shields.io/npm/l/watermark-enhancer)
![](https://img.shields.io/npm/dt/watermark-enhancer)
![](https://img.shields.io/bundlephobia/minzip/watermark-enhancer?label=package%20size)

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
  content: 'test',
  asyncContent: renderEffectContent,
}, {
  content: 'watermark loading...',
  color: 'black',
  background: 'white'
})(WrappedComponent)
```
3.注意

- 参数说明
  ``` 
  EnhancerWaterMark(
    watermarkOptions = {
      content : 'sync content',
      asyncContent: renderEffectContent,
    }, // 水印参数, 水印内容可异步获取
    loadingOptions = {
      ...loadingStyle,
      content: 'loading...'
    }, // loading遮罩层配置
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
    - content,
    + asyncContent: renderEffectContent,  
    options = {
      width,
      height,
      ...  
    }, 
  )(WrappedComponent)
  ```