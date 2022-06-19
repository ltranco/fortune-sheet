'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@fortune-sheet/core');
var React = require('react');
var produce = require('immer');
var _ = require('lodash');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var produce__default = /*#__PURE__*/_interopDefaultLegacy(produce);
var ___default = /*#__PURE__*/_interopDefaultLegacy(_);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var WorkbookContext = /*#__PURE__*/React__default['default'].createContext({
  context: core.defaultContext(),
  setContext: function setContext() {},
  settings: core.defaultSettings,
  handleUndo: function handleUndo() {},
  handleRedo: function handleRedo() {},
  refs: {
    globalCache: {
      undoList: [],
      redoList: []
    },
    cellInput: /*#__PURE__*/React__default['default'].createRef(),
    fxInput: /*#__PURE__*/React__default['default'].createRef(),
    canvas: /*#__PURE__*/React__default['default'].createRef(),
    scrollbarX: /*#__PURE__*/React__default['default'].createRef(),
    scrollbarY: /*#__PURE__*/React__default['default'].createRef(),
    cellArea: /*#__PURE__*/React__default['default'].createRef(),
    workbookContainer: /*#__PURE__*/React__default['default'].createRef()
  }
});

var ColumnHeader = function ColumnHeader() {
  var _useContext = React.useContext(WorkbookContext),
      context = _useContext.context,
      setContext = _useContext.setContext,
      settings = _useContext.settings,
      refs = _useContext.refs;

  var containerRef = React.useRef(null);
  var colChangeSizeRef = React.useRef(null);

  var _useState = React.useState({
    col: -1,
    col_pre: -1
  }),
      _useState2 = _slicedToArray(_useState, 2),
      hoverLocation = _useState2[0],
      setHoverLocation = _useState2[1];

  var _useState3 = React.useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedLocation = _useState4[0],
      setSelectedLocation = _useState4[1];

  var onMouseMove = React.useCallback(function (e) {
    if (context.luckysheet_cols_change_size) {
      return;
    }

    var x = e.pageX - containerRef.current.getBoundingClientRect().left + containerRef.current.scrollLeft;
    var col_location = core.colLocation(x, context.visibledatacolumn);

    var _col_location = _slicedToArray(col_location, 2),
        col_pre = _col_location[0],
        col = _col_location[1];

    if (col_pre !== hoverLocation.col_pre || col !== hoverLocation.col) {
      setHoverLocation({
        col_pre: col_pre,
        col: col
      });
    }
  }, [context.luckysheet_cols_change_size, context.visibledatacolumn, hoverLocation.col, hoverLocation.col_pre]);
  var onMouseDown = React.useCallback(function (e) {
    var nativeEvent = e.nativeEvent;
    setContext(function (draftCtx) {
      core.handleColumnHeaderMouseDown(draftCtx, refs.globalCache, nativeEvent, containerRef.current, refs.cellInput.current, refs.fxInput.current);
    });
  }, [refs.globalCache, refs.cellInput, refs.fxInput, setContext]);
  var onMouseLeave = React.useCallback(function () {
    if (context.luckysheet_cols_change_size) {
      return;
    }

    setHoverLocation({
      col: -1,
      col_pre: -1
    });
  }, [context.luckysheet_cols_change_size]);
  var onColSizeHandleMouseDown = React.useCallback(function (e) {
    var nativeEvent = e.nativeEvent;
    setContext(function (draftCtx) {
      core.handleColSizeHandleMouseDown(draftCtx, refs.globalCache, nativeEvent, containerRef.current, refs.workbookContainer.current, refs.cellArea.current);
    });
    e.stopPropagation();
  }, [refs.cellArea, refs.globalCache, refs.workbookContainer, setContext]);
  var onContextMenu = React.useCallback(function (e) {
    var nativeEvent = e.nativeEvent;
    setContext(function (draftCtx) {
      core.handleContextMenu(draftCtx, settings, nativeEvent, refs.workbookContainer.current);
    });
  }, [refs.workbookContainer, setContext, settings]);
  React.useEffect(function () {
    var s = context.luckysheet_select_save;
    if (___default['default'].isNil(s)) return;
    var columnTitleMap = {};

    for (var i = 0; i < s.length; i += 1) {
      var c1 = s[i].column[0];
      var c2 = s[i].column[1];
      columnTitleMap = core.selectTitlesMap(columnTitleMap, c1, c2);
    }

    var columnTitleRange = core.selectTitlesRange(columnTitleMap);
    var selects = [];

    for (var j = 0; j < columnTitleRange.length; j += 1) {
      var _c = columnTitleRange[j][0];
      var _c2 = columnTitleRange[j][columnTitleRange[j].length - 1];
      var col = core.colLocationByIndex(_c2, context.visibledatacolumn)[1];
      var col_pre = core.colLocationByIndex(_c, context.visibledatacolumn)[0];

      if (___default['default'].isNumber(col) && ___default['default'].isNumber(col_pre)) {
        selects.push({
          col: col,
          col_pre: col_pre
        });
      }
    }

    setSelectedLocation(selects);
  }, [context.luckysheet_select_save, context.visibledatacolumn]);
  React.useEffect(function () {
    containerRef.current.scrollLeft = context.scrollLeft;
  }, [context.scrollLeft]);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    ref: containerRef,
    className: "fortune-col-header",
    style: {
      height: context.columnHeaderHeight - 1.5
    },
    onMouseMove: onMouseMove,
    onMouseDown: onMouseDown,
    onMouseLeave: onMouseLeave,
    onContextMenu: onContextMenu
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-cols-change-size",
    ref: colChangeSizeRef,
    id: "fortune-cols-change-size",
    onMouseDown: onColSizeHandleMouseDown,
    style: {
      left: hoverLocation.col - 5,
      opacity: context.luckysheet_cols_change_size ? 1 : 0
    }
  }), !context.luckysheet_cols_change_size && hoverLocation.col >= 0 && hoverLocation.col_pre >= 0 ? /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-col-header-hover",
    style: {
      left: hoverLocation.col_pre,
      width: hoverLocation.col - hoverLocation.col_pre - 1,
      display: "block"
    }
  }) : null, selectedLocation.map(function (_ref, i) {
    var col = _ref.col,
        col_pre = _ref.col_pre;
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: "fortune-col-header-selected",
      key: i,
      style: {
        left: col_pre,
        width: col - col_pre - 1,
        display: "block",
        backgroundColor: "rgba(76, 76, 76, 0.1)"
      }
    });
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "luckysheet-cols-h-cells luckysheetsheetchange",
    id: "luckysheet-cols-h-cells_0",
    style: {
      width: context.ch_width,
      height: 1
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "luckysheet-cols-h-cells-c"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "luckysheet-grdblkpush"
  }))));
};

var RowHeader = function RowHeader() {
  var _useContext = React.useContext(WorkbookContext),
      context = _useContext.context,
      setContext = _useContext.setContext,
      settings = _useContext.settings,
      refs = _useContext.refs;

  var rowChangeSizeRef = React.useRef(null);
  var containerRef = React.useRef(null);

  var _useState = React.useState({
    row: -1,
    row_pre: -1
  }),
      _useState2 = _slicedToArray(_useState, 2),
      hoverLocation = _useState2[0],
      setHoverLocation = _useState2[1];

  var _useState3 = React.useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedLocation = _useState4[0],
      setSelectedLocation = _useState4[1];

  var onMouseMove = React.useCallback(function (e) {
    if (context.luckysheet_rows_change_size) {
      return;
    }

    var y = e.pageY - containerRef.current.getBoundingClientRect().top + containerRef.current.scrollTop;
    var row_location = core.rowLocation(y, context.visibledatarow);

    var _row_location = _slicedToArray(row_location, 2),
        row_pre = _row_location[0],
        row = _row_location[1];

    if (row_pre !== hoverLocation.row_pre || row !== hoverLocation.row) {
      setHoverLocation({
        row_pre: row_pre,
        row: row
      });
    }
  }, [context.luckysheet_rows_change_size, context.visibledatarow, hoverLocation.row, hoverLocation.row_pre]);
  var onMouseDown = React.useCallback(function (e) {
    var nativeEvent = e.nativeEvent;
    setContext(function (draftCtx) {
      core.handleRowHeaderMouseDown(draftCtx, refs.globalCache, nativeEvent, containerRef.current, refs.cellInput.current, refs.fxInput.current);
    });
  }, [refs.globalCache, refs.cellInput, refs.fxInput, setContext]);
  var onMouseLeave = React.useCallback(function () {
    if (context.luckysheet_rows_change_size) {
      return;
    }

    setHoverLocation({
      row: -1,
      row_pre: -1
    });
  }, [context.luckysheet_rows_change_size]);
  var onRowSizeHandleMouseDown = React.useCallback(function (e) {
    var nativeEvent = e.nativeEvent;
    setContext(function (draftCtx) {
      core.handleRowSizeHandleMouseDown(draftCtx, refs.globalCache, nativeEvent, containerRef.current, refs.workbookContainer.current, refs.cellArea.current);
    });
    e.stopPropagation();
  }, [refs.cellArea, refs.globalCache, refs.workbookContainer, setContext]);
  var onContextMenu = React.useCallback(function (e) {
    var nativeEvent = e.nativeEvent;
    setContext(function (draftCtx) {
      core.handleContextMenu(draftCtx, settings, nativeEvent, refs.workbookContainer.current);
    });
  }, [refs.workbookContainer, setContext, settings]);
  React.useEffect(function () {
    var s = context.luckysheet_select_save || [];
    var rowTitleMap = {};

    for (var i = 0; i < s.length; i += 1) {
      var r1 = s[i].row[0];
      var r2 = s[i].row[1];
      rowTitleMap = core.selectTitlesMap(rowTitleMap, r1, r2);
    }

    var rowTitleRange = core.selectTitlesRange(rowTitleMap);
    var selects = [];

    for (var _i = 0; _i < rowTitleRange.length; _i += 1) {
      var _r = rowTitleRange[_i][0];
      var _r2 = rowTitleRange[_i][rowTitleRange[_i].length - 1];
      var row = core.rowLocationByIndex(_r2, context.visibledatarow)[1];
      var row_pre = core.rowLocationByIndex(_r, context.visibledatarow)[0];

      if (___default['default'].isNumber(row_pre) && ___default['default'].isNumber(row)) {
        selects.push({
          row: row,
          row_pre: row_pre
        });
      }
    }

    setSelectedLocation(selects);
  }, [context.luckysheet_select_save, context.visibledatarow]);
  React.useEffect(function () {
    containerRef.current.scrollTop = context.scrollTop;
  }, [context.scrollTop]);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    ref: containerRef,
    className: "fortune-row-header",
    style: {
      width: context.rowHeaderWidth - 1.5,
      height: context.cellmainHeight
    },
    onMouseMove: onMouseMove,
    onMouseDown: onMouseDown,
    onMouseLeave: onMouseLeave,
    onContextMenu: onContextMenu
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-rows-change-size",
    ref: rowChangeSizeRef,
    onMouseDown: onRowSizeHandleMouseDown,
    style: {
      top: hoverLocation.row - 3,
      opacity: context.luckysheet_rows_change_size ? 1 : 0
    }
  }), hoverLocation.row >= 0 && hoverLocation.row_pre >= 0 ? /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-row-header-hover",
    style: {
      top: hoverLocation.row_pre,
      height: hoverLocation.row - hoverLocation.row_pre - 1,
      display: "block"
    }
  }) : null, selectedLocation.map(function (_ref, i) {
    var row = _ref.row,
        row_pre = _ref.row_pre;
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: "fortune-row-header-selected",
      key: i,
      style: {
        top: row_pre,
        height: row - row_pre - 1,
        display: "block",
        backgroundColor: "rgba(76, 76, 76, 0.1)"
      }
    });
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      height: context.rh_height,
      width: 1
    },
    id: "luckysheetrowHeader_0",
    className: "luckysheetsheetchange"
  }));
};

var ContentEditable = /*#__PURE__*/function (_React$Component) {
  _inherits(ContentEditable, _React$Component);

  var _super = _createSuper(ContentEditable);

  function ContentEditable() {
    var _this;

    _classCallCheck(this, ContentEditable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.lastHtml = undefined;
    _this.root = null;
    return _this;
  }

  _createClass(ContentEditable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          autoFocus = _this$props.autoFocus,
          initialContent = _this$props.initialContent;

      if (autoFocus) {
        var _this$root;

        (_this$root = this.root) === null || _this$root === void 0 ? void 0 : _this$root.focus();
      }

      if (initialContent && this.root) {
        this.root.innerHTML = initialContent;
      }
    }
  }, {
    key: "emitChange",
    value: function emitChange() {
      var _this$root2;

      var onChange = this.props.onChange;
      var html = (_this$root2 = this.root) === null || _this$root2 === void 0 ? void 0 : _this$root2.innerHTML;

      if (onChange && html !== this.lastHtml) {
        onChange(html || "");
      }

      this.lastHtml = html;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          innerRef = _this$props2.innerRef,
          _onBlur = _this$props2.onBlur;
      return /*#__PURE__*/React__default['default'].createElement("div", _objectSpread2(_objectSpread2({
        onMouseDown: function onMouseDown(e) {
          return e.stopPropagation();
        },
        onDoubleClick: function onDoubleClick(e) {
          return e.stopPropagation();
        },
        onClick: function onClick(e) {
          return e.stopPropagation();
        }
      }, ___default['default'].omit(this.props, "innerRef", "onChange", "html", "onBlur", "autoFocus", "initialContent")), {}, {
        ref: function ref(e) {
          _this2.root = e;
          innerRef === null || innerRef === void 0 ? void 0 : innerRef(e);
        },
        tabIndex: 0,
        onInput: this.emitChange.bind(this),
        onBlur: function onBlur(e) {
          _this2.emitChange.bind(_this2)();

          _onBlur === null || _onBlur === void 0 ? void 0 : _onBlur(e);
        },
        contentEditable: true
      }));
    }
  }]);

  return ContentEditable;
}(React__default['default'].Component);

var FormulaSearch = function FormulaSearch(props) {
  var _useContext = React.useContext(WorkbookContext),
      context = _useContext.context;

  if (___default['default'].isEmpty(context.functionCandidates)) return null;
  return /*#__PURE__*/React__default['default'].createElement("div", _objectSpread2(_objectSpread2({}, props), {}, {
    id: "luckysheet-formula-search-c",
    className: "luckysheet-formula-search-c"
  }), context.functionCandidates.map(function (v) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      key: v.n,
      "data-func": v.n,
      className: "luckysheet-formula-search-item"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "luckysheet-formula-search-func"
    }, v.n), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "luckysheet-formula-search-detail"
    }, v.d));
  }));
};

var FormulaHint = function FormulaHint(props) {
  var _useContext = React.useContext(WorkbookContext),
      context = _useContext.context;

  var _locale = core.locale(context),
      formulaMore = _locale.formulaMore;

  if (!context.functionHint) return null;
  var fn = context.formulaCache.functionlistMap[context.functionHint];
  if (!fn) return null;
  return /*#__PURE__*/React__default['default'].createElement("div", _objectSpread2(_objectSpread2({}, props), {}, {
    id: "luckysheet-formula-help-c",
    className: "luckysheet-formula-help-c"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "luckysheet-formula-help-close",
    title: "\u5173\u95ED"
  }, /*#__PURE__*/React__default['default'].createElement("i", {
    className: "fa fa-times",
    "aria-hidden": "true"
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "luckysheet-formula-help-collapse",
    title: "\u6536\u8D77"
  }, /*#__PURE__*/React__default['default'].createElement("i", {
    className: "fa fa-angle-up",
    "aria-hidden": "true"
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "luckysheet-formula-help-title"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "luckysheet-formula-help-title-formula"
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "luckysheet-arguments-help-function-name"
  }, fn.n), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "luckysheet-arguments-paren"
  }, "("), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "luckysheet-arguments-parameter-holder"
  }, fn.p.map(function (param, i) {
    var name = param.name;

    if (param.repeat === "y") {
      name += ", ...";
    }

    if (param.require === "o") {
      name = "[".concat(name, "]");
    }

    return /*#__PURE__*/React__default['default'].createElement("span", {
      className: "luckysheet-arguments-help-parameter",
      dir: "auto",
      key: name
    }, name, i !== fn.p.length - 1 && ", ");
  })), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "luckysheet-arguments-paren"
  }, ")"))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "luckysheet-formula-help-content"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "luckysheet-formula-help-content-example"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "luckysheet-arguments-help-section-title"
  }, formulaMore.helpExample), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "luckysheet-arguments-help-formula"
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "luckysheet-arguments-help-function-name"
  }, fn.n), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "luckysheet-arguments-paren"
  }, "("), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "luckysheet-arguments-parameter-holder"
  }, fn.p.map(function (param, i) {
    return /*#__PURE__*/React__default['default'].createElement("span", {
      key: param.name,
      className: "luckysheet-arguments-help-parameter",
      dir: "auto"
    }, param.example, i !== fn.p.length - 1 && ", ");
  })), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "luckysheet-arguments-paren"
  }, ")"))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "luckysheet-formula-help-content-detail"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "luckysheet-arguments-help-section"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "luckysheet-arguments-help-section-title luckysheet-arguments-help-parameter-name"
  }, formulaMore.helpAbstract), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "luckysheet-arguments-help-parameter-content"
  }, fn.d))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "luckysheet-formula-help-content-param"
  }, fn.p.map(function (param) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: "luckysheet-arguments-help-section",
      key: param.name
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "luckysheet-arguments-help-section-title"
    }, param.name, param.repeat === "y" && /*#__PURE__*/React__default['default'].createElement("span", {
      className: "luckysheet-arguments-help-argument-info"
    }, "...-", formulaMore.allowRepeatText), param.require === "o" && /*#__PURE__*/React__default['default'].createElement("span", {
      className: "luckysheet-arguments-help-argument-info"
    }, "-[", formulaMore.allowOptionText, "]")), /*#__PURE__*/React__default['default'].createElement("span", {
      className: "luckysheet-arguments-help-parameter-content"
    }, param.detail));
  }))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "luckysheet-formula-help-foot"
  }));
};

function usePrevious(value) {
  var ref = React.useRef();
  React.useEffect(function () {
    ref.current = value;
  }, [value]);
  return ref.current;
}

var InputBox = function InputBox() {
  var _context$luckysheet_s;

  var _useContext = React.useContext(WorkbookContext),
      context = _useContext.context,
      setContext = _useContext.setContext,
      refs = _useContext.refs;

  var inputRef = React.useRef(null);
  var lastKeyDownEventRef = React.useRef();
  var prevCellUpdate = usePrevious(context.luckysheetCellUpdate);
  var prevSheetId = usePrevious(context.currentSheetId);
  var firstSelection = (_context$luckysheet_s = context.luckysheet_select_save) === null || _context$luckysheet_s === void 0 ? void 0 : _context$luckysheet_s[0];
  var inputBoxStyle = React.useMemo(function () {
    if (firstSelection && context.luckysheetCellUpdate.length > 0) {
      var flowdata = core.getFlowdata(context);
      if (!flowdata) return {};
      return core.getStyleByCell(flowdata, firstSelection.row_focus, firstSelection.column_focus);
    }

    return {};
  }, [context.luckysheetfile, context.currentSheetId, context.luckysheetCellUpdate, firstSelection]);
  React.useLayoutEffect(function () {
    if (firstSelection && context.luckysheetCellUpdate.length > 0) {
      var _flowdata$row_index;

      if (refs.globalCache.doNotUpdateCell) {
        delete refs.globalCache.doNotUpdateCell;
        return;
      }

      if (___default['default'].isEqual(prevCellUpdate, context.luckysheetCellUpdate) && prevSheetId === context.currentSheetId) {
        return;
      }

      var flowdata = core.getFlowdata(context);
      var row_index = firstSelection.row_focus;
      var col_index = firstSelection.column_focus;
      var cell = flowdata === null || flowdata === void 0 ? void 0 : (_flowdata$row_index = flowdata[row_index]) === null || _flowdata$row_index === void 0 ? void 0 : _flowdata$row_index[col_index];
      var value = "";

      if (cell && !refs.globalCache.overwriteCell) {
        if (core.isInlineStringCell(cell)) {
          value = core.getInlineStringHTML(row_index, col_index, flowdata);
        } else if (cell.f) {
          value = core.getCellValue(row_index, col_index, flowdata, "f");
          setContext(function (ctx) {
            core.createRangeHightlight(ctx, value);
          });
        } else {
          value = core.valueShowEs(row_index, col_index, flowdata);

          if (Number(cell.qp) === 1) {
            value = value ? "".concat(value) : value;
          }
        }
      }

      refs.globalCache.overwriteCell = false;
      inputRef.current.innerHTML = core.escapeScriptTag(value);

      if (!refs.globalCache.doNotFocus) {
        setTimeout(function () {
          core.moveToEnd(inputRef.current);
        });
      }

      delete refs.globalCache.doNotFocus;
    }
  }, [context.luckysheetCellUpdate, context.luckysheetfile, context.currentSheetId, firstSelection]);
  React.useEffect(function () {
    if (___default['default'].isEmpty(context.luckysheetCellUpdate)) {
      if (inputRef.current) {
        inputRef.current.innerHTML = "";
      }
    }
  }, [context.luckysheetCellUpdate]);
  var onKeyDown = React.useCallback(function (e) {
    lastKeyDownEventRef.current = new KeyboardEvent(e.type, e.nativeEvent);

    if (e.key === "Escape" && context.luckysheetCellUpdate.length > 0) {
      setContext(function (draftCtx) {
        core.cancelNormalSelected(draftCtx);
        core.moveHighlightCell(draftCtx, "down", 0, "rangeOfSelect");
      });
      e.preventDefault();
    } else if (e.key === "Enter" && context.luckysheetCellUpdate.length > 0) {
      if (e.altKey || e.metaKey) {
        document.execCommand("insertHTML", false, "\n");
        e.stopPropagation();
      }
    } else if (e.key === "Tab" && context.luckysheetCellUpdate.length > 0) {
      setContext(function (draftCtx) {
        core.updateCell(draftCtx, draftCtx.luckysheetCellUpdate[0], draftCtx.luckysheetCellUpdate[1], refs.cellInput.current);
        core.moveHighlightCell(draftCtx, "right", 1, "rangeOfSelect");
      });
      e.preventDefault();
      e.stopPropagation();
    } else if (e.key === "F4" && context.luckysheetCellUpdate.length > 0) {
      e.preventDefault();
    }
  }, [context.luckysheetCellUpdate.length, refs.cellInput, setContext]);
  var onChange = React.useCallback(function () {
    var e = lastKeyDownEventRef.current;
    if (!e) return;
    var kcode = e.keyCode;
    if (!kcode) return;

    if (!(kcode >= 112 && kcode <= 123 || kcode <= 46 || kcode === 144 || kcode === 108 || e.ctrlKey || e.altKey || e.shiftKey && (kcode === 37 || kcode === 38 || kcode === 39 || kcode === 40)) || kcode === 8 || kcode === 32 || kcode === 46 || e.ctrlKey && kcode === 86) {
      setContext(function (draftCtx) {
        core.handleFormulaInput(draftCtx, refs.fxInput.current, refs.cellInput.current, kcode);
      });
    }
  }, [refs.cellInput, refs.fxInput, setContext]);
  var onPaste = React.useCallback(function (e) {
    if (___default['default'].isEmpty(context.luckysheetCellUpdate)) {
      e.preventDefault();
    }
  }, [context.luckysheetCellUpdate]);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "luckysheet-input-box",
    style: firstSelection && !___default['default'].isEmpty(context.luckysheetCellUpdate) ? {
      left: firstSelection.left,
      top: firstSelection.top,
      display: "block"
    } : {
      left: -10000,
      top: -10000,
      display: "block"
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "luckysheet-input-box-inner",
    style: firstSelection ? _objectSpread2({
      minWidth: firstSelection.width,
      minHeight: firstSelection.height
    }, inputBoxStyle) : {}
  }, /*#__PURE__*/React__default['default'].createElement(ContentEditable, {
    innerRef: function innerRef(e) {
      inputRef.current = e;
      refs.cellInput.current = e;
    },
    className: "luckysheet-cell-input",
    id: "luckysheet-rich-text-editor",
    "aria-autocomplete": "list",
    onChange: onChange,
    onKeyDown: onKeyDown,
    onPaste: onPaste
  })), document.activeElement === inputRef.current && /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(FormulaSearch, {
    style: {
      top: ((firstSelection === null || firstSelection === void 0 ? void 0 : firstSelection.height_move) || 0) + 4
    }
  }), /*#__PURE__*/React__default['default'].createElement(FormulaHint, {
    style: {
      top: ((firstSelection === null || firstSelection === void 0 ? void 0 : firstSelection.height_move) || 0) + 4
    }
  })));
};

var ScrollBar = function ScrollBar(_ref) {
  var axis = _ref.axis;

  var _useContext = React.useContext(WorkbookContext),
      context = _useContext.context,
      refs = _useContext.refs,
      setContext = _useContext.setContext;

  React.useEffect(function () {
    if (axis === "x") {
      refs.scrollbarX.current.scrollLeft = context.scrollLeft;
    } else {
      refs.scrollbarY.current.scrollTop = context.scrollTop;
    }
  }, [axis === "x" ? context.scrollLeft : context.scrollTop]);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    ref: axis === "x" ? refs.scrollbarX : refs.scrollbarY,
    style: axis === "x" ? {
      width: "100%"
    } : {
      height: "100%"
    },
    className: "luckysheet-scrollbars luckysheet-scrollbar-ltr luckysheet-scrollbar-".concat(axis),
    onScroll: function onScroll() {
      if (axis === "x") {
        setContext(function (draftCtx) {
          draftCtx.scrollLeft = refs.scrollbarX.current.scrollLeft;
        });
      } else {
        setContext(function (draftCtx) {
          draftCtx.scrollTop = refs.scrollbarY.current.scrollTop;
        });
      }
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: axis === "x" ? {
      width: context.ch_width,
      height: 10
    } : {
      width: 10,
      height: context.rh_height
    }
  }));
};

