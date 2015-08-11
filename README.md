facebook-server-api (Meteor)
============================

This is a Meteor package to provide Facebook Graph API on server side only.
It is a simple wrapper of <https://www.npmjs.com/package/fb>.

API for Meteor
--------------

`FB.mapi` is provided as a sync method (a.k.a. fibers).

Example
-------

```javascript
var res = FB.mapi('me', {
  access_token: accessToken
});
```
