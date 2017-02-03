import convert from 'magnet-core/convert'
import googleMaps from '@google/maps'

export default convert(googleMaps, {
  namespace: 'googleMaps',
  initializer: 'createClient',
  params: (config) => ({ ...config, key: config.key || config.apiKey, Promise: global.Promise })
})
