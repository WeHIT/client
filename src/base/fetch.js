import Storage from './storage';

/**
 * @desc Promise 处理超时
 * @param fetchOkPromise
 * @param timeout
 * @returns {Promise.<Object>}
 */
const handleTimeOut = (fetchOkPromise, timeout) => {

  let timeOutFn = null;

  const fetchTimeOutPromise = new Promise((resolve, reject) => {
    timeOutFn = () => {
      reject({
        msg: 'timeout'
      });
    }
  });

  // 超时调用 timeOutFn reject
  setTimeout(() => {
    timeOutFn();
  }, timeout);

  // 优先返回的
  return Promise.race([
    fetchOkPromise,
    fetchTimeOutPromise
  ]);
}

/**
 * @desc 拥有超时处理的 fetch，返回 Promise
 * @param {Object} params fetch所需要的参数
 * @param {Number} timeout 超时时间
 * @param {bool} debug 是否打开 debug 模式
 */
const WeFetch = (params, timeout = 2000, debug = false) => {

  const {
    url,
    method = 'POST',
    data
  } = params;

  const fetchPromise = new Promise((resolve, reject) => {

    Storage.load('token').then(val => {
      return fetch (url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${val}`,
        },
        body: JSON.stringify(data),
      })
        .then(res => {
          if (debug) {
            console.log({
              desc: 'API 返回数据',
              url,
              res,
            })
          }
          return res.json();
        })
        .then(res => {
          return resolve(res && res.msg);
        });
    })

  });

  return handleTimeOut(fetchPromise, timeout);
}

export default WeFetch;
