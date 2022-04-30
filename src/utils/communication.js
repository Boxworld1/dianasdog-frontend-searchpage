/**
 * 如果需要修改为正常上线模式，请注释下面mock的import代码
 * **/
// import "@/mock/index"
// 请在下方实现自己的后端通信函数
import axios from 'axios'    //引入axios
axios.defaults.withCredentials = true

const Request = {
  query: async (postFunction, returnFunction, query) => {
    query = decodeURI(query)
    console.log(query)
    try {
      const response = await axios
        .post('/search', {
          query: query,
        })
      var data = new Object();
      data = response.data
      console.log(response)
      if (response.status === 200 || response.status === 201) {
        postFunction(true)
        returnFunction(data)
        console.log(data.data)
      } else {
        postFunction(false)
      }
    }
    catch (e) {
      console.error(e)
      postFunction(false)
    }
  },
}

export default Request
