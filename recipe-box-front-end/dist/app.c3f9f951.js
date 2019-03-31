// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/utils/api/api-actions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function getRequest(location, callback) {
  fetch(location).then(function (response) {
    return response.json();
  }).then(function (data) {
    return callback(data);
  }).catch(function (err) {
    return console.log(err);
  });
}

function postRequest(location, requestBody, callback) {
  fetch(location, {
    method: "POST",
    body: JSON.stringify(requestBody)
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return callback(data);
  }).catch(function (err) {
    return console.log(err);
  });
}

function putRequest(location, requestBody, callback) {
  fetch(location, {
    method: "PUT",
    body: JSON.stringify(requestBody)
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return callback(data);
  }).catch(function (err) {
    return console.log(err);
  });
} // function patchRequest(location, requestBody, callback) {
//   fetch(location, {
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Method': PATCH,
//       'Authorization': ''
//     },
//           method: "PATCH",
//           body: JSON.stringify(requestBody)
//       })
//       .then(response => response.json())
//       .then(data => callback(data))
//       .catch(err => console.log(err))
// }


function deleteRequest(location, requestBody, callback) {
  fetch(location, {
    method: "DELETE",
    body: JSON.stringify(requestBody)
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return callback(data);
  }).catch(function (err) {
    return console.log(err);
  });
}

var _default = {
  getRequest: getRequest,
  postRequest: postRequest,
  putRequest: putRequest,
  deleteRequest: deleteRequest
};
exports.default = _default;
},{}],"js/utils/events/event-actions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function on(element, eventType, callback) {
  element.addEventListener(eventType, function (event) {
    return callback(event);
  });
}

var _default = {
  on: on
};
exports.default = _default;
},{}],"js/components/Categories.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Categories;

function Categories(categories) {
  return "\n  <div>\n  <ul class=\"categories\">\n  ".concat(categories.map(function (category) {
    return "\n\n                      <li class=\"category\">\n                          <h5 class=\"category-name\">".concat(category.category, "</h5> \n                          <img class=\"category-image\" id=\"").concat(category.id, "\" src=\"").concat(category.categoryImage, "\" />                       \n                      </li>\n                      \n                  ");
  }).join(""), "\n      </ul>\n      </div>\n\n      ");
}
},{}],"js/components/Recipes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Recipes;

function Recipes(recipes) {
  return "\n    <div>\n    <ul class=\"recipes\">\n    ".concat(recipes.map(function (recipe) {
    return "\n                      <li class=\"recipe\">\n                          <h5 class=\"recipe-name\">".concat(recipe.recipeName, "</h5> \n                          <img class=\"recipe-image\" id=\"").concat(recipe.id, "\" src=\"").concat(recipe.recipeImage, "\" />                       \n                      </li>\n                      \n                  ");
  }).join(""), "\n      </ul>\n      </div>\n      ");
}
},{}],"js/components/Category.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Category;

var _Recipes = _interopRequireDefault(require("./Recipes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Category(category) {
  console.log(category);
  return "\n        <img src=\"".concat(category.categoryImage, "\" alt=\"app image\"/>\n        <h2>").concat(category.category, "</h2>   \n        <ul>\n          <li>").concat((0, _Recipes.default)(category.recipes), "</li>\n        </ul>\n\n\n        <section class=\"submit\">\n          <h3>Add a new recipe to this category!</h3>\n          <input type=\"text\" class=\"js-submit-recipe__recipeName\" placeholder=\"Recipe Name\"/>\n          <input type=\"text\" class=\"js-submit-recipe__recipeImage\" placeholder=\"Picture of the recipe\"/>\n          <input type=\"text\" class=\"js-submit-recipe__instructions\" placeholder=\"Recipe Instructions\"/>\n          <button class=\"js-add-recipe__submit\" id=\"").concat(category.id, "\">Add Recipe</button>\n        </section>\n      ");
}
},{"./Recipes":"js/components/Recipes.js"}],"js/components/Ingredients.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Ingredients;

function Ingredients(ingredients) {
  console.log(ingredients);
  return "\n  <div>\n  <ul class=\"Ingredients\">\n  ".concat(ingredients.map(function (ingredient) {
    return "\n\n                      <li class=\"ingredients\">\n                          <h5 class=\"ingredient-name\">".concat(ingredient.measurement, " ").concat(ingredient.ingredientName, "</h5>\n                      </li>\n                      \n                  ");
  }).join(""), "\n      </ul>\n      </div>\n      ");
}
},{}],"js/components/ingredients.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Ingredients;

function Ingredients(ingredients) {
  console.log(ingredients);
  return "\n  <div>\n  <ul class=\"Ingredients\">\n  ".concat(ingredients.map(function (ingredient) {
    return "\n\n                      <li class=\"ingredients\">\n                          <h5 class=\"ingredient-name\">".concat(ingredient.measurement, " ").concat(ingredient.ingredientName, "</h5>\n                      </li>\n                      \n                  ");
  }).join(""), "\n      </ul>\n      </div>\n      ");
}
},{}],"js/components/recipe.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Recipe;

