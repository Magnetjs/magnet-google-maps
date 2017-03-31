### Usage

[![Greenkeeper badge](https://badges.greenkeeper.io/Magnetjs/magnet-google-maps.svg)](https://greenkeeper.io/)
All api should refer [Google Maps](https://github.com/googlemaps/google-maps-services-js)

Basic
```
import magnet from 'magnet-core';
import Config from 'magnet-config';
import Logger from 'magnet-bunyan';
import Koa from 'magnet-koa';
import Session from 'magnet-session';
import Router from 'magnet-router';
import GoogleMaps from 'magnet-google-maps';

let app = await magnet([Config, Logger, Koa, Session, Router, GoogleMaps]);
```

server/controllers/user.js
```
export default function user({ router, googleMaps }) {
  router

  .get('/users', async function (ctx) {
    ctx.body = await googleMaps.placesAutoComplete({
        location: [0, 0],
        radius: 20000000,
        type: '(cities)',
        input: 'Gotham'
      }).asPromise()
  });
}
```
