import urlMap from '@url';
import { WeFetch } from '@base';

export function fetchData(data) {

  return WeFetch({
    url: urlMap.post,
    data: data,
  });

}
