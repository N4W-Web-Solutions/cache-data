# cache-data

> Cache data in server. This data can be response from Endpoint API, array, text or others types.

## Install

```shell
npm install cachejs-data
```

## Usage

```js
const Cache = require('cachejs-data')
const cache = new Cache({minToCache: 5})
const cacheKey = 'home-requests'

// Insert item in cache:
cache.insert(cacheKey, [req1: {results: [{id: 1, title: '...'}, {id: 2, title: '...'}]}])

// Remove item from cache:
cache.remove(cacheKey)

// Verify if exists cache key:
cache.exists(cacheKey)

// Verify if is expired:
cache.isExpired(cacheKey)

// Get from cache:
cache.get(cacheKey)
```

## License

MIT © Piero Ribeiro