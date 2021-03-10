/* fetch('https://api.twitter.com/')
  .then(res => {
    return res.json()
  })
  .then(data => {
    console.log(data)
  }); */

/* 
  Написать асинхронную функцию которая
   вернёт массив всех js примитивов.

   Получить значение промиса из функции выше
   НЕ используя метод then

----------------------------------------------------------------
  Создать промис, который разрезолвится через 2с
  С помощью async/await подождать его исполнения 
  и получить его результат (не использовать then!)
*/
/* 
async function loadUsers () {
  try {
    const response = await fetch('httpsrandomuser.me/api')
    const data = await response.json()
    return data
  } catch (err) {
    console.error(err)
  }
}

async function initializeApp () {
  console.log('work hard')

  const users = await loadUsers()
  console.log(users)
}

class Test {
  static async load () {}
}

const arrow = async () => {}
 */
console.log('start')

async function getPrimitivesAsync () {
  return [1, '1', true, null, undefined, 1n, Symbol()]
}

async function logPrimitives () {
  console.log('100')
  const primitives = await getPrimitivesAsync()
  console.log('next end 1')
  console.log(primitives)
  return primitives
}

console.log('2')

async function delay () {
  console.log('1000')
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('TEST DATA FROM NODE')
    }, 2000)
  })
  const data = await p1
  console.log(data)
  
  console.log('next end 2')
  return data
}
console.log('1')

logPrimitives()
console.log('10')
delay()
console.log('end')
