const proxy = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
      proxy('/search?name=middle', {
          target: 'http://universities.hipolabs.com',
          changeOrigin: true,
      })
  );  
};