import _ from 'lodash'
function createComp(){
    var div = document.createElement('div');
    div.innerHTML=_.join(['hello','webpack'],' ');
    return div;

}
document.body.appendChild(createComp());