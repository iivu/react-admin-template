import login from '@/mock/login'
const Mock = require('mockjs')


function generateApiPathList (...arg) {
  let result = []
  arg.forEach(item => result = [...result, ...Object.keys(item)])
  return result
}

function mockData () {

  const apiPathList = generateApiPathList(login)

  apiPathList.forEach(apiPath => {
    Mock.mock(apiPath,login[apiPath])
  })

}

export default mockData