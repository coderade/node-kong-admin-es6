'use strict';

// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'Connector'... Remove this comment to see the full error message
const Connector = require('../connector');

// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'Target'.
class Target {
  connector: any;
  params: any;
  constructor(params: any) {
    this.params = params;
    this.connector = new Connector(params);
  }

  create(data: any, cb: any) {
    this.connector.execute('post', '/upstreams/' + (data.upstream || data.target) + '/targets', this.validate(data), null, cb);
  }

  list(upstreamHostAndPortOrId: any, offset: any, cb: any) {
    this.connector.execute('get', '/upstreams/' + upstreamHostAndPortOrId + '/targets', null, offset ? {offset: offset} : null, cb);
  }

  listAll(upstreamNameOrId: any, cb: any) {
    this.connector.execute('get', '/upstreams/' + upstreamNameOrId + '/targets/all', null, null, cb);
  }

  delete(upstreamNameOrId: any, targetHostAndPortOrId: any, cb: any) {
    this.connector.execute('delete', '/upstreams/' + upstreamNameOrId + '/targets/' + targetHostAndPortOrId, null, null, cb);
  }

  setHealthy(upstreamNameOrId: any, targetHostAndPortOrId: any, cb: any) {
    this.connector.execute('post', '/upstreams/' + upstreamNameOrId + '/targets/' + targetHostAndPortOrId + '/healthy', {}, null, cb);
  }

  setUnhealthy(upstreamNameOrId: any, targetHostAndPortOrId: any, cb: any) {
    this.connector.execute('post', '/upstreams/' + upstreamNameOrId + '/targets/' + targetHostAndPortOrId + '/unhealthy', {}, null, cb);
  }

  validate(data: any) {
    if (!data || !(data instanceof Object)) throw new Error('Data must be an Object!');
    return {'upstream': {'id': data.upstream}, 'target': data.target, 'weight': data.weight, 'tags': data.tags};
  }
}


// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
module.exports = Target;

