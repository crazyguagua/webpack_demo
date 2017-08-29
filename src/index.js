import _ from 'lodash'
import icon from './icon.jpg' 
import './style.css'//直接import 不需要  xx from xx
import './iconfont.css'
import xml from './data.xml'
 
function createComp(){
    var div = document.createElement('div');
    div.innerHTML=_.join(['hello','webpack'],' ');
    div.classList.add('hello');
    var image = new Image();
    image.src = icon;
    console.log(icon);
    div.appendChild(image);
    // var icon = document.createElement('i');
    // icon.className='iconfont icon-help';
    // div.appendChild(icon);
    console.log(xml);
    return div;

}
document.body.appendChild(createComp());