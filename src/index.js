import './x.scss'
import './y.less'
import  './z.styl'

import png from './assets/1.png'

const div = document.getElementById('app1')
div.innerHTML = `
    <img src ="${png}">
`

const  button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = () => {
    const promise = import('./lazy.js')  //用import()加载文件。得到promise，成功执行。。。失败执行。。。
    promise.then((module)=>{
        const fn = module.default
        fn()
    },()=>{
        console.log('模块加载错误');
    })
}

div.appendChild(button)