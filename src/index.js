import _ from 'lodash'
import print from './print'
function createComp(){
    var div = document.createElement('div');
    div.innerHTML=_.join(['hello','webpack'],' ');
    print();
    return div;

}
document.body.appendChild(createComp());