var _ingredients = _interopRequireDefault(require("./ingredients"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Recipe(recipe) {
  return "\n  <button class=\"js-delete-recipe\" id=\"".concat(recipe.id, "\">Delete this Recipe</button>\n  <button class=\"js-update-recipe\" id=\"").concat(recipe.id, "\">Update this Recipe</button>\n    <img src=\"").concat(recipe.recipeImage, "\" alt=\"app image\"/>\n    <h2>").concat(recipe.recipeName, "</h2>   \n    <ul>\n      <li>").concat((0, _ingredients.default)(recipe.ingredients), "</li>\n      <li>").concat(recipe.instructions, "</li>\n    </ul>\n\n    <section class=\"submit\">\n      <h3>Add ingredients to this recipe!</h3>\n      <input type=\"text\" class=\"js-submit-ingredient__measurement\" placeholder=\"Measurement\"/>\n      <input type=\"text\" class=\"js-submit-ingredient__ingredientName\" placeholder=\"Ingredient\"/>\n      <button class=\"js-add-ingredient__submit\" id=\"").concat(recipe.id, "\">Add Ingredient</button>\n    </section>\n\n  ");
}
},{"./ingredients":"js/components/ingredients.js"}],"js/app.js":[function(require,module,exports) {
"use strict";

var _apiActions = _interopRequireDefault(require("./utils/api/api-actions"));

var _eventActions = _interopRequireDefault(require("./utils/events/event-actions"));

var _Categories = _interopRequireDefault(require("./components/Categories"));

var _Category = _interopRequireDefault(require("./components/Category"));

var _Recipes = _interopRequireDefault(require("./components/Recipes"));

var _Ingredients = _interopRequireDefault(require("./components/Ingredients"));

var _recipe = _interopRequireDefault(require("./components/recipe"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

main();

function main() {
  _apiActions.default.getRequest('http://localhost:8080/categories', function (categories) {
    getAppContext().innerHTML = (0, _Categories.default)(categories);
  });

  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('category-image')) {
      _apiActions.default.getRequest("http://localhost:8080/categories/".concat(event.target.id), function (category) {
        getAppContext().innerHTML = (0, _Category.default)(category);
      });
    }
  });

  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('recipe-image')) {
      _apiActions.default.getRequest("http://localhost:8080/recipes/".concat(event.target.id), function (recipe) {
        getAppContext().innerHTML = (0, _recipe.default)(recipe);
      });
    }
  });

  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('js-add-recipe__submit')) {
      var recipeName = document.querySelector('.js-submit-recipe__recipeName').value;
      var recipeImage = document.querySelector('.js-submit-recipe__recipeName').value;
      var instructions = document.querySelector('.js-submit-recipe__instructions').value;

      _apiActions.default.postRequest("http://localhost:8080/recipes/add/".concat(event.target.id), {
        recipeName: recipeName,
        recipeImage: recipeImage,
        instructions: instructions
      }, function (category) {
        return getAppContext().innerHTML = (0, _Category.default)(category);
      });
    }
  });

  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('js-add-ingredient__submit')) {
      var measurement = document.querySelector('.js-submit-ingredient__measurement').value;
      var ingredientName = document.querySelector('.js-submit-ingredient__ingredientName').value;

      _apiActions.default.postRequest("http://localhost:8080/ingredients/add/".concat(event.target.id), {
        measurement: measurement,
        ingredientName: ingredientName
      }, function (recipe) {
        return getAppContext().innerHTML = (0, _recipe.default)(recipe);
      });
    }
  });

  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('js-delete-recipe')) {
      _apiActions.default.deleteRequest("http://localhost:8080/recipes/delete/".concat(event.target.id), {}, function (category) {
        return getAppContext().innerHTML = (0, _Category.default)(category);
      });
    }
  });

  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('js-update-recipe')) {
      _apiActions.default.putRequest("http://localhost:8080/recipes/update/".concat(event.target.id), {}, function (category) {
        return getAppContext().innerHTML = (0, _Category.default)(category);
      });
    }
  });
}

function getAppContext() {
  return document.querySelector("#app");
}
},{"./utils/api/api-actions":"js/utils/api/api-actions.js","./utils/events/event-actions":"js/utils/events/event-actions.js","./components/Categories":"js/components/Categories.js","./components/Category":"js/components/Category.js","./components/Recipes":"js/components/Recipes.js","./components/Ingredients":"js/components/Ingredients.js","./components/recipe":"js/components/recipe.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60258" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/app.js"], null)
//# sourceMappingURL=/app.c3f9f951.js.map