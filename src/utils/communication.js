/**
 * 如果需要修改为正常上线模式，请注释下面mock的import代码
 * **/
// import "@/mock/index"
// 请在下方实现自己的后端通信函数
import axios from 'axios'    //引入axios
axios.defaults.withCredentials = true

const request_json = {
  GET: (get_function) => {
    axios.get('/search')
      .then((res) => {
        get_function(res.data.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  POST: (post_function, return_function, new_message) => {
    axios.post('/search', JSON.stringify(new_message))
      .then((res) => {
        if (res.data.code === 201 || res.data.code === 200) {
          post_function(true)
          return_function(res.data.data)
        }
        else {
          post_function(false)
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}

export default request_json