var SheetOverlay = function SheetOverlay() {
  var _context$luckysheet_s, _context$luckysheet_s2, _$last, _$last2, _$last3, _$last4, _context$luckysheet_s3, _context$luckysheet_s4, _context$luckysheet_s5, _context$luckysheet_s6, _context$presences$le, _context$presences, _context$commentBoxes2, _context$insertedImgs;

  var _useContext = React.useContext(WorkbookContext),
      context = _useContext.context,
      setContext = _useContext.setContext,
      settings = _useContext.settings,
      refs = _useContext.refs;

  var containerRef = React.useRef(null);
  var flowdata = core.getFlowdata(context);
  var cellAreaMouseDown = React.useCallback(function (e) {
    var nativeEvent = e.nativeEvent;
    setContext(function (draftCtx) {
      core.handleCellAreaMouseDown(draftCtx, refs.globalCache, nativeEvent, refs.cellInput.current, refs.cellArea.current, refs.fxInput.current);
    });
  }, [refs.cellArea, refs.cellInput, refs.globalCache, refs.fxInput, setContext]);
  var cellAreaContextMenu = React.useCallback(function (e) {
    var nativeEvent = e.nativeEvent;
    setContext(function (draftCtx) {
      core.handleContextMenu(draftCtx, settings, nativeEvent, refs.workbookContainer.current);
    });
  }, [refs.workbookContainer, setContext, settings]);
  var cellAreaDoubleClick = React.useCallback(function (e) {
    var nativeEvent = e.nativeEvent;
    setContext(function (draftCtx) {
      core.handleCellAreaDoubleClick(draftCtx, refs.globalCache, settings, nativeEvent, refs.cellArea.current);
    });
  }, [refs.cellArea, refs.globalCache, setContext, settings]);
  var onLeftTopClick = React.useCallback(function () {
    setContext(function (draftCtx) {
      core.selectAll(draftCtx);
    });
  }, [setContext]);
  var onMouseMove = React.useCallback(function (e) {
    var nativeEvent = e.nativeEvent;
    setContext(function (draftCtx) {
      core.handleOverlayMouseMove(draftCtx, refs.globalCache, nativeEvent, refs.cellInput.current, refs.scrollbarX.current, refs.scrollbarY.current, containerRef.current);
    });
  }, [refs.cellInput, refs.globalCache, refs.scrollbarX, refs.scrollbarY, setContext]);
  var onMouseUp = React.useCallback(function (e) {
    var nativeEvent = e.nativeEvent;
    setContext(function (draftCtx) {
      core.handleOverlayMouseUp(draftCtx, refs.globalCache, settings, nativeEvent, containerRef.current);
    });
  }, [refs.globalCache, setContext, settings]);
  var onTouchStart = React.useCallback(function (e) {
    var nativeEvent = e.nativeEvent;
    setContext(function (draftContext) {
      core.handleOverlayTouchStart(draftContext, nativeEvent, refs.globalCache);
    });
    e.stopPropagation();
  }, [refs.globalCache, setContext]);
  var onTouchMove = React.useCallback(function (e) {
    var nativeEvent = e.nativeEvent;
    setContext(function (draftCtx) {
      core.handleOverlayTouchMove(draftCtx, nativeEvent, refs.globalCache, refs.scrollbarX.current, refs.scrollbarY.current);
    });
  }, [refs.globalCache, refs.scrollbarX, refs.scrollbarY, setContext]);
  var onTouchEnd = React.useCallback(function () {
    core.handleOverlayTouchEnd(refs.globalCache);
  }, [refs.globalCache]);
  React.useEffect(function () {
    refs.cellArea.current.scrollLeft = context.scrollLeft;
    refs.cellArea.current.scrollTop = context.scrollTop;
  }, [context.scrollLeft, context.scrollTop, refs.cellArea]);
  React.useEffect(function () {
    if (!context.editingCommentBox) {
      var _refs$cellInput$curre;

      (_refs$cellInput$curre = refs.cellInput.current) === null || _refs$cellInput$curre === void 0 ? void 0 : _refs$cellInput$curre.focus({
        preventScroll: true
      });
    }
  }, [context.editingCommentBox, context.luckysheet_select_save, refs.cellInput]);
  React.useEffect(function () {
    if (flowdata) {
      var psShownCells = [];

      for (var i = 0; i < flowdata.length; i += 1) {
        for (var j = 0; j < flowdata[i].length; j += 1) {
          var _cell$ps;

          var cell = flowdata[i][j];
          if (!cell) continue;

          if ((_cell$ps = cell.ps) === null || _cell$ps === void 0 ? void 0 : _cell$ps.isShow) {
            psShownCells.push({
              r: i,
              c: j
            });
          }
        }
      }

      setContext(function (ctx) {
        return core.showComments(ctx, psShownCells);
      });
    }
  }, [flowdata, setContext]);
  React.useLayoutEffect(function () {
    if (context.commentBoxes || context.hoveredCommentBox || context.editingCommentBox) {
      var _context$commentBoxes;

      ___default['default'].concat((_context$commentBoxes = context.commentBoxes) === null || _context$commentBoxes === void 0 ? void 0 : _context$commentBoxes.filter(function (v) {
        var _context$editingComme;

        return v.rc !== ((_context$editingComme = context.editingCommentBox) === null || _context$editingComme === void 0 ? void 0 : _context$editingComme.rc);
      }), [context.hoveredCommentBox, context.editingCommentBox]).forEach(function (box) {
        if (box) {
          core.drawArrow(box.rc, box.size);
        }
      });
    }
  }, [context.commentBoxes, context.hoveredCommentBox, context.editingCommentBox]);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-sheet-overlay",
    ref: containerRef,
    onMouseMove: onMouseMove,
    onMouseUp: onMouseUp,
    onTouchStart: onTouchStart,
    onTouchMove: onTouchMove,
    onTouchEnd: onTouchEnd,
    tabIndex: -1,
    style: {
      width: context.luckysheetTableContentHW[0],
      height: context.luckysheetTableContentHW[1]
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-col-header-wrap"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-left-top",
    onClick: onLeftTopClick,
    style: {
      width: context.rowHeaderWidth - 1.5,
      height: context.columnHeaderHeight - 1.5
    }
  }), /*#__PURE__*/React__default['default'].createElement(ColumnHeader, null)), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-row-body"
  }, /*#__PURE__*/React__default['default'].createElement(RowHeader, null), /*#__PURE__*/React__default['default'].createElement(ScrollBar, {
    axis: "x"
  }), /*#__PURE__*/React__default['default'].createElement(ScrollBar, {
    axis: "y"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    ref: refs.cellArea,
    className: "fortune-cell-area",
    onMouseDown: cellAreaMouseDown,
    onDoubleClick: cellAreaDoubleClick,
    onContextMenu: cellAreaContextMenu,
    style: {
      width: context.cellmainWidth,
      height: context.cellmainHeight,
      cursor: context.luckysheet_cell_selected_extend ? "crosshair" : "default"
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    id: "fortune-formula-functionrange"
  }), context.formulaRangeSelect && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-selection-copy fortune-formula-functionrange-select",
    style: context.formulaRangeSelect
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-selection-copy-top fortune-copy"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-selection-copy-right fortune-copy"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-selection-copy-bottom fortune-copy"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-selection-copy-left fortune-copy"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-selection-copy-hc"
  })), context.formulaRangeHighlight.map(function (v) {
    var rangeIndex = v.rangeIndex,
        backgroundColor = v.backgroundColor;
    return /*#__PURE__*/React__default['default'].createElement("div", {
      key: rangeIndex,
      id: "fortune-formula-functionrange-highlight",
      className: "fortune-selection-highlight fortune-formula-functionrange-highlight",
      style: ___default['default'].omit(v, "backgroundColor")
    }, ["top", "right", "bottom", "left"].map(function (d) {
      return /*#__PURE__*/React__default['default'].createElement("div", {
        key: d,
        "data-type": d,
        className: "fortune-selection-copy-".concat(d, " fortune-copy"),
        style: {
          backgroundColor: backgroundColor
        }
      });
    }), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "fortune-selection-copy-hc",
      style: {
        backgroundColor: backgroundColor
      }
    }), ["lt", "rt", "lb", "rb"].map(function (d) {
      return /*#__PURE__*/React__default['default'].createElement("div", {
        key: d,
        "data-type": d,
        className: "fortune-selection-highlight-".concat(d, " luckysheet-highlight"),
        style: {
          backgroundColor: backgroundColor
        }
      });
    }));
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "luckysheet-row-count-show luckysheet-count-show",
    id: "luckysheet-row-count-show"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "luckysheet-column-count-show luckysheet-count-show",
    id: "luckysheet-column-count-show"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-change-size-line",
    hidden: !context.luckysheet_cols_change_size && !context.luckysheet_rows_change_size
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "luckysheet-cell-selected-focus",
    style: ((_context$luckysheet_s = (_context$luckysheet_s2 = context.luckysheet_select_save) === null || _context$luckysheet_s2 === void 0 ? void 0 : _context$luckysheet_s2.length) !== null && _context$luckysheet_s !== void 0 ? _context$luckysheet_s : 0) > 0 ? {
      display: "block",
      left: (_$last = ___default['default'].last(context.luckysheet_select_save)) === null || _$last === void 0 ? void 0 : _$last.left,
      width: (_$last2 = ___default['default'].last(context.luckysheet_select_save)) === null || _$last2 === void 0 ? void 0 : _$last2.width,
      top: (_$last3 = ___default['default'].last(context.luckysheet_select_save)) === null || _$last3 === void 0 ? void 0 : _$last3.top,
      height: (_$last4 = ___default['default'].last(context.luckysheet_select_save)) === null || _$last4 === void 0 ? void 0 : _$last4.height
    } : {}
  }), ((_context$luckysheet_s3 = (_context$luckysheet_s4 = context.luckysheet_selection_range) === null || _context$luckysheet_s4 === void 0 ? void 0 : _context$luckysheet_s4.length) !== null && _context$luckysheet_s3 !== void 0 ? _context$luckysheet_s3 : 0) > 0 && /*#__PURE__*/React__default['default'].createElement("div", {
    id: "fortune-selection-copy"
  }, context.luckysheet_selection_range.map(function (range) {
    var r1 = range.row[0];
    var r2 = range.row[1];
    var c1 = range.column[0];
    var c2 = range.column[1];
    var row = context.visibledatarow[r2];
    var row_pre = r1 - 1 === -1 ? 0 : context.visibledatarow[r1 - 1];
    var col = context.visibledatacolumn[c2];
    var col_pre = c1 - 1 === -1 ? 0 : context.visibledatacolumn[c1 - 1];
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: "fortune-selection-copy",
      key: "".concat(r1, "-").concat(r2, "-").concat(c1, "-").concat(c2),
      style: {
        left: col_pre,
        width: col - col_pre - 1,
        top: row_pre,
        height: row - row_pre - 1
      }
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "fortune-selection-copy-top fortune-copy"
    }), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "fortune-selection-copy-right fortune-copy"
    }), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "fortune-selection-copy-bottom fortune-copy"
    }), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "fortune-selection-copy-left fortune-copy"
    }), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "fortune-selection-copy-hc"
    }));
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    id: "luckysheet-chart-rangeShow"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-cell-selected-extend"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-cell-selected-move"
  }), ((_context$luckysheet_s5 = (_context$luckysheet_s6 = context.luckysheet_select_save) === null || _context$luckysheet_s6 === void 0 ? void 0 : _context$luckysheet_s6.length) !== null && _context$luckysheet_s5 !== void 0 ? _context$luckysheet_s5 : 0) > 0 && /*#__PURE__*/React__default['default'].createElement("div", {
    id: "luckysheet-cell-selected-boxs"
  }, context.luckysheet_select_save.map(function (selection, index) {
    var _refs$globalCache$fre;

    return /*#__PURE__*/React__default['default'].createElement("div", {
      key: index,
      id: "luckysheet-cell-selected",
      className: "luckysheet-cell-selected",
      style: core.getSelectionStyle(context, selection, (_refs$globalCache$fre = refs.globalCache.freezen) === null || _refs$globalCache$fre === void 0 ? void 0 : _refs$globalCache$fre[context.currentSheetId])
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "luckysheet-cs-inner-border"
    }), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "luckysheet-cs-fillhandle",
      onMouseDown: function onMouseDown(e) {
        var nativeEvent = e.nativeEvent;
        setContext(function (draftContext) {
          core.createDropCellRange(draftContext, nativeEvent, containerRef.current);
        });
        e.stopPropagation();
      }
    }), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "luckysheet-cs-inner-border"
    }), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "luckysheet-cs-draghandle-top luckysheet-cs-draghandle"
    }), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "luckysheet-cs-draghandle-bottom luckysheet-cs-draghandle"
    }), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "luckysheet-cs-draghandle-left luckysheet-cs-draghandle"
    }), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "luckysheet-cs-draghandle-right luckysheet-cs-draghandle"
    }), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "luckysheet-cs-touchhandle luckysheet-cs-touchhandle-lt"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "luckysheet-cs-touchhandle-btn"
    })), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "luckysheet-cs-touchhandle luckysheet-cs-touchhandle-rb"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "luckysheet-cs-touchhandle-btn"
    })));
  })), ((_context$presences$le = (_context$presences = context.presences) === null || _context$presences === void 0 ? void 0 : _context$presences.length) !== null && _context$presences$le !== void 0 ? _context$presences$le : 0) > 0 && context.presences.map(function (presence, index) {
    if (presence.sheetId !== context.currentSheetId) {
      return null;
    }

    var _presence$selection = presence.selection,
        r = _presence$selection.r,
        c = _presence$selection.c,
        color = presence.color;
    var row_pre = r - 1 === -1 ? 0 : context.visibledatarow[r - 1];
    var col_pre = c - 1 === -1 ? 0 : context.visibledatacolumn[c - 1];
    var row = context.visibledatarow[r];
    var col = context.visibledatacolumn[c];
    var width = col - col_pre - 1;
    var height = row - row_pre - 1;
    var usernameStyle = {
      maxWidth: width + 1,
      backgroundColor: color
    };

    ___default['default'].set(usernameStyle, r === 0 ? "top" : "bottom", height);

    return /*#__PURE__*/React__default['default'].createElement("div", {
      key: (presence === null || presence === void 0 ? void 0 : presence.userId) || index,
      className: "fortune-presence-selection",
      style: {
        left: col_pre,
        top: row_pre - 2,
        width: width,
        height: height,
        borderColor: color,
        borderWidth: 1
      }
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "fortune-presence-username",
      style: usernameStyle
    }, presence.username));
  }), /*#__PURE__*/React__default['default'].createElement(InputBox, null), /*#__PURE__*/React__default['default'].createElement("div", {
    id: "luckysheet-postil-showBoxs"
  }, ___default['default'].concat((_context$commentBoxes2 = context.commentBoxes) === null || _context$commentBoxes2 === void 0 ? void 0 : _context$commentBoxes2.filter(function (v) {
    var _context$editingComme2;

    return (v === null || v === void 0 ? void 0 : v.rc) !== ((_context$editingComme2 = context.editingCommentBox) === null || _context$editingComme2 === void 0 ? void 0 : _context$editingComme2.rc);
  }), [context.editingCommentBox, context.hoveredCommentBox]).map(function (commentBox) {
    var _context$editingComme3;

    if (!commentBox) return null;
    var r = commentBox.r,
        c = commentBox.c,
        rc = commentBox.rc,
        left = commentBox.left,
        top = commentBox.top,
        width = commentBox.width,
        height = commentBox.height,
        value = commentBox.value,
        autoFocus = commentBox.autoFocus,
        size = commentBox.size;
    var isEditing = ((_context$editingComme3 = context.editingCommentBox) === null || _context$editingComme3 === void 0 ? void 0 : _context$editingComme3.rc) === rc;
    var commentId = "comment-box-".concat(rc);
    return /*#__PURE__*/React__default['default'].createElement("div", {
      key: rc
    }, /*#__PURE__*/React__default['default'].createElement("canvas", {
      id: "arrowCanvas-".concat(rc),
      className: "arrowCanvas",
      width: size.width,
      height: size.height,
      style: {
        position: "absolute",
        left: size.left,
        top: size.top,
        zIndex: 100,
        pointerEvents: "none"
      }
    }), /*#__PURE__*/React__default['default'].createElement("div", {
      id: commentId,
      className: "luckysheet-postil-show-main",
      style: {
        width: width,
        height: height,
        color: "#000",
        padding: 5,
        border: "1px solid #000",
        backgroundColor: "rgb(255,255,225)",
        position: "absolute",
        left: left,
        top: top,
        boxSizing: "border-box",
        zIndex: isEditing ? 200 : 100
      },
      onMouseDown: function onMouseDown(e) {
        var nativeEvent = e.nativeEvent;
        setContext(function (draftContext) {
          if (flowdata) {
            core.setEditingComment(draftContext, flowdata, r, c);
          }
        });
        core.onCommentBoxMoveStart(context, refs.globalCache, nativeEvent, containerRef.current, {
          r: r,
          c: c,
          rc: rc
        }, commentId);
        e.stopPropagation();
      }
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "luckysheet-postil-dialog-move"
    }, ["t", "r", "b", "l"].map(function (v) {
      return /*#__PURE__*/React__default['default'].createElement("div", {
        key: v,
        className: "luckysheet-postil-dialog-move-item luckysheet-postil-dialog-move-item-".concat(v),
        "data-type": v
      });
    })), isEditing && /*#__PURE__*/React__default['default'].createElement("div", {
      className: "luckysheet-postil-dialog-resize"
    }, ["lt", "mt", "lm", "rm", "rt", "lb", "mb", "rb"].map(function (v) {
      return /*#__PURE__*/React__default['default'].createElement("div", {
        key: v,
        className: "luckysheet-postil-dialog-resize-item luckysheet-postil-dialog-resize-item-".concat(v),
        "data-type": v,
        onMouseDown: function onMouseDown(e) {
          var nativeEvent = e.nativeEvent;
          core.onCommentBoxResizeStart(context, refs.globalCache, nativeEvent, containerRef.current, {
            r: r,
            c: c,
            rc: rc
          }, commentId, v);
          e.stopPropagation();
        }
      });
    })), /*#__PURE__*/React__default['default'].createElement("div", {
      style: {
        width: "100%",
        height: "100%",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React__default['default'].createElement(ContentEditable, {
      id: "comment-editor-".concat(rc),
      autoFocus: autoFocus,
      style: {
        width: "100%",
        height: "100%",
        lineHeight: "20px",
        boxSizing: "border-box",
        textAlign: "center",
        wordBreak: "break-all",
        outline: "none"
      },
      spellCheck: false,
      "data-r": r,
      "data-c": c,
      onKeyDown: function onKeyDown(e) {
        return e.stopPropagation();
      },
      onFocus: function onFocus(e) {
        refs.globalCache.editingCommentBoxEle = e.target;
      },
      onMouseDown: function onMouseDown(e) {
        setContext(function (draftContext) {
          if (flowdata) {
            core.setEditingComment(draftContext, flowdata, r, c);
          }
        });
        e.stopPropagation();
      },
      onDoubleClick: function onDoubleClick(e) {
        e.stopPropagation();
      },
      initialContent: value
    }))));
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    id: "luckysheet-multipleRange-show"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    id: "luckysheet-dynamicArray-hightShow"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    id: "luckysheet-image-showBoxs"
  }, context.activeImg && /*#__PURE__*/React__default['default'].createElement("div", {
    id: "luckysheet-modal-dialog-activeImage",
    className: "luckysheet-modal-dialog",
    style: _objectSpread2({
      padding: 0,
      position: "absolute",
      zIndex: 300
    }, ___default['default'].omit(context.activeImg, "src"))
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "luckysheet-modal-dialog-border",
    style: {
      position: "absolute"
    }
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "luckysheet-modal-dialog-content",
    style: _objectSpread2(_objectSpread2({}, ___default['default'].omit(context.activeImg, "src, left,top")), {}, {
      backgroundImage: "url(".concat(context.activeImg.src, ")"),
      backgroundSize: "".concat(context.activeImg.width, "px ").concat(context.activeImg.height, "px"),
      backgroundRepeat: "no-repeat"
    }),
    onMouseDown: function onMouseDown(e) {
      var nativeEvent = e.nativeEvent;
      core.onImageMoveStart(context, refs.globalCache, nativeEvent, containerRef.current);
      e.stopPropagation();
    }
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "luckysheet-modal-dialog-resize"
  }, ["lt", "mt", "lm", "rm", "rt", "lb", "mb", "rb"].map(function (v) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      key: v,
      className: "luckysheet-modal-dialog-resize-item luckysheet-modal-dialog-resize-item-".concat(v),
      "data-type": v,
      onMouseDown: function onMouseDown(e) {
        var nativeEvent = e.nativeEvent;
        core.onImageResizeStart(context, refs.globalCache, nativeEvent, containerRef.current, v);
        e.stopPropagation();
      }
    });
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "luckysheet-modal-dialog-controll"
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "luckysheet-modal-controll-btn luckysheet-modal-controll-crop",
    role: "button",
    tabIndex: 0,
    "aria-label": "\u88C1\u526A",
    title: "\u88C1\u526A"
  }, /*#__PURE__*/React__default['default'].createElement("i", {
    className: "fa fa-pencil",
    "aria-hidden": "true"
  })), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "luckysheet-modal-controll-btn luckysheet-modal-controll-restore",
    role: "button",
    tabIndex: 0,
    "aria-label": "\u6062\u590D\u539F\u56FE",
    title: "\u6062\u590D\u539F\u56FE"
  }, /*#__PURE__*/React__default['default'].createElement("i", {
    className: "fa fa-window-maximize",
    "aria-hidden": "true"
  })), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "luckysheet-modal-controll-btn luckysheet-modal-controll-del",
    role: "button",
    tabIndex: 0,
    "aria-label": "\u5220\u9664",
    title: "\u5220\u9664"
  }, /*#__PURE__*/React__default['default'].createElement("i", {
    className: "fa fa-trash",
    "aria-hidden": "true"
  })))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "img-list"
  }, (_context$insertedImgs = context.insertedImgs) === null || _context$insertedImgs === void 0 ? void 0 : _context$insertedImgs.map(function (v) {
    var _context$activeImg;

    var id = v.id,
        left = v.left,
        top = v.top,
        width = v.width,
        height = v.height,
        src = v.src;
    if (v.id === ((_context$activeImg = context.activeImg) === null || _context$activeImg === void 0 ? void 0 : _context$activeImg.id)) return null;
    return /*#__PURE__*/React__default['default'].createElement("div", {
      id: id,
      className: "luckysheet-modal-dialog luckysheet-modal-dialog-image",
      style: {
        width: width,
        height: height,
        padding: 0,
        position: "absolute",
        left: left,
        top: top,
        zIndex: 200
      },
      onClick: function onClick(e) {
        setContext(function (ctx) {
          ctx.activeImg = v;
        });
        e.stopPropagation();
      }
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "luckysheet-modal-dialog-content",
      style: {
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "relative"
      }
    }, /*#__PURE__*/React__default['default'].createElement("img", {
      src: src,
      alt: "",
      style: {
        width: width,
        height: height,
        padding: 0,
        position: "absolute"
      }
    })), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "luckysheet-modal-dialog-border"
    }));
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    id: "luckysheet-modal-dialog-cropping",
    className: "luckysheet-modal-dialog",
    style: {
      display: "none",
      padding: 0,
      position: "absolute",
      zIndex: 300
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "cropping-mask"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "cropping-content"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "luckysheet-modal-dialog-border",
    style: {
      position: "absolute"
    }
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "luckysheet-modal-dialog-resize"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "resize-item lt",
    "data-type": "lt"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "resize-item mt",
    "data-type": "mt"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "resize-item lm",
    "data-type": "lm"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "resize-item rm",
    "data-type": "rm"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "resize-item rt",
    "data-type": "rt"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "resize-item lb",
    "data-type": "lb"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "resize-item mb",
    "data-type": "mb"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "resize-item rb",
    "data-type": "rb"
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "luckysheet-modal-dialog-controll"
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "luckysheet-modal-controll-btn luckysheet-modal-controll-crop",
    role: "button",
    tabIndex: 0,
    "aria-label": "\u88C1\u526A",
    title: "\u88C1\u526A"
  }, /*#__PURE__*/React__default['default'].createElement("i", {
    className: "fa fa-pencil",
    "aria-hidden": "true"
  })), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "luckysheet-modal-controll-btn luckysheet-modal-controll-restore",
    role: "button",
    tabIndex: 0,
    "aria-label": "\u6062\u590D\u539F\u56FE",
    title: "\u6062\u590D\u539F\u56FE"
  }, /*#__PURE__*/React__default['default'].createElement("i", {
    className: "fa fa-window-maximize",
    "aria-hidden": "true"
  })), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "luckysheet-modal-controll-btn luckysheet-modal-controll-del",
    role: "button",
    tabIndex: 0,
    "aria-label": "\u5220\u9664",
    title: "\u5220\u9664"
  }, /*#__PURE__*/React__default['default'].createElement("i", {
    className: "fa fa-trash",
    "aria-hidden": "true"
  })))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "cell-date-picker"
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    id: "luckysheet-dataVerification-dropdown-btn"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    id: "luckysheet-dataVerification-dropdown-List",
    className: "luckysheet-mousedown-cancel"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    id: "luckysheet-dataVerification-showHintBox",
    className: "luckysheet-mousedown-cancel"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "luckysheet-cell-copy"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "luckysheet-grdblkflowpush"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    id: "luckysheet-cell-flow_0",
    className: "luckysheet-cell-flow luckysheetsheetchange"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "luckysheet-cell-flow-clip"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "luckysheet-grdblkpush"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    id: "luckysheetcoltable_0",
    className: "luckysheet-cell-flow-col"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    id: "luckysheet-sheettable_0",
    className: "luckysheet-cell-sheettable",
    style: {
      height: context.rh_height,
      width: context.ch_width
    }
  })))))));
};

