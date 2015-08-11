Package.describe({
  name: 'daishi:facebook-server-api',
  version: '0.0.2',
  summary: 'Facebook Graph API on server side only',
  git: 'https://github.com/dai-shi/meteor-facebook-server-api',
  documentation: 'README.md'
});

Npm.depends({
  fb: '0.7.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('facebook-server-api.js', 'server');
  api.export('FB', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('daishi:facebook-server-api', 'server');
  api.addFiles('facebook-server-api-tests.js', 'server');
});
