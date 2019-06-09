//用户角色信息
export function removeUserInfo() {

  localStorage.removeItem("userInfo")

}

export function setUserInfo(userInfo) {

  localStorage.setItem("userInfo", JSON.stringify(userInfo))

}

export function getUserInfo() {

  return JSON.parse(localStorage.getItem("userInfo"))

}

//用户登陆信息

export function setSignInfo(signInfo) {

  localStorage.setItem("signInfo", JSON.stringify(signInfo))

}

export function getSignInfo(signInfo) {

 return JSON.parse(localStorage.getItem("signInfo"))

}

export function removeSignInfo() {

  localStorage.removeItem("signInfo")

}