var Sheet = function Sheet(_ref) {
  var _context$config, _context$config2;

  var sheet = _ref.sheet;
  var data = sheet.data;
  var containerRef = React.useRef(null);
  var placeholderRef = React.useRef(null);

  var _useContext = React.useContext(WorkbookContext),
      context = _useContext.context,
      setContext = _useContext.setContext,
      refs = _useContext.refs;

  React.useEffect(function () {
    function resize() {
      if (!data) return;
      setContext(function (draftCtx) {
        core.updateContextWithSheetData(draftCtx, data);
        core.updateContextWithCanvas(draftCtx, refs.canvas.current, placeholderRef.current);
      });
    }

    window.addEventListener("resize", resize);
    return function () {
      window.removeEventListener("resize", resize);
    };
  }, [data, refs.canvas, setContext]);
  React.useEffect(function () {
    if (!data) return;
    setContext(function (draftCtx) {
      return core.updateContextWithSheetData(draftCtx, data);
    });
  }, [(_context$config = context.config) === null || _context$config === void 0 ? void 0 : _context$config.rowlen, (_context$config2 = context.config) === null || _context$config2 === void 0 ? void 0 : _context$config2.columnlen, data, setContext]);
  React.useEffect(function () {
    setContext(function (draftCtx) {
      return core.updateContextWithCanvas(draftCtx, refs.canvas.current, placeholderRef.current);
    });
  }, [refs.canvas, setContext]);
  React.useEffect(function () {
    core.initFreeze(context, refs.globalCache, context.currentSheetId);
  }, [refs.globalCache, sheet.frozen, context.currentSheetId, context.visibledatacolumn, context.visibledatarow]);
  React.useEffect(function () {
    var _refs$globalCache$fre, _freeze$horizontal, _freeze$vertical;

    if (context.groupValuesRefreshData.length > 0) {
      return;
    }

    var tableCanvas = new core.Canvas(refs.canvas.current, context);
    if (tableCanvas == null) return;
    var freeze = (_refs$globalCache$fre = refs.globalCache.freezen) === null || _refs$globalCache$fre === void 0 ? void 0 : _refs$globalCache$fre[sheet.id];

    if ((freeze === null || freeze === void 0 ? void 0 : (_freeze$horizontal = freeze.horizontal) === null || _freeze$horizontal === void 0 ? void 0 : _freeze$horizontal.freezenhorizontaldata) || (freeze === null || freeze === void 0 ? void 0 : (_freeze$vertical = freeze.vertical) === null || _freeze$vertical === void 0 ? void 0 : _freeze$vertical.freezenverticaldata)) {
      var _freeze$horizontal2, _freeze$vertical2;

      var horizontalData = freeze === null || freeze === void 0 ? void 0 : (_freeze$horizontal2 = freeze.horizontal) === null || _freeze$horizontal2 === void 0 ? void 0 : _freeze$horizontal2.freezenhorizontaldata;
      var verticallData = freeze === null || freeze === void 0 ? void 0 : (_freeze$vertical2 = freeze.vertical) === null || _freeze$vertical2 === void 0 ? void 0 : _freeze$vertical2.freezenverticaldata;

      if (horizontalData && verticallData) {
        var _horizontalData = _slicedToArray(horizontalData, 3),
            horizontalPx = _horizontalData[0],
            horizontalScrollTop = _horizontalData[2];

        var _verticallData = _slicedToArray(verticallData, 3),
            verticalPx = _verticallData[0],
            verticalScrollWidth = _verticallData[2];

        tableCanvas.drawMain({
          scrollWidth: context.scrollLeft + verticalPx - verticalScrollWidth,
          scrollHeight: context.scrollTop + horizontalPx - horizontalScrollTop,
          offsetLeft: verticalPx - verticalScrollWidth + context.rowHeaderWidth,
          offsetTop: horizontalPx - horizontalScrollTop + context.columnHeaderHeight,
          clear: true
        });
        tableCanvas.drawMain({
          scrollWidth: context.scrollLeft + verticalPx - verticalScrollWidth,
          scrollHeight: horizontalScrollTop,
          drawHeight: horizontalPx,
          offsetLeft: verticalPx - verticalScrollWidth + context.rowHeaderWidth
        });
        tableCanvas.drawMain({
          scrollWidth: verticalScrollWidth,
          scrollHeight: context.scrollTop + horizontalPx - horizontalScrollTop,
          drawWidth: verticalPx,
          offsetTop: horizontalPx - horizontalScrollTop + context.columnHeaderHeight
        });
        tableCanvas.drawMain({
          scrollWidth: verticalScrollWidth,
          scrollHeight: horizontalScrollTop,
          drawWidth: verticalPx,
          drawHeight: horizontalPx
        });
        tableCanvas.drawColumnHeader(context.scrollLeft + verticalPx - verticalScrollWidth, undefined, verticalPx - verticalScrollWidth + context.rowHeaderWidth);
        tableCanvas.drawColumnHeader(verticalScrollWidth, verticalPx);
        tableCanvas.drawRowHeader(context.scrollTop + horizontalPx - horizontalScrollTop, undefined, horizontalPx - horizontalScrollTop + context.columnHeaderHeight);
        tableCanvas.drawRowHeader(horizontalScrollTop, horizontalPx);
        tableCanvas.drawFreezeLine({
          horizontalTop: horizontalPx - horizontalScrollTop + context.columnHeaderHeight - 2,
          verticalLeft: verticalPx - verticalScrollWidth + context.rowHeaderWidth - 2
        });
      } else if (horizontalData) {
        var _horizontalData2 = _slicedToArray(horizontalData, 3),
            _horizontalPx = _horizontalData2[0],
            _horizontalScrollTop = _horizontalData2[2];

        tableCanvas.drawMain({
          scrollWidth: context.scrollLeft,
          scrollHeight: context.scrollTop + _horizontalPx - _horizontalScrollTop,
          offsetTop: _horizontalPx - _horizontalScrollTop + context.columnHeaderHeight,
          clear: true
        });
        tableCanvas.drawMain({
          scrollWidth: context.scrollLeft,
          scrollHeight: _horizontalScrollTop,
          drawHeight: _horizontalPx
        });
        tableCanvas.drawColumnHeader(context.scrollLeft);
        tableCanvas.drawRowHeader(context.scrollTop + _horizontalPx - _horizontalScrollTop, undefined, _horizontalPx - _horizontalScrollTop + context.columnHeaderHeight);
        tableCanvas.drawRowHeader(_horizontalScrollTop, _horizontalPx);
        tableCanvas.drawFreezeLine({
          horizontalTop: _horizontalPx - _horizontalScrollTop + context.columnHeaderHeight - 2
        });
      } else if (verticallData) {
        var _verticallData2 = _slicedToArray(verticallData, 3),
            _verticalPx = _verticallData2[0],
            _verticalScrollWidth = _verticallData2[2];

        tableCanvas.drawMain({
          scrollWidth: context.scrollLeft + _verticalPx - _verticalScrollWidth,
          scrollHeight: context.scrollTop,
          offsetLeft: _verticalPx - _verticalScrollWidth + context.rowHeaderWidth
        });
        tableCanvas.drawMain({
          scrollWidth: _verticalScrollWidth,
          scrollHeight: context.scrollTop,
          drawWidth: _verticalPx
        });
        tableCanvas.drawRowHeader(context.scrollTop);
        tableCanvas.drawColumnHeader(context.scrollLeft + _verticalPx - _verticalScrollWidth, undefined, _verticalPx - _verticalScrollWidth + context.rowHeaderWidth);
        tableCanvas.drawColumnHeader(_verticalScrollWidth, _verticalPx);
        tableCanvas.drawFreezeLine({
          verticalLeft: _verticalPx - _verticalScrollWidth + context.rowHeaderWidth - 2
        });
      }
    } else {
      tableCanvas.drawMain({
        scrollWidth: context.scrollLeft,
        scrollHeight: context.scrollTop,
        clear: true
      });
      tableCanvas.drawColumnHeader(context.scrollLeft);
      tableCanvas.drawRowHeader(context.scrollTop);
    }
  }, [context, refs.canvas, refs.globalCache.freezen, setContext, sheet.id]);
  React.useEffect(function () {
    if (context.groupValuesRefreshData.length > 0) {
      setContext(function (draftCtx) {
        core.groupValuesRefresh(draftCtx);
      });
    }
  }, [context.groupValuesRefreshData.length, setContext]);
  var onWheel = React.useCallback(function (e) {
    setContext(function (draftCtx) {
      core.handleGlobalWheel(draftCtx, e, refs.globalCache, refs.scrollbarX.current, refs.scrollbarY.current);
    });
  }, [refs.globalCache, refs.scrollbarX, refs.scrollbarY, setContext]);
  React.useEffect(function () {
    var container = containerRef.current;
    container === null || container === void 0 ? void 0 : container.addEventListener("wheel", onWheel);
    return function () {
      container === null || container === void 0 ? void 0 : container.removeEventListener("wheel", onWheel);
    };
  }, [onWheel]);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    ref: containerRef,
    className: "fortune-sheet-container"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    ref: placeholderRef,
    className: "fortune-sheet-canvas-placeholder"
  }), /*#__PURE__*/React__default['default'].createElement("canvas", {
    className: "fortune-sheet-canvas",
    ref: refs.canvas
  }), /*#__PURE__*/React__default['default'].createElement(SheetOverlay, null));
};

var SVGIcon = function SVGIcon(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      name = _ref.name,
      style = _ref.style;
  return /*#__PURE__*/React__default['default'].createElement("svg", {
    width: width,
    height: height,
    style: style
  }, /*#__PURE__*/React__default['default'].createElement("use", {
    xlinkHref: "#".concat(name)
  }));
};

var Button = function Button(_ref) {
  var tooltip = _ref.tooltip,
      onClick = _ref.onClick,
      iconId = _ref.iconId,
      disabled = _ref.disabled,
      selected = _ref.selected,
      children = _ref.children;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-toolbar-button fortune-toolbar-item",
    onClick: onClick,
    "data-tips": tooltip,
    role: "button",
    style: selected ? {
      backgroundColor: "#E7E5EB"
    } : {}
  }, /*#__PURE__*/React__default['default'].createElement(SVGIcon, {
    name: iconId,
    style: disabled ? {
      opacity: 0.3
    } : {}
  }), tooltip && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-tooltip"
  }, tooltip), children);
};

var Divider = function Divider() {
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-toolbar-divider fortune-toolbar-item"
  });
};

var MenuDivider = function MenuDivider() {
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-toolbar-menu-divider"
  });
};

function useOutsideClick(containerRef, handler, deps) {
  React.useEffect(function () {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        handler();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return function () {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, deps);
}

var Combo = function Combo(_ref) {
  var tooltip = _ref.tooltip,
      _onClick = _ref.onClick,
      text = _ref.text,
      iconId = _ref.iconId,
      children = _ref.children;
  var style = {
    userSelect: "none"
  };

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = React.useState({
    left: 0
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      popupPosition = _useState4[0],
      setPopupPosition = _useState4[1];

  var popupRef = React.useRef(null);
  var buttonRef = React.useRef(null);
  useOutsideClick(popupRef, function () {
    setOpen(false);
  });
  React.useLayoutEffect(function () {
    if (!popupRef.current) {
      return;
    }

    if (!open) {
      setPopupPosition({
        left: 0
      });
    }

    var winW = window.innerWidth;
    var rect = popupRef.current.getBoundingClientRect();
    var menuW = rect.width;
    var left = rect.left;

    if (left + menuW > winW) {
      setPopupPosition({
        left: -rect.width + buttonRef.current.clientWidth
      });
    }
  }, [open]);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-toobar-combo-container fortune-toolbar-item"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    ref: buttonRef,
    className: "fortune-toolbar-combo"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-toolbar-combo-button",
    onClick: function onClick(e) {
      if (_onClick) _onClick(e);else setOpen(!open);
    },
    "data-tips": tooltip,
    role: "button",
    style: style
  }, iconId ? /*#__PURE__*/React__default['default'].createElement(SVGIcon, {
    name: iconId
  }) : /*#__PURE__*/React__default['default'].createElement("span", {
    className: "fortune-toolbar-combo-text"
  }, text)), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-toolbar-combo-arrow",
    onClick: function onClick() {
      return setOpen(!open);
    },
    "data-tips": tooltip,
    role: "button",
    style: style
  }, /*#__PURE__*/React__default['default'].createElement(SVGIcon, {
    name: "combo-arrow",
    width: 10
  })), tooltip && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-tooltip"
  }, tooltip)), open && /*#__PURE__*/React__default['default'].createElement("div", {
    ref: popupRef,
    className: "fortune-toolbar-combo-popup",
    style: popupPosition
  }, children === null || children === void 0 ? void 0 : children(setOpen)));
};

var palette = [["#000", "#444", "#666", "#999", "#ccc", "#eee", "#f3f3f3", "#fff"], ["#f00", "#f90", "#ff0", "#0f0", "#0ff", "#00f", "#90f", "#f0f"], ["#f4cccc", "#fce5cd", "#fff2cc", "#d9ead3", "#d0e0e3", "#cfe2f3", "#d9d2e9", "#ead1dc"], ["#ea9999", "#f9cb9c", "#ffe599", "#b6d7a8", "#a2c4c9", "#9fc5e8", "#b4a7d6", "#d5a6bd"], ["#e06666", "#f6b26b", "#ffd966", "#93c47d", "#76a5af", "#6fa8dc", "#8e7cc3", "#c27ba0"], ["#c00", "#e69138", "#f1c232", "#6aa84f", "#45818e", "#3d85c6", "#674ea7", "#a64d79"], ["#900", "#b45f06", "#bf9000", "#38761d", "#134f5c", "#0b5394", "#351c75", "#741b47"], ["#600", "#783f04", "#7f6000", "#274e13", "#0c343d", "#073763", "#20124d", "#4c1130"]];

var ColorPicker = function ColorPicker(_ref) {
  var onPick = _ref.onPick;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-toolbar-color-picker"
  }, palette.map(function (rows, i) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      key: i,
      className: "fortune-toolbar-color-picker-row"
    }, rows.map(function (c) {
      return /*#__PURE__*/React__default['default'].createElement("div", {
        key: c,
        className: "fortune-toolbar-color-picker-item",
        onClick: function onClick() {
          return onPick(c);
        },
        style: {
          backgroundColor: c
        }
      });
    }));
  }));
};

var Select = function Select(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-toolbar-select"
  }, children);
};

var Option = function Option(_ref2) {
  var iconId = _ref2.iconId,
      onClick = _ref2.onClick,
      children = _ref2.children;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    onClick: onClick,
    className: "fortune-toolbar-select-option"
  }, iconId && /*#__PURE__*/React__default['default'].createElement(SVGIcon, {
    name: iconId
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortuen-toolbar-text"
  }, children));
};

var Dialog = function Dialog(_ref) {
  var type = _ref.type,
      onOk = _ref.onOk,
      onCancel = _ref.onCancel,
      children = _ref.children,
      containerStyle = _ref.containerStyle,
      contentStyle = _ref.contentStyle;

  var _useContext = React.useContext(WorkbookContext),
      context = _useContext.context;

  var _locale = core.locale(context),
      button = _locale.button;

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-dialog",
    style: containerStyle
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-modal-dialog-header"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "forturn-modal-dialog-icon-close",
    onClick: onCancel
  }, /*#__PURE__*/React__default['default'].createElement(SVGIcon, {
    name: "close",
    style: {
      padding: 7,
      cursor: "pointer"
    }
  }))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-dialog-box-content",
    style: contentStyle
  }, children), type != null && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-dialog-box-button-container"
  }, type === "ok" ? /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-message-box-button button-default",
    onClick: onOk
  }, button.confirm) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-message-box-button button-primary",
    onClick: onOk
  }, button.confirm), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-message-box-button button-default",
    onClick: onCancel
  }, button.cancel))));
};

var ModalContext = /*#__PURE__*/React__default['default'].createContext({
  component: null,
  showModal: function showModal() {},
  hideModal: function hideModal() {}
});

var ModalProvider = function ModalProvider(_ref) {
  var children = _ref.children;

  var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      component = _useState2[0],
      setComponent = _useState2[1];

  var showModal = React.useCallback(function (c) {
    setComponent(c);
  }, []);
  var hideModal = React.useCallback(function () {
    setComponent(null);
  }, []);
  var providerValue = React.useMemo(function () {
    return {
      component: null,
      showModal: showModal,
      hideModal: hideModal
    };
  }, [hideModal, showModal]);
  return /*#__PURE__*/React__default['default'].createElement(ModalContext.Provider, {
    value: providerValue
  }, children, component && /*#__PURE__*/React__default['default'].createElement("div", {
    onMouseDown: function onMouseDown(e) {
      return e.stopPropagation();
    },
    onMouseMove: function onMouseMove(e) {
      return e.stopPropagation();
    },
    onMouseUp: function onMouseUp(e) {
      return e.stopPropagation();
    },
    onContextMenu: function onContextMenu(e) {
      return e.stopPropagation();
    },
    className: "fortune-popover-backdrop fortune-modal-container"
  }, component));
};

function useDialog() {
  var _useContext = React.useContext(ModalContext),
      showModal = _useContext.showModal,
      hideModal = _useContext.hideModal;

  var showDialog = React.useCallback(function (content, type) {
    var onOk = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : hideModal;
    var onCancel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : hideModal;
    showModal( /*#__PURE__*/React__default['default'].createElement(Dialog, {
      type: type,
      onOk: onOk,
      onCancel: onCancel
    }, content));
  }, [hideModal, showModal]);
  return {
    showDialog: showDialog,
    hideDialog: hideModal
  };
}

var FormulaSearch$1 = function FormulaSearch(_ref) {
  var _onCancel = _ref.onCancel;

  var _useContext = React.useContext(WorkbookContext),
      context = _useContext.context,
      setContext = _useContext.setContext,
      _useContext$refs = _useContext.refs,
      cellInput = _useContext$refs.cellInput,
      globalCache = _useContext$refs.globalCache;

  var _useState = React.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      selectedType = _useState2[0],
      setSelectedType = _useState2[1];

  var _useState3 = React.useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedFuncIndex = _useState4[0],
      setSelectedFuncIndex = _useState4[1];

  var _useState5 = React.useState(""),
      _useState6 = _slicedToArray(_useState5, 2),
      searchText = _useState6[0],
      setSearchText = _useState6[1];

  var _locale = core.locale(context),
      formulaMore = _locale.formulaMore,
      functionlist = _locale.functionlist,
      button = _locale.button;

  var typeList = React.useMemo(function () {
    return [{
      t: 0,
      n: formulaMore.Math
    }, {
      t: 1,
      n: formulaMore.Statistical
    }, {
      t: 2,
      n: formulaMore.Lookup
    }, {
      t: 3,
      n: formulaMore.luckysheet
    }, {
      t: 4,
      n: formulaMore.dataMining
    }, {
      t: 5,
      n: formulaMore.Database
    }, {
      t: 6,
      n: formulaMore.Date
    }, {
      t: 7,
      n: formulaMore.Filter
    }, {
      t: 8,
      n: formulaMore.Financial
    }, {
      t: 9,
      n: formulaMore.Engineering
    }, {
      t: 10,
      n: formulaMore.Logical
    }, {
      t: 11,
      n: formulaMore.Operator
    }, {
      t: 12,
      n: formulaMore.Text
    }, {
      t: 13,
      n: formulaMore.Parser
    }, {
      t: 14,
      n: formulaMore.Array
    }, {
      t: -1,
      n: formulaMore.other
    }];
  }, [formulaMore]);
  var filteredFunctionList = React.useMemo(function () {
    if (searchText) {
      var list = [];

      var text = ___default['default'].cloneDeep(searchText.toUpperCase());

      for (var i = 0; i < functionlist.length; i += 1) {
        if (/^[a-zA-Z]+$/.test(text)) {
          if (functionlist[i].n.indexOf(text) !== -1) {
            list.push(functionlist[i]);
          }
        } else if (functionlist[i].a.indexOf(text) !== -1) {
          list.push(functionlist[i]);
        }
      }

      return list;
    }

    return ___default['default'].filter(functionlist, function (v) {
      return v.t === selectedType;
    });
  }, [functionlist, selectedType, searchText]);
  var onConfirm = React.useCallback(function () {
    var _context$luckysheet_s;

    var last = (_context$luckysheet_s = context.luckysheet_select_save) === null || _context$luckysheet_s === void 0 ? void 0 : _context$luckysheet_s[context.luckysheet_select_save.length - 1];
    var row_index = last === null || last === void 0 ? void 0 : last.row_focus;
    var col_index = last === null || last === void 0 ? void 0 : last.column_focus;

    if (!last) {
      row_index = 0;
      col_index = 0;
    } else {
      if (row_index == null) {
        var _last$row = _slicedToArray(last.row, 1);

        row_index = _last$row[0];
      }

      if (col_index == null) {
        var _last$column = _slicedToArray(last.column, 1);

        col_index = _last$column[0];
      }
    }

    var formulaTxt = "<span dir=\"auto\" class=\"luckysheet-formula-text-color\">=</span><span dir=\"auto\" class=\"luckysheet-formula-text-color\">".concat(filteredFunctionList[selectedFuncIndex].n.toUpperCase(), "</span><span dir=\"auto\" class=\"luckysheet-formula-text-color\">(</span>");
    setContext(function (ctx) {
      if (cellInput.current != null) {
        ctx.luckysheetCellUpdate = [row_index, col_index];
        globalCache.doNotUpdateCell = true;
        cellInput.current.innerHTML = formulaTxt;
        var spans = cellInput.current.childNodes;

        if (!___default['default'].isEmpty(spans)) {
          core.setCaretPosition(ctx, spans[spans.length - 1], 0, 1);
        }

        ctx.functionHint = filteredFunctionList[selectedFuncIndex].n.toUpperCase();
        ctx.functionCandidates = [];

        if (___default['default'].isEmpty(ctx.formulaCache.functionlistMap)) {
          for (var i = 0; i < functionlist.length; i += 1) {
            ctx.formulaCache.functionlistMap[functionlist[i].n] = functionlist[i];
          }
        }

        _onCancel();
      }
    });
  }, [cellInput, context.luckysheet_select_save, filteredFunctionList, globalCache, selectedFuncIndex, setContext, _onCancel, functionlist]);
  var onCancel = React.useCallback(function () {
    setContext(function (ctx) {
      core.cancelNormalSelected(ctx);

      if (cellInput.current) {
        cellInput.current.innerHTML = "";
      }
    });

    _onCancel();
  }, [_onCancel, cellInput, setContext]);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    id: "luckysheet-search-formula"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "inpbox"
  }, /*#__PURE__*/React__default['default'].createElement("div", null, formulaMore.findFunctionTitle, "\uFF1A"), /*#__PURE__*/React__default['default'].createElement("input", {
    className: "formulaInputFocus",
    id: "searchFormulaListInput",
    placeholder: formulaMore.tipInputFunctionName,
    spellCheck: "false",
    onChange: function onChange(e) {
      return setSearchText(e.target.value);
    }
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "selbox"
  }, /*#__PURE__*/React__default['default'].createElement("span", null, formulaMore.selectCategory, "\uFF1A"), /*#__PURE__*/React__default['default'].createElement("select", {
    id: "formulaTypeSelect",
    onChange: function onChange(e) {
      setSelectedType(parseInt(e.target.value, 10));
      setSelectedFuncIndex(0);
    }
  }, typeList.map(function (v) {
    return /*#__PURE__*/React__default['default'].createElement("option", {
      key: v.t,
      value: v.t
    }, v.n);
  }))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "listbox",
    style: {
      height: 200
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", null, formulaMore.selectFunctionTitle, "\uFF1A"), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "formulaList"
  }, filteredFunctionList.map(function (v, index) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: "listBox".concat(index === selectedFuncIndex ? " on" : ""),
      key: v.n,
      onClick: function onClick() {
        return setSelectedFuncIndex(index);
      }
    }, /*#__PURE__*/React__default['default'].createElement("div", null, v.n), /*#__PURE__*/React__default['default'].createElement("div", null, v.a));
  }))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-dialog-box-button-container"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-message-box-button button-primary",
    onClick: onConfirm
  }, button.confirm), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-message-box-button button-default",
    onClick: onCancel
  }, button.cancel)));
};

