const files = require.context('./module', false, /\.js$/)
var pages = {}
files.keys().forEach(key => {
  pages[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})
export default pages