/* fetch('https://api.twitter.com/')
  .then(res => {
    return res.json()
  })
  .then(data => {
    console.log(data)
  }); */

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