var Toolbar = function Toolbar(_ref) {
  var _context$luckysheet_s, _flowdata$row;

  var setMoreItems = _ref.setMoreItems,
      moreItemsOpen = _ref.moreItemsOpen;

  var _useContext = React.useContext(WorkbookContext),
      context = _useContext.context,
      setContext = _useContext.setContext,
      refs = _useContext.refs,
      settings = _useContext.settings,
      handleUndo = _useContext.handleUndo,
      handleRedo = _useContext.handleRedo;

  var contextRef = React.useRef(context);
  var containerRef = React.useRef(null);

  var _useState = React.useState(-1),
      _useState2 = _slicedToArray(_useState, 2),
      toolbarWrapIndex = _useState2[0],
      setToolbarWrapIndex = _useState2[1];

  var _useState3 = React.useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      itemLocations = _useState4[0],
      setItemLocations = _useState4[1];

  var _useDialog = useDialog(),
      showDialog = _useDialog.showDialog,
      hideDialog = _useDialog.hideDialog;

  var firstSelection = (_context$luckysheet_s = context.luckysheet_select_save) === null || _context$luckysheet_s === void 0 ? void 0 : _context$luckysheet_s[0];
  var flowdata = core.getFlowdata(context);
  contextRef.current = context;
  var row = firstSelection === null || firstSelection === void 0 ? void 0 : firstSelection.row_focus;
  var col = firstSelection === null || firstSelection === void 0 ? void 0 : firstSelection.column_focus;
  var cell = flowdata && row != null && col != null ? flowdata === null || flowdata === void 0 ? void 0 : (_flowdata$row = flowdata[row]) === null || _flowdata$row === void 0 ? void 0 : _flowdata$row[col] : undefined;

  var _locale = core.locale(context),
      toolbar = _locale.toolbar,
      merge = _locale.merge,
      border = _locale.border,
      freezen = _locale.freezen,
      defaultFmt = _locale.defaultFmt,
      formula = _locale.formula,
      sort = _locale.sort,
      align = _locale.align,
      textWrap = _locale.textWrap,
      rotation = _locale.rotation,
      screenshot = _locale.screenshot;

  var sheetWidth = context.luckysheetTableContentHW[0];
  React.useEffect(function () {
    setToolbarWrapIndex(-1);
  }, [settings.toolbarItems]);
  React.useEffect(function () {
    if (toolbarWrapIndex === -1) {
      var container = containerRef.current;
      if (!container) return;
      var items = container.querySelectorAll(".fortune-toolbar-item");
      if (!items) return;
      var locations = [];
      var containerRect = container.getBoundingClientRect();

      for (var i = 0; i < items.length; i += 1) {
        var item = items[i];
        var itemRect = item.getBoundingClientRect();
        locations.push(itemRect.left - containerRect.left + itemRect.width);
      }

      setItemLocations(locations);
    }
  }, [toolbarWrapIndex, sheetWidth]);
  React.useEffect(function () {
    if (itemLocations.length === 0) return;
    var container = containerRef.current;
    if (!container) return;
    var moreButtonWidth = 50;

    for (var i = itemLocations.length - 1; i >= 0; i -= 1) {
      var loc = itemLocations[i];

      if (loc + moreButtonWidth < container.clientWidth) {
        setToolbarWrapIndex(i);

        if (i === itemLocations.length - 1) {
          setMoreItems(null);
        }

        break;
      }
    }
  }, [itemLocations, setMoreItems, sheetWidth]);
  var getToolbarItem = React.useCallback(function (name, i) {
    var _toolbarItemSelectedF;

    var tooltip = toolbar[name];

    if (name === "|") {
      return /*#__PURE__*/React__default['default'].createElement(Divider, {
        key: i
      });
    }

    if (["font-color", "background"].includes(name)) {
      var pick = function pick(color) {
        setContext(function (draftCtx) {
          return (name === "font-color" ? core.handleTextColor : core.handleTextBackground)(draftCtx, refs.cellInput.current, color);
        });

        if (name === "font-color") {
          refs.globalCache.recentTextColor = color;
        } else {
          refs.globalCache.recentBackgroundColor = color;
        }
      };

      return /*#__PURE__*/React__default['default'].createElement("div", null, name === "font-color" && /*#__PURE__*/React__default['default'].createElement("div", {
        style: {
          width: 17,
          height: 2,
          backgroundColor: refs.globalCache.recentTextColor,
          position: "absolute",
          top: 27,
          left: 624,
          zIndex: 1000
        }
      }), name === "background" && /*#__PURE__*/React__default['default'].createElement("div", {
        style: {
          width: 17,
          height: 2,
          backgroundColor: refs.globalCache.recentBackgroundColor,
          position: "absolute",
          top: 27,
          left: 670,
          zIndex: 1000
        }
      }), /*#__PURE__*/React__default['default'].createElement(Combo, {
        iconId: name,
        key: name,
        tooltip: tooltip,
        onClick: function onClick() {
          var color = name === "font-color" ? refs.globalCache.recentTextColor : refs.globalCache.recentBackgroundColor;
          if (color) pick(color);
        }
      }, function (setOpen) {
        return /*#__PURE__*/React__default['default'].createElement(ColorPicker, {
          onPick: function onPick(color) {
            pick(color);
            setOpen(false);
          }
        });
      }));
    }

    if (name === "format") {
      var currentFmt = defaultFmt[0].text;

      if (cell) {
        var curr = core.normalizedCellAttr(cell, "ct");

        var format = ___default['default'].find(defaultFmt, function (v) {
          return v.value === (curr === null || curr === void 0 ? void 0 : curr.fa);
        });

        if ((curr === null || curr === void 0 ? void 0 : curr.fa) != null) {
          if (format != null) {
            currentFmt = format.text;
          } else {
            currentFmt = defaultFmt[defaultFmt.length - 1].text;
          }
        }
      }

      return /*#__PURE__*/React__default['default'].createElement(Combo, {
        text: currentFmt,
        key: name,
        tooltip: tooltip
      }, function (setOpen) {
        return /*#__PURE__*/React__default['default'].createElement(Select, null, defaultFmt.slice(0, defaultFmt.length - 2).map(function (_ref2, ii) {
          var text = _ref2.text,
              value = _ref2.value,
              example = _ref2.example;
          return value !== "split" ? /*#__PURE__*/React__default['default'].createElement(Option, {
            key: value,
            onClick: function onClick() {
              setOpen(false);
              setContext(function (ctx) {
                var d = core.getFlowdata(ctx);
                if (d == null) return;
                core.updateFormat(ctx, refs.cellInput.current, d, "ct", value);
              });
            }
          }, /*#__PURE__*/React__default['default'].createElement("div", {
            className: "fortune-toolbar-menu-line"
          }, /*#__PURE__*/React__default['default'].createElement("div", null, text), /*#__PURE__*/React__default['default'].createElement("div", {
            className: "fortune-toolbar-subtext"
          }, example))) : /*#__PURE__*/React__default['default'].createElement(MenuDivider, {
            key: ii
          });
        }));
      });
    }

    if (name === "font-size") {
      return /*#__PURE__*/React__default['default'].createElement(Combo, {
        text: cell ? core.normalizedCellAttr(cell, "fs") : "10",
        key: name,
        tooltip: tooltip
      }, function (setOpen) {
        return /*#__PURE__*/React__default['default'].createElement(Select, null, [9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72].map(function (num) {
          return /*#__PURE__*/React__default['default'].createElement(Option, {
            key: num,
            onClick: function onClick() {
              setContext(function (draftContext) {
                return core.handleTextSize(draftContext, refs.cellInput.current, num);
              });
              setOpen(false);
            }
          }, num);
        }));
      });
    }

    if (name === "horizontal-align") {
      var _$find;

      var items = [{
        title: "align-left",
        text: align.left,
        value: 1
      }, {
        title: "align-center",
        text: align.center,
        value: 0
      }, {
        title: "align-right",
        text: align.right,
        value: 2
      }];
      return /*#__PURE__*/React__default['default'].createElement(Combo, {
        iconId: ((_$find = ___default['default'].find(items, function (item) {
          return "".concat(item.value) === "".concat(cell === null || cell === void 0 ? void 0 : cell.ht);
        })) === null || _$find === void 0 ? void 0 : _$find.title) || "align-left",
        key: name,
        tooltip: toolbar.horizontalAlign
      }, function (setOpen) {
        return /*#__PURE__*/React__default['default'].createElement(Select, null, items.map(function (_ref3) {
          var text = _ref3.text,
              title = _ref3.title;
          return /*#__PURE__*/React__default['default'].createElement(Option, {
            key: title,
            onClick: function onClick() {
              setContext(function (ctx) {
                core.handleHorizontalAlign(ctx, refs.cellInput.current, title.replace("align-", ""));
              });
              setOpen(false);
            }
          }, /*#__PURE__*/React__default['default'].createElement("div", {
            className: "fortune-toolbar-menu-line"
          }, text, /*#__PURE__*/React__default['default'].createElement(SVGIcon, {
            name: title
          })));
        }));
      });
    }

    if (name === "vertical-align") {
      var _$find2;

      var _items = [{
        title: "align-top",
        text: align.top,
        value: 1
      }, {
        title: "align-middle",
        text: align.middle,
        value: 0
      }, {
        title: "align-bottom",
        text: align.bottom,
        value: 2
      }];
      return /*#__PURE__*/React__default['default'].createElement(Combo, {
        iconId: ((_$find2 = ___default['default'].find(_items, function (item) {
          return "".concat(item.value) === "".concat(cell === null || cell === void 0 ? void 0 : cell.vt);
        })) === null || _$find2 === void 0 ? void 0 : _$find2.title) || "align-top",
        key: name,
        tooltip: toolbar.verticalAlign
      }, function (setOpen) {
        return /*#__PURE__*/React__default['default'].createElement(Select, null, _items.map(function (_ref4) {
          var text = _ref4.text,
              title = _ref4.title;
          return /*#__PURE__*/React__default['default'].createElement(Option, {
            key: title,
            onClick: function onClick() {
              setContext(function (ctx) {
                core.handleVerticalAlign(ctx, refs.cellInput.current, title.replace("align-", ""));
              });
              setOpen(false);
            }
          }, /*#__PURE__*/React__default['default'].createElement("div", {
            className: "fortune-toolbar-menu-line"
          }, text, /*#__PURE__*/React__default['default'].createElement(SVGIcon, {
            name: title
          })));
        }));
      });
    }

    if (name === "undo") {
      return /*#__PURE__*/React__default['default'].createElement(Button, {
        iconId: name,
        tooltip: tooltip,
        key: name,
        disabled: refs.globalCache.undoList.length === 0,
        onClick: function onClick() {
          return handleUndo();
        }
      });
    }

    if (name === "redo") {
      return /*#__PURE__*/React__default['default'].createElement(Button, {
        iconId: name,
        tooltip: tooltip,
        key: name,
        disabled: refs.globalCache.redoList.length === 0,
        onClick: function onClick() {
          return handleRedo();
        }
      });
    }

    if (name === "screenshot") {
      return /*#__PURE__*/React__default['default'].createElement(Button, {
        iconId: name,
        tooltip: tooltip,
        key: name,
        onClick: function onClick() {
          var imgsrc = core.handleScreenShot(contextRef.current);

          if (imgsrc) {
            showDialog( /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("div", null, screenshot.screenshotTipSuccess), /*#__PURE__*/React__default['default'].createElement("img", {
              src: imgsrc,
              alt: "",
              style: {
                maxWidth: "100%",
                maxHeight: "100%"
              }
            })));
          }
        }
      });
    }

    if (name === "image") {
      return /*#__PURE__*/React__default['default'].createElement(Button, {
        iconId: name,
        tooltip: toolbar.insertImage,
        key: name,
        onClick: function onClick() {
          return core.showImgChooser();
        }
      }, /*#__PURE__*/React__default['default'].createElement("input", {
        id: "fortune-img-upload",
        type: "file",
        accept: "image/*",
        style: {
          display: "none"
        },
        onChange: function onChange(e) {
          var _e$currentTarget$file;

          var file = (_e$currentTarget$file = e.currentTarget.files) === null || _e$currentTarget$file === void 0 ? void 0 : _e$currentTarget$file[0];
          if (!file) return;
          var render = new FileReader();
          render.readAsDataURL(file);

          render.onload = function (event) {
            var _event$target;

            if (event.target == null) return;
            var src = (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.result;
            var image = new Image();

            image.onload = function () {
              setContext(function (draftCtx) {
                core.insertImage(draftCtx, image);
              });
            };

            image.src = src;
          };

          e.currentTarget.value = "";
        }
      }));
    }

    if (name === "comment") {
      var _context$luckysheet_s2, _flowdata$row_index$c;

      var last = (_context$luckysheet_s2 = context.luckysheet_select_save) === null || _context$luckysheet_s2 === void 0 ? void 0 : _context$luckysheet_s2[context.luckysheet_select_save.length - 1];
      var row_index = last === null || last === void 0 ? void 0 : last.row_focus;
      var col_index = last === null || last === void 0 ? void 0 : last.column_focus;

      if (!last) {
        row_index = 0;
        col_index = 0;
      } else {
        if (row_index == null) {
          var _last$row = _slicedToArray(last.row, 1);

          row_index = _last$row[0];
        }

        if (col_index == null) {
          var _last$column = _slicedToArray(last.column, 1);

          col_index = _last$column[0];
        }
      }

      var itemData;

      if ((flowdata === null || flowdata === void 0 ? void 0 : (_flowdata$row_index$c = flowdata[row_index][col_index]) === null || _flowdata$row_index$c === void 0 ? void 0 : _flowdata$row_index$c.ps) != null) {
        itemData = [{
          key: "edit",
          text: "编辑评论",
          onClick: core.editComment
        }, {
          key: "delete",
          text: "删除",
          onClick: core.deleteComment
        }, {
          key: "showOrHide",
          text: "显示/隐藏评论",
          onClick: core.showHideComment
        }, {
          key: "showOrHideAll",
          text: "显示/隐藏所有评论",
          onClick: core.showHideAllComments
        }];
      } else {
        itemData = [{
          key: "new",
          text: "新建评论",
          onClick: core.newComment
        }, {
          key: "showOrHideAll",
          text: "显示/隐藏所有评论",
          onClick: core.showHideAllComments
        }];
      }

      return /*#__PURE__*/React__default['default'].createElement(Combo, {
        iconId: name,
        key: name,
        tooltip: tooltip
      }, function (setOpen) {
        return /*#__PURE__*/React__default['default'].createElement(Select, null, itemData.map(function (_ref5) {
          var key = _ref5.key,
              text = _ref5.text,
              _onClick = _ref5.onClick;
          return /*#__PURE__*/React__default['default'].createElement(Option, {
            key: key,
            onClick: function onClick() {
              setContext(function (draftContext) {
                return _onClick(draftContext, refs.globalCache, row_index, col_index);
              });
              setOpen(false);
            }
          }, text);
        }));
      });
    }

    if (name === "quick-formula") {
      var _itemData = [{
        text: formula.sum,
        value: "SUM"
      }, {
        text: formula.average,
        value: "AVERAGE"
      }, {
        text: formula.count,
        value: "COUNT"
      }, {
        text: formula.max,
        value: "MAX"
      }, {
        text: formula.min,
        value: "MIN"
      }];
      return /*#__PURE__*/React__default['default'].createElement(Combo, {
        iconId: "formula-sum",
        key: name,
        tooltip: toolbar.autoSum,
        onClick: function onClick() {
          return setContext(function (ctx) {
            core.handleSum(ctx, refs.cellInput.current, refs.globalCache);
          });
        }
      }, function (setOpen) {
        return /*#__PURE__*/React__default['default'].createElement(Select, null, _itemData.map(function (_ref6) {
          var value = _ref6.value,
              text = _ref6.text;
          return /*#__PURE__*/React__default['default'].createElement(Option, {
            key: value,
            onClick: function onClick() {
              setContext(function (ctx) {
                core.autoSelectionFormula(ctx, refs.cellInput.current, value, refs.globalCache);
              });
              setOpen(false);
            }
          }, /*#__PURE__*/React__default['default'].createElement("div", {
            className: "fortune-toolbar-menu-line"
          }, /*#__PURE__*/React__default['default'].createElement("div", null, text), /*#__PURE__*/React__default['default'].createElement("div", {
            className: "fortune-toolbar-subtext"
          }, value)));
        }), /*#__PURE__*/React__default['default'].createElement(MenuDivider, null), /*#__PURE__*/React__default['default'].createElement(Option, {
          key: "formula",
          onClick: function onClick() {
            showDialog( /*#__PURE__*/React__default['default'].createElement(FormulaSearch$1, {
              onCancel: hideDialog
            }));
            setOpen(false);
          }
        }, "".concat(formula.find, "...")));
      });
    }

    if (name === "merge-cell") {
      var itemdata = [{
        text: merge.mergeAll,
        value: "merge-all"
      }, {
        text: merge.mergeV,
        value: "merge-vertical"
      }, {
        text: merge.mergeH,
        value: "merge-horizontal"
      }, {
        text: merge.mergeCancel,
        value: "merge-cancel"
      }];
      return /*#__PURE__*/React__default['default'].createElement(Combo, {
        iconId: "merge-all",
        key: name,
        tooltip: tooltip,
        text: "\u5408\u5E76\u5355\u5143\u683C",
        onClick: function onClick() {
          return setContext(function (ctx) {
            core.handleMerge(ctx, "merge-all");
          });
        }
      }, function (setOpen) {
        return /*#__PURE__*/React__default['default'].createElement(Select, null, itemdata.map(function (_ref7) {
          var text = _ref7.text,
              value = _ref7.value;
          return /*#__PURE__*/React__default['default'].createElement(Option, {
            key: value,
            onClick: function onClick() {
              setContext(function (ctx) {
                core.handleMerge(ctx, value);
              });
              setOpen(false);
            }
          }, /*#__PURE__*/React__default['default'].createElement("div", {
            className: "fortune-toolbar-menu-line"
          }, /*#__PURE__*/React__default['default'].createElement(SVGIcon, {
            name: value,
            style: {
              marginRight: 4
            }
          }), text));
        }));
      });
    }

    if (name === "border") {
      var _items2 = [{
        text: border.borderTop,
        value: "border-top"
      }, {
        text: border.borderBottom,
        value: "border-bottom"
      }, {
        text: border.borderLeft,
        value: "border-left"
      }, {
        text: border.borderRight,
        value: "border-right"
      }, {
        text: "",
        value: "divider"
      }, {
        text: border.borderNone,
        value: "border-none"
      }, {
        text: border.borderAll,
        value: "border-all"
      }, {
        text: border.borderOutside,
        value: "border-outside"
      }, {
        text: "",
        value: "divider"
      }, {
        text: border.borderInside,
        value: "border-inside"
      }, {
        text: border.borderHorizontal,
        value: "border-horizontal"
      }, {
        text: border.borderVertical,
        value: "border-vertical"
      }];
      return /*#__PURE__*/React__default['default'].createElement(Combo, {
        iconId: "border-all",
        key: name,
        tooltip: tooltip,
        text: "\u8FB9\u6846\u8BBE\u7F6E",
        onClick: function onClick() {
          return setContext(function (ctx) {
            core.handleBorder(ctx, "border-all");
          });
        }
      }, function (setOpen) {
        return /*#__PURE__*/React__default['default'].createElement(Select, null, _items2.map(function (_ref8, ii) {
          var text = _ref8.text,
              value = _ref8.value;
          return value !== "divider" ? /*#__PURE__*/React__default['default'].createElement(Option, {
            key: value,
            onClick: function onClick() {
              setContext(function (ctx) {
                core.handleBorder(ctx, value);
              });
              setOpen(false);
            }
          }, /*#__PURE__*/React__default['default'].createElement("div", {
            className: "fortune-toolbar-menu-line"
          }, text, /*#__PURE__*/React__default['default'].createElement(SVGIcon, {
            name: value
          }))) : /*#__PURE__*/React__default['default'].createElement(MenuDivider, {
            key: ii
          });
        }));
      });
    }

    if (name === "freeze") {
      var _items3 = [{
        text: freezen.freezenRowRange,
        value: "freeze-row"
      }, {
        text: freezen.freezenColumnRange,
        value: "freeze-col"
      }, {
        text: freezen.freezenRCRange,
        value: "freeze-row-col"
      }, {
        text: freezen.freezenCancel,
        value: "freeze-cancel"
      }];
      return /*#__PURE__*/React__default['default'].createElement(Combo, {
        iconId: "freeze-row-col",
        key: name,
        tooltip: tooltip,
        onClick: function onClick() {
          return setContext(function (ctx) {
            core.handleFreeze(ctx, "freeze-row-col");
          });
        }
      }, function (setOpen) {
        return /*#__PURE__*/React__default['default'].createElement(Select, null, _items3.map(function (_ref9) {
          var text = _ref9.text,
              value = _ref9.value;
          return /*#__PURE__*/React__default['default'].createElement(Option, {
            key: value,
            onClick: function onClick() {
              setContext(function (ctx) {
                core.handleFreeze(ctx, value);
              });
              setOpen(false);
            }
          }, /*#__PURE__*/React__default['default'].createElement("div", {
            className: "fortune-toolbar-menu-line"
          }, text, /*#__PURE__*/React__default['default'].createElement(SVGIcon, {
            name: value
          })));
        }));
      });
    }

    if (name === "sort") {
      var _items4 = [{
        title: "sort-asc",
        text: sort.asc
      }, {
        title: "sort-desc",
        text: sort.desc
      }];
      return /*#__PURE__*/React__default['default'].createElement(Combo, {
        iconId: "sort-asc",
        key: name,
        tooltip: toolbar.sort,
        onClick: function onClick() {
          setContext(function (ctx) {
            core.handleSort(ctx, true);
          });
        }
      }, function (setOpen) {
        return /*#__PURE__*/React__default['default'].createElement(Select, null, _items4.map(function (_ref10) {
          var text = _ref10.text,
              title = _ref10.title;
          return /*#__PURE__*/React__default['default'].createElement(Option, {
            key: title,
            onClick: function onClick() {
              setContext(function (ctx) {
                if (title === "sort-asc") {
                  core.handleSort(ctx, true);
                }

                if (title === "sort-desc") {
                  core.handleSort(ctx, false);
                }
              });
              setOpen(false);
            }
          }, /*#__PURE__*/React__default['default'].createElement("div", {
            className: "fortune-toolbar-menu-line"
          }, text, /*#__PURE__*/React__default['default'].createElement(SVGIcon, {
            name: title
          })));
        }));
      });
    }

    if (name === "text-wrap") {
      var _items5 = [{
        text: textWrap.clip,
        iconId: "text-clip",
        value: "clip"
      }, {
        text: textWrap.overflow,
        iconId: "text-overflow",
        value: "overflow"
      }, {
        text: textWrap.wrap,
        iconId: "text-wrap",
        value: "wrap"
      }];
      var _curr = _items5[0];

      if ((cell === null || cell === void 0 ? void 0 : cell.tb) != null) {
        _curr = ___default['default'].get(_items5, cell.tb);
      }

      return /*#__PURE__*/React__default['default'].createElement(Combo, {
        iconId: _curr.iconId,
        key: name,
        tooltip: toolbar.textWrap
      }, function (setOpen) {
        return /*#__PURE__*/React__default['default'].createElement(Select, null, _items5.map(function (_ref11) {
          var text = _ref11.text,
              iconId = _ref11.iconId,
              value = _ref11.value;
          return /*#__PURE__*/React__default['default'].createElement(Option, {
            key: value,
            onClick: function onClick() {
              setContext(function (ctx) {
                var d = core.getFlowdata(ctx);
                if (d == null) return;
                core.updateFormat(ctx, refs.cellInput.current, d, "tb", value);
              });
              setOpen(false);
            }
          }, /*#__PURE__*/React__default['default'].createElement("div", {
            className: "fortune-toolbar-menu-line"
          }, text, /*#__PURE__*/React__default['default'].createElement(SVGIcon, {
            name: iconId
          })));
        }));
      });
    }

    if (name === "text-rotation") {
      var _items6 = [{
        text: rotation.none,
        iconId: "text-rotation-none",
        value: "none"
      }, {
        text: rotation.angleup,
        iconId: "text-rotation-angleup",
        value: "angleup"
      }, {
        text: rotation.angledown,
        iconId: "text-rotation-angledown",
        value: "angledown"
      }, {
        text: rotation.vertical,
        iconId: "text-rotation-vertical",
        value: "vertical"
      }, {
        text: rotation.rotationUp,
        iconId: "text-rotation-up",
        value: "rotation-up"
      }, {
        text: rotation.rotationDown,
        iconId: "text-rotation-down",
        value: "rotation-down"
      }];
      var _curr2 = _items6[0];

      if ((cell === null || cell === void 0 ? void 0 : cell.tr) != null) {
        _curr2 = ___default['default'].get(_items6, cell.tr);
      }

      return /*#__PURE__*/React__default['default'].createElement(Combo, {
        iconId: _curr2.iconId,
        key: name,
        tooltip: toolbar.textRotate
      }, function (setOpen) {
        return /*#__PURE__*/React__default['default'].createElement(Select, null, _items6.map(function (_ref12) {
          var text = _ref12.text,
              iconId = _ref12.iconId,
              value = _ref12.value;
          return /*#__PURE__*/React__default['default'].createElement(Option, {
            key: value,
            onClick: function onClick() {
              setContext(function (ctx) {
                var d = core.getFlowdata(ctx);
                if (d == null) return;
                core.updateFormat(ctx, refs.cellInput.current, d, "tr", value);
              });
              setOpen(false);
            }
          }, /*#__PURE__*/React__default['default'].createElement("div", {
            className: "fortune-toolbar-menu-line"
          }, text, /*#__PURE__*/React__default['default'].createElement(SVGIcon, {
            name: iconId
          })));
        }));
      });
    }

    return /*#__PURE__*/React__default['default'].createElement(Button, {
      iconId: name,
      tooltip: tooltip,
      key: name,
      selected: (_toolbarItemSelectedF = core.toolbarItemSelectedFunc(name)) === null || _toolbarItemSelectedF === void 0 ? void 0 : _toolbarItemSelectedF(cell),
      onClick: function onClick() {
        return setContext(function (draftCtx) {
          var _toolbarItemClickHand;

          (_toolbarItemClickHand = core.toolbarItemClickHandler(name)) === null || _toolbarItemClickHand === void 0 ? void 0 : _toolbarItemClickHand(draftCtx, refs.cellInput.current, refs.globalCache);
        });
      }
    });
  }, [toolbar, cell, setContext, refs.cellInput, refs.globalCache, defaultFmt, align, handleUndo, handleRedo, flowdata, formula, showDialog, hideDialog, merge, border, freezen, screenshot, sort, textWrap, rotation, context.luckysheet_select_save]);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    ref: containerRef,
    className: "fortune-toolbar"
  }, (toolbarWrapIndex === -1 ? settings.toolbarItems : settings.toolbarItems.slice(0, toolbarWrapIndex + 1)).map(function (name, i) {
    return getToolbarItem(name, i);
  }), toolbarWrapIndex !== -1 && toolbarWrapIndex < settings.toolbarItems.length - 1 ? /*#__PURE__*/React__default['default'].createElement(Button, {
    iconId: "more",
    tooltip: toolbar.toolMore,
    onClick: function onClick() {
      if (moreItemsOpen) {
        setMoreItems(null);
      } else {
        setMoreItems(settings.toolbarItems.slice(toolbarWrapIndex + 1).map(function (name, i) {
          return getToolbarItem(name, i);
        }));
      }
    }
  }) : null);
};

