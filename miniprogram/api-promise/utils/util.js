const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

// 封装判断是否函数并执行函数
const excuteFunction = ( fn, ...args )=>{
  if( fn && typeof fn === 'function'){
    fn(...args)
  }
}
// 封装异步API
const wxpromisify = ( fn ) => {
  if( typeof fn !== 'function') return false
 
  return function( obj={} ){
    return new Promise(( resolve, reject) => {
      fn({
        ...obj,
        success: (...args)=>{
          excuteFunction(obj.success, ...args)
          excuteFunction(obj.complete, ...args)
          resolve(...args)
        },
        fail: (...error)=>{
          excuteFunction(obj.fail, ...error)
          excuteFunction(obj.complete, ...error)
          reject(...error)
        }
      })
    })
  }
  
}
module.exports = {
  formatTime,
  wxpromisify
}
