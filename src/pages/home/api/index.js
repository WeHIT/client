import { WeFetch } from '@base';

import urlMap from '@url';

export function fetchData(data) {
  return WeFetch({
    url: urlMap.api,
    data
  });
}