var LocationBox = function LocationBox() {
  var _useContext = React.useContext(WorkbookContext),
      context = _useContext.context;

  var rangeText = React.useMemo(function () {
    var lastSelection = ___default['default'].last(context.luckysheet_select_save);

    if (!(lastSelection && lastSelection.row_focus != null && lastSelection.column_focus != null)) return "";
    var rf = lastSelection.row_focus;
    var cf = lastSelection.column_focus;

    if (context.config.merge != null && "".concat(rf, "_").concat(cf) in context.config.merge) {
      return core.getRangetxt(context, context.currentSheetId, {
        column: [cf, cf],
        row: [rf, rf]
      });
    }

    return core.getRangetxt(context, context.currentSheetId, lastSelection);
  }, [context.currentSheetId, context.luckysheet_select_save]);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-name-box-container"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-name-box",
    tabIndex: 0,
    dir: "ltr",
    "aria-autocomplete": "list"
  }, rangeText));
};

var FxEditor = function FxEditor() {
  var _context$luckysheet_s, _context$luckysheet_s4;

  var _useContext = React.useContext(WorkbookContext),
      context = _useContext.context,
      setContext = _useContext.setContext,
      refs = _useContext.refs;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      focused = _useState2[0],
      setFocused = _useState2[1];

  var lastKeyDownEventRef = React.useRef();
  var inputContainerRef = React.useRef(null);
  var firstSelection = (_context$luckysheet_s = context.luckysheet_select_save) === null || _context$luckysheet_s === void 0 ? void 0 : _context$luckysheet_s[0];
  var prevFirstSelection = usePrevious(firstSelection);
  var prevSheetId = usePrevious(context.currentSheetId);
  React.useEffect(function () {
    if (___default['default'].isEqual(prevFirstSelection, firstSelection) && context.currentSheetId === prevSheetId) {
      return;
    }

    var d = core.getFlowdata(context);
    var value = "";

    if (firstSelection) {
      var _d$r;

      var r = firstSelection.row_focus;
      var c = firstSelection.column_focus;
      if (___default['default'].isNil(r) || ___default['default'].isNil(c)) return;
      var cell = d === null || d === void 0 ? void 0 : (_d$r = d[r]) === null || _d$r === void 0 ? void 0 : _d$r[c];

      if (cell) {
        if (core.isInlineStringCell(cell)) {
          value = core.getInlineStringNoStyle(r, c, d);
        } else if (cell.f) {
          value = core.getCellValue(r, c, d, "f");
        } else {
          value = core.valueShowEs(r, c, d);
        }
      }

      refs.fxInput.current.innerHTML = core.escapeScriptTag(value);
    } else {
      refs.fxInput.current.innerHTML = "";
    }
  }, [context.luckysheetfile, context.currentSheetId, context.luckysheet_select_save]);
  var onFocus = React.useCallback(function () {
    var _context$luckysheet_s2, _context$luckysheet_s3;

    if (!context.allowEdit) {
      return;
    }

    if (((_context$luckysheet_s2 = (_context$luckysheet_s3 = context.luckysheet_select_save) === null || _context$luckysheet_s3 === void 0 ? void 0 : _context$luckysheet_s3.length) !== null && _context$luckysheet_s2 !== void 0 ? _context$luckysheet_s2 : 0) > 0) {
      setFocused(true);
      setContext(function (draftCtx) {
        var last = draftCtx.luckysheet_select_save[draftCtx.luckysheet_select_save.length - 1];
        var row_index = last.row_focus;
        var col_index = last.column_focus;
        draftCtx.luckysheetCellUpdate = [row_index, col_index];
        refs.globalCache.doNotFocus = true;
      });
    }
  }, [context.allowEdit, (_context$luckysheet_s4 = context.luckysheet_select_save) === null || _context$luckysheet_s4 === void 0 ? void 0 : _context$luckysheet_s4.length, refs.globalCache, setContext]);
  var onKeyDown = React.useCallback(function (e) {
    if (!context.allowEdit) {
      return;
    }

    lastKeyDownEventRef.current = new KeyboardEvent(e.type, e.nativeEvent);
    var key = e.key;
    setContext(function (draftCtx) {
      if (context.luckysheetCellUpdate.length > 0) {
        switch (key) {
          case "Enter":
            {
              var lastCellUpdate = ___default['default'].clone(draftCtx.luckysheetCellUpdate);

              core.updateCell(draftCtx, draftCtx.luckysheetCellUpdate[0], draftCtx.luckysheetCellUpdate[1], refs.fxInput.current);
              draftCtx.luckysheet_select_save = [{
                row: [lastCellUpdate[0], lastCellUpdate[0]],
                column: [lastCellUpdate[1], lastCellUpdate[1]],
                row_focus: lastCellUpdate[0],
                column_focus: lastCellUpdate[1]
              }];
              core.moveHighlightCell(draftCtx, "down", 1, "rangeOfSelect");
              e.preventDefault();
              e.stopPropagation();
              break;
            }

          case "Escape":
            {
              core.cancelNormalSelected(draftCtx);
              core.moveHighlightCell(draftCtx, "down", 0, "rangeOfSelect");
              e.preventDefault();
              e.stopPropagation();
              break;
            }

          case "ArrowLeft":
            {
              core.rangeHightlightselected(draftCtx, refs.fxInput.current);
              break;
            }

          case "ArrowRight":
            {
              core.rangeHightlightselected(draftCtx, refs.fxInput.current);
              break;
            }
        }
      }
    });
  }, [context.allowEdit, context.luckysheetCellUpdate.length, refs.fxInput, setContext]);
  var onChange = React.useCallback(function () {
    var e = lastKeyDownEventRef.current;
    if (!e) return;
    var kcode = e.keyCode;
    if (!kcode) return;

    if (!(kcode >= 112 && kcode <= 123 || kcode <= 46 || kcode === 144 || kcode === 108 || e.ctrlKey || e.altKey || e.shiftKey && (kcode === 37 || kcode === 38 || kcode === 39 || kcode === 40)) || kcode === 8 || kcode === 32 || kcode === 46 || e.ctrlKey && kcode === 86) {
      setContext(function (draftCtx) {
        core.handleFormulaInput(draftCtx, refs.cellInput.current, refs.fxInput.current, kcode);
      });
    }
  }, [refs.cellInput, refs.fxInput, setContext]);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-fx-editor"
  }, /*#__PURE__*/React__default['default'].createElement(LocationBox, null), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-fx-icon"
  }, /*#__PURE__*/React__default['default'].createElement(SVGIcon, {
    name: "fx",
    width: 18,
    height: 18
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    ref: inputContainerRef,
    className: "fortune-fx-input-container"
  }, /*#__PURE__*/React__default['default'].createElement(ContentEditable, {
    innerRef: function innerRef(e) {
      refs.fxInput.current = e;
    },
    className: "fortune-fx-input",
    id: "luckysheet-functionbox-cell",
    "aria-autocomplete": "list",
    onFocus: onFocus,
    onKeyDown: onKeyDown,
    onChange: onChange,
    onBlur: function onBlur() {
      return setFocused(false);
    },
    tabIndex: 0
  }), focused && /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(FormulaSearch, {
    style: {
      top: inputContainerRef.current.clientHeight
    }
  }), /*#__PURE__*/React__default['default'].createElement(FormulaHint, {
    style: {
      top: inputContainerRef.current.clientHeight
    }
  }))));
};

var MessageBox = function MessageBox(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? "yesno" : _ref$type,
      onOk = _ref.onOk,
      onCancel = _ref.onCancel,
      children = _ref.children;
  return /*#__PURE__*/React__default['default'].createElement(Dialog, {
    type: type,
    onOk: onOk,
    onCancel: onCancel,
    contentStyle: {
      width: 300,
      paddingTop: 20,
      paddingBottom: 30,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, children);
};

function useAlert() {
  var _useContext = React.useContext(ModalContext),
      showModal = _useContext.showModal,
      hideModal = _useContext.hideModal;

  var showAlert = React.useCallback(function (message) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "ok";
    var onOk = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : hideModal;
    var onCancel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : hideModal;
    showModal( /*#__PURE__*/React__default['default'].createElement(MessageBox, {
      type: type,
      onOk: onOk,
      onCancel: onCancel
    }, message));
  }, [hideModal, showModal]);
  return {
    showAlert: showAlert,
    hideAlert: hideModal
  };
}

var SheetItem = function SheetItem(_ref) {
  var sheet = _ref.sheet,
      isDropPlaceholder = _ref.isDropPlaceholder;

  var _useContext = React.useContext(WorkbookContext),
      context = _useContext.context,
      setContext = _useContext.setContext,
      refs = _useContext.refs;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      editing = _useState2[0],
      setEditing = _useState2[1];

  var containerRef = React.useRef(null);
  var editable = React.useRef(null);

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      dragOver = _useState4[0],
      setDragOver = _useState4[1];

  var _useAlert = useAlert(),
      showAlert = _useAlert.showAlert;

  React.useEffect(function () {
    if (!editable.current) return;

    if (editing) {
      if (window.getSelection) {
        var range = document.createRange();
        range.selectNodeContents(editable.current);

        if (range.startContainer && document.body.contains(range.startContainer)) {
          var selection = window.getSelection();
          selection === null || selection === void 0 ? void 0 : selection.removeAllRanges();
          selection === null || selection === void 0 ? void 0 : selection.addRange(range);
        }
      } else if (document.selection) {
        var _range = document.body.createTextRange();

        _range.moveToElementText(editable.current);

        _range.select();
      }
    }

    editable.current.dataset.oldText = editable.current.innerText;
  }, [editing]);
  var onBlur = React.useCallback(function () {
    setContext(function (draftCtx) {
      try {
        core.editSheetName(draftCtx, editable.current);
      } catch (e) {
        showAlert(e.message);
      }
    });
    setEditing(false);
  }, [setContext, showAlert]);
  var onKeyDown = React.useCallback(function (e) {
    if (e.key === "Enter") {
      var _editable$current;

      (_editable$current = editable.current) === null || _editable$current === void 0 ? void 0 : _editable$current.blur();
    }

    e.stopPropagation();
  }, []);
  var onDragStart = React.useCallback(function (e) {
    e.dataTransfer.setData("sheetId", "".concat(sheet.id));
    e.stopPropagation();
  }, [sheet.id]);
  var onDrop = React.useCallback(function (e) {
    var draggingId = e.dataTransfer.getData("sheetId");
    setContext(function (draftCtx) {
      var droppingId = sheet.id;
      var draggingSheet;
      var droppingSheet;

      ___default['default'].sortBy(draftCtx.luckysheetfile, ["order"]).forEach(function (f, i) {
        f.order = i;

        if (f.id === draggingId) {
          draggingSheet = f;
        } else if (f.id === droppingId) {
          droppingSheet = f;
        }
      });

      if (draggingSheet && droppingSheet) {
        draggingSheet.order = droppingSheet.order - 0.1;

        ___default['default'].sortBy(draftCtx.luckysheetfile, ["order"]).forEach(function (f, i) {
          f.order = i;
        });
      } else if (draggingSheet && isDropPlaceholder) {
        draggingSheet.order = draftCtx.luckysheetfile.length;
      }
    });
    setDragOver(false);
    e.stopPropagation();
  }, [isDropPlaceholder, setContext, sheet.id]);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    onDragOver: function onDragOver(e) {
      e.preventDefault();
      e.stopPropagation();
    },
    onDragEnter: function onDragEnter(e) {
      setDragOver(true);
      e.stopPropagation();
    },
    onDragLeave: function onDragLeave(e) {
      setDragOver(false);
      e.stopPropagation();
    },
    onDragEnd: function onDragEnd(e) {
      setDragOver(false);
      e.stopPropagation();
    },
    onDrop: onDrop,
    onDragStart: onDragStart,
    draggable: true,
    key: sheet.id,
    ref: containerRef,
    className: isDropPlaceholder ? "fortune-sheettab-placeholder" : "luckysheet-sheets-item".concat(context.currentSheetId === sheet.id ? " luckysheet-sheets-item-active" : ""),
    onClick: function onClick() {
      if (isDropPlaceholder) return;
      setContext(function (draftCtx) {
        draftCtx.currentSheetId = sheet.id;
      });
    },
    onContextMenu: function onContextMenu(e) {
      if (isDropPlaceholder) return;
      var rect = refs.workbookContainer.current.getBoundingClientRect();
      var pageX = e.pageX,
          pageY = e.pageY;
      setContext(function (ctx) {
        ctx.sheetTabContextMenu = {
          x: pageX - rect.left,
          y: pageY - rect.top,
          sheet: sheet,
          onRename: function onRename() {
            return setEditing(true);
          }
        };
      });
    },
    style: dragOver ? {
      borderLeft: "2px solid #0188fb"
    } : {}
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "luckysheet-sheets-item-name",
    spellCheck: "false",
    contentEditable: isDropPlaceholder ? false : editing,
    onDoubleClick: function onDoubleClick() {
      return setEditing(true);
    },
    onBlur: onBlur,
    onKeyDown: onKeyDown,
    ref: editable,
    style: dragOver ? {
      pointerEvents: "none"
    } : {}
  }, sheet.name));
};

var SheetTab = function SheetTab() {
  var _useContext = React.useContext(WorkbookContext),
      context = _useContext.context,
      setContext = _useContext.setContext,
      settings = _useContext.settings,
      refs = _useContext.refs;

  var tabContainerRef = React.useRef(null);
  var leftScrollRef = React.useRef(null);
  var rightScrollRef = React.useRef(null);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "luckysheet-sheet-area luckysheet-noselected-text",
    onContextMenu: function onContextMenu(e) {
      return e.preventDefault();
    },
    id: "luckysheet-sheet-area"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    id: "luckysheet-sheet-content"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-sheettab-button",
    onClick: function onClick() {
      setContext(function (draftCtx) {
        if (draftCtx.luckysheetCellUpdate.length > 0) {
          core.updateCell(draftCtx, draftCtx.luckysheetCellUpdate[0], draftCtx.luckysheetCellUpdate[1], refs.cellInput.current);
        }

        core.addSheet(draftCtx, settings);
      }, {
        addSheetOp: true
      });
    }
  }, /*#__PURE__*/React__default['default'].createElement(SVGIcon, {
    name: "plus",
    width: 16,
    height: 16
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    id: "luckysheet-sheets-m",
    className: "luckysheet-sheets-m lucky-button-custom"
  }, /*#__PURE__*/React__default['default'].createElement("i", {
    className: "iconfont luckysheet-iconfont-caidan2"
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-sheettab-container",
    id: "fortune-sheettab-container"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-sheettab-container-c",
    id: "fortune-sheettab-container-c",
    ref: tabContainerRef
  }, ___default['default'].sortBy(context.luckysheetfile, function (s) {
    return Number(s.order);
  }).map(function (sheet) {
    return /*#__PURE__*/React__default['default'].createElement(SheetItem, {
      key: sheet.id,
      sheet: sheet
    });
  }), /*#__PURE__*/React__default['default'].createElement(SheetItem, {
    isDropPlaceholder: true,
    sheet: {
      name: "",
      id: "drop-placeholder"
    }
  }))), /*#__PURE__*/React__default['default'].createElement("div", {
    id: "fortune-sheettab-leftscroll",
    className: "fortune-sheettab-scroll",
    ref: leftScrollRef,
    onClick: function onClick() {
      tabContainerRef.current.scrollLeft -= 150;
    }
  }, /*#__PURE__*/React__default['default'].createElement(SVGIcon, {
    name: "arrow-doubleleft",
    width: 12,
    height: 12
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    id: "fortune-sheettab-rightscroll",
    className: "fortune-sheettab-scroll",
    ref: rightScrollRef,
    onClick: function onClick() {
      tabContainerRef.current.scrollLeft += 150;
    }
  }, /*#__PURE__*/React__default['default'].createElement(SVGIcon, {
    name: "arrow-doubleright",
    width: 12,
    height: 12
  }))));
};

var Divider$1 = function Divider() {
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-context-menu-divider"
  });
};

var Menu = function Menu(_ref) {
  var _onClick = _ref.onClick,
      children = _ref.children;
  var containerRef = React.useRef(null);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    ref: containerRef,
    className: "luckysheet-cols-menuitem luckysheet-mousedown-cancel",
    onClick: function onClick(e) {
      return _onClick === null || _onClick === void 0 ? void 0 : _onClick(e, containerRef.current);
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "luckysheet-cols-menuitem-content luckysheet-mousedown-cancel"
  }, children));
};

var ContextMenu = function ContextMenu() {
  var containerRef = React.useRef(null);

  var _useContext = React.useContext(WorkbookContext),
      context = _useContext.context,
      setContext = _useContext.setContext,
      settings = _useContext.settings;

  var contextMenu = context.contextMenu;

  var _locale = core.locale(context),
      rightclick = _locale.rightclick;

  var getMenuElement = React.useCallback(function (name, i) {
    var _context$luckysheet_s;

    var selection = (_context$luckysheet_s = context.luckysheet_select_save) === null || _context$luckysheet_s === void 0 ? void 0 : _context$luckysheet_s[0];

    if (name === "|") {
      return /*#__PURE__*/React__default['default'].createElement(Divider$1, {
        key: "divider-".concat(i)
      });
    }

    if (name === "copy") {
      return /*#__PURE__*/React__default['default'].createElement(Menu, {
        key: name,
        onClick: function onClick() {
          setContext(function (draftCtx) {
            core.handleCopy(draftCtx);
            draftCtx.contextMenu = undefined;
          });
        }
      }, rightclick.copy);
    }

    if (name === "paste") {
      return /*#__PURE__*/React__default['default'].createElement(Menu, {
        key: name,
        onClick: function onClick() {
          setContext(function (draftCtx) {
            core.handlePasteByClick(draftCtx);
            draftCtx.contextMenu = undefined;
          });
        }
      }, rightclick.paste);
    }

    if (name === "insert-column") {
      return (selection === null || selection === void 0 ? void 0 : selection.row_select) ? null : ["left", "right"].map(function (dir) {
        var _context$lang, _context$lang2;

        return /*#__PURE__*/React__default['default'].createElement(Menu, {
          key: "add-col-".concat(dir),
          onClick: function onClick(e) {
            var _context$luckysheet_s2, _context$luckysheet_s3, _context$luckysheet_s4, _e$target$querySelect;

            var position = (_context$luckysheet_s2 = context.luckysheet_select_save) === null || _context$luckysheet_s2 === void 0 ? void 0 : (_context$luckysheet_s3 = _context$luckysheet_s2[0]) === null || _context$luckysheet_s3 === void 0 ? void 0 : (_context$luckysheet_s4 = _context$luckysheet_s3.column) === null || _context$luckysheet_s4 === void 0 ? void 0 : _context$luckysheet_s4[0];
            if (position == null) return;
            var countStr = (_e$target$querySelect = e.target.querySelector("input")) === null || _e$target$querySelect === void 0 ? void 0 : _e$target$querySelect.value;
            if (countStr == null) return;
            var count = parseInt(countStr, 10);
            if (count < 1) return;
            var direction = dir === "left" ? "lefttop" : "rightbottom";
            var insertRowColOp = {
              type: "column",
              index: position,
              count: count,
              direction: direction,
              id: context.currentSheetId
            };
            setContext(function (draftCtx) {
              core.insertRowCol(draftCtx, insertRowColOp);
              draftCtx.contextMenu = undefined;
            }, {
              insertRowColOp: insertRowColOp
            });
          }
        }, /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, ((_context$lang = context.lang) === null || _context$lang === void 0 ? void 0 : _context$lang.startsWith("zh")) && /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, rightclick.to, /*#__PURE__*/React__default['default'].createElement("span", {
          className: "luckysheet-cols-rows-shift-".concat(dir)
        }, rightclick[dir])), "".concat(rightclick.insert, "  "), /*#__PURE__*/React__default['default'].createElement("input", {
          onClick: function onClick(e) {
            return e.stopPropagation();
          },
          onKeyDown: function onKeyDown(e) {
            return e.stopPropagation();
          },
          type: "text",
          className: "luckysheet-mousedown-cancel",
          placeholder: rightclick.number,
          defaultValue: "1"
        }), /*#__PURE__*/React__default['default'].createElement("span", {
          className: "luckysheet-cols-rows-shift-word luckysheet-mousedown-cancel"
        }, "".concat(rightclick.column, "  ")), !((_context$lang2 = context.lang) === null || _context$lang2 === void 0 ? void 0 : _context$lang2.startsWith("zh")) && /*#__PURE__*/React__default['default'].createElement("span", {
          className: "luckysheet-cols-rows-shift-".concat(dir)
        }, rightclick[dir])));
      });
    }

    if (name === "insert-row") {
      return (selection === null || selection === void 0 ? void 0 : selection.column_select) ? null : ["top", "bottom"].map(function (dir) {
        var _context$lang3, _context$lang4;

        return /*#__PURE__*/React__default['default'].createElement(Menu, {
          key: "add-row-".concat(dir),
          onClick: function onClick(e, container) {
            var _context$luckysheet_s5, _context$luckysheet_s6, _context$luckysheet_s7, _container$querySelec;

            var position = (_context$luckysheet_s5 = context.luckysheet_select_save) === null || _context$luckysheet_s5 === void 0 ? void 0 : (_context$luckysheet_s6 = _context$luckysheet_s5[0]) === null || _context$luckysheet_s6 === void 0 ? void 0 : (_context$luckysheet_s7 = _context$luckysheet_s6.row) === null || _context$luckysheet_s7 === void 0 ? void 0 : _context$luckysheet_s7[0];
            if (position == null) return;
            var countStr = (_container$querySelec = container.querySelector("input")) === null || _container$querySelec === void 0 ? void 0 : _container$querySelec.value;
            if (countStr == null) return;
            var count = parseInt(countStr, 10);
            if (count < 1) return;
            var direction = dir === "top" ? "lefttop" : "rightbottom";
            var insertRowColOp = {
              type: "row",
              index: position,
              count: count,
              direction: direction,
              id: context.currentSheetId
            };
            setContext(function (draftCtx) {
              core.insertRowCol(draftCtx, insertRowColOp);
              draftCtx.contextMenu = undefined;
            }, {
              insertRowColOp: insertRowColOp
            });
          }
        }, /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, ((_context$lang3 = context.lang) === null || _context$lang3 === void 0 ? void 0 : _context$lang3.startsWith("zh")) && /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, rightclick.to, /*#__PURE__*/React__default['default'].createElement("span", {
          className: "luckysheet-cols-rows-shift-".concat(dir)
        }, rightclick[dir])), "".concat(rightclick.insert, "  "), /*#__PURE__*/React__default['default'].createElement("input", {
          onClick: function onClick(e) {
            return e.stopPropagation();
          },
          onKeyDown: function onKeyDown(e) {
            return e.stopPropagation();
          },
          type: "text",
          className: "luckysheet-mousedown-cancel",
          placeholder: rightclick.number,
          defaultValue: "1"
        }), /*#__PURE__*/React__default['default'].createElement("span", {
          className: "luckysheet-cols-rows-shift-word luckysheet-mousedown-cancel"
        }, "".concat(rightclick.row, "  ")), !((_context$lang4 = context.lang) === null || _context$lang4 === void 0 ? void 0 : _context$lang4.startsWith("zh")) && /*#__PURE__*/React__default['default'].createElement("span", {
          className: "luckysheet-cols-rows-shift-".concat(dir)
        }, rightclick[dir])));
      });
    }

    if (name === "delete-column") {
      return (selection === null || selection === void 0 ? void 0 : selection.row_select) ? null : /*#__PURE__*/React__default['default'].createElement(Menu, {
        key: "delete-col",
        onClick: function onClick() {
          if (!selection) return;

          var _selection$column = _slicedToArray(selection.column, 2),
              st_index = _selection$column[0],
              ed_index = _selection$column[1];

          var deleteRowColOp = {
            type: "column",
            start: st_index,
            end: ed_index,
            id: context.currentSheetId
          };
          setContext(function (draftCtx) {
            core.deleteRowCol(draftCtx, deleteRowColOp);
            draftCtx.contextMenu = undefined;
          }, {
            deleteRowColOp: deleteRowColOp
          });
        }
      }, rightclick.deleteSelected, rightclick.column);
    }

    if (name === "delete-row") {
      return (selection === null || selection === void 0 ? void 0 : selection.column_select) ? null : /*#__PURE__*/React__default['default'].createElement(Menu, {
        key: "delete-row",
        onClick: function onClick() {
          if (!selection) return;

          var _selection$row = _slicedToArray(selection.row, 2),
              st_index = _selection$row[0],
              ed_index = _selection$row[1];

          var deleteRowColOp = {
            type: "row",
            start: st_index,
            end: ed_index,
            id: context.currentSheetId
          };
          setContext(function (draftCtx) {
            core.deleteRowCol(draftCtx, deleteRowColOp);
            draftCtx.contextMenu = undefined;
          }, {
            deleteRowColOp: deleteRowColOp
          });
        }
      }, rightclick.deleteSelected, rightclick.row);
    }

    return null;
  }, [context.currentSheetId, context.lang, context.luckysheet_select_save, rightclick, setContext]);
  React.useLayoutEffect(function () {
    if (!containerRef.current || !contextMenu) {
      return;
    }

    var winH = window.innerHeight;
    var winW = window.innerWidth;
    var rect = containerRef.current.getBoundingClientRect();
    var menuW = rect.width;
    var menuH = rect.height;
    var top = contextMenu.pageY;
    var left = contextMenu.pageX;
    var hasOverflow = false;

    if (left + menuW > winW) {
      left -= menuW;
      hasOverflow = true;
    }

    if (top + menuH > winH) {
      top -= menuH;
      hasOverflow = true;
    }

    if (top < 0) {
      top = 0;
      hasOverflow = true;
    }

    if (hasOverflow) {
      setContext(function (draftCtx) {
        draftCtx.contextMenu.x = left;
        draftCtx.contextMenu.y = top;
      });
    }
  }, [contextMenu, setContext]);
  if (___default['default'].isEmpty(context.contextMenu)) return null;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-context-menu luckysheet-cols-menu",
    ref: containerRef,
    onContextMenu: function onContextMenu(e) {
      return e.stopPropagation();
    },
    style: {
      left: contextMenu.x,
      top: contextMenu.y
    }
  }, settings.cellContextMenu.map(function (menu, i) {
    return getMenuElement(menu, i);
  }));
};

