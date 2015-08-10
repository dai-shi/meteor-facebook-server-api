Package.describe({
  name: 'daishi:facebook-server-api',
  version: '0.0.1',
  summary: 'A wrapper for the fb package in npm',
  git: '',
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
  api.use('daishi:facebook-server-api');
  api.addFiles('facebook-server-api-tests.js');
});
