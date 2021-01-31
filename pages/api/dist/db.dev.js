Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = dbHandler;

const _db = _interopRequireDefault(require('../../db.json'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function dbHandler(request, response) {
  if (request.method === 'OPTIONS') {
    response.status(200).end();
    return;
  }

  response.setHeader('Access-Control-Allow-Credentials', true);
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  response.json(_db.default);
}