var SVGDefines = function SVGDefines() {
  return /*#__PURE__*/React__default['default'].createElement("svg", {
    style: {
      position: "absolute",
      width: 0,
      height: 0
    },
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, /*#__PURE__*/React__default['default'].createElement("defs", null, /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "add"
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "4.75",
    y: "4.75",
    width: "14.5",
    height: "14.5",
    rx: "0.75",
    stroke: "#424A59",
    strokeOpacity: "0.9",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "11.25",
    y: "8.5",
    width: "1.5",
    height: "7",
    fill: "#535B68"
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "15.5",
    y: "11.25",
    width: "1.5",
    height: "7",
    transform: "rotate(90 15.5 11.25)",
    fill: "#535B68"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "align-bottom"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9.25 12.5L12.0002 15.5L14.75 12.5H9.25Z",
    fill: "#525C6F"
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "5.5",
    y: "16.5",
    width: "13",
    height: "1.5",
    fill: "#525C6F"
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "11.25",
    y: "5.5",
    width: "1.5",
    height: "7.5",
    fill: "#525C6F"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "align-center"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5 6.75H19",
    stroke: "#525C6F",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 12H16",
    stroke: "#525C6F",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5 17.25L19 17.25",
    stroke: "#525C6F",
    strokeWidth: "1.5"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "align-justify"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19.5 6.5H4.5",
    stroke: "#525C6F",
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19.5 12L4.5 12",
    stroke: "#525C6F",
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19.5 17.5H4.5",
    stroke: "#525C6F",
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "align-left"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5 6.75H19",
    stroke: "#525C6F",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5 12H13",
    stroke: "#525C6F",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5 17.25L19 17.25",
    stroke: "#525C6F",
    strokeWidth: "1.5"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "align-middle"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9.25 16.5L12.0002 13.5L14.75 16.5H9.25Z",
    fill: "#525C6F"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9.25 7L12.0002 10L14.75 7L9.25 7Z",
    fill: "#525C6F"
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "5.5",
    y: "11",
    width: "13",
    height: "1.5",
    fill: "#525C6F"
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "11.25",
    y: "16",
    width: "1.5",
    height: "3.5",
    fill: "#525C6F"
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "11.25",
    y: "4",
    width: "1.5",
    height: "3.5",
    fill: "#525C6F"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "align-right"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5 6.75H19",
    stroke: "#525C6F",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M11 12H19",
    stroke: "#525C6F",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5 17.25L19 17.25",
    stroke: "#525C6F",
    strokeWidth: "1.5"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "align-top"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9.25 11L12.0002 8L14.75 11H9.25Z",
    fill: "#525C6F"
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "5.5",
    y: "5.5",
    width: "13",
    height: "1.5",
    fill: "#525C6F"
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "11.25",
    y: "10.5",
    width: "1.5",
    height: "7.5",
    fill: "#525C6F"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "bold"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6.30566 5.07617V18.9992H12.4872C13.9107 18.9992 15.0417 18.7067 15.8607 18.1607C16.8162 17.4977 17.3037 16.4837 17.3037 15.1187C17.3037 14.1827 17.0307 13.4417 16.5237 12.8567C16.0167 12.2717 15.3147 11.8817 14.3982 11.7257C15.1002 11.4917 15.6657 11.1212 16.0947 10.6142C16.5042 10.0487 16.7187 9.36617 16.7187 8.58617C16.7187 7.49417 16.3482 6.63617 15.6072 6.01217C14.8467 5.38817 13.8132 5.07617 12.5262 5.07617H6.30566ZM7.90466 6.42167H12.1557C13.1307 6.42167 13.8717 6.59717 14.3787 6.98717C14.8857 7.37717 15.1392 7.96217 15.1392 8.74217C15.1392 9.54167 14.8662 10.1462 14.3592 10.5557C13.8522 10.9457 13.1112 11.1602 12.1362 11.1602H7.90466V6.42167ZM7.90466 12.4862H12.3507C13.4232 12.4862 14.2422 12.6812 14.8077 13.1102C15.3927 13.5392 15.7047 14.2022 15.7047 15.0992C15.7047 15.9962 15.3537 16.6787 14.6712 17.1077C14.0862 17.4587 13.3257 17.6537 12.3507 17.6537H7.90466V12.4862Z",
    fill: "#394259"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "border"
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "5.75",
    y: "5.75",
    width: "12.5",
    height: "12.5",
    stroke: "#535A68",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "6.5",
    y1: "12",
    x2: "17.5",
    y2: "12",
    stroke: "#CCCED2",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "17.5",
    x2: "12",
    y2: "6.5",
    stroke: "#CCCED2",
    strokeWidth: "1.5"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "border-all"
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "5.75",
    y: "5.75",
    width: "12.5",
    height: "12.5",
    stroke: "#535A68",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "6.5",
    y1: "12",
    x2: "17.5",
    y2: "12",
    stroke: "#535A68",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "17.5",
    x2: "12",
    y2: "6.5",
    stroke: "#535A68",
    strokeWidth: "1.5"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "border-bottom"
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "5.75",
    y: "5.75",
    width: "12.5",
    height: "12.5",
    stroke: "#CCCED2",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "6.5",
    y1: "12",
    x2: "17.5",
    y2: "12",
    stroke: "#CCCED2",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "17.5",
    x2: "12",
    y2: "6.5",
    stroke: "#CCCED2",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "5",
    y1: "18.25",
    x2: "19",
    y2: "18.25",
    stroke: "#535A68",
    strokeWidth: "1.5"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "border-color"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 10.9106L18.9511 13.8617L14.5431 18.2697H11.592V15.3186L16 10.9106Z",
    stroke: "#535A68",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.5 6.5H17.5V9.84613H19V6.5V5H17.5H6.5H5V6.5V17.5V19H6.5H9.84616V17.5H6.5V6.5Z",
    fill: "#535A68"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "border-horizontal"
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "5.75",
    y: "5.75",
    width: "12.5",
    height: "12.5",
    stroke: "#CCCED2",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "17.5",
    x2: "12",
    y2: "6.5",
    stroke: "#CCCED2",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "5",
    y1: "18.25",
    x2: "19",
    y2: "18.25",
    stroke: "#CCCED2",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "6.5",
    y1: "12",
    x2: "17.5",
    y2: "12",
    stroke: "#535A68",
    strokeWidth: "1.5"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "border_diagonal_down"
  }, /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "17.9697",
    y1: "18.0303",
    x2: "5.96967",
    y2: "6.03033",
    stroke: "#535A68",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "5.75",
    y: "5.75",
    width: "12.5",
    height: "12.5",
    stroke: "#CCCED2",
    strokeWidth: "1.5"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "border_diagonal_up"
  }, /*#__PURE__*/React__default['default'].createElement("line", {
    y1: "-0.75",
    x2: "16.9706",
    y2: "-0.75",
    transform: "matrix(0.707107 -0.707107 -0.707107 -0.707107 5.5 17.5)",
    stroke: "#535A68",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "5.75",
    y: "5.75",
    width: "12.5",
    height: "12.5",
    stroke: "#CCCED2",
    strokeWidth: "1.5"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "border-inside"
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "5.75",
    y: "5.75",
    width: "12.5",
    height: "12.5",
    stroke: "#CCCED2",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "6.5",
    y1: "12",
    x2: "17.5",
    y2: "12",
    stroke: "#535A68",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "17.5",
    x2: "12",
    y2: "6.5",
    stroke: "#535A68",
    strokeWidth: "1.5"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "border-left"
  }, /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "6.5",
    y1: "12",
    x2: "17.5",
    y2: "12",
    stroke: "#CCCED2",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "17.5",
    x2: "12",
    y2: "6.5",
    stroke: "#CCCED2",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "5.75",
    y: "5.75",
    width: "12.5",
    height: "12.5",
    stroke: "#CCCED2",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "5.75",
    y1: "19",
    x2: "5.75",
    y2: "5",
    stroke: "#535A68",
    strokeWidth: "1.5"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "border-none"
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "5.75",
    y: "5.75",
    width: "12.5",
    height: "12.5",
    stroke: "#CCCED2",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "6.5",
    y1: "12",
    x2: "17.5",
    y2: "12",
    stroke: "#CCCED2",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "17.5",
    x2: "12",
    y2: "6.5",
    stroke: "#CCCED2",
    strokeWidth: "1.5"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "border-outside"
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "5.75",
    y: "5.75",
    width: "12.5",
    height: "12.5",
    stroke: "#535A68",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "6.5",
    y1: "12",
    x2: "17.5",
    y2: "12",
    stroke: "#CCCED2",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "17.5",
    x2: "12",
    y2: "6.5",
    stroke: "#CCCED2",
    strokeWidth: "1.5"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "border-right"
  }, /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "6.5",
    y1: "12",
    x2: "17.5",
    y2: "12",
    stroke: "#CCCED2",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "17.5",
    x2: "12",
    y2: "6.5",
    stroke: "#CCCED2",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "5.75",
    y: "5.75",
    width: "12.5",
    height: "12.5",
    stroke: "#CCCED2",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "18.25",
    y1: "19",
    x2: "18.25",
    y2: "5",
    stroke: "#535A68",
    strokeWidth: "1.5"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "border-vertical"
  }, /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "6.5",
    y1: "12",
    x2: "17.5",
    y2: "12",
    stroke: "#CCCED2",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "17.5",
    x2: "12",
    y2: "6.5",
    stroke: "#535A68",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "5.75",
    y: "5.75",
    width: "12.5",
    height: "12.5",
    stroke: "#CCCED2",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "18.25",
    y1: "19",
    x2: "18.25",
    y2: "5",
    stroke: "#CCCED2",
    strokeWidth: "1.5"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "border-style"
  }, /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "5",
    y1: "5.75",
    x2: "19",
    y2: "5.75",
    stroke: "#535A68",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "5",
    y1: "12.25",
    x2: "7.5",
    y2: "12.25",
    stroke: "#535A68",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "8.8252",
    y1: "12.25",
    x2: "11.3252",
    y2: "12.25",
    stroke: "#535A68",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12.6504",
    y1: "12.25",
    x2: "15.1504",
    y2: "12.25",
    stroke: "#535A68",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "16.4746",
    y1: "12.25",
    x2: "18.9746",
    y2: "12.25",
    stroke: "#535A68",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "5",
    y1: "18.25",
    x2: "6.5",
    y2: "18.25",
    stroke: "#535A68",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "7.08008",
    y1: "18.25",
    x2: "8.58008",
    y2: "18.25",
    stroke: "#535A68",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "9.16016",
    y1: "18.25",
    x2: "10.6602",
    y2: "18.25",
    stroke: "#535A68",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "11.2402",
    y1: "18.25",
    x2: "12.7402",
    y2: "18.25",
    stroke: "#535A68",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "13.3203",
    y1: "18.25",
    x2: "14.8203",
    y2: "18.25",
    stroke: "#535A68",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "15.4004",
    y1: "18.25",
    x2: "16.9004",
    y2: "18.25",
    stroke: "#535A68",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "17.4805",
    y1: "18.25",
    x2: "18.9805",
    y2: "18.25",
    stroke: "#535A68",
    strokeWidth: "1.5"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "border-top"
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "5.75",
    y: "5.75",
    width: "12.5",
    height: "12.5",
    stroke: "#CCCED2",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "6.5",
    y1: "12",
    x2: "17.5",
    y2: "12",
    stroke: "#CCCED2",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "17.5",
    x2: "12",
    y2: "6.5",
    stroke: "#CCCED2",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "5",
    y1: "5.75",
    x2: "19",
    y2: "5.75",
    stroke: "#535A68",
    strokeWidth: "1.5"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 18 18",
    fill: "none",
    id: "close"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M13.9255 5L5.00091 13.9246",
    stroke: "#262A33",
    strokeOpacity: "0.9",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M13.9255 13.9238L5.00091 4.9992",
    stroke: "#262A33",
    strokeOpacity: "0.9",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 10 24",
    fill: "none",
    id: "combo-arrow"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 10H2L5 14L8 10Z",
    fill: "#A6A6A6"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    fill: "none",
    viewBox: "0 0 24 24",
    id: "comment"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.968 15.7L12 17.956l2.032-2.258H18.5v-10h-13v10h4.468zm1.289 3.673L9.3 17.2H5.5A1.5 1.5 0 014 15.7v-10a1.5 1.5 0 011.5-1.5h13A1.5 1.5 0 0120 5.7v10a1.5 1.5 0 01-1.5 1.5h-3.8l-1.957 2.174a1 1 0 01-1.486 0z",
    fill: "#525C6F"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M7 8.2h10v1.5H7V8.2zM7 11.699h6v1.5H7z",
    fill: "#525C6F"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "strike-through"
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "6",
    y: "11.5",
    width: "13",
    height: "1.5",
    fill: "#394259"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9.00344 11.5C9.69342 11.9717 10.6431 12.3814 11.8525 12.729C13.071 13.0815 13.9121 13.4403 14.376 13.8052C14.8398 14.1639 15.0718 14.6742 15.0718 15.3359C15.0718 15.9977 14.8213 16.5203 14.3203 16.9038C13.8193 17.2873 13.0988 17.479 12.1587 17.479C11.1506 17.479 10.3434 17.244 9.7373 16.7739C9.13737 16.2977 8.8374 15.6514 8.8374 14.835H7.04688C7.04688 15.6204 7.26335 16.3224 7.69629 16.9409C8.13542 17.5594 8.757 18.048 9.56104 18.4067C10.3651 18.7593 11.231 18.9355 12.1587 18.9355C13.5874 18.9355 14.7285 18.6077 15.582 17.9521C16.4355 17.2904 16.8623 16.4121 16.8623 15.3174C16.8623 14.6309 16.7077 14.034 16.3984 13.5269C16.0954 13.0197 15.6253 12.5775 14.9883 12.2002C14.581 11.9526 14.0705 11.7192 13.457 11.5H9.00344Z",
    fill: "#394259"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M7.71685 10C7.5547 9.61466 7.47363 9.19458 7.47363 8.73975C7.47363 7.67594 7.8973 6.79769 8.74463 6.10498C9.59814 5.40609 10.7052 5.05664 12.0659 5.05664C12.9937 5.05664 13.8193 5.236 14.543 5.59473C15.2728 5.95345 15.8356 6.44824 16.2314 7.0791C16.6335 7.70996 16.8345 8.39958 16.8345 9.14795H15.0439C15.0439 8.33154 14.7842 7.69141 14.2646 7.22754C13.7451 6.75749 13.0122 6.52246 12.0659 6.52246C11.1877 6.52246 10.5011 6.71729 10.0063 7.10693C9.51774 7.4904 9.27344 8.02539 9.27344 8.71191C9.27344 9.2095 9.46296 9.63887 9.84201 10H7.71685Z",
    fill: "#394259"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "clear-format"
  }, /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "8",
    y1: "18.25",
    x2: "20",
    y2: "18.25",
    stroke: "#525C6F",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14 7.12132L17.8787 11L10 18.8787L6.12132 15L14 7.12132ZM14 5L15.0607 6.06066L18.9393 9.93934L20 11L18.9393 12.0607L12 19L8 19L5.06066 16.0607L4 15L5.06066 13.9393L12.9393 6.06066L14 5Z",
    fill: "#525C6F"
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "13.9375",
    y: "6.12316",
    width: "6.98528",
    height: "5.7265",
    transform: "rotate(45 13.9375 6.12316)",
    stroke: "#525C6F",
    strokeWidth: "1.5"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "image"
  }, /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "8.75",
    cy: "8.75",
    r: "1.25",
    fill: "#525C6F"
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "4.75",
    y: "5.25",
    width: "14.5",
    height: "13.5",
    rx: "0.75",
    stroke: "#525C6F",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M7 19L12.984 11.8949C13.1659 11.6789 13.4905 11.6563 13.7006 11.845L19.5 17.0556",
    stroke: "#525C6F",
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "italic"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M11 5H16V6.5H11V5Z",
    fill: "#394259"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9 17.5H14V19H9V17.5Z",
    fill: "#394259"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.7598 17.877L12.7598 5.87695L14.2394 6.12355L12.2394 18.1236L10.7598 17.877Z",
    fill: "#394259"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "merge-cancel"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M13 14.9998L16.5 11.9996L13 8.99982V14.9998Z",
    fill: "#525C6F"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M11 14.9998L7.5 11.9996L11 8.99982L11 14.9998Z",
    fill: "#525C6F"
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "10",
    y: "11.2498",
    width: "4.5",
    height: "1.5",
    fill: "#525C6F"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.5 6.49982H6.5L6.5 17.4998H9.5V15.4999H11V17.4998V18.9998H9.5H6.5H5V17.4998L5 6.49982V4.99982H6.5H9.5L11 4.99982V6.49982V8.49988H9.5V6.49982ZM13 15.4999V15.9998V17.4998V18.9998H14.5H17.5H19V17.4998V6.49982V4.99982H17.5H14.5H13V6.49982V7.99982V8.49988H14.5V7.99982V6.49982H17.5V17.4998H14.5L14.5 15.9998V15.4999H13Z",
    fill: "#525C6F"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "merge-horizontal"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M11 15L14.5 11.9998L11 9V15Z",
    fill: "#525C6F"
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "5",
    y: "11.25",
    width: "8.5",
    height: "1.5",
    fill: "#525C6F"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.5 6.5H7.5H9.5H11V5H9.5H6.5H5V6.5V17.5V19H6.5H9.5H11V17.5H9.5H7.5H6.5V6.5ZM13 16V15.5H14.5V16V17.5H17.5V6.5H14.5V8V8.5H13V8V6.5V5H14.5H17.5H19V6.5V17.5V19H17.5H14.5H13V17.5V16Z",
    fill: "#525C6F"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "merge-vertical"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9 10.9998L12.0002 14.4998L15 10.9998L9 10.9998Z",
    fill: "#525C6F"
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "12.75",
    y: "4.99982",
    width: "8.5",
    height: "1.5",
    transform: "rotate(90 12.75 4.99982)",
    fill: "#525C6F"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.5 6.49982L17.5 7L17.5 10.9998H19V9.49982V6.49982V4.99982H17.5L6.5 4.99982H5V6.49982L5 9.49982V10.9998H6.5V9.49982L6.5 7L6.5 6.49982L17.5 6.49982ZM8 12.9998L8.5 12.9998V14.4998H8H6.5V17.4998H17.5V14.4998H16H15.5V12.9998H16H17.5H19L19 14.4998V17.4998V18.9998H17.5H6.5L5 18.9998L5 17.4998V14.4998V12.9998H6.5H8Z",
    fill: "#525C6F"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "merge-all"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M15.5 14.9998L12 11.9996L15.5 8.99982V14.9998Z",
    fill: "#525C6F"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8.5 14.9998L12 11.9996L8.5 8.99982L8.5 14.9998Z",
    fill: "#525C6F"
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "7",
    y: "11.2498",
    width: "2.5",
    height: "1.5",
    fill: "#525C6F"
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "14.5",
    y: "11.2498",
    width: "2.5",
    height: "1.5",
    fill: "#525C6F"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.5 6.49982H6.5L6.5 17.4998H9.5V15.4999H11V17.4998V18.9998H9.5H6.5H5V17.4998L5 6.49982V4.99982H6.5H9.5L11 4.99982V6.49982V8.49988H9.5V6.49982ZM13 15.4999V15.9998V17.4998V18.9998H14.5H17.5H19V17.4998V6.49982V4.99982H17.5H14.5H13V6.49982V7.99982V8.49988H14.5V7.99982V6.49982H17.5V17.4998H14.5L14.5 15.9998V15.4999H13Z",
    fill: "#525C6F"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    fill: "none",
    viewBox: "0 0 16 16",
    id: "plus"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 1.715v12.571M1.714 8h12.572",
    stroke: "#666",
    strokeWidth: "1.714"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "-100 -100 1224 1224",
    fill: "#525C6F",
    id: "background"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M766.4 744.3c43.7 0 79.4-36.2 79.4-80.5 0-53.5-79.4-140.8-79.4-140.8S687 610.3 687 663.8c0 44.3 35.7 80.5 79.4 80.5zM389.3 700.2c7.1 7.1 18.6 7.1 25.6 0l256.1-256c7.1-7.1 7.1-18.6 0-25.6l-256-256c-0.6-0.6-1.3-1.2-2-1.7l-78.2-78.2c-3.5-3.5-9.3-3.5-12.8 0l-48 48c-3.5 3.5-3.5 9.3 0 12.8l67.2 67.2-207.8 207.9c-7.1 7.1-7.1 18.6 0 25.6l255.9 256z m12.9-448.6l178.9 178.9H223.4l178.8-178.9zM904 816H120c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8z"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "-100 -100 1224 1224",
    fill: "#525C6F",
    id: "font-color"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M904 816H120c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8zM253.7 736h85c4.2 0 8-2.7 9.3-6.8l53.7-166h219.2l53.2 166c1.3 4 5 6.8 9.3 6.8h89.1c1.1 0 2.2-0.2 3.2-0.5 5.1-1.8 7.8-7.3 6-12.4L573.6 118.6c-1.4-3.9-5.1-6.6-9.2-6.6H462.1c-4.2 0-7.9 2.6-9.2 6.6L244.5 723.1c-0.4 1-0.5 2.1-0.5 3.2-0.1 5.3 4.3 9.7 9.7 9.7z m255.9-516.1h4.1l83.8 263.8H424.9l84.7-263.8z"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "text-overflow"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16.5 15L20 11.9998L16.5 9V15Z",
    fill: "#525C6F"
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "7",
    y: "11.25",
    width: "9.5",
    height: "1.5",
    fill: "#525C6F"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "4.75",
    y1: "5",
    x2: "4.75",
    y2: "19",
    stroke: "#525C6F",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12.25",
    y1: "5",
    x2: "12.25",
    y2: "9.5",
    stroke: "#525C6F",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12.25",
    y1: "14.5",
    x2: "12.25",
    y2: "19",
    stroke: "#525C6F",
    strokeWidth: "1.5"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "text-wrap"
  }, /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "4.75",
    y1: "5",
    x2: "4.75",
    y2: "19",
    stroke: "#525C6F",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "19.25",
    y1: "5",
    x2: "19.25",
    y2: "19",
    stroke: "#525C6F",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.00001 16.2502L9.99 13.5V15.5H12.0005C13.9335 15.5 15.5005 13.933 15.5005 12C15.5005 10.067 13.9335 8.5 12.0005 8.5H7V7H12.0005C14.7619 7 17.0005 9.23857 17.0005 12C17.0005 14.7614 14.7619 17 12.0005 17H9.99V19L7.00001 16.2502Z",
    fill: "#525C6F"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "underline"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17 19H7V17.5H17V19Z",
    fill: "#394259"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.25 5V12.25C9.25 13.7688 10.4812 15 12 15C13.5188 15 14.75 13.7688 14.75 12.25V5H16.25V12.25C16.25 14.5972 14.3472 16.5 12 16.5C9.65278 16.5 7.75 14.5972 7.75 12.25V5H9.25Z",
    fill: "#394259"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "undo"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.5 7.75001L7.2019 10.835V8.5H13.25C15.4591 8.5 17.25 10.2909 17.25 12.5C17.25 14.7091 15.4591 16.5 13.25 16.5H7V18H13.25C16.2876 18 18.75 15.5376 18.75 12.5C18.75 9.46244 16.2876 7 13.25 7H7.2019V4.66547L3.5 7.75001Z",
    fill: "#525C6F"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "redo"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.5 7.75001L16.7981 10.835V8.5H10.75C8.54086 8.5 6.75 10.2909 6.75 12.5C6.75 14.7091 8.54086 16.5 10.75 16.5H17V18H10.75C7.71243 18 5.25 15.5376 5.25 12.5C5.25 9.46244 7.71243 7 10.75 7H16.7981V4.66547L20.5 7.75001Z",
    fill: "#525C6F"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 1024 1024",
    id: "fx"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M841 370c3-3.3 2.7-8.3-0.6-11.3-1.5-1.3-3.4-2.1-5.3-2.1h-72.6c-2.4 0-4.6 1-6.1 2.8L633.5 504.6c-2.9 3.4-7.9 3.8-11.3 0.9-0.9-0.8-1.6-1.7-2.1-2.8l-63.5-141.3c-1.3-2.9-4.1-4.7-7.3-4.7H380.7l0.9-4.7 8-42.3c10.5-55.4 38-81.4 85.8-81.4 18.6 0 35.5 1.7 48.8 4.7l14.1-66.8c-22.6-4.7-35.2-6.1-54.9-6.1-103.3 0-156.4 44.3-175.9 147.3l-9.4 49.4h-97.6c-3.8 0-7.1 2.7-7.8 6.4L181.9 415c-0.9 4.3 1.9 8.6 6.2 9.5 0.5 0.1 1.1 0.2 1.6 0.2H284l-89 429.9c-0.9 4.3 1.9 8.6 6.2 9.5 0.5 0.1 1.1 0.2 1.6 0.2H269c3.8 0 7.1-2.7 7.8-6.4l89.7-433.1h135.8l68.2 139.1c1.4 2.9 1 6.4-1.2 8.8l-180.6 203c-2.9 3.3-2.6 8.4 0.7 11.3 1.5 1.3 3.4 2 5.3 2h72.7c2.4 0 4.6-1 6.1-2.8l123.7-146.7c2.8-3.4 7.9-3.8 11.3-1 0.9 0.8 1.6 1.7 2.1 2.8L676.4 784c1.3 2.8 4.1 4.7 7.3 4.7h64.6c4.4 0 8-3.6 8-8 0-1.2-0.3-2.4-0.8-3.5l-95.2-198.9c-1.4-2.9-0.9-6.4 1.3-8.8L841 370z"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 1024 1024",
    id: "currency-format"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    fill: "#525C6F",
    d: "M675.861333 192l45.610667 44.906667-166.997333 169.6h237.525333v64H544v144.597333h248v64H544v176.597333h-64v-176.597333H232v-64H480v-144.597333H232v-64h237.482667l-166.954667-169.6L348.138667 192 512 358.464 675.861333 192z",
    "p-id": "5490"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 1024 1024",
    id: "percentage-format"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    fill: "#525C6F",
    d: "M855.7 210.8l-42.4-42.4c-3.1-3.1-8.2-3.1-11.3 0L168.3 801.9c-3.1 3.1-3.1 8.2 0 11.3l42.4 42.4c3.1 3.1 8.2 3.1 11.3 0L855.6 222c3.2-3 3.2-8.1 0.1-11.2zM304 448c79.4 0 144-64.6 144-144s-64.6-144-144-144-144 64.6-144 144 64.6 144 144 144z m0-216c39.7 0 72 32.3 72 72s-32.3 72-72 72-72-32.3-72-72 32.3-72 72-72zM720 576c-79.4 0-144 64.6-144 144s64.6 144 144 144 144-64.6 144-144-64.6-144-144-144z m0 216c-39.7 0-72-32.3-72-72s32.3-72 72-72 72 32.3 72 72-32.3 72-72 72z",
    "p-id": "5920"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 1024 1024",
    id: "number-decrease"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    fill: "#525C6F",
    d: "M132.266667 597.333333h76.8a4.266667 4.266667 0 0 0 4.266666-4.266666v-76.8a4.266667 4.266667 0 0 0-4.266666-4.266667H132.266667a4.266667 4.266667 0 0 0-4.266667 4.266667v76.8a4.266667 4.266667 0 0 0 4.266667 4.266666z m367.616-403.925333a94.72 94.72 0 0 0-27.306667-17.322667c-25.514667-10.496-54.954667-11.392-81.706667-5.632-36.778667 7.936-66.56 31.872-84.906666 64.256-19.797333 34.816-28.16 77.397333-28.16 139.178667 0 61.184 8.405333 102.4 28.16 137.941333a125.866667 125.866667 0 0 0 112.768 67.797334c48.64 0 90.581333-25.6 113.365333-67.84 19.2-34.773333 28.16-77.354667 28.16-135.552 0-50.432-5.888-104.106667-32.768-148.394667a148.906667 148.906667 0 0 0-27.562667-34.474667z m-81.066667 314.197333c-38.954667 0-59.306667-45.568-59.306667-134.4 0-88.149333 20.394667-133.76 58.794667-133.76 39.594667 0 59.306667 45.653333 59.306667 135.552 0 87.04-20.394667 132.565333-58.794667 132.565334z m289.024 212.394667a4.266667 4.266667 0 0 1-4.266667-4.266667V640l-103.68 103.68a4.266667 4.266667 0 0 0 0 6.016L704 853.333333v-75.733333a4.266667 4.266667 0 0 1 4.266667-4.266667H896v-53.333333h-187.733333z",
    "p-id": "6524"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 1024 1024",
    id: "number-increase"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    fill: "#525C6F",
    d: "M132.266667 597.333333h76.8a4.266667 4.266667 0 0 0 4.266666-4.266666v-76.8a4.266667 4.266667 0 0 0-4.266666-4.266667H132.266667a4.266667 4.266667 0 0 0-4.266667 4.266667v76.8a4.266667 4.266667 0 0 0 4.266667 4.266666z m366.848-402.944a111.530667 111.530667 0 0 0-45.226667-21.76 142.933333 142.933333 0 0 0-71.253333 1.152A130.56 130.56 0 0 0 305.92 234.666667c-19.797333 34.816-28.16 77.397333-28.16 139.178666 0 61.184 8.405333 102.4 28.16 137.941334a125.866667 125.866667 0 0 0 112.768 67.797333c48.64 0 90.581333-25.6 113.365333-67.84 19.2-34.773333 28.16-77.354667 28.16-135.552 0-61.696-11.178667-141.653333-61.098666-181.888z m-79.872 313.173334c-38.954667 0-59.306667-45.568-59.306667-134.4 0-88.149333 20.394667-133.76 58.794667-133.76 39.594667 0 59.306667 45.653333 59.306666 135.552 0 87.04-20.394667 132.565333-58.794666 132.565333z m335.232 71.978666c48.64 0 90.581333-25.6 113.365333-67.84 19.2-34.730667 28.16-77.312 28.16-135.509333 0-47.786667-3.84-99.114667-27.093333-141.909333-27.178667-50.176-82.944-75.392-139.093334-64.554667l-12.8 3.157333A128.64 128.64 0 0 0 641.706667 234.666667c-19.797333 34.773333-28.16 77.354667-28.16 139.093333 0 61.184 8.405333 102.4 28.16 137.941333a125.866667 125.866667 0 0 0 112.768 67.754667z m0-340.053333c39.594667 0 59.306667 45.653333 59.306666 135.552 0 86.954667-20.394667 132.565333-58.794666 132.565333-38.954667 0-59.306667-45.568-59.306667-134.4 0-88.192 20.394667-133.76 58.794667-133.76z m34.858666 476.16a4.266667 4.266667 0 0 1-4.266666 4.266667H597.333333v53.333333h187.733334a4.266667 4.266667 0 0 1 4.266666 4.266667V853.333333l103.68-103.68a4.266667 4.266667 0 0 0 0-6.016L789.333333 640v75.733333z",
    "p-id": "6702"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    id: "format-painter"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    fill: "#525C6F",
    d: "M15.1004 6.5L6.90039 6.5V9.8L15.1004 9.8L15.1004 6.5ZM15.1004 5C15.9288 5 16.6004 5.67157 16.6004 6.5V9.8C16.6004 10.6284 15.9288 11.3 15.1004 11.3H6.90039C6.07196 11.3 5.40039 10.6284 5.40039 9.8V6.5C5.40039 5.67157 6.07196 5 6.90039 5H15.1004Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fill: "#525C6F",
    d: "M17.7174 8.90039H15.3262V7.40039H18.4674C18.8816 7.40039 19.2174 7.73618 19.2174 8.15039V13.7859C19.2174 14.163 18.9374 14.4814 18.5634 14.5297L10.8174 15.5299V19.0004H9.31738V14.8705C9.31738 14.4934 9.59736 14.175 9.97134 14.1267L17.7174 13.1265V8.90039Z"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 1096 1096",
    id: "formula-sum"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    fill: "#525C6F",
    d: "M725.333333 853.333333H256c-17.066667 0-29.866667-8.533333-38.4-25.6-8.533333-17.066667-4.266667-34.133333 4.266667-46.933333l230.4-268.8-230.4-268.8c-8.533333-12.8-12.8-34.133333-4.266667-46.933333 8.533333-17.066667 21.333333-25.6 38.4-25.6h469.333333c46.933333 0 85.333333 38.4 85.333334 85.333333v85.333333c0 25.6-17.066667 42.666667-42.666667 42.666667s-42.666667-17.066667-42.666667-42.666667V256H349.866667l196.266666 226.133333c12.8 17.066667 12.8 38.4 0 55.466667L349.866667 768H725.333333v-85.333333c0-25.6 17.066667-42.666667 42.666667-42.666667s42.666667 17.066667 42.666667 42.666667v85.333333c0 46.933333-38.4 85.333333-85.333334 85.333333z"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 1024 1024",
    id: "arrow-doubleleft"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M272.9 512l265.4-339.1c4.1-5.2 0.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3c-9.1 11.6-9.1 27.9 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M576.9 512l265.4-339.1c4.1-5.2 0.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3c-9.1 11.6-9.1 27.9 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 1024 1024",
    id: "arrow-doubleright"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1c-4.1 5.2-0.4 12.9 6.3 12.9h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M837.2 492.3L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1c-4.1 5.2-0.4 12.9 6.3 12.9h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "freeze-col"
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "5.75",
    y: "5.75",
    width: "12.5",
    height: "12.5",
    stroke: "#525C6F",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5.75 12H18.25M12 5.5V18.5",
    stroke: "#525C6F",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 12L5.5 17.75",
    stroke: "#525C6F",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M11.25 6L5.75 11.5",
    stroke: "#525C6F",
    strokeWidth: "1.5"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "freeze-row"
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "5.75",
    y: "5.75",
    width: "12.5",
    height: "12.5",
    stroke: "#525C6F",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5.75 12H18.25M12 5.5V18.5",
    stroke: "#525C6F",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 6.5L11.5 12.25",
    stroke: "#525C6F",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M11.25 6L5.75 11.5",
    stroke: "#525C6F",
    strokeWidth: "1.5"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "freeze-row-col"
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "5.75",
    y: "5.75",
    width: "12.5",
    height: "12.5",
    stroke: "#525C6F",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5.75 12H18.25M12 5.5V18.5",
    stroke: "#525C6F",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 6L5.75 18.25",
    stroke: "#525C6F",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M11.25 6L5.75 11.5",
    stroke: "#525C6F",
    strokeWidth: "1.5"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 24 24",
    fill: "none",
    id: "freeze-cancel"
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "5.75",
    y: "5.75",
    width: "12.5",
    height: "12.5",
    stroke: "#535A68",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "6.5",
    y1: "12",
    x2: "17.5",
    y2: "12",
    stroke: "#535A68",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "17.5",
    x2: "12",
    y2: "6.5",
    stroke: "#535A68",
    strokeWidth: "1.5"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 1024 1024",
    fill: "#535A68",
    id: "sort-desc"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M839.6 433.8L749 150.5c-1.2-3.9-4.8-6.5-8.9-6.5h-77.4c-4.1 0-7.6 2.6-8.9 6.5l-91.3 283.3c-0.3 0.9-0.5 1.9-0.5 2.9 0 5.1 4.2 9.3 9.3 9.3h56.4c4.2 0 7.8-2.8 9-6.8l17.5-61.6h89l17.3 61.5c1.1 4 4.8 6.8 9 6.8h61.2c1 0 1.9-0.1 2.8-0.4 2.4-0.8 4.3-2.4 5.5-4.6 1.1-2.2 1.3-4.7 0.6-7.1zM663.3 325.5l32.8-116.9h6.3l32.1 116.9h-71.2z",
    "p-id": "2016"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M806.8 818.4H677.2v-0.4l132.6-188.9c1.1-1.6 1.7-3.4 1.7-5.4v-36.4c0-5.1-4.2-9.3-9.3-9.3h-204c-5.1 0-9.3 4.2-9.3 9.3v43c0 5.1 4.2 9.3 9.3 9.3h122.6v0.4L587.7 828.9c-1.1 1.6-1.7 3.4-1.7 5.4v36.4c0 5.1 4.2 9.3 9.3 9.3h211.4c5.1 0 9.3-4.2 9.3-9.3v-43c0.1-5.1-4.1-9.3-9.2-9.3z",
    "p-id": "2017"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M416 702h-76V172c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v530h-76c-6.7 0-10.5 7.8-6.3 13l112 141.9c3.2 4.1 9.4 4.1 12.6 0l112-141.9c4.1-5.2 0.4-13-6.3-13z",
    "p-id": "2018"
  })), /*#__PURE__*/React__default['default'].createElement("svg", {
    viewBox: "0 0 1024 1024",
    fill: "#535A68",
    id: "sort-asc"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M839.6 433.8L749 150.5c-1.2-3.9-4.8-6.5-8.9-6.5h-77.4c-4.1 0-7.6 2.6-8.9 6.5l-91.3 283.3c-0.3 0.9-0.5 1.9-0.5 2.9 0 5.1 4.2 9.3 9.3 9.3h56.4c4.2 0 7.8-2.8 9-6.8l17.5-61.6h89l17.3 61.5c1.1 4 4.8 6.8 9 6.8h61.2c1 0 1.9-0.1 2.8-0.4 2.4-0.8 4.3-2.4 5.5-4.6 1.1-2.2 1.3-4.7 0.6-7.1zM663.3 325.5l32.8-116.9h6.3l32.1 116.9h-71.2z",
    "p-id": "2263"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M806.8 818.4H677.2v-0.4l132.6-188.9c1.1-1.6 1.7-3.4 1.7-5.4v-36.4c0-5.1-4.2-9.3-9.3-9.3h-204c-5.1 0-9.3 4.2-9.3 9.3v43c0 5.1 4.2 9.3 9.3 9.3h122.6v0.4L587.7 828.9c-1.1 1.6-1.7 3.4-1.7 5.4v36.4c0 5.1 4.2 9.3 9.3 9.3h211.4c5.1 0 9.3-4.2 9.3-9.3v-43c0.1-5.1-4.1-9.3-9.2-9.3z",
    "p-id": "2264"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M310.3 167.1c-3.2-4.1-9.4-4.1-12.6 0L185.7 309c-4.2 5.3-0.4 13 6.3 13h76v530c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V322h76c6.7 0 10.5-7.8 6.3-13l-112-141.9z",
    "p-id": "2265"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 1024 1024",
    fill: "#535A68",
    id: "more"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M224 597.333333C183.466667 597.333333 149.333333 563.2 149.333333 522.666667S183.466667 448 224 448s74.666667 34.133333 74.666667 74.666667-32 74.666667-74.666667 74.666666zM512 597.333333c-40.533333 0-74.666667-34.133333-74.666667-74.666666S471.466667 448 512 448s74.666667 34.133333 74.666667 74.666667S554.666667 597.333333 512 597.333333zM800 597.333333c-40.533333 0-74.666667-34.133333-74.666667-74.666666s34.133333-74.666667 74.666667-74.666667 74.666667 34.133333 74.666667 74.666667-32 74.666667-74.666667 74.666666z"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 1024 1024",
    width: "24",
    height: "24",
    id: "text-clip"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M217.6 810.666667h76.8a4.266667 4.266667 0 0 0 4.266667-4.266667V217.6a4.266667 4.266667 0 0 0-4.266667-4.266667H217.6a4.266667 4.266667 0 0 0-4.266667 4.266667v588.8a4.266667 4.266667 0 0 0 4.266667 4.266667zM725.333333 217.6v247.466667a4.266667 4.266667 0 0 1-4.266666 4.266666H388.266667a4.266667 4.266667 0 0 0-4.266667 4.266667v76.8a4.266667 4.266667 0 0 0 4.266667 4.266667h332.8a4.266667 4.266667 0 0 1 4.266666 4.266666v247.466667a4.266667 4.266667 0 0 0 4.266667 4.266667h76.8a4.266667 4.266667 0 0 0 4.266667-4.266667V217.6a4.266667 4.266667 0 0 0-4.266667-4.266667h-76.8a4.266667 4.266667 0 0 0-4.266667 4.266667z",
    "p-id": "13371",
    fill: "#525C6F"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 1024 1024",
    fill: "#535A68",
    id: "text-rotation-none"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M657.066667 620.088889c24.177778 0 39.822222-24.177778 31.288889-46.933333L509.155556 150.755556c-14.222222-34.133333-64-34.133333-78.222223 0L250.311111 573.155556c-9.955556 22.755556 7.111111 46.933333 31.288889 46.933333 14.222222 0 25.6-8.533333 31.288889-21.333333l36.977778-92.444445h240.355555l36.977778 92.444445c4.266667 12.8 17.066667 21.333333 29.866667 21.333333z m-285.866667-170.666667L469.333333 203.377778l98.133334 246.044444H371.2zM704 662.755556c-11.377778 11.377778-11.377778 28.444444 0 39.822222l45.511111 45.511111H204.8c-15.644444 0-28.444444 12.8-28.444444 28.444444s12.8 28.444444 28.444444 28.444445h544.711111l-45.511111 45.511111c-11.377778 11.377778-11.377778 28.444444 0 39.822222 11.377778 11.377778 28.444444 11.377778 39.822222 0L839.111111 796.444444c11.377778-11.377778 11.377778-28.444444 0-39.822222l-93.866667-93.866666c-11.377778-11.377778-29.866667-11.377778-41.244444 0z",
    "p-id": "17165"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 1024 1024",
    fill: "#535A68",
    id: "text-rotation-angleup"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M634.311111 398.222222c17.066667-17.066667 11.377778-45.511111-11.377778-54.044444L196.266667 170.666667c-35.555556-14.222222-69.688889 21.333333-55.466667 55.466666l172.088889 426.666667c8.533333 22.755556 38.4 28.444444 54.044444 11.377778 9.955556-9.955556 12.8-24.177778 7.111111-36.977778l-39.822222-91.022222 170.666667-170.666667 91.022222 39.822222c12.8 4.266667 28.444444 2.844444 38.4-7.111111z m-322.844444 81.066667l-105.244445-243.2L449.422222 341.333333l-137.955555 137.955556zM696.888889 393.955556c0 15.644444 12.8 28.444444 28.444444 28.444444h64L403.911111 807.822222c-11.377778 11.377778-11.377778 28.444444 0 39.822222 11.377778 11.377778 28.444444 11.377778 39.822222 0l385.422223-385.422222V526.222222c0 15.644444 12.8 28.444444 28.444444 28.444445s28.444444-12.8 28.444444-28.444445v-133.688889c0-15.644444-12.8-28.444444-28.444444-28.444444h-133.688889c-14.222222 1.422222-27.022222 14.222222-27.022222 29.866667z",
    "p-id": "17929"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 1024 1024",
    fill: "#535A68",
    id: "text-rotation-angledown"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M625.777778 634.311111c17.066667 17.066667 45.511111 11.377778 54.044444-11.377778l172.088889-426.666666c14.222222-35.555556-21.333333-69.688889-55.466667-55.466667L371.2 312.888889c-22.755556 8.533333-28.444444 38.4-11.377778 54.044444 9.955556 9.955556 24.177778 12.8 36.977778 7.111111l91.022222-39.822222 170.666667 170.666667-39.822222 92.444444c-4.266667 11.377778-2.844444 27.022222 7.111111 36.977778z m-81.066667-322.844444l243.2-105.244445L682.666667 449.422222l-137.955556-137.955555zM630.044444 696.888889c-15.644444 0-28.444444 12.8-28.444444 28.444444v64L216.177778 403.911111c-11.377778-11.377778-28.444444-11.377778-39.822222 0-11.377778 11.377778-11.377778 28.444444 0 39.822222l385.422222 385.422223H497.777778c-15.644444 0-28.444444 12.8-28.444445 28.444444s12.8 28.444444 28.444445 28.444444h133.688889c15.644444 0 28.444444-12.8 28.444444-28.444444v-133.688889c-1.422222-14.222222-14.222222-27.022222-29.866667-27.022222z",
    "p-id": "18084"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 1024 1024",
    fill: "#535A68",
    id: "text-rotation-vertical"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M465.066667 672.711111c-24.177778 0-39.822222-24.177778-31.288889-46.933333l179.2-423.822222c14.222222-34.133333 64-34.133333 78.222222 0L871.822222 625.777778c9.955556 22.755556-7.111111 46.933333-31.288889 46.933333-14.222222 0-25.6-8.533333-31.288889-21.333333l-36.977777-92.444445H531.911111l-36.977778 92.444445c-4.266667 12.8-17.066667 21.333333-29.866666 21.333333z m285.866666-170.666667L652.8 256 554.666667 502.044444h196.266666zM157.866667 704c11.377778-11.377778 28.444444-11.377778 39.822222 0l45.511111 45.511111V204.8c0-15.644444 12.8-28.444444 28.444444-28.444444s28.444444 12.8 28.444445 28.444444v544.711111l45.511111-45.511111c11.377778-11.377778 28.444444-11.377778 39.822222 0 11.377778 11.377778 11.377778 28.444444 0 39.822222L292.977778 839.111111c-11.377778 11.377778-28.444444 11.377778-39.822222 0l-93.866667-93.866667c-12.8-11.377778-12.8-29.866667-1.422222-41.244444z",
    "p-id": "18239"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 1024 1024",
    fill: "#535A68",
    id: "text-rotation-up"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M620.088889 366.933333c0-24.177778-24.177778-39.822222-46.933333-31.288889L150.755556 514.844444c-34.133333 14.222222-34.133333 64 0 78.222223l423.822222 179.2c22.755556 9.955556 46.933333-7.111111 46.933333-31.288889 0-14.222222-8.533333-25.6-21.333333-31.288889l-92.444445-36.977778V433.777778l92.444445-36.977778c11.377778-4.266667 19.911111-17.066667 19.911111-29.866667z m-170.666667 285.866667L203.377778 554.666667l246.044444-98.133334v196.266667zM662.755556 320c11.377778 11.377778 28.444444 11.377778 39.822222 0l45.511111-45.511111v544.711111c0 15.644444 12.8 28.444444 28.444444 28.444444s28.444444-12.8 28.444445-28.444444V274.488889l45.511111 45.511111c11.377778 11.377778 28.444444 11.377778 39.822222 0 11.377778-11.377778 11.377778-28.444444 0-39.822222L796.444444 184.888889c-11.377778-11.377778-28.444444-11.377778-39.822222 0l-93.866666 93.866667c-11.377778 11.377778-11.377778 29.866667 0 41.244444z",
    "p-id": "18394"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 1024 1024",
    fill: "#535A68",
    id: "screenshot"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M320 704V128H256v128H128v64h128v448h448v128h64v-128h128v-64H320z m384-64h64V256H384v64h320v320z",
    "p-id": "3788"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    viewBox: "0 0 1024 1024",
    fill: "#535A68",
    id: "text-rotation-down"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M403.911111 657.066667c0 24.177778 24.177778 39.822222 46.933333 31.288889L873.244444 509.155556c34.133333-14.222222 34.13333299-64 0-78.222223L450.844444 250.311111c-22.755556-9.955556-46.933333 7.111111-46.933333 31.288889 0 14.222222 8.533333 25.6 21.333333 31.288889l92.444445 36.977778-1e-8 240.355555-92.44444499 36.977778c-12.8 4.266667-21.333333 17.066667-21.333333 29.866667z m170.666667-285.86666701L820.622222 469.33333299l-246.044444 98.13333401L574.577778 371.19999999zM361.244444 704c-11.377778-11.377778-28.444444-11.377778-39.822222 0l-45.511111 45.511111L275.911111 204.79999999c0-15.644444-12.8-28.444444-28.44444399-28.44444399s-28.444444 12.8-28.44444501 28.444444l-1e-8 544.711111-45.51111099-45.511111c-11.377778-11.377778-28.444444-11.377778-39.822222 0-11.377778 11.377778-11.377778 28.444444 0 39.822222L227.555556 839.111111c11.377778 11.377778 28.444444 11.377778 39.822222-1e-8l93.866666-93.86666699c11.377778-11.377778 11.377778-29.866667 0-41.244444z",
    "p-id": "10914"
  }))));
};

