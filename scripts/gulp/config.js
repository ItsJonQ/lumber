// Gulp :: Config
'use strict';

var config = {
  app: 'app',
  assetsDir: '{{site.theme.link}}/',
  cache: '.asset-cache',
  dest: 'public',
  name: 'app',
  port: 8080,
  src: 'src',
  sync: {
    dest: '/var/www/html/wp-content/themes/themename',
    host: '123.123.123.123',
    user: 'root'
  },
  temp: '.tmp',
  url: 'local.dev',
  views: 'views',
};

module.exports = config;
