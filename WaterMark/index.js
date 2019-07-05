/******************************************************************************
 *  @文件名: watermark.js
 *  @作　者: zjm
 *  @日　期: 2018-05-26 11:32:39
 *  @修改人: zjm
 *  @修  改: 2018-05-26 11:32:39
 *  @格  式: 1.module无关的const定义在外部. 2.let const function 属性 reder/return 为顺序.
 *  @说  明: 网页水印
 ******************************************************************************/

//#region 定义全局const变量
//#endregion

// svg 实现 watermark
const watermark = ({
    // 使用 ES6 的函数默认值方式设置参数的默认取值
    // 具体参见 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters
    container = document.body,
    width = '300px',
    height = '200px',
    textAlign = 'left',
    textBaseline = 'bottom',
    font = "20px Microsoft Yahei",
    fillStyle = 'rgba(184, 184, 184, 0.4)',
    content = 'loading',
    rotate = '24',
    zIndex = 1000,
} = {}, ...res) => {
    const args = res;
    const canvas = document.createElement('canvas');

    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);
    const ctx = canvas.getContext("2d");

    ctx.textAlign = textAlign;
    ctx.textBaseline = textBaseline;
    ctx.font = font;
    ctx.fillStyle = fillStyle;
    ctx.rotate(Math.PI / 180 * rotate);
    ctx.fillText(content, 20, parseFloat(height) / 2);

    const base64Url = canvas.toDataURL();
    const __wm = document.querySelector('.__wm');

    const watermarkDiv = __wm || document.createElement("div");
    const styleStr = `
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:${zIndex};
    pointer-events:none;
    background-repeat:repeat;
    background-image:url('${base64Url}')`;

    watermarkDiv.setAttribute('style', styleStr);
    watermarkDiv.classList.add('__wm');

    if (!__wm) {
        container.style.position = 'relative';
        container.insertBefore(watermarkDiv, container.firstChild);
    }

    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    if (MutationObserver) {
        let mo = new MutationObserver(function () {
            const __wm = document.querySelector('.__wm');
            // 只在__wm元素变动才重新调用 __canvasWM
            if ((__wm && __wm.getAttribute('style') !== styleStr) || !__wm) {
                // 避免一直触发
                mo.disconnect();
                mo = null;
                watermark(JSON.parse(JSON.stringify(args)));
            }
        });

        mo.observe(container, {
            attributes: true,
            subtree: true,
            childList: true,
        })
    }

}

export default watermark;