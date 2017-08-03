import { Module } from 'magnet-core/module'
import * as googleMaps from '@google/maps'

export default class MagnetGoogleMaps extends Module {
  init () {
    this.moduleName = '_google_maps'
    this.defaultConfig = __dirname
  }

  async setup () {
    this.insert(googleMaps.createClient(this.config))
  }
}
