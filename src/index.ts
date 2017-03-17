import { Module } from 'magnet-core/module'
import * as googleMaps from '@google/maps'

export default class MagnetGoogleMaps extends Module {
  get moduleName () { return '_google_maps' }
  get defaultConfig () { return __dirname }

  async setup () {
    this.insert(googleMaps.createClient(this.config))
  }
}
