import urlMap from '@url';
import md5 from 'md5';
import { WeFetch } from '@base';

export function fetchLoginData(data) {

  return WeFetch({
    url: urlMap.login,
    data: {
      id: data.id,
      password: md5(data.password)
    }
  });

}

export function fetchRegData(data) {

  return WeFetch({
    url: urlMap.reg,
    data: {
      id: data.id,
      password: md5(data.password),
      college: data.college,
      idCard: data.idCard
    }
  });

}
