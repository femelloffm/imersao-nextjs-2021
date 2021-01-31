Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _styledComponents = _interopRequireDefault(require('styled-components'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  const data = _taggedTemplateLiteral(['\n  label {\n    &[data-selected="true"] {\n      background-color: ', ';\n      \n      &[data-status="SUCCESS"] {\n        background-color: ', ';\n      }\n      &[data-status="ERROR"] {\n        background-color: ', ';\n      }\n    }\n    &:focus {\n      opacity: 1;\n    } \n  }\n  button {\n    margin-top: 24px;\n  }\n']);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const AlternativesForm = _styledComponents.default.form(_templateObject(), (_ref) => {
  const { theme } = _ref;
  return theme.colors.primary;
}, (_ref2) => {
  const { theme } = _ref2;
  return theme.colors.success;
}, (_ref3) => {
  const { theme } = _ref3;
  return theme.colors.wrong;
});

const _default = AlternativesForm;
exports.default = _default;
