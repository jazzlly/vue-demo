
const regex = /^([^_]+)_([^_]+)$/

console.log(regex.test('user_id'))
console.log(regex.test('device_id'))
console.log(regex.test('_device_id'))


const array = regex.exec('user_id') 
for (const e of array) {
  console.log(e)
}


function foo(bar) {
  switch (bar) {
    case 'code':
    case 'codes':
      return 'miaomiao~'
      break;
  
    default:
      return 'wangwang!'
      break;
  }
}

console.log(foo('code'))
console.log(foo('codes'));
