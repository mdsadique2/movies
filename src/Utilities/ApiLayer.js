import axios from 'axios'
import { notification } from 'antd';
const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl  = process.env.REACT_APP_API_BASEURL;


const errorMessages = {
  403: {
    type: 'info',
    message: {
      msg: 'Forbidden', 
      details: 'You dont have sufficient permissions for this operation.'
    }
  },
  500: {
    type: 'error',
    message: {
      msg: 'Server Error', 
      details: 'Something went wrong, Please try again after sometime'
    }
  },

  400: {
    type: 'error',
    message: {
      msg: '400 Bad request', 
      details: 'Bad request'
    }
  }
}

const openNotification = (type, obj) => {
  notification[type]({
    key: 'key-' + obj.msg,
    message: `${obj.msg}`,
    description: `${obj.details}`,
    placement: 'bottomLeft',
    className: 'notification-'+type,
    duration: 4
  });
};



const requestHandler = (request) => {
  return request
}



const successHandler = (response) => {
  if (response.status === 200) {
    return {...response.data, status: response.status};
  }
}

const errorHandler = (responseData) => {
  let {response} = responseData
  if (!response) {
    return
  }

  if (response.status === 404 || response.status === 400 || response.status === 409 || response.status === 403) {
    let message = errorMessages['400'].message;
    if (response.data && response.data.data) {
      if (response.data.data.msg) {
        message.details = response.data.data.msg;
      }
    }
    openNotification(errorMessages['400'].type, message);
  }


  if (response.status === 500) {
    openNotification(errorMessages['500'].type, errorMessages['500'].message);
  }
  return Promise.reject({...response, status: response.status});
}


const appAxios = axios.create({
  baseURL: `${baseUrl}`
});

appAxios.interceptors.request.use(
  request => requestHandler(request)
)

appAxios.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error)
)


const Api = {
  all: axios.all,
  get (id, config) {
    if (config.params) {
      config.params.api_key = apiKey;
      config.params.include_adult=false;
    } else {
      config.params = {
        api_key: apiKey,
        include_adult: false
      }
    }
    
    return appAxios.get(id, config);
  },
  // delete (id, config) {
  //   return appAxios.delete(id, config);
  // },
  // post (id, data, config) {
  //   return appAxios.post(id, data, config)
  // }
}

export {
  Api
}
