# watermark-enhancer
## 安装
```
npm i watermark-enhancer -d
```
## 使用
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
## 注意

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
## 开发

```
> npm i
> npm run build
it will outputs ./dist/bundle.js
> npm link

> cd your project
> npm link watermark-enhancer
```
!> 注意: 提供demo仓库[链接](https://github.com/FatDoge/water-mark-demo)，本地开发时可将package.json中的watermark-enhancer依赖删去再进行npm i
```
import EnhancerWatermark from 'watermark-enhancer'
```

!> need enable babel decorator feature @babel/plugin-proposal-decorators

```
@EnhancerWatermark(optionsObj)
class WrappedComponent extends React.Component {
  ...
}
```
or
```
EnhancerWatermark(optionsObj)(WrappedComponent)
```
## 致谢
WaterMark作者:zjm, 感谢他的付出使得在此基础上进行的二次开发的watermark-enhancer得以出现。