import urlMap from '@url';
import storage from '@storage';

export function fetchData(data) {
  return new Promise((resolve, reject) => {
    storage.load({
      key: 'token',
    }).then(ret => {
      console.log('请求数据');
      console.log({
        auth: `Bearer ${ret}`,
        body: data,
      });
      fetch(urlMap.api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ret}`,
      },
      body: JSON.stringify(data),
      })
      .then(res => res.json())
      .then(res => {
        console.log('api 数据返回信息: ');
        console.log(res);
        return resolve(res.msg);
      });
    });
  })
}
