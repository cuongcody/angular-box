const path = require('path');
// generic mock for assets
module.exports = {
  process(src, filename, _, __) {
    return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
  }
};
