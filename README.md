### Notes for Meteor 1.3

You no longer need this package if you are using Meteor 1.3. Just install the npm package,

```bash
npm install fb
```

and import like the following:

```JavaScript
import { Meteor } from 'meteor/meteor';
import FB from 'fb';

FB.mapi = Meteor.wrapAsync(FB.napi);
```

----

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