var SheetTabContextMenu = function SheetTabContextMenu() {
  var _settings$sheetTabCon;

  var _useContext = React.useContext(WorkbookContext),
      context = _useContext.context,
      setContext = _useContext.setContext,
      settings = _useContext.settings;

  var _context$sheetTabCont = context.sheetTabContextMenu,
      x = _context$sheetTabCont.x,
      y = _context$sheetTabCont.y,
      sheet = _context$sheetTabCont.sheet,
      onRename = _context$sheetTabCont.onRename;

  var _locale = core.locale(context),
      sheetconfig = _locale.sheetconfig;

  var _useState = React.useState({
    x: -1,
    y: -1
  }),
      _useState2 = _slicedToArray(_useState, 2),
      position = _useState2[0],
      setPosition = _useState2[1];

  var _useAlert = useAlert(),
      showAlert = _useAlert.showAlert,
      hideAlert = _useAlert.hideAlert;

  var containerRef = React.useRef(null);
  var close = React.useCallback(function () {
    setContext(function (ctx) {
      ctx.sheetTabContextMenu = {};
    });
  }, [setContext]);
  React.useLayoutEffect(function () {
    var _containerRef$current;

    var rect = (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.getBoundingClientRect();

    if (rect && x != null && y != null) {
      setPosition({
        x: x,
        y: y - rect.height
      });
    }
  }, [x, y]);
  useOutsideClick(containerRef, close, [close]);
  var moveSheet = React.useCallback(function (delta) {
    if (!sheet) return;
    setContext(function (ctx) {
      var currentOrder = -1;

      ___default['default'].sortBy(ctx.luckysheetfile, ["order"]).forEach(function (_sheet, i) {
        _sheet.order = i;

        if (_sheet.id === sheet.id) {
          currentOrder = i;
        }
      });

      core.api.setSheetOrder(ctx, _defineProperty({}, sheet.id, currentOrder + delta));
    });
  }, [setContext, sheet]);
  if (!sheet || x == null || y == null) return null;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-context-menu luckysheet-cols-menu",
    onContextMenu: function onContextMenu(e) {
      return e.stopPropagation();
    },
    style: {
      left: position.x,
      top: position.y,
      overflow: "visible"
    },
    ref: containerRef
  }, (_settings$sheetTabCon = settings.sheetTabContextMenu) === null || _settings$sheetTabCon === void 0 ? void 0 : _settings$sheetTabCon.map(function (name, i) {
    if (name === "delete") {
      return /*#__PURE__*/React__default['default'].createElement(Menu, {
        key: name,
        onClick: function onClick() {
          showAlert(sheetconfig.confirmDelete, "yesno", function () {
            setContext(function (draftCtx) {
              core.deleteSheet(draftCtx, sheet.id);
            }, {
              deleteSheetOp: {
                id: sheet.id
              }
            });
            hideAlert();
          });
          close();
        }
      }, sheetconfig.delete);
    }

    if (name === "rename") {
      return /*#__PURE__*/React__default['default'].createElement(Menu, {
        key: name,
        onClick: function onClick() {
          onRename === null || onRename === void 0 ? void 0 : onRename();
          close();
        }
      }, sheetconfig.rename);
    }

    if (name === "move") {
      return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, {
        key: name
      }, /*#__PURE__*/React__default['default'].createElement(Menu, {
        onClick: function onClick() {
          moveSheet(-1.5);
          close();
        }
      }, sheetconfig.moveLeft), /*#__PURE__*/React__default['default'].createElement(Menu, {
        onClick: function onClick() {
          moveSheet(1.5);
          close();
        }
      }, sheetconfig.moveRight));
    }

    if (name === "|") {
      return /*#__PURE__*/React__default['default'].createElement(Divider$1, {
        key: "divide-".concat(i)
      });
    }

    return null;
  }));
};

