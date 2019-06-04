export function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'shallowClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  for (const keys in source) {
    if (source.hasOwnProperty(keys)) {
      if (source[keys] && typeof source[keys] === 'object') {
        targetObj[keys] = source[keys].constructor === Array ? [] : {}
        targetObj[keys] = deepClone(source[keys])
      } else {
        targetObj[keys] = source[keys]
      }
    }
  }
  return targetObj
}

//层级关系转树状图
export function buildMenu(array, ckey) {
  let menuData = [];
  let indexKeys = Array.isArray(array) ? array.map((e) => { return e.F_ID }) : [];
  ckey = ckey || 'F_ParentId';
  array.forEach(function (e, i) {
    //一级菜单
    if (!e[ckey] || (e[ckey] === e.F_ID)) {
      delete e[ckey];
      menuData.push(deepClone(e)); //深拷贝
    } else if (Array.isArray(indexKeys)) {
      //检测ckey有效性
      let parentIndex = indexKeys.findIndex(function (F_ID) {
        return F_ID === e[ckey];
      });
      if (parentIndex === -1) {
        menuData.push(e);
      }
    }
  });
  let findChildren = function (parentArr) {
    if (Array.isArray(parentArr) && parentArr.length) {
      parentArr.forEach(function (parentNode) {
        array.forEach(function (node) {
          if (parentNode.F_ID === node[ckey]) {
            if (parentNode.children) {
              parentNode.children.push(node);
            } else {
              parentNode.children = [node];
            }
          }
        });
        if (parentNode.children) {
          findChildren(parentNode.children);
        }
      });
    }
  };
  findChildren(menuData);
  return menuData;
}



//添加路由的key
export function addRouterKey(routers){

routers.forEach((router)=>{

router.key=router.path;

})

return routers

}