var MoreItemsContaier = function MoreItemsContaier(_ref) {
  var onClose = _ref.onClose,
      children = _ref.children;
  var containerRef = React.useRef(null);
  useOutsideClick(containerRef, function () {
    onClose === null || onClose === void 0 ? void 0 : onClose();
  }, [containerRef, onClose]);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    ref: containerRef,
    className: "fortune-toolbar-more-container"
  }, children);
};

function generateAPIs(context, setContext, settings, cellInput, scrollbarX, scrollbarY) {
  return {
    applyOp: function applyOp(ops) {
      setContext(function (ctx_) {
        var _opToPatch = core.opToPatch(ctx_, ops),
            _opToPatch2 = _slicedToArray(_opToPatch, 2),
            patches = _opToPatch2[0],
            specialOps = _opToPatch2[1];

        if (specialOps.length > 0) {
          var _specialOps = _slicedToArray(specialOps, 1),
              specialOp = _specialOps[0];

          if (specialOp.op === "insertRowCol") {
            ctx_ = produce__default['default'](ctx_, function (draftCtx) {
              core.insertRowCol(draftCtx, specialOp.value);
            });
          } else if (specialOp.op === "deleteRowCol") {
            ctx_ = produce__default['default'](ctx_, function (draftCtx) {
              core.deleteRowCol(draftCtx, specialOp.value);
            });
          } else if (specialOp.op === "addSheet") {
            ctx_ = produce__default['default'](ctx_, function (draftCtx) {
              core.addSheet(draftCtx, settings);
            });
          } else if (specialOp.op === "deleteSheet") {
            ctx_ = produce__default['default'](ctx_, function (draftCtx) {
              core.deleteSheet(draftCtx, specialOp.value.id);
            });
          }
        }

        var newContext = produce.applyPatches(ctx_, patches);
        return newContext;
      }, {
        noHistory: true
      });
    },
    getCellValue: function getCellValue(row, column) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return core.api.getCellValue(context, row, column, options);
    },
    setCellValue: function setCellValue(row, column, value) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      return setContext(function (draftCtx) {
        return core.api.setCellValue(draftCtx, row, column, value, cellInput, options);
      });
    },
    clearCell: function clearCell(row, column) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return setContext(function (draftCtx) {
        return core.api.clearCell(draftCtx, row, column, options);
      });
    },
    setCellFormat: function setCellFormat(row, column, attr, value) {
      var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      return setContext(function (draftCtx) {
        return core.api.setCellFormat(draftCtx, row, column, attr, value, options);
      });
    },
    freeze: function freeze(type, range) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return setContext(function (draftCtx) {
        return core.api.freeze(draftCtx, type, range, options);
      });
    },
    insertRowOrColumn: function insertRowOrColumn(type, index, count) {
      var direction = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "rightbottom";
      var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      return setContext(function (draftCtx) {
        return core.api.insertRowOrColumn(draftCtx, type, index, count, direction, options);
      });
    },
    deleteRowOrColumn: function deleteRowOrColumn(type, start, end) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      return setContext(function (draftCtx) {
        return core.api.deleteRowOrColumn(draftCtx, type, start, end, options);
      });
    },
    setRowHeight: function setRowHeight(rowInfo) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return setContext(function (draftCtx) {
        return core.api.setRowHeight(draftCtx, rowInfo, options);
      });
    },
    setColumnWidth: function setColumnWidth(columnInfo) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return setContext(function (draftCtx) {
        return core.api.setColumnWidth(draftCtx, columnInfo, options);
      });
    },
    getRowHeight: function getRowHeight(rows) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return core.api.getRowHeight(context, rows, options);
    },
    getColumnWidth: function getColumnWidth(columns) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return core.api.getColumnWidth(context, columns, options);
    },
    getSelection: function getSelection() {
      return core.api.getSelection(context);
    },
    getFlattenRange: function getFlattenRange(range) {
      return core.api.getFlattenRange(context, range);
    },
    getCellsByFlattenRange: function getCellsByFlattenRange(range) {
      return core.api.getCellsByFlattenRange(context, range);
    },
    getSelectionCoordinates: function getSelectionCoordinates() {
      return core.api.getSelectionCoordinates(context);
    },
    getCellsByRange: function getCellsByRange(range) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return core.api.getCellsByRange(context, range, options);
    },
    getHtmlByRange: function getHtmlByRange(range) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return core.api.getHtmlByRange(context, range, options);
    },
    setSelection: function setSelection(range) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return setContext(function (draftCtx) {
        return core.api.setSelection(draftCtx, range, options);
      });
    },
    setCellValuesByRange: function setCellValuesByRange(data, range) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return setContext(function (draftCtx) {
        return core.api.setCellValuesByRange(draftCtx, data, range, cellInput, options);
      });
    },
    setCellFormatByRange: function setCellFormatByRange(attr, value, range) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      return setContext(function (draftCtx) {
        return core.api.setCellFormatByRange(draftCtx, attr, value, range, options);
      });
    },
    mergeCells: function mergeCells(ranges, type) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return setContext(function (draftCtx) {
        return core.api.mergeCells(draftCtx, ranges, type, options);
      });
    },
    cancelMerge: function cancelMerge(ranges) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return setContext(function (draftCtx) {
        return core.api.cancelMerge(draftCtx, ranges, options);
      });
    },
    getAllSheets: function getAllSheets() {
      return core.api.getAllSheets(context);
    },
    getSheet: function getSheet() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return core.api.getSheet(context, options);
    },
    addSheet: function addSheet() {
      return setContext(function (draftCtx) {
        return core.api.addSheet(draftCtx, settings);
      });
    },
    deleteSheet: function deleteSheet() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return setContext(function (draftCtx) {
        return core.api.deleteSheet(draftCtx, options);
      });
    },
    activateSheet: function activateSheet() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return setContext(function (draftCtx) {
        return core.api.activateSheet(draftCtx, options);
      });
    },
    setSheetName: function setSheetName(name) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return setContext(function (draftCtx) {
        return core.api.setSheetName(draftCtx, name, options);
      });
    },
    setSheetOrder: function setSheetOrder(orderList) {
      return setContext(function (draftCtx) {
        return core.api.setSheetOrder(draftCtx, orderList);
      });
    },
    scroll: function scroll(options) {
      return core.api.scroll(context, scrollbarX, scrollbarY, options);
    },
    addPresences: function addPresences(newPresences) {
      setContext(function (draftCtx) {
        draftCtx.presences = ___default['default'].differenceBy(draftCtx.presences || [], newPresences, function (v) {
          return v.userId == null ? v.username : v.userId;
        }).concat(newPresences);
      });
    },
    removePresences: function removePresences(arr) {
      setContext(function (draftCtx) {
        if (draftCtx.presences != null) {
          draftCtx.presences = ___default['default'].differenceBy(draftCtx.presences, arr, function (v) {
            return v.userId == null ? v.username : v.userId;
          });
        }
      });
    }
  };
}

var _excluded = ["onChange", "onOp", "data"];
produce.enablePatches();
var Workbook = /*#__PURE__*/React__default['default'].forwardRef(function (_ref, ref) {
  var _context$luckysheetfi;

  var onChange = _ref.onChange,
      onOp = _ref.onOp,
      originalData = _ref.data,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useState = React.useState(core.defaultContext()),
      _useState2 = _slicedToArray(_useState, 2),
      context = _useState2[0],
      setContext = _useState2[1];

  var cellInput = React.useRef(null);
  var fxInput = React.useRef(null);
  var canvas = React.useRef(null);
  var scrollbarX = React.useRef(null);
  var scrollbarY = React.useRef(null);
  var cellArea = React.useRef(null);
  var workbookContainer = React.useRef(null);
  var globalCache = React.useRef({
    undoList: [],
    redoList: []
  });

  var _useState3 = React.useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      moreToolbarItems = _useState4[0],
      setMoreToolbarItems = _useState4[1];

  var mergedSettings = React.useMemo(function () {
    return ___default['default'].assign(___default['default'].cloneDeep(core.defaultSettings), props);
  }, _toConsumableArray(___default['default'].values(props)));
  var emitOp = React.useCallback(function (ctx, patches, options) {
    if (onOp) {
      onOp(core.patchToOp(ctx, patches, options));
    }
  }, [onOp]);
  var setContextWithProduce = React.useCallback(function (recipe) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    setContext(function (ctx_) {
      var _produceWithPatches = produce.produceWithPatches(ctx_, recipe),
          _produceWithPatches2 = _slicedToArray(_produceWithPatches, 3),
          result = _produceWithPatches2[0],
          patches = _produceWithPatches2[1],
          inversePatches = _produceWithPatches2[2];

      if (patches.length > 0 && !options.noHistory) {
        if (options.logPatch) {
          console.info("patch", patches);
        }

        var filteredPatches = core.filterPatch(patches);
        var filteredInversePatches = core.filterPatch(inversePatches);

        if (filteredInversePatches.length > 0) {
          if (!options.addSheetOp && !options.deleteSheetOp) {
            globalCache.current.undoList.push({
              patches: filteredPatches,
              inversePatches: filteredInversePatches,
              options: options
            });
            globalCache.current.redoList = [];
          }

          emitOp(result, filteredPatches, options);
        }
      }

      return result;
    });
  }, [emitOp]);
  var handleUndo = React.useCallback(function () {
    var history = globalCache.current.undoList.pop();

    if (history) {
      setContext(function (ctx_) {
        var newContext = produce.applyPatches(ctx_, history.inversePatches);
        globalCache.current.redoList.push(history);
        var inversedOptions = core.inverseRowColOptions(history.options);

        if (inversedOptions === null || inversedOptions === void 0 ? void 0 : inversedOptions.insertRowColOp) {
          inversedOptions.restoreDeletedCells = true;
        }

        emitOp(newContext, history.inversePatches, inversedOptions);
        return newContext;
      });
    }
  }, [emitOp]);
  var handleRedo = React.useCallback(function () {
    var history = globalCache.current.redoList.pop();

    if (history) {
      setContext(function (ctx_) {
        var newContext = produce.applyPatches(ctx_, history.patches);
        globalCache.current.undoList.push(history);
        emitOp(newContext, history.patches, history.options);
        return newContext;
      });
    }
  }, [emitOp]);
  React.useEffect(function () {
    if (context.luckysheet_select_save != null) {
      var _mergedSettings$hooks, _mergedSettings$hooks2;

      (_mergedSettings$hooks = mergedSettings.hooks) === null || _mergedSettings$hooks === void 0 ? void 0 : (_mergedSettings$hooks2 = _mergedSettings$hooks.afterSelectionChange) === null || _mergedSettings$hooks2 === void 0 ? void 0 : _mergedSettings$hooks2.call(_mergedSettings$hooks, context.currentSheetId, context.luckysheet_select_save[0]);
    }
  }, [context.currentSheetId, context.luckysheet_select_save, mergedSettings.hooks]);
  var providerValue = React.useMemo(function () {
    return {
      context: context,
      setContext: setContextWithProduce,
      settings: mergedSettings,
      handleUndo: handleUndo,
      handleRedo: handleRedo,
      refs: {
        globalCache: globalCache.current,
        cellInput: cellInput,
        fxInput: fxInput,
        canvas: canvas,
        scrollbarX: scrollbarX,
        scrollbarY: scrollbarY,
        cellArea: cellArea,
        workbookContainer: workbookContainer
      }
    };
  }, [context, handleRedo, handleUndo, mergedSettings, setContextWithProduce]);
  React.useEffect(function () {
    if (!___default['default'].isEmpty(context.luckysheetfile)) {
      onChange === null || onChange === void 0 ? void 0 : onChange(context.luckysheetfile);
    }
  }, [context.luckysheetfile, onChange]);
  React.useEffect(function () {
    setContextWithProduce(function (draftCtx) {
      var _draftCtx$luckysheetf3, _draftCtx$luckysheet_;

      if (___default['default'].isEmpty(draftCtx.luckysheetfile)) {
        var newData = produce__default['default'](originalData, function (draftData) {
          core.ensureSheetIndex(draftData, mergedSettings.generateSheetId);
        });
        draftCtx.luckysheetfile = newData;
      }

      draftCtx.defaultcolumnNum = mergedSettings.column;
      draftCtx.defaultrowNum = mergedSettings.row;
      draftCtx.defaultFontSize = mergedSettings.defaultFontSize;
      draftCtx.lang = mergedSettings.lang;
      draftCtx.allowEdit = mergedSettings.allowEdit;
      draftCtx.hooks = mergedSettings.hooks;

      if (___default['default'].isEmpty(draftCtx.currentSheetId)) {
        core.initSheetIndex(draftCtx);
      }

      var sheetIdx = core.getSheetIndex(draftCtx, draftCtx.currentSheetId);

      if (sheetIdx == null) {
        var _draftCtx$luckysheetf, _draftCtx$luckysheetf2;

        if (((_draftCtx$luckysheetf = (_draftCtx$luckysheetf2 = draftCtx.luckysheetfile) === null || _draftCtx$luckysheetf2 === void 0 ? void 0 : _draftCtx$luckysheetf2.length) !== null && _draftCtx$luckysheetf !== void 0 ? _draftCtx$luckysheetf : 0) > 0) {
          sheetIdx = 0;
          draftCtx.currentSheetId = draftCtx.luckysheetfile[0].id;
        }
      }

      if (sheetIdx == null) return;
      var sheet = (_draftCtx$luckysheetf3 = draftCtx.luckysheetfile) === null || _draftCtx$luckysheetf3 === void 0 ? void 0 : _draftCtx$luckysheetf3[sheetIdx];
      if (!sheet) return;
      var cellData = sheet.celldata;
      var data = sheet.data;

      if (___default['default'].isEmpty(data)) {
        var _lastRow$r, _lastCol$c;

        var lastRow = ___default['default'].maxBy(cellData, "r");

        var lastCol = ___default['default'].maxBy(cellData, "c");

        var lastRowNum = Math.max((_lastRow$r = lastRow === null || lastRow === void 0 ? void 0 : lastRow.r) !== null && _lastRow$r !== void 0 ? _lastRow$r : 0, draftCtx.defaultrowNum);
        var lastColNum = Math.max((_lastCol$c = lastCol === null || lastCol === void 0 ? void 0 : lastCol.c) !== null && _lastCol$c !== void 0 ? _lastCol$c : 0, draftCtx.defaultcolumnNum);

        if (lastRowNum && lastColNum) {
          var expandedData = ___default['default'].times(lastRowNum + 1, function () {
            return ___default['default'].times(lastColNum + 1, function () {
              return null;
            });
          });

          cellData === null || cellData === void 0 ? void 0 : cellData.forEach(function (d) {
            expandedData[d.r][d.c] = d.v;
          });
          draftCtx.luckysheetfile = produce__default['default'](draftCtx.luckysheetfile, function (d) {
            d[sheetIdx].data = expandedData;
          });
          data = expandedData;
        }
      }

      if (___default['default'].isEmpty(draftCtx.luckysheet_select_save) && !___default['default'].isEmpty(sheet.luckysheet_select_save)) {
        draftCtx.luckysheet_select_save = sheet.luckysheet_select_save;
      }

      if (((_draftCtx$luckysheet_ = draftCtx.luckysheet_select_save) === null || _draftCtx$luckysheet_ === void 0 ? void 0 : _draftCtx$luckysheet_.length) === 0) {
        var _data, _data$, _data$$, _data2, _data2$, _data2$$, _data2$$$mc, _data3, _data3$, _data3$$, _data3$$$mc;

        if (((_data = data) === null || _data === void 0 ? void 0 : (_data$ = _data[0]) === null || _data$ === void 0 ? void 0 : (_data$$ = _data$[0]) === null || _data$$ === void 0 ? void 0 : _data$$.mc) && !___default['default'].isNil((_data2 = data) === null || _data2 === void 0 ? void 0 : (_data2$ = _data2[0]) === null || _data2$ === void 0 ? void 0 : (_data2$$ = _data2$[0]) === null || _data2$$ === void 0 ? void 0 : (_data2$$$mc = _data2$$.mc) === null || _data2$$$mc === void 0 ? void 0 : _data2$$$mc.rs) && !___default['default'].isNil((_data3 = data) === null || _data3 === void 0 ? void 0 : (_data3$ = _data3[0]) === null || _data3$ === void 0 ? void 0 : (_data3$$ = _data3$[0]) === null || _data3$$ === void 0 ? void 0 : (_data3$$$mc = _data3$$.mc) === null || _data3$$$mc === void 0 ? void 0 : _data3$$$mc.cs)) {
          draftCtx.luckysheet_select_save = [{
            row: [0, data[0][0].mc.rs - 1],
            column: [0, data[0][0].mc.cs - 1]
          }];
        } else {
          draftCtx.luckysheet_select_save = [{
            row: [0, 0],
            column: [0, 0]
          }];
        }
      }

      draftCtx.config = ___default['default'].isNil(sheet.config) ? {} : sheet.config;
      draftCtx.insertedImgs = sheet.images;
      draftCtx.zoomRatio = ___default['default'].isNil(sheet.zoomRatio) ? 1 : sheet.zoomRatio;

      if (!___default['default'].isNil(sheet.defaultRowHeight)) {
        draftCtx.defaultrowlen = Number(sheet.defaultRowHeight);
      } else {
        draftCtx.defaultrowlen = mergedSettings.defaultRowHeight;
      }

      if (!___default['default'].isNil(sheet.defaultColWidth)) {
        draftCtx.defaultcollen = Number(sheet.defaultColWidth);
      } else {
        draftCtx.defaultcollen = mergedSettings.defaultColWidth;
      }

      if (!___default['default'].isNil(sheet.showGridLines)) {
        var showGridLines = sheet.showGridLines;

        if (showGridLines === 0 || showGridLines === false) {
          draftCtx.showGridLines = false;
        } else {
          draftCtx.showGridLines = true;
        }
      } else {
        draftCtx.showGridLines = true;
      }

      if (___default['default'].isNil(mergedSettings.lang)) {
        var lang = navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage;
        draftCtx.lang = lang;
      }
    }, {
      noHistory: true
    });
  }, [context.currentSheetId, context.luckysheetfile.length, originalData, mergedSettings.defaultRowHeight, mergedSettings.defaultColWidth, mergedSettings.column, mergedSettings.row, mergedSettings.defaultFontSize, mergedSettings.lang, mergedSettings.allowEdit, mergedSettings.hooks, mergedSettings.generateSheetId, setContextWithProduce]);
  var onKeyDown = React.useCallback(function (e) {
    var nativeEvent = e.nativeEvent;
    setContextWithProduce(function (draftCtx) {
      core.handleGlobalKeyDown(draftCtx, cellInput.current, fxInput.current, nativeEvent, globalCache.current, handleUndo, handleRedo);
    });
  }, [handleRedo, handleUndo, setContextWithProduce]);
  var onPaste = React.useCallback(function (e) {
    if (cellInput.current === document.activeElement) {
      setContextWithProduce(function (draftCtx) {
        core.handlePaste(draftCtx, e);
      });
    }
  }, [setContextWithProduce]);
  var onMoreToolbarItemsClose = React.useCallback(function () {
    setMoreToolbarItems(null);
  }, []);
  React.useEffect(function () {
    document.addEventListener("paste", onPaste);
    return function () {
      document.removeEventListener("paste", onPaste);
    };
  }, [onPaste]);
  React.useImperativeHandle(ref, function () {
    return generateAPIs(context, setContextWithProduce, mergedSettings, cellInput.current, scrollbarX.current, scrollbarY.current);
  }, [context, mergedSettings, setContextWithProduce]);
  var i = core.getSheetIndex(context, context.currentSheetId);

  if (i == null) {
    return null;
  }

  var sheet = (_context$luckysheetfi = context.luckysheetfile) === null || _context$luckysheetfi === void 0 ? void 0 : _context$luckysheetfi[i];

  if (!sheet) {
    return null;
  }

  return /*#__PURE__*/React__default['default'].createElement(WorkbookContext.Provider, {
    value: providerValue
  }, /*#__PURE__*/React__default['default'].createElement(ModalProvider, null, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-container",
    ref: workbookContainer,
    onKeyDown: onKeyDown
  }, /*#__PURE__*/React__default['default'].createElement(SVGDefines, null), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fortune-workarea"
  }, mergedSettings.showToolbar && /*#__PURE__*/React__default['default'].createElement(Toolbar, {
    moreItemsOpen: moreToolbarItems !== null,
    setMoreItems: setMoreToolbarItems
  }), mergedSettings.showFormulaBar && /*#__PURE__*/React__default['default'].createElement(FxEditor, null)), /*#__PURE__*/React__default['default'].createElement(Sheet, {
    sheet: sheet
  }), mergedSettings.showSheetTabs && /*#__PURE__*/React__default['default'].createElement(SheetTab, null), /*#__PURE__*/React__default['default'].createElement(ContextMenu, null), /*#__PURE__*/React__default['default'].createElement(SheetTabContextMenu, null), moreToolbarItems && /*#__PURE__*/React__default['default'].createElement(MoreItemsContaier, {
    onClose: onMoreToolbarItemsClose
  }, moreToolbarItems), !___default['default'].isEmpty(context.contextMenu) && /*#__PURE__*/React__default['default'].createElement("div", {
    onMouseDown: function onMouseDown() {
      setContextWithProduce(function (draftCtx) {
        draftCtx.contextMenu = undefined;
      });
    },
    onMouseMove: function onMouseMove(e) {
      return e.stopPropagation();
    },
    onMouseUp: function onMouseUp(e) {
      return e.stopPropagation();
    },
    onContextMenu: function onContextMenu(e) {
      e.preventDefault();
      e.stopPropagation();
    },
    className: "fortune-popover-backdrop"
  }))));
});

exports.Workbook = Workbook;
