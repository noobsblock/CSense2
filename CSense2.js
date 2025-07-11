// ==UserScript==
// @name         CSense 0.1.0
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  一个 CCW 安全审计工具
// @author       axolotl
// @match        https://www.ccw.site/*
// @grant        none
// @run-at       document-start
// ==/UserScript==
const _0x4823b5 = function () {
  let _0xa73895 = true;
  return function (_0xeb6a3c, _0x4bdc6a) {
    const _0x1d566a = _0xa73895 ? function () {
      if (_0x4bdc6a) {
        const _0x5a4c0d = _0x4bdc6a.apply(_0xeb6a3c, arguments);
        _0x4bdc6a = null;
        return _0x5a4c0d;
      }
    } : function () {};
    _0xa73895 = false;
    return _0x1d566a;
  };
}();
const _0x1a9cd6 = _0x4823b5(this, function () {
  return _0x1a9cd6.toString().search("(((.+)+)+)+$").toString().constructor(_0x1a9cd6).search("(((.+)+)+)+$");
});
//_0x1a9cd6();
'use strict';
(() => {
  function _3callset1dot2(obj, key, fn) {
    if (obj[key]) {
      obj[key] = fn(obj[key]);
    }
  }
  function _0x24e9df(_0x4f3173) {
    if (_0x4f3173 instanceof URL) {
      let _0xb1fedf = document.createElement("link");
      _0xb1fedf.rel = "stylesheet";
      _0xb1fedf.href = _0x4f3173.toString();
      document.documentElement.appendChild(_0xb1fedf);
    } else {
      let _0x17c87c = document.createElement("style");
      _0x17c87c.textContent = _0x4f3173;
      document.documentElement.appendChild(_0x17c87c);
    }
  }
  function _0x65f0b2($) {
    _3callset1dot2(Function.prototype, "bind", $1 => function (_1, ..._2) {
      return typeof _1 == "object" && _1 !== null && Object.prototype.hasOwnProperty.call(_1, "editingTarget") && Object.prototype.hasOwnProperty.call(_1, "runtime") ? (Function.prototype.bind = $1, $(_1), $1.call(this, _1, ..._2)) : $1.call(this, _1, ..._2);
    });
  }
  var promise = new Promise(_0x65f0b2);
  function _0x34179b(_0x34d37c) {
    let window_XMLHttpRequest = window.XMLHttpRequest;
    window.XMLHttpRequest = new Proxy(window_XMLHttpRequest, {
      "construct"(_1, _2) {
        let obj = new _1(..._2);
        _3callset1dot2(obj, "open", _0xbf1cc0 => function (_0x54bb79, _0x4fbdb9) {
          return _0x4fbdb9 === "https://community-web.ccw.site/base/dateTime" ? _0xbf1cc0.call(this, _0x54bb79, "data:application/json,{\"body\": " + Date.now() + ", \"code\": \"200\", \"msg\": null, \"status\": 200}") : _0x4fbdb9 === "https://community-web.ccw.site/project/v" ? _0xbf1cc0.call(this, _0x54bb79, "data:application/json,{\"body\": true, \"code\": \"200\", \"msg\": null, \"status\": 200}") : _0x4fbdb9.startsWith("https://mustang.xiguacity.cn/") ? _0xbf1cc0.call(this, _0x54bb79, "data:application/json,{}") : _0xbf1cc0.call(this, _0x54bb79, _0x4fbdb9);
        });
        obj.addEventListener("load", () => {
          if (obj.responseType === '' || obj.responseType === "text") {
            _0x34d37c({
              "url": obj.responseURL,
              "type": obj.responseType,
              "data": obj.responseText
            });
          }
        });
        return obj;
      }
    });
  }
  var eventTarget = new EventTarget();
  _0x34179b(_0xceb52a => {
    const _0x49ea15 = {
      detail: _0xceb52a
    };
    eventTarget.dispatchEvent(new CustomEvent("load", _0x49ea15));
  });
  var _0x2ebdaf = class {
    constructor(_0x51d396) {
      this._disposed = false;
      this.overlays = [];
      this.target = _0x51d396;
      this.updateRequested = false;
      this.scene = [];
      let _0x293cf1 = () => {
        if (this.updateRequested) {
          this.updateRequested = false;
          this._render();
        }
        if (!this._disposed) {
          requestAnimationFrame(_0x293cf1);
        }
      };
      requestAnimationFrame(_0x293cf1);
    }
    ["_doSetTitle"]() {}
    ["_updateTitle"]() {
      let _0x243a6d = this.scene.at(-1).constructor;
      this._doSetTitle(_0x243a6d.title ?? _0x243a6d.name);
    }
    ["dispose"]() {
      this._disposed = true;
    }
    ["_destroy"]() {
      for (; this.target.firstChild;) {
        this.target.removeChild(this.target.firstChild);
      }
    }
    ["_render"]() {
      this._destroy();
      this._updateTitle();
      this.overlays.forEach(_0x4b0d08 => _0x4b0d08.render());
      this.scene.at(-1).render();
    }
    ["addOverlay"](_0x1f8057) {
      this.overlays.push(_0x1f8057);
      this.requestUpdate();
    }
    ["removeOverlay"](_0x147536) {
      let _0x49ef2f = this.overlays.indexOf(_0x147536);
      if (_0x49ef2f !== -1) {
        this.overlays[_0x49ef2f].dispose();
        this.overlays.splice(_0x49ef2f, 1);
        this.requestUpdate();
      }
    }
    ["back"]() {
      return this.scene.length > 1 ? (this.scene.pop().dispose(), this.requestUpdate(), true) : false;
    }
    ["open"](_0x8283df) {
      this.scene.push(_0x8283df);
      this.requestUpdate();
    }
    ["requestUpdate"]() {
      this.updateRequested = true;
    }
  };
  const infoDataVm = {
    userInfo: null,
    vm: eureka.vm, //eureka的vm
    ccwdata: {  //ccwdata的问题就在这里
      project: {},
      user: {}
    }
  };
  infoDataVm.isIdentified = false;
  var _0x1133e7 = class {
    constructor(manager) {
      this.manager = manager;
      this.showOverlay = false;
      let _1 = _2 => {
        if (_2.detail.url.endsWith("/students/self/detail")) {
          let json = JSON.parse(_2.detail.data);
          if (json.body) {
            let {
              body: _0x5e8131
            } = json;
            if (_0x5e8131.identitiyAuthRank === "L2") {
              this.showOverlay = true;
              infoDataVm.isIdentified = true;
              manager.requestUpdate();
            }
            eventTarget.removeEventListener("load", _1);
          }
        }
      };
      eventTarget.addEventListener("load", _1);
    }
    ["render"]() {
      let target = this.manager.target;
      if (this.showOverlay) {
        let div = document.createElement("div");
        div.textContent = "账户已实名认证";
        div.title = "为防止您的行为遭到追踪，请登出账户或切换到未实名认证的账户。";
        div.style.width = "100%";
        div.style.backgroundColor = "yellow";
        div.style.color = "black";
        div.style.textAlign = "center";
        div.style.padding = "5px";
        div.style.fontSize = "12px";
        div.style.boxSizing = "border-box";
        target.appendChild(div);
      }
    }
    ["dispose"]() {}
  };
  var window_open = window.open;
  function _0xd349a3(_0x54a446, _0x426d81) {
    function _0x50cdb2() {
      const _0x15ba09 = {
        UxoYW: "scale(1.05)"
      };
      _0x15ba09.qUrPC = "transform 0.2s ease-in-out";
      _0x11771b.style.display = "none";
      _0x588f81();
    }
    function _0x588f81() {
      let button = document.createElement("button");
      button.style.position = "fixed";
      button.style.bottom = "20px";
      button.style.right = "20px";
      button.style.zIndex = "9999";
      button.style.padding = "10px";
      button.style.color = "white";
      button.style.border = "none";
      button.style.cursor = "pointer";
      button.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
      button.style.width = "50px";
      button.style.height = "50px";
      button.style.borderRadius = "50%";
      button.style.background = "linear-gradient(45deg, #005EAC, #404040)";
      button.title = "CCW 脆弱性的根本证明。";
      let img = document.createElement("img");
      img.src = "data:image/svg+xml,<?xml version=\"1.0\" encoding=\"UTF-8\"?>%0A<svg fill=\"none\" version=\"1.1\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\">%0A  <g transform=\"matrix(1,0,0,-1,0,80)\">%0A    <g transform=\"matrix(1,0,0,-1,0,160)\">%0A      <path%0A        d=\"m9.4332 86.067-1.7864-1.782c-4.6571 3.6624-7.6468 9.3405-7.6468 15.715 0 5.3448 2.1018 10.2 5.5258 13.788l1.7728-1.7684c-2.9708-3.1349-4.7924-7.365-4.7924-12.019 0-5.6848 2.7174-10.737 6.927-13.933zm2.7405 29.575-1.8541 1.8496c2.8814 1.5984 6.1991 2.5088 9.7299 2.5088 10.396 0 18.945-7.8934 19.95-18h-2.5205c-0.9949 8.7231-8.4191 15.5-17.43 15.5-2.8321 0-5.5075-0.6695-7.8758-1.8584zm19.256-28.96 1.6169-1.9102c-3.5-2.9753-8.0385-4.7712-12.997-4.7712-1.6482 0-3.2499 0.19838-4.7825 0.57251l2.1313 2.126c0.8646-0.13074 1.75-0.19853 2.6512-0.19853 4.3427 0 8.3169 1.574 11.38 4.1814z\"%0A        fill=\"%2330D34B\" fill-rule=\"evenodd\" />%0A      <path%0A        d=\"m20.05 86.045v-0.045285c-6.0798 0-11.257 3.8564-13.207 9.2507-1.9631 5.3748-0.47868 11.63 4.1686 15.519 5.4162 4.5336 13.258 4.2889 18.375-0.2846l-0.0192-0.0161c2.4219-2.1464 4.0939-5.1163 4.5748-8.4695h-5.0945q-0.1527 0.6663-0.4092 1.3128-0.6879 1.7331-2.0091 3.0512-1.3213 1.318-3.0587 2.0041-1.6001 0.6319-3.3211 0.6319-1.7209 0-3.321-0.6319-1.7374-0.6861-3.0587-2.0041-1.3213-1.3181-2.0091-3.0512-0.63347-1.5961-0.63346-3.3128 0-1.5702 0.52996-3.0395 0.54154-1.4842 1.5643-2.7 1.1062-1.3151 2.62-2.1316 1.6437-0.8866 3.5051-1.049 1.8615-0.16246 3.6345 0.42595 1.633 0.54193 2.9513 1.6454l3.2219-3.8302c-2.6269-2.1988-5.8244-3.2736-9.0047-3.2757z\"%0A        fill=\"%231E9F33\" fill-rule=\"evenodd\" />%0A    </g>%0A  </g>%0A</svg>";
      img.alt = "CSense";
      button.appendChild(img);
      let _0x4f71bd = false;
      let _0x46eba0 = false;
      let _0x5bbf44;
      let _0x35dc1d;
      button.addEventListener("mousedown", _0x1f8053 => {
        _0x4f71bd = true;
        _0x46eba0 = false;
        _0x5bbf44 = _0x1f8053.clientX - button.getBoundingClientRect().left;
        _0x35dc1d = _0x1f8053.clientY - button.getBoundingClientRect().top;
        _0x1f8053.preventDefault();
      });
      document.addEventListener("mousemove", _0x1bf678 => {
        if (_0x4f71bd) {
          delete button.style.bottom;
          delete button.style.right;
          button.style.left = _0x1bf678.clientX - _0x5bbf44 + "px";
          button.style.top = _0x1bf678.clientY - _0x35dc1d + "px";
          _0x46eba0 = true;
          _0x1bf678.preventDefault();
        }
      });
      document.addEventListener("mouseup", _0x52a249 => {
        const _0x2af98e = {
          opacity: "0"
        };
        const _0xdf550d = {
          opacity: "1"
        };
        if (_0x4f71bd) {
          if (_0x46eba0) {
            _0x4f71bd = false;
          } else {
            document.documentElement.removeChild(button);
            _0x11771b.style.display = "block";
            _0x11771b.animate([_0x2af98e, _0xdf550d], {
              "duration": 0x12c,
              "easing": "ease-in-out"
            });
          }
          _0x52a249.preventDefault();
        }
      });
      document.documentElement.appendChild(button);
    }
    let _0x11771b = document.createElement("div");
    _0x11771b.className = "csense-window";
    _0x11771b.style.position = "fixed";
    _0x11771b.style.minWidth = "240px";
    _0x11771b.style.minHeight = "120px";
    _0x11771b.style.width = "auto";
    _0x11771b.style.height = "auto";
    _0x11771b.style.backgroundColor = "#ffffff";
    _0x11771b.style.color = "#000000";
    _0x11771b.style.border = "1px solid #dddddd";
    _0x11771b.style.borderRadius = "8px";
    _0x11771b.style.zIndex = "9999";
    _0x11771b.style.top = "20px";
    _0x11771b.style.left = "20px";
    _0x11771b.style.overflow = "hidden";
    _0x11771b.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    let _0x5bf90f = false;
    let _0x369158;
    let _0x29d3b5;
    let _0x3a46aa = document.createElement("div");
    _0x3a46aa.style.display = "flex";
    _0x3a46aa.style.justifyContent = "space-between";
    _0x3a46aa.style.alignItems = "center";
    _0x3a46aa.style.padding = "10px";
    _0x3a46aa.style.background = "linear-gradient(45deg, #005EAC, #404040)";
    _0x3a46aa.style.color = "white";
    _0x3a46aa.style.cursor = "move";
    _0x3a46aa.style.borderTopLeftRadius = "8px";
    _0x3a46aa.style.borderTopRightRadius = "8px";
    _0x3a46aa.addEventListener("mousedown", _0x1dee14 => {
      _0x5bf90f = true;
      _0x369158 = _0x1dee14.clientX - _0x11771b.getBoundingClientRect().left;
      _0x29d3b5 = _0x1dee14.clientY - _0x11771b.getBoundingClientRect().top;
      _0x1dee14.preventDefault();
    });
    document.addEventListener("mousemove", _0x46b659 => {
      if (_0x5bf90f) {
        _0x11771b.style.left = _0x46b659.clientX - _0x369158 + "px";
        _0x11771b.style.top = _0x46b659.clientY - _0x29d3b5 + "px";
        _0x46b659.preventDefault();
      }
    });
    document.addEventListener("mouseup", _0x2e3df3 => {
      if (_0x5bf90f) {
        _0x5bf90f = false;
        _0x2e3df3.preventDefault();
      }
    });
    let _0xe49eca = document.createElement("img");
    _0xe49eca.src = "data:image/svg+xml,<?xml version=\"1.0\" encoding=\"UTF-8\"?>%0A<svg fill=\"none\" version=\"1.1\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\">%0A  <g transform=\"matrix(1,0,0,-1,0,80)\">%0A    <g transform=\"matrix(1,0,0,-1,0,160)\">%0A      <path%0A        d=\"m9.4332 86.067-1.7864-1.782c-4.6571 3.6624-7.6468 9.3405-7.6468 15.715 0 5.3448 2.1018 10.2 5.5258 13.788l1.7728-1.7684c-2.9708-3.1349-4.7924-7.365-4.7924-12.019 0-5.6848 2.7174-10.737 6.927-13.933zm2.7405 29.575-1.8541 1.8496c2.8814 1.5984 6.1991 2.5088 9.7299 2.5088 10.396 0 18.945-7.8934 19.95-18h-2.5205c-0.9949 8.7231-8.4191 15.5-17.43 15.5-2.8321 0-5.5075-0.6695-7.8758-1.8584zm19.256-28.96 1.6169-1.9102c-3.5-2.9753-8.0385-4.7712-12.997-4.7712-1.6482 0-3.2499 0.19838-4.7825 0.57251l2.1313 2.126c0.8646-0.13074 1.75-0.19853 2.6512-0.19853 4.3427 0 8.3169 1.574 11.38 4.1814z\"%0A        fill=\"%2330D34B\" fill-rule=\"evenodd\" />%0A      <path%0A        d=\"m20.05 86.045v-0.045285c-6.0798 0-11.257 3.8564-13.207 9.2507-1.9631 5.3748-0.47868 11.63 4.1686 15.519 5.4162 4.5336 13.258 4.2889 18.375-0.2846l-0.0192-0.0161c2.4219-2.1464 4.0939-5.1163 4.5748-8.4695h-5.0945q-0.1527 0.6663-0.4092 1.3128-0.6879 1.7331-2.0091 3.0512-1.3213 1.318-3.0587 2.0041-1.6001 0.6319-3.3211 0.6319-1.7209 0-3.321-0.6319-1.7374-0.6861-3.0587-2.0041-1.3213-1.3181-2.0091-3.0512-0.63347-1.5961-0.63346-3.3128 0-1.5702 0.52996-3.0395 0.54154-1.4842 1.5643-2.7 1.1062-1.3151 2.62-2.1316 1.6437-0.8866 3.5051-1.049 1.8615-0.16246 3.6345 0.42595 1.633 0.54193 2.9513 1.6454l3.2219-3.8302c-2.6269-2.1988-5.8244-3.2736-9.0047-3.2757z\"%0A        fill=\"%231E9F33\" fill-rule=\"evenodd\" />%0A    </g>%0A  </g>%0A</svg>";
    _0xe49eca.alt = "CSense";
    _0xe49eca.style.cursor = "pointer";
    _0xe49eca.style.height = "24px";
    _0xe49eca.style.marginRight = "10px";
    let _0x5359dc = false;
    let _0x2e6b00 = 0;
    function _0x597c55() {
      if (_0x5359dc) {
        _0x2e6b00 += 15;
        _0xe49eca.style.transform = "rotate(" + _0x2e6b00 + "deg)";
        requestAnimationFrame(_0x597c55);
      }
    }
    _0xe49eca.addEventListener("mouseover", () => {
      if (!_0x5359dc) {
        _0xe49eca.style.transition = "transform 0.3s linear";
        _0x5359dc = true;
        _0x597c55();
      }
    });
    _0xe49eca.addEventListener("mouseout", () => {
      _0x5359dc = false;
      _0x2e6b00 = 0;
      _0xe49eca.style.transition = "transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)";
      _0xe49eca.style.transform = "rotate(0deg)";
    });
    _0x3a46aa.appendChild(_0xe49eca);
    let _0x187d13 = document.createElement("strong");
    _0x187d13.textContent = "CSense";
    _0x187d13.style.flexGrow = "1";
    _0x187d13.style.textAlign = "left";
    _0x187d13.style.fontFamily = "monospace";
    _0x187d13.style.fontSize = "1em";
    _0x187d13.style.fontWeight = "normal";
    _0x3a46aa.appendChild(_0x187d13);
    let _0x1225f5 = document.createElement("button");
    _0x1225f5.style.background = "none";
    _0x1225f5.style.border = "none";
    _0x1225f5.style.color = "white";
    _0x1225f5.style.cursor = "pointer";
    _0x1225f5.textContent = "✖";
    _0x1225f5.addEventListener("click", () => {
      if (_0x426d81()) {
        _0x50cdb2();
      }
    });
    _0x3a46aa.appendChild(_0x1225f5);
    _0x11771b.appendChild(_0x3a46aa);
    _0x11771b.appendChild(_0x54a446);
    _0x50cdb2();
    document.documentElement.appendChild(_0x11771b);
    return _0x1038b1 => {
      _0x187d13.textContent = _0x1038b1;
    };
  }
  function _0x2e30e0() {
    let _0x318425 = document.createElement("div");
    _0x318425.style.maxHeight = "300px";
    _0x318425.style.maxWidth = "500px";
    _0x318425.style.overflowY = "auto";
    _0x318425.style.padding = "0";
    _0x318425.style.margin = "0";
    return _0x318425;
  }
  var _0x22bae4 = class _0x1074ac {
    static ["freezed"] = Symbol("LockedByCSense");
    constructor(_0x36b65b, _0x368cbc) {
      this.variable = _0x36b65b.variables[_0x368cbc];
    }
    ["get"]() {
      return this.variable.value;
    }
    ["set"](_0x1d5e58) {
      this.variable.value = _0x1d5e58;
      return this;
    }
    get ["freezing"]() {
      return !!this.variable[_0x1074ac.freezed];
    }
    set ["freezing"](_0x2570ad) {
      const _0x25023e = {
        PSZAA: "/students/profile"
      };
      _0x25023e.CokZI = "MALE";
      _0x25023e.oWpCj = "FEMALE";
      _0x25023e.ZQwPH = "load";
      if (_0x2570ad) {
        if (this.variable[_0x1074ac.freezed]) {
          return;
        }
        this.variable[_0x1074ac.freezed] = true;
        this.watch(function (_0x44a24f) {
          return _0x44a24f;
        });
      } else {
        delete this.variable[_0x1074ac.freezed];
        this.unwatch();
      }
    }
    ["watch"](_0x2c225c) {
      let _0x9cfb49 = this.variable.value;
      Object.defineProperty(this.variable, "value", {
        "get"() {
          return _0x9cfb49;
        },
        "set"(_0x284cf3) {
          _0x9cfb49 = _0x2c225c(_0x9cfb49, _0x284cf3);
        },
        "configurable": true
      });
    }
    ["unwatch"]() {
      let _0x34582b = this.variable.value;
      delete this.variable.value;
      this.variable.value = _0x34582b;
    }
  };
  var _0x174f87 = class {
    constructor(_0x3bf84d) {
      this.instance = _0x3bf84d;
    }
    ["sprite"](_0x375e96) {
      let _0x4039b3 = this.instance.runtime.targets.find(_0xe6410d => _0xe6410d.sprite.name === _0x375e96);
      return _0x4039b3 ? new _0x3ad5f9(_0x4039b3.sprite) : null;
    }
  };
  var _0x3ad5f9 = class {
    constructor(_0x192706) {
      this.sprite = _0x192706;
    }
    get ["clones"]() {
      return this.sprite.clones.map(_0x207680 => new _0x5ac2c6(_0x207680));
    }
    ["on"](_0x9b2807, _0x4ff34f) {
      if (_0x9b2807 === "clone") {
        _3callset1dot2(this.sprite, "createClone", _0x1986f3 => function (..._0x1ff988) {
          let _0x57b4fe = _0x1986f3.call(this, ..._0x1ff988);
          _0x4ff34f(_0x57b4fe);
          return _0x57b4fe;
        });
      }
    }
  };
  var _0x5ac2c6 = class {
    constructor(_0x285791) {
      this.target = _0x285791;
    }
    ["varId"](_0x76cf3f) {
      return this.target.variables[_0x76cf3f] ? new _0x22bae4(this.target, _0x76cf3f) : null;
    }
    ["var"](_0x18004a) {
      let _0x58d262 = Object.values(this.target.variables).find(_0x3cd8b0 => _0x3cd8b0.name === _0x18004a);
      return _0x58d262 ? new _0x22bae4(this.target, _0x58d262.id) : null;
    }
  };
  var _0x5cc681 = class {
    static ["title"] = "变量管理";
    constructor(_0x2a11d5, _0x10b619) {
      this.manager = _0x2a11d5;
      this.sprite = _0x10b619;
      this.runtime = _0x10b619.runtime;
      this.isRunning = this.runtime.frameLoop.running;
      Object.defineProperty(this.runtime.frameLoop, "running", {
        "get": () => this.isRunning,
        "set": _0x36b98b => {
          this.isRunning = _0x36b98b;
          if (this.pauseButton) {
            this.modifyPauseState(this.pauseButton);
          }
        },
        "configurable": true
      });
      this.selected = null;
      this.disposed = false;
      this.lastLength = null;
      this.lastFocused = null;
      this.pauseButton = null;
      this.inputs = {};
      this.index = null;
      this.total = null;
      let _0x22369e = () => {
        const _0x4218a4 = {
          vWUIO: "(无结果)"
        };
        _0x4218a4.WHRED = "no-results";
        _0x4218a4.MtuhO = "flex";
        _0x4218a4.KuTeu = "center";
        _0x4218a4.BQAAy = "100%";
        _0x4218a4.QIrDo = "#999";
        _0x4218a4.rtRTB = "📝 作品数据";
        _0x4218a4.DQIRt = "🎮 MMO 框架";
        _0x4218a4.EMoDt = "🌩️ 云数据";
        _0x4218a4.LReGk = "🏆 成就相关功能";
        _0x4218a4.vNcUy = "📜 经济合约";
        _0x4218a4.oEneR = "⚙️ 高级";
        _0x4218a4.qCfBR = "ℹ️ 关于";
        _0x4218a4.KyCdi = "none";
        if (this.index && (this.index.max = this.sprite.clones.length, this.selected !== null && this.selected >= this.sprite.clones.length)) {
          this.selected = this.sprite.clones.length - 1;
          this.manager.requestUpdate();
          return;
        }
        const _0x3bbaf6 = {
          color: ''
        };
        const _0x33dea8 = {
          duration: 0x12c
        };
        if (this.total && this.sprite.clones.length !== this.lastLength) {
          this.total.textContent = "/ " + this.sprite.clones.length;
          this.lastLength = this.sprite.clones.length;
          this.total.animate([{
            "color": "red"
          }, _0x3bbaf6], _0x33dea8);
        }
        for (let [_0x757609, _0x52b8aa] of Object.entries(this.inputs)) {
          let _0x434239 = String(this.sprite.clones[this.selected ?? 0].variables[_0x757609].value);
          const _0x59ecff = {
            color: ''
          };
          const _0x34c40f = {
            duration: 0x12c
          };
          if (_0x52b8aa.value !== _0x434239 && _0x52b8aa !== this.lastFocused) {
            _0x52b8aa.animate([{
              "color": "red"
            }, _0x59ecff], _0x34c40f);
            _0x52b8aa.value = _0x434239;
          }
        }
        if (!this.disposed) {
          requestAnimationFrame(_0x22369e);
        }
      };
      requestAnimationFrame(_0x22369e);
    }
    ["modifyPauseState"](_0x4b4eb7) {
      _0x4b4eb7.textContent = this.isRunning ? "⏸️" : "▶️";
      _0x4b4eb7.title = this.isRunning ? "暂停" : "继续";
      _0x4b4eb7.style.padding = "5px";
      _0x4b4eb7.style.border = "none";
      _0x4b4eb7.style.borderRadius = "5px";
      _0x4b4eb7.style.color = "white";
      _0x4b4eb7.style.backgroundColor = this.isRunning ? "blue" : "#e9ae3b";
      _0x4b4eb7.style.cursor = "pointer";
      _0x4b4eb7.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
      _0x4b4eb7.style.width = "30px";
      _0x4b4eb7.style.height = "30px";
    }
    ["render"]() {
      if (this.selected >= this.sprite.clones.length) {
        this.selected = this.sprite.clones.length - 1;
      }
      let _0x114649 = this.manager.target;
      let _0x55a0f9 = this.sprite;
      let _0x318606 = document.createElement("div");
      _0x318606.style.display = "flex";
      _0x318606.style.alignItems = "center";
      _0x114649.appendChild(_0x318606);
      let _0x14ab55 = document.createElement("button");
      _0x14ab55.addEventListener("click", () => {
        if (this.isRunning) {
          this.runtime.frameLoop.stop();
        } else {
          this.runtime.frameLoop.start();
        }
      });
      this.pauseButton = _0x14ab55;
      this.modifyPauseState(_0x14ab55);
      _0x318606.appendChild(_0x14ab55);
      let _0x3ba1a9 = document.createElement("input");
      _0x3ba1a9.type = "number";
      _0x3ba1a9.min = 1;
      _0x3ba1a9.value = this.selected === null ? '' : this.selected + 1;
      _0x3ba1a9.max = this.sprite.clones.length;
      _0x3ba1a9.placeholder = "克隆体编号";
      _0x3ba1a9.style.flexGrow = "1";
      _0x3ba1a9.style.padding = "5px";
      _0x3ba1a9.style.border = "1px solid #ddd";
      _0x3ba1a9.style.borderRadius = "4px";
      _0x3ba1a9.addEventListener("change", () => {
        const _0x480f84 = {
          fXrzB: "(无结果)"
        };
        _0x480f84.ZVfhT = "no-results";
        _0x480f84.TqfQi = "flex";
        _0x480f84.ESHzl = "center";
        _0x480f84.SThMy = "100%";
        _0x480f84.cxklH = "#999";
        let _0x19c719 = parseInt(_0x3ba1a9.value);
        if (_0x19c719 >= 1 && _0x19c719 <= this.sprite.clones.length) {
          this.selected = _0x19c719 - 1;
          this.manager.requestUpdate();
        }
      });
      this.index = _0x3ba1a9;
      _0x318606.appendChild(_0x3ba1a9);
      let _0x351a84 = document.createElement("span");
      _0x351a84.style.color = "#999";
      _0x351a84.style.marginLeft = "10px";
      this.lastLength = this.sprite.clones.length;
      _0x351a84.textContent = "/ " + this.sprite.clones.length;
      this.total = _0x351a84;
      _0x318606.appendChild(_0x351a84);
      let _0x28db40 = document.createElement("input");
      _0x28db40.type = "text";
      _0x28db40.placeholder = "搜索变量...";
      _0x28db40.style.padding = "5px";
      _0x28db40.style.border = "1px solid #ddd";
      _0x28db40.style.width = "100%";
      _0x28db40.style.boxSizing = "border-box";
      _0x28db40.addEventListener("input", () => {
        let _0x70ea1f = _0x28db40.value.toLowerCase();
        let _0x417b25 = _0x3d3f0f.children;
        let _0x3efc1b = false;
        Array.from(_0x417b25).forEach(_0xc9a61c => {
          if (_0xc9a61c.className !== "no-results" && _0xc9a61c.querySelector(".item-name").textContent.toLowerCase().includes(_0x70ea1f)) {
            _0xc9a61c.style.display = "flex";
            _0x3efc1b = true;
          } else if (_0xc9a61c.className !== "no-results") {
            _0xc9a61c.style.display = "none";
          }
        });
        if (_0x3efc1b) {
          let _0x4304e2 = _0x3d3f0f.querySelector(".no-results");
          if (_0x4304e2) {
            _0x3d3f0f.removeChild(_0x4304e2);
          }
        } else {
          if (!_0x3d3f0f.querySelector(".no-results")) {
            let _0xc85c1e = document.createElement("li");
            _0xc85c1e.textContent = "(无结果)";
            _0xc85c1e.className = "no-results";
            _0xc85c1e.style.display = "flex";
            _0xc85c1e.style.justifyContent = "center";
            _0xc85c1e.style.alignItems = "center";
            _0xc85c1e.style.width = "100%";
            _0xc85c1e.style.height = "100%";
            _0xc85c1e.style.color = "#999";
            _0x3d3f0f.appendChild(_0xc85c1e);
          }
        }
      });
      _0x114649.appendChild(_0x28db40);
      let _0x4022e3 = _0x2e30e0();
      let _0x3d3f0f = document.createElement("ul");
      _0x3d3f0f.style.padding = "0";
      _0x3d3f0f.style.margin = "0";
      _0x3d3f0f.style.listStyleType = "none";
      _0x3d3f0f.style.marginTop = "10px";
      if (Object.keys(_0x55a0f9.clones[this.selected ?? 0].variables).length === 0) {
        let _0xbf5180 = document.createElement("li");
        _0xbf5180.textContent = "(无结果)";
        _0xbf5180.className = "no-results";
        _0xbf5180.style.display = "flex";
        _0xbf5180.style.justifyContent = "center";
        _0xbf5180.style.alignItems = "center";
        _0xbf5180.style.width = "100%";
        _0xbf5180.style.height = "100%";
        _0xbf5180.style.color = "#999";
        _0x3d3f0f.appendChild(_0xbf5180);
      } else {
        this.inputs = Object.fromEntries(Object.values(_0x55a0f9.clones[this.selected ?? 0].variables).map(_0x50d294 => {
          let _0x365aa2 = document.createElement("li");
          _0x365aa2.style.display = "flex";
          _0x365aa2.style.alignItems = "center";
          _0x365aa2.style.marginBottom = "5px";
          _0x365aa2.style.padding = "5px";
          _0x365aa2.style.border = "1px solid #ddd";
          _0x365aa2.style.borderRadius = "4px";
          _0x365aa2.style.backgroundColor = "#f9f9f9";
          let _0x4d5070 = document.createElement("span");
          _0x4d5070.textContent = _0x50d294.name;
          _0x4d5070.className = "item-name";
          _0x4d5070.style.flexGrow = "1";
          _0x4d5070.style.marginRight = "10px";
          let _0x19ae3a = document.createElement("input");
          _0x19ae3a.type = "text";
          _0x19ae3a.style.fontFamily = "monospace";
          _0x19ae3a.value = Array.isArray(_0x50d294.value) ? JSON.stringify(_0x50d294.value) : _0x50d294.value;
          _0x19ae3a.style.flexGrow = "2";
          _0x19ae3a.style.marginRight = "10px";
          _0x19ae3a.addEventListener("change", () => {
            try {
              _0x50d294.value = JSON.parse(_0x19ae3a.value);
            } catch {
              _0x50d294.value = _0x19ae3a.value;
            }
          });
          _0x19ae3a.addEventListener("focus", () => {
            this.lastFocused = _0x19ae3a;
          });
          _0x19ae3a.addEventListener("blur", () => {
            this.lastFocused = null;
          });
          let _0x53e19a = document.createElement("button");
          _0x53e19a.textContent = "🔒";
          _0x53e19a.style.marginRight = "5px";
          let _0x362a4b = new _0x22bae4(_0x55a0f9.clones[this.selected ?? 0], _0x50d294.id);
          _0x53e19a.addEventListener("click", () => {
            _0x362a4b.freezing = !_0x362a4b.freezing;
            _0x53e19a.title = _0x362a4b.freezing ? "解锁" : "锁定";
            _0x53e19a.textContent = _0x362a4b.freezing ? "🔓" : "🔒";
            _0x19ae3a.disabled = _0x362a4b.freezing;
          });
          _0x365aa2.appendChild(_0x4d5070);
          _0x365aa2.appendChild(_0x19ae3a);
          _0x365aa2.appendChild(_0x53e19a);
          _0x3d3f0f.appendChild(_0x365aa2);
          return [_0x50d294.id, _0x19ae3a];
        }));
      }
      _0x4022e3.appendChild(_0x3d3f0f);
      _0x114649.appendChild(_0x4022e3);
    }
    ["dispose"]() {
      this.disposed = true;
      delete this.runtime.frameLoop.running;
      this.runtime.frameLoop.running = this.isRunning;
    }
  };
  var _0x4b005b = class {
    static ["title"] = "项目";
    constructor(_0x311478) {
      this.manager = _0x311478;
      this.vm = eureka.vm;
    }
    ["render"]() {
      let _0x5ac49b = this.manager.target;
      let _0x475b44 = document.createElement("div");
      _0x475b44.style.display = "flex";
      _0x475b44.style.justifyContent = "center";
      let _0x4904c9 = document.createElement("input");
      _0x4904c9.type = "text";
      _0x4904c9.placeholder = "搜索角色...";
      _0x4904c9.style.padding = "5px";
      _0x4904c9.style.border = "1px solid #ddd";
      _0x4904c9.style.width = "100%";
      _0x4904c9.style.boxSizing = "border-box";
      let _0xcdd236 = document.createElement("button");
      _0xcdd236.textContent = "⬇️";
      _0xcdd236.title = "下载项目";
      _0xcdd236.style.padding = "10px";
      _0xcdd236.style.border = "none";
      _0xcdd236.style.cursor = "pointer";
      _0xcdd236.style.background = "rgb(0, 123, 255)";
      _0xcdd236.style.color = "white";
      _0xcdd236.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
      _0xcdd236.addEventListener("click", async () => {  //这里也修了
        let _0x5a3abd = await eureka.vm.saveProjectSb3();
        let _0x4eb948 = URL.createObjectURL(_0x5a3abd);
        let _0x4771c4 = document.createElement("a");
        _0x4771c4.download = "Project.sb3";
        _0x4771c4.href = _0x4eb948;
        _0x4771c4.click();
        URL.revokeObjectURL(_0x4eb948);
      });
      _0x4904c9.addEventListener("input", () => {
        let _0x2477bf = _0x4904c9.value.toLowerCase();
        let _0x51af5b = _0x59296d.children;
        let _0x3318f4 = false;
        Array.from(_0x51af5b).forEach(_0x5a7700 => {
          const _0xff47c0 = {
            VvKBQ: "发生错误。请检查 DevTools 控制台。"
          };
          _0xff47c0.pQKXK = "脚本已运行。";
          if (_0x5a7700.className !== "no-results" && _0x5a7700.querySelector(".item-name").textContent.toLowerCase().includes(_0x2477bf)) {
            _0x5a7700.style.display = "flex";
            _0x3318f4 = true;
          } else if (_0x5a7700.className !== "no-results") {
            _0x5a7700.style.display = "none";
          }
        });
        if (_0x3318f4) {
          let _0xe7add0 = _0x59296d.querySelector(".no-results");
          if (_0xe7add0) {
            _0x59296d.removeChild(_0xe7add0);
          }
        } else {
          if (!_0x59296d.querySelector(".no-results")) {
            let _0x450c4a = document.createElement("li");
            _0x450c4a.textContent = "(无结果)";
            _0x450c4a.className = "no-results";
            _0x450c4a.style.display = "flex";
            _0x450c4a.style.justifyContent = "center";
            _0x450c4a.style.alignItems = "center";
            _0x450c4a.style.width = "100%";
            _0x450c4a.style.height = "100%";
            _0x450c4a.style.color = "#999";
            _0x59296d.appendChild(_0x450c4a);
          }
        }
      });
      _0x475b44.appendChild(_0x4904c9);
      _0x475b44.appendChild(_0xcdd236);
      _0x5ac49b.appendChild(_0x475b44);
      let _0x4ef5ec = _0x2e30e0();
      let _0x59296d = document.createElement("ul");
      _0x59296d.style.marginTop = "10px";
      _0x59296d.style.padding = "0";
      _0x59296d.style.margin = "0";
      _0x59296d.style.listStyleType = "none";
      this.vm.runtime.targets.filter(_0x4bf23c => _0x4bf23c.isOriginal).map(_0x4d57fd => _0x4d57fd.sprite).forEach(_0x1ea4f7 => {
        let _0x244546 = document.createElement("li");
        _0x244546.style.display = "flex";
        _0x244546.style.flexDirection = "column";
        _0x244546.style.alignItems = "center";
        _0x244546.style.flex = "1 1 calc(25% - 10px)";
        _0x244546.style.maxWidth = "25%";
        _0x244546.style.margin = "5px";
        _0x244546.style.boxSizing = "border-box";
        _0x244546.style.textAlign = "center";
        _0x244546.style.padding = "10px";
        _0x244546.style.border = "1px solid #ddd";
        _0x244546.style.borderRadius = "8px";
        _0x244546.style.backgroundColor = "#f9f9f9";
        _0x244546.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
        _0x244546.addEventListener("mouseover", () => {
          const _0x4990f7 = {
            VbEmG: "(无结果)"
          };
          _0x4990f7.pUAnE = "no-results";
          _0x4990f7.UZUrL = "flex";
          _0x4990f7.uuTBt = "center";
          _0x4990f7.uihqQ = "100%";
          _0x4990f7.aCJfM = "#999";
          _0x244546.style.transform = "scale(1.05)";
          _0x244546.style.transition = "transform 0.2s ease-in-out";
        });
        _0x244546.addEventListener("mouseout", () => {
          _0x244546.style.transform = "scale(1)";
        });
        _0x244546.addEventListener("click", () => {
          this.manager.open(new _0x5cc681(this.manager, _0x1ea4f7));
        });
        let _0x12ac4e = document.createElement("img");
        _0x12ac4e.src = _0x1ea4f7.costumes[0].asset.encodeDataURI();
        _0x12ac4e.alt = _0x1ea4f7.name;
        _0x12ac4e.style.width = "100%";
        _0x12ac4e.style.height = "100%";
        _0x12ac4e.style.marginBottom = "5px";
        let _0x2e484c = document.createElement("div");
        _0x2e484c.title = _0x2e484c.textContent = _0x1ea4f7.name;
        _0x2e484c.style.width = "80px";
        _0x2e484c.className = "item-name";
        _0x2e484c.style.fontSize = "14px";
        _0x2e484c.style.fontWeight = "bold";
        _0x2e484c.style.whiteSpace = "nowrap";
        _0x2e484c.style.overflow = "hidden";
        _0x2e484c.style.textOverflow = "ellipsis";
        _0x244546.appendChild(_0x12ac4e);
        _0x244546.appendChild(_0x2e484c);
        _0x59296d.appendChild(_0x244546);
      });
      _0x59296d.style.display = "flex";
      _0x59296d.style.flexWrap = "wrap";
      _0x4ef5ec.appendChild(_0x59296d);
      _0x5ac49b.appendChild(_0x4ef5ec);
    }
    ["dispose"]() {}
  };
  var _0x548d54 = class {
    static ["title"] = "排行榜";
    constructor(_0x55fb6e, _0x3a4f30, _0x5d2236) {
      this.manager = _0x55fb6e;
      this.extension = _0x3a4f30;
      this.leaderboardId = _0x5d2236;
      this.leaderboard = null;
      this.fetching = false;
    }
    ["render"]() {
      let _0x3a311b = _0x2e30e0();
      if (this.leaderboard) {
        let _0x41e8e1 = document.createElement("div");
        _0x41e8e1.style.display = "flex";
        _0x41e8e1.style.justifyContent = "center";
        let _0x41b89a = document.createElement("input");
        _0x41b89a.type = "text";
        _0x41b89a.placeholder = "搜索排行榜...";
        _0x41b89a.style.padding = "5px";
        _0x41b89a.style.border = "1px solid #ddd";
        _0x41b89a.style.width = "100%";
        _0x41b89a.style.boxSizing = "border-box";
        _0x41b89a.addEventListener("input", () => {
          let _0x4065c8 = _0x41b89a.value.toLowerCase();
          let _0x5c056a = _0x398d29.children;
          let _0x2affb1 = false;
          Array.from(_0x5c056a).forEach(_0x4fb7d => {
            if (_0x4fb7d.className !== "no-results" && _0x4fb7d.querySelector(".item-name").textContent.toLowerCase().includes(_0x4065c8)) {
              _0x4fb7d.style.display = "flex";
              _0x2affb1 = true;
            } else if (_0x4fb7d.className !== "no-results") {
              _0x4fb7d.style.display = "none";
            }
          });
          if (_0x2affb1) {
            let _0x19ce41 = _0x398d29.querySelector(".no-results");
            if (_0x19ce41) {
              _0x398d29.removeChild(_0x19ce41);
            }
          } else {
            if (!_0x398d29.querySelector(".no-results")) {
              let _0x2b5ef1 = document.createElement("li");
              _0x2b5ef1.textContent = "(无结果)";
              _0x2b5ef1.className = "no-results";
              _0x2b5ef1.style.display = "flex";
              _0x2b5ef1.style.justifyContent = "center";
              _0x2b5ef1.style.alignItems = "center";
              _0x2b5ef1.style.width = "100%";
              _0x2b5ef1.style.height = "100%";
              _0x2b5ef1.style.color = "#999";
              _0x398d29.appendChild(_0x2b5ef1);
            }
          }
        });
        _0x41e8e1.appendChild(_0x41b89a);
        this.manager.target.appendChild(_0x41e8e1);
        let _0x398d29 = document.createElement("ul");
        _0x398d29.style.marginTop = "10px";
        _0x398d29.style.padding = "0";
        _0x398d29.style.margin = "0";
        _0x398d29.style.listStyleType = "none";
        this.leaderboard.leaderboardRecords.forEach(_0x4f0cda => {
          let _0x32ab68 = document.createElement("li");
          _0x32ab68.style.display = "flex";
          _0x32ab68.style.flexDirection = "column";
          _0x32ab68.style.alignItems = "flex-start";
          _0x32ab68.style.padding = "5px";
          _0x32ab68.style.border = "1px solid #ddd";
          _0x32ab68.style.borderRadius = "4px";
          _0x32ab68.style.backgroundColor = "#f9f9f9";
          let _0x5da166 = document.createElement("span");
          _0x5da166.textContent = '' + _0x4f0cda.ranking;
          _0x5da166.style.marginRight = "10px";
          let _0x42112a = document.createElement("div");
          _0x42112a.style.display = "flex";
          _0x42112a.style.alignItems = "center";
          _0x42112a.style.width = "100%";
          let _0x344569 = document.createElement("img");
          _0x344569.src = _0x4f0cda.user.avatar;
          _0x344569.alt = "avatar";
          _0x344569.style.width = "24px";
          _0x344569.style.height = "24px";
          _0x344569.style.marginRight = "10px";
          _0x344569.style.cursor = "pointer";
          _0x344569.style.borderRadius = "50%";
          _0x344569.title = "查看主页";
          _0x344569.addEventListener("click", () => {
            window_open("https://www.ccw.site/student/" + _0x4f0cda.user.id, "window", "left=100,top=100,width=640,height=640");
          });
          let _0x301c18 = document.createElement("span");
          _0x301c18.textContent = _0x4f0cda.user.nickname;
          _0x301c18.className = "item-name";
          _0x301c18.style.flexGrow = "1";
          _0x301c18.style.marginRight = "10px";
          _0x301c18.style.textWrapMode = "nowrap";
          _0x301c18.style.overflow = "hidden";
          _0x301c18.style.textOverflow = "ellipsis";
          _0x301c18.title = "创建时间 " + (_0x4f0cda.createdAt === null ? "未知" : new Date(_0x4f0cda.createdAt)) + " / 最后更新 " + (_0x4f0cda.updatedAt === null ? "未知" : new Date(_0x4f0cda.updatedAt));
          let _0x194af8 = document.createElement("span");
          _0x194af8.textContent = _0x4f0cda.score + " " + this.leaderboard.scoreUnit;
          _0x194af8.style.color = "#666";
          _0x194af8.style.textWrapMode = "nowrap";
          _0x194af8.style.overflow = "hidden";
          _0x194af8.style.textOverflow = "ellipsis";
          _0x42112a.appendChild(_0x5da166);
          _0x42112a.appendChild(_0x344569);
          _0x42112a.appendChild(_0x301c18);
          _0x42112a.appendChild(_0x194af8);
          _0x32ab68.appendChild(_0x42112a);
          _0x398d29.appendChild(_0x32ab68);
        });
        _0x3a311b.appendChild(_0x398d29);
        this.manager.target.appendChild(_0x3a311b);
        if (this.leaderboard.curUserLeaderboardRecord) {
          let _0x2659db = this.leaderboard.curUserLeaderboardRecord;
          let _0x2687a6 = document.createElement("div");
          _0x2687a6.style.display = "flex";
          _0x2687a6.style.flexDirection = "column";
          _0x2687a6.style.alignItems = "flex-start";
          _0x2687a6.style.padding = "5px";
          _0x2687a6.style.border = "1px solid #ddd";
          _0x2687a6.style.borderRadius = "4px";
          _0x2687a6.style.backgroundColor = "#f9f9f9";
          let _0x1b48bd = document.createElement("span");
          _0x1b48bd.textContent = '' + _0x2659db.ranking;
          _0x1b48bd.style.marginRight = "10px";
          let _0x5472e9 = document.createElement("div");
          _0x5472e9.style.display = "flex";
          _0x5472e9.style.alignItems = "center";
          _0x5472e9.style.width = "100%";
          let _0x2a073c = document.createElement("img");
          _0x2a073c.src = _0x2659db.user.avatar;
          _0x2a073c.alt = "avatar";
          _0x2a073c.style.width = "24px";
          _0x2a073c.style.height = "24px";
          _0x2a073c.style.marginRight = "10px";
          _0x2a073c.style.cursor = "default";
          _0x2a073c.style.borderRadius = "50%";
          let _0x70cb3a = document.createElement("span");
          _0x70cb3a.textContent = _0x2659db.user.nickname;
          _0x70cb3a.style.flexGrow = "1";
          _0x70cb3a.style.marginRight = "10px";
          _0x70cb3a.style.textWrapMode = "nowrap";
          _0x70cb3a.style.overflow = "hidden";
          _0x70cb3a.style.textOverflow = "ellipsis";
          _0x70cb3a.title = "创建时间 " + (_0x2659db.createdAt === null ? "未知" : new Date(_0x2659db.createdAt)) + " / 最后更新 " + (_0x2659db.updatedAt === null ? "未知" : new Date(_0x2659db.updatedAt));
          let _0x5db2a8 = document.createElement("input");
          _0x5db2a8.value = _0x2659db.score;
          _0x5db2a8.type = "number";
          _0x5db2a8.style.border = "none";
          _0x5db2a8.style.outline = "none";
          _0x5db2a8.style.direction = "rtl";
          _0x5db2a8.style.color = "#666";
          _0x5db2a8.style.width = "100%";
          _0x5db2a8.style.backgroundColor = "transparent";
          _0x5db2a8.placeholder = "(无分数)";
          _0x5db2a8.style.marginRight = "5px";
          _0x5db2a8.addEventListener("change", () => {
            let _0x133b34 = Number(_0x5db2a8.value);
            if (Number.isNaN(_0x133b34)) {
              _0x5db2a8.value = _0x2659db.score;
            } else if (_0x2659db.value !== _0x133b34) {
              _0x2659db.score = _0x133b34;
              this.extension.apis.insertLeaderboard(this.leaderboardId, _0x2659db.score, _0x2659db.ext);
            }
          });
          let _0xecc475 = document.createElement("span");
          _0xecc475.textContent = '' + this.leaderboard.scoreUnit;
          _0xecc475.style.color = "#666";
          _0xecc475.style.textWrapMode = "nowrap";
          _0xecc475.style.textOverflow = "ellipsis";
          _0x5472e9.appendChild(_0x1b48bd);
          _0x5472e9.appendChild(_0x2a073c);
          _0x5472e9.appendChild(_0x70cb3a);
          _0x5472e9.append(_0x5db2a8);
          _0x5472e9.appendChild(_0xecc475);
          _0x2687a6.appendChild(_0x5472e9);
          this.manager.target.appendChild(_0x2687a6);
        }
      } else {
        if (!this.fetching) {
          fetch("https://gandi-main.ccw.site/creation/leaderboards/" + this.leaderboardId + "/records", {
            "credentials": "include"
          }).then(_0x2e0f3f => _0x2e0f3f.json()).then(_0x53559f => {
            if (_0x53559f.body) {
              this.leaderboard = _0x53559f.body;
              this.fetching = false;
              this.manager.requestUpdate();
            }
          });
        }
        this.fetching = true;
        let _0x5c9601 = document.createElement("strong");
        _0x5c9601.style.color = "#999";
        _0x5c9601.textContent = "加载中...";
        _0x5c9601.style.display = "block";
        _0x5c9601.style.textAlign = "center";
        _0x3a311b.appendChild(_0x5c9601);
        this.manager.target.appendChild(_0x3a311b);
      }
    }
    ["dispose"]() {}
  };
  var _0x2f450b = class {
    static ["title"] = "成就";
    constructor(_0x401230, _0x177208) {
      this.manager = _0x401230;
      this.extension = _0x177208;
      this.achievementList = null;
      this.leaderboardList = null;
      this.selected = "achievement";
      this.fetchingAchievement = false;
      this.fetchingLeaderboard = false;
    }
    ["renderLeaderboard"]() {
      let _0x37e763 = _0x2e30e0();
      if (this.leaderboardList) {
        let _0x16fcf7 = document.createElement("div");
        _0x16fcf7.style.display = "flex";
        _0x16fcf7.style.justifyContent = "center";
        let _0x41f40d = document.createElement("input");
        _0x41f40d.type = "text";
        _0x41f40d.placeholder = "搜索排行榜...";
        _0x41f40d.style.padding = "5px";
        _0x41f40d.style.border = "1px solid #ddd";
        _0x41f40d.style.width = "100%";
        _0x41f40d.style.boxSizing = "border-box";
        _0x41f40d.addEventListener("input", () => {
          let _0x1a6bdd = _0x41f40d.value.toLowerCase();
          let _0x4b5321 = _0x70ed5d.children;
          let _0x38dd3d = false;
          Array.from(_0x4b5321).forEach(_0xbddb63 => {
            if (_0xbddb63.className !== "no-results" && _0xbddb63.querySelector(".item-name").textContent.toLowerCase().includes(_0x1a6bdd)) {
              _0xbddb63.style.display = "flex";
              _0x38dd3d = true;
            } else if (_0xbddb63.className !== "no-results") {
              _0xbddb63.style.display = "none";
            }
          });
          if (_0x38dd3d) {
            let _0x293dc4 = _0x70ed5d.querySelector(".no-results");
            if (_0x293dc4) {
              _0x70ed5d.removeChild(_0x293dc4);
            }
          } else {
            if (!_0x70ed5d.querySelector(".no-results")) {
              let _0x1ebc2c = document.createElement("li");
              _0x1ebc2c.textContent = "(无结果)";
              _0x1ebc2c.className = "no-results";
              _0x1ebc2c.style.display = "flex";
              _0x1ebc2c.style.justifyContent = "center";
              _0x1ebc2c.style.alignItems = "center";
              _0x1ebc2c.style.width = "100%";
              _0x1ebc2c.style.height = "100%";
              _0x1ebc2c.style.color = "#999";
              _0x70ed5d.appendChild(_0x1ebc2c);
            }
          }
        });
        _0x16fcf7.appendChild(_0x41f40d);
        this.manager.target.appendChild(_0x16fcf7);
        let _0x70ed5d = document.createElement("ul");
        _0x70ed5d.style.marginTop = "10px";
        _0x70ed5d.style.padding = "0";
        _0x70ed5d.style.margin = "0";
        _0x70ed5d.style.listStyleType = "none";
        if (this.leaderboardList.length === 0) {
          let _0x5d95ce = document.createElement("li");
          _0x5d95ce.textContent = "(无结果)";
          _0x5d95ce.className = "no-results";
          _0x5d95ce.style.display = "flex";
          _0x5d95ce.style.justifyContent = "center";
          _0x5d95ce.style.alignItems = "center";
          _0x5d95ce.style.width = "100%";
          _0x5d95ce.style.height = "100%";
          _0x5d95ce.style.color = "#999";
          _0x70ed5d.appendChild(_0x5d95ce);
        } else {
          this.leaderboardList.forEach(_0x23aee7 => {
            let _0x254029 = document.createElement("li");
            _0x254029.style.display = "flex";
            _0x254029.style.flexDirection = "column";
            _0x254029.style.alignItems = "flex-start";
            _0x254029.style.marginBottom = "5px";
            _0x254029.style.padding = "5px";
            _0x254029.style.border = "1px solid #ddd";
            _0x254029.style.borderRadius = "4px";
            _0x254029.style.backgroundColor = "#f9f9f9";
            let _0x30fd33 = document.createElement("div");
            _0x30fd33.style.display = "flex";
            _0x30fd33.style.alignItems = "center";
            _0x30fd33.style.width = "100%";
            let _0x275cfa = document.createElement("span");
            _0x275cfa.textContent = _0x23aee7.title;
            _0x275cfa.className = "item-name";
            _0x275cfa.title = "创建时间 " + (_0x23aee7.createdAt === null ? "未知" : new Date(_0x23aee7.createdAt)) + " / 最后更新 " + new Date(_0x23aee7.updatedAt === null ? "未知" : _0x23aee7.updatedAt);
            _0x275cfa.style.flexGrow = "1";
            _0x275cfa.style.marginRight = "10px";
            let _0x1e8a56 = document.createElement("button");
            _0x1e8a56.textContent = "🔍";
            _0x1e8a56.style.cursor = "pointer";
            _0x1e8a56.style.marginRight = "5px";
            _0x1e8a56.title = "查看排行榜";
            _0x1e8a56.addEventListener("click", () => {
              this.manager.open(new _0x548d54(this.manager, this.extension, _0x23aee7.oid));
            });
            let _0x569bf2 = document.createElement("span");
            _0x569bf2.title = _0x569bf2.textContent = "单位: " + _0x23aee7.scoreUnit;
            _0x569bf2.style.textWrap = "nowrap";
            _0x569bf2.style.overflow = "hidden";
            _0x569bf2.style.textOverflow = "ellipsis";
            _0x569bf2.style.maxWidth = "400px";
            _0x569bf2.style.color = "#666";
            _0x569bf2.style.width = "100%";
            _0x30fd33.appendChild(_0x275cfa);
            _0x30fd33.appendChild(_0x1e8a56);
            _0x254029.appendChild(_0x30fd33);
            _0x254029.appendChild(_0x569bf2);
            _0x70ed5d.appendChild(_0x254029);
          });
        }
        _0x37e763.appendChild(_0x70ed5d);
      } else {
        if (!this.fetchingLeaderboard) {
          fetch("https://gandi-main.ccw.site/creation/leaderboards?creationId=" + this.extension.runtime.ccwAPI.getProjectUUID() + "&perPage=200", {
            "credentials": "include"
          }).then(_0xf75529 => _0xf75529.json()).then(_0x29b7cf => {
            if (_0x29b7cf.body) {
              this.leaderboardList = _0x29b7cf.body;
              this.fetchingLeaderboard = false;
              this.manager.requestUpdate();
            }
          });
        }
        this.fetchingLeaderboard = true;
        let _0x2a3f4d = document.createElement("strong");
        _0x2a3f4d.style.color = "#999";
        _0x2a3f4d.textContent = "加载中...";
        _0x2a3f4d.style.display = "block";
        _0x2a3f4d.style.textAlign = "center";
        _0x37e763.appendChild(_0x2a3f4d);
      }
      this.manager.target.appendChild(_0x37e763);
    }
    ["renderAchievements"]() {
      let _0x1e633d = _0x2e30e0();
      if (this.achievementList) {
        let _0x48c09d = document.createElement("div");
        _0x48c09d.style.display = "flex";
        _0x48c09d.style.justifyContent = "center";
        let _0x3bbf68 = document.createElement("input");
        _0x3bbf68.type = "text";
        _0x3bbf68.placeholder = "搜索成就...";
        _0x3bbf68.style.padding = "5px";
        _0x3bbf68.style.border = "1px solid #ddd";
        _0x3bbf68.style.width = "100%";
        _0x3bbf68.style.boxSizing = "border-box";
        _0x3bbf68.addEventListener("input", () => {
          let _0x233f43 = _0x3bbf68.value.toLowerCase();
          let _0x1d9bcd = _0x159902.children;
          let _0x32e67d = false;
          Array.from(_0x1d9bcd).forEach(_0x3445cb => {
            if (_0x3445cb.className !== "no-results" && _0x3445cb.querySelector(".item-name").textContent.toLowerCase().includes(_0x233f43)) {
              _0x3445cb.style.display = "flex";
              _0x32e67d = true;
            } else if (_0x3445cb.className !== "no-results") {
              _0x3445cb.style.display = "none";
            }
          });
          if (_0x32e67d) {
            let _0x39a89e = _0x159902.querySelector(".no-results");
            if (_0x39a89e) {
              _0x159902.removeChild(_0x39a89e);
            }
          } else {
            if (!_0x159902.querySelector(".no-results")) {
              let _0x27512f = document.createElement("li");
              _0x27512f.textContent = "(无结果)";
              _0x27512f.className = "no-results";
              _0x27512f.style.display = "flex";
              _0x27512f.style.justifyContent = "center";
              _0x27512f.style.alignItems = "center";
              _0x27512f.style.width = "100%";
              _0x27512f.style.height = "100%";
              _0x27512f.style.color = "#999";
              _0x159902.appendChild(_0x27512f);
            }
          }
        });
        _0x48c09d.appendChild(_0x3bbf68);
        this.manager.target.appendChild(_0x48c09d);
        let _0x159902 = document.createElement("ul");
        _0x159902.style.marginTop = "10px";
        _0x159902.style.padding = "0";
        _0x159902.style.margin = "0";
        _0x159902.style.listStyleType = "none";
        if (this.achievementList.length === 0) {
          let _0x4a1d6f = document.createElement("li");
          _0x4a1d6f.textContent = "(无结果)";
          _0x4a1d6f.className = "no-results";
          _0x4a1d6f.style.display = "flex";
          _0x4a1d6f.style.justifyContent = "center";
          _0x4a1d6f.style.alignItems = "center";
          _0x4a1d6f.style.width = "100%";
          _0x4a1d6f.style.height = "100%";
          _0x4a1d6f.style.color = "#999";
          _0x159902.appendChild(_0x4a1d6f);
        } else {
          this.achievementList.forEach(_0x280867 => {
            let _0x3aa0ab = document.createElement("li");
            _0x3aa0ab.style.display = "flex";
            _0x3aa0ab.style.flexDirection = "column";
            _0x3aa0ab.style.alignItems = "flex-start";
            _0x3aa0ab.style.marginBottom = "5px";
            _0x3aa0ab.style.padding = "5px";
            _0x3aa0ab.style.border = "1px solid #ddd";
            _0x3aa0ab.style.borderRadius = "4px";
            _0x3aa0ab.style.backgroundColor = "#f9f9f9";
            let _0x2a0bb2 = document.createElement("div");
            _0x2a0bb2.style.display = "flex";
            _0x2a0bb2.style.alignItems = "center";
            _0x2a0bb2.style.width = "100%";
            let _0x40481a = document.createElement("img");
            _0x40481a.src = _0x280867.icon;
            _0x40481a.title = "创建时间 " + (_0x280867.createdAt === null ? "未知" : new Date(_0x280867.createdAt)) + " / 最后更新 " + (_0x280867.updatedAt === null ? "未知" : new Date(_0x280867.updatedAt));
            _0x40481a.alt = "icon";
            _0x40481a.style.width = "24px";
            _0x40481a.style.height = "24px";
            _0x40481a.style.marginRight = "10px";
            let _0x1bcc28 = document.createElement("span");
            _0x1bcc28.textContent = _0x280867.title;
            _0x1bcc28.className = "item-name";
            _0x1bcc28.title = _0x280867.description;
            _0x1bcc28.style.flexGrow = "1";
            _0x1bcc28.style.marginRight = "10px";
            let _0x46fadb = document.createElement("button");
            const _0x24e204 = {
              once: true
            };
            _0x46fadb.textContent = _0x280867.obtained ? "✅" : "❌";
            _0x46fadb.style.cursor = _0x280867.obtained ? "default" : "pointer";
            _0x46fadb.title = _0x280867.obtained ? "已获得该成就" : "获得";
            _0x46fadb.style.marginRight = "5px";
            if (!_0x280867.obtained) {
              _0x46fadb.addEventListener("click", () => {
                this.extension.apis.obtainAchievement(_0x280867.oid);
                _0x280867.obtained = true;
                _0x46fadb.style.cursor = "default";
                _0x46fadb.textContent = "✅";
                _0x46fadb.title = "已获得该成就";
              }, _0x24e204);
            }
            let _0x304d22 = document.createElement("input");
            _0x304d22.type = "text";
            _0x304d22.value = _0x280867.recordExt ?? '';
            _0x304d22.placeholder = "(无附加说明)";
            _0x304d22.style.color = "#666";
            _0x304d22.style.backgroundColor = "transparent";
            _0x304d22.style.width = "100%";
            _0x304d22.style.outline = "none";
            _0x304d22.style.border = "none";
            _0x304d22.addEventListener("change", () => {
              if (_0x280867.recordExt !== _0x304d22.value) {
                _0x280867.recordExt = _0x304d22.value;
                this.extension.apis.updateAchievementExtra(_0x280867.oid, _0x304d22.value);
              }
            });
            _0x2a0bb2.appendChild(_0x40481a);
            _0x2a0bb2.appendChild(_0x1bcc28);
            _0x2a0bb2.appendChild(_0x46fadb);
            _0x3aa0ab.appendChild(_0x2a0bb2);
            _0x3aa0ab.appendChild(_0x304d22);
            _0x159902.appendChild(_0x3aa0ab);
          });
        }
        _0x1e633d.appendChild(_0x159902);
      } else {
        if (!this.fetchingAchievement) {
          fetch("https://gandi-main.ccw.site/achievements?creationId=" + this.extension.runtime.ccwAPI.getProjectUUID() + "&perPage=200", {
            "credentials": "include"
          }).then(_0x524a0f => _0x524a0f.json()).then(_0x199d3f => {
            if (_0x199d3f.body) {
              this.achievementList = _0x199d3f.body.data;
              this.fetchingAchievement = false;
              this.manager.requestUpdate();
            }
          });
        }
        this.fetchingAchievement = true;
        let _0x472b9c = document.createElement("strong");
        _0x472b9c.style.color = "#999";
        _0x472b9c.textContent = "加载中...";
        _0x472b9c.style.display = "block";
        _0x472b9c.style.textAlign = "center";
        _0x1e633d.appendChild(_0x472b9c);
      }
      this.manager.target.appendChild(_0x1e633d);
    }
    ["render"]() {
      let _0x152a52 = document.createElement("div");
      _0x152a52.style.display = "flex";
      _0x152a52.style.justifyContent = "center";
      let _0x33cda9 = document.createElement("button");
      _0x33cda9.textContent = "成就";
      _0x33cda9.style.flexGrow = "1";
      _0x33cda9.style.padding = "10px";
      _0x33cda9.style.border = "1px solid #ddd";
      _0x33cda9.style.borderBottom = this.selected === "achievement" ? "none" : "1px solid #ddd";
      _0x33cda9.style.backgroundColor = this.selected === "achievement" ? "#f9f9f9" : "#fff";
      _0x33cda9.style.cursor = "pointer";
      _0x33cda9.addEventListener("click", () => {
        this.selected = "achievement";
        this.manager.requestUpdate();
      });
      let _0x5666e2 = document.createElement("button");
      _0x5666e2.textContent = "排行榜";
      _0x5666e2.style.flexGrow = "1";
      _0x5666e2.style.padding = "10px";
      _0x5666e2.style.border = "1px solid #ddd";
      _0x5666e2.style.borderBottom = this.selected === "leaderboard" ? "none" : "1px solid #ddd";
      _0x5666e2.style.backgroundColor = this.selected === "leaderboard" ? "#f9f9f9" : "#fff";
      _0x5666e2.style.cursor = "pointer";
      _0x5666e2.addEventListener("click", () => {
        this.selected = "leaderboard";
        this.manager.requestUpdate();
      });
      _0x152a52.appendChild(_0x33cda9);
      _0x152a52.appendChild(_0x5666e2);
      this.manager.target.appendChild(_0x152a52);
      if (this.selected === "achievement") {
        this.renderAchievements();
      } else {
        this.renderLeaderboard();
      }
    }
    ["dispose"]() {}
  };
  var _0x39e1ac = class _0x5b6c2c {
    static ["title"] = "币池管理";
    constructor(_0x555e42, _0x52b4c2, _0x28b753) {
      this.manager = _0x555e42;
      this.extension = _0x52b4c2;
      this.pool = _0x28b753;
    }
    static ["parseRule"](_0x18e908) {
      let _0x4ffa0d = 0;
      let _0x15aef9 = '';
      let _0x357f8c = [];
      for (let _0x91f6f6 of _0x18e908) if (_0x4ffa0d === 0) {
        if (_0x91f6f6 === "[") {
          _0x357f8c.push(_0x15aef9);
          _0x15aef9 = '';
          _0x4ffa0d = 1;
        } else {
          _0x15aef9 += _0x91f6f6;
        }
      } else if (_0x4ffa0d === 1) {
        if (_0x91f6f6 === "]") {
          _0x4ffa0d = 0;
          _0x357f8c.push({
            "name": _0x15aef9
          });
          _0x15aef9 = '';
        } else {
          _0x15aef9 += _0x91f6f6;
        }
      }
      if (_0x4ffa0d !== 0) {
        throw new Error("Brace unclosed");
      }
      if (_0x15aef9 !== '') {
        _0x357f8c.push(_0x15aef9);
      }
      return _0x357f8c;
    }
    ["render"]() {
      let _0x2182b9 = _0x2e30e0();
      let _0x1b364e = document.createElement("div");
      _0x1b364e.style.display = "flex";
      _0x1b364e.style.justifyContent = "center";
      let _0x3a35f2 = document.createElement("input");
      _0x3a35f2.type = "text";
      _0x3a35f2.placeholder = "搜索规则...";
      _0x3a35f2.style.padding = "5px";
      _0x3a35f2.style.border = "1px solid #ddd";
      _0x3a35f2.style.width = "100%";
      _0x3a35f2.style.boxSizing = "border-box";
      _0x3a35f2.addEventListener("input", () => {
        let _0x41b287 = _0x3a35f2.value.toLowerCase();
        let _0x5a8b2b = _0x1e1fb9.children;
        let _0x33f945 = false;
        Array.from(_0x5a8b2b).forEach(_0x48f8c3 => {
          if (_0x48f8c3.className !== "no-results" && _0x48f8c3.description.toLowerCase().includes(_0x41b287)) {
            _0x48f8c3.style.display = "flex";
            _0x33f945 = true;
          } else if (_0x48f8c3.className !== "no-results") {
            _0x48f8c3.style.display = "none";
          }
        });
        if (_0x33f945) {
          let _0x35024e = _0x1e1fb9.querySelector(".no-results");
          if (_0x35024e) {
            _0x1e1fb9.removeChild(_0x35024e);
          }
        } else {
          if (!_0x1e1fb9.querySelector(".no-results")) {
            let _0x23b1a5 = document.createElement("li");
            _0x23b1a5.textContent = "(无结果)";
            _0x23b1a5.className = "no-results";
            _0x23b1a5.style.display = "flex";
            _0x23b1a5.style.justifyContent = "center";
            _0x23b1a5.style.alignItems = "center";
            _0x23b1a5.style.width = "100%";
            _0x23b1a5.style.height = "100%";
            _0x23b1a5.style.color = "#999";
            _0x1e1fb9.appendChild(_0x23b1a5);
          }
        }
      });
      _0x1b364e.appendChild(_0x3a35f2);
      this.manager.target.appendChild(_0x1b364e);
      let _0x1e1fb9 = document.createElement("ul");
      _0x1e1fb9.style.marginTop = "10px";
      _0x1e1fb9.style.padding = "0";
      _0x1e1fb9.style.margin = "0";
      _0x1e1fb9.style.listStyleType = "none";
      if (this.pool.rules.length === 0) {
        let _0x5ecbdd = document.createElement("li");
        _0x5ecbdd.textContent = "(无结果)";
        _0x5ecbdd.className = "no-results";
        _0x5ecbdd.style.display = "flex";
        _0x5ecbdd.style.justifyContent = "center";
        _0x5ecbdd.style.alignItems = "center";
        _0x5ecbdd.style.width = "100%";
        _0x5ecbdd.style.height = "100%";
        _0x5ecbdd.style.color = "#999";
        _0x1e1fb9.appendChild(_0x5ecbdd);
      } else {
        this.pool.rules.forEach(_0x109155 => {
          let _0x432b34 = document.createElement("li");
          _0x432b34.description = _0x109155.rule.funSignature.zh_cn;
          _0x432b34.style.display = "flex";
          _0x432b34.style.flexDirection = "column";
          _0x432b34.style.alignItems = "flex-start";
          _0x432b34.style.marginBottom = "5px";
          _0x432b34.style.padding = "5px";
          _0x432b34.style.border = "1px solid #ddd";
          _0x432b34.style.borderRadius = "4px";
          _0x432b34.style.backgroundColor = "#f9f9f9";
          let _0x40ca14 = document.createElement("div");
          _0x40ca14.style.display = "flex";
          _0x40ca14.style.alignItems = "center";
          _0x40ca14.style.width = "100%";
          let _0x338cfe = _0x5b6c2c.parseRule(_0x109155.rule.funSignature.zh_cn);
          let _0xa0937e = {};
          for (let _0x559531 of _0x338cfe) if (typeof _0x559531 == "string") {
            let _0x41b9a1 = document.createElement("span");
            _0x41b9a1.textContent = _0x559531;
            _0x41b9a1.style.textWrapMode = "nowrap";
            _0x41b9a1.style.overflow = "hidden";
            _0x41b9a1.style.textOverflow = "ellipsis";
            _0x40ca14.appendChild(_0x41b9a1);
          } else {
            let _0x4012e9 = document.createElement("input");
            _0x4012e9.type = "number";
            _0x4012e9.placeholder = _0x559531.name;
            _0x4012e9.style.border = "none";
            _0x4012e9.style.outline = "none";
            _0x4012e9.style.backgroundColor = "transparent";
            _0x4012e9.style.textWrapMode = "nowrap";
            _0x4012e9.style.overflow = "hidden";
            _0x4012e9.style.textOverflow = "ellipsis";
            _0x4012e9.style.marginRight = "5px";
            _0x4012e9.style.width = "50px";
            _0x40ca14.appendChild(_0x4012e9);
            _0xa0937e[_0x559531.name] = _0x4012e9;
          }
          let _0x42c072 = document.createElement("button");
          _0x42c072.textContent = "执行";
          _0x42c072.style.cursor = "pointer";
          _0x42c072.style.marginLeft = "auto";
          _0x42c072.title = _0x109155.rule.title;
          _0x42c072.addEventListener("click", () => {
            let _0x511047 = false;
            let _0x2453ea = Object.fromEntries(Object.entries(_0xa0937e).map(([_0x1b567e, _0x59c0ca]) => {
              let _0x22e222 = Number(_0x59c0ca.value);
              const _0x301804 = {
                backgroundColor: ''
              };
              const _0x95a66 = {
                duration: 0x12c
              };
              return _0x59c0ca.value === '' || Number.isNaN(_0x22e222) || _0x22e222 <= 0 ? (_0x59c0ca.animate([{
                "backgroundColor": "red"
              }, _0x301804], _0x95a66), _0x511047 = true, [_0x1b567e, 0]) : [_0x1b567e, _0x22e222];
            }));
            if (!_0x511047) {
              this.extension.apis.requestExecuteSmartContract(this.pool.id, _0x109155.id, _0x109155.rule.code, _0x2453ea);
            }
          });
          _0x40ca14.appendChild(_0x42c072);
          _0x432b34.appendChild(_0x40ca14);
          _0x1e1fb9.appendChild(_0x432b34);
        });
      }
      _0x2182b9.appendChild(_0x1e1fb9);
      this.manager.target.appendChild(_0x2182b9);
      let _0x901bba = document.createElement("div");
      _0x901bba.style.display = "flex";
      _0x901bba.style.flexDirection = "row";
      _0x901bba.style.alignItems = "flex-start";
      _0x901bba.style.padding = "5px";
      _0x901bba.style.border = "1px solid #ddd";
      _0x901bba.style.borderRadius = "4px";
      _0x901bba.style.backgroundColor = "#f9f9f9";
      let _0x584308 = document.createElement("button");
      _0x584308.textContent = "规则详情";
      _0x584308.style.cursor = "pointer";
      _0x584308.style.marginRight = "5px";
      _0x584308.title = "查看规则详情";
      _0x584308.addEventListener("click", () => {
        this.extension.apis.showSmartContractDetail(this.pool.id);
      });
      _0x901bba.appendChild(_0x584308);
      let _0x40e2c9 = document.createElement("button");
      _0x40e2c9.textContent = "无偿注资";
      _0x40e2c9.style.cursor = "pointer";
      _0x40e2c9.title = "进行无偿注资";
      _0x40e2c9.addEventListener("click", () => {
        this.extension._requestFund({
          "contractId": this.pool.id
        });
      });
      _0x901bba.appendChild(_0x40e2c9);
      this.manager.target.appendChild(_0x901bba);
    }
    ["dispose"]() {}
  };
  var _0x4cb0d8 = class {
    static ["title"] = "经济合约";
    constructor(_0x2d5d64, _0x5c35bc) {
      this.manager = _0x2d5d64;
      this.extension = _0x5c35bc;
      this.pools = null;
      this.fetching = false;
    }
    ["render"]() {
      let _0x2fe934 = _0x2e30e0();
      if (this.pools) {
        let _0x1d026a = document.createElement("div");
        _0x1d026a.style.display = "flex";
        _0x1d026a.style.justifyContent = "center";
        let _0x283fff = document.createElement("input");
        _0x283fff.type = "text";
        _0x283fff.placeholder = "搜索合约...";
        _0x283fff.style.padding = "5px";
        _0x283fff.style.border = "1px solid #ddd";
        _0x283fff.style.width = "100%";
        _0x283fff.style.boxSizing = "border-box";
        _0x283fff.addEventListener("input", () => {
          let _0x5b9703 = _0x283fff.value.toLowerCase();
          let _0x313e39 = _0x1abedf.children;
          let _0x2aa7f4 = false;
          Array.from(_0x313e39).forEach(_0x1d7e72 => {
            if (_0x1d7e72.className !== "no-results" && _0x1d7e72.querySelector(".item-name").textContent.toLowerCase().includes(_0x5b9703)) {
              _0x1d7e72.style.display = "flex";
              _0x2aa7f4 = true;
            } else if (_0x1d7e72.className !== "no-results") {
              _0x1d7e72.style.display = "none";
            }
          });
          if (_0x2aa7f4) {
            let _0x15d0eb = _0x1abedf.querySelector(".no-results");
            if (_0x15d0eb) {
              _0x1abedf.removeChild(_0x15d0eb);
            }
          } else {
            if (!_0x1abedf.querySelector(".no-results")) {
              let _0x1a288a = document.createElement("li");
              _0x1a288a.textContent = "(无结果)";
              _0x1a288a.className = "no-results";
              _0x1a288a.style.display = "flex";
              _0x1a288a.style.justifyContent = "center";
              _0x1a288a.style.alignItems = "center";
              _0x1a288a.style.width = "100%";
              _0x1a288a.style.height = "100%";
              _0x1a288a.style.color = "#999";
              _0x1abedf.appendChild(_0x1a288a);
            }
          }
        });
        _0x1d026a.appendChild(_0x283fff);
        this.manager.target.appendChild(_0x1d026a);
        let _0x1abedf = document.createElement("ul");
        _0x1abedf.style.marginTop = "10px";
        _0x1abedf.style.padding = "0";
        _0x1abedf.style.margin = "0";
        _0x1abedf.style.listStyleType = "none";
        this.pools.forEach(_0x23f994 => {
          const _0x4732fe = {
            DUCK_MAKER: "鸭里奥",
            GENERAL: "通用",
            GENERAL_NO_SPLIT: "通用 (作者无分成)"
          };
          let _0x12a7b0 = document.createElement("li");
          _0x12a7b0.style.display = "flex";
          _0x12a7b0.style.flexDirection = "column";
          _0x12a7b0.style.alignItems = "flex-start";
          _0x12a7b0.style.marginBottom = "5px";
          _0x12a7b0.style.padding = "5px";
          _0x12a7b0.style.border = "1px solid #ddd";
          _0x12a7b0.style.borderRadius = "4px";
          _0x12a7b0.style.backgroundColor = "#f9f9f9";
          let _0xe77d0e = document.createElement("div");
          _0xe77d0e.style.display = "flex";
          _0xe77d0e.style.alignItems = "center";
          _0xe77d0e.style.width = "100%";
          let _0x515652 = document.createElement("span");
          _0x515652.textContent = _0x23f994.title;
          _0x515652.className = "item-name";
          if (_0x23f994.status !== "ENABLED") {
            _0x515652.style.color = "#999";
          }
          _0x515652.title = "创建时间 " + (_0x23f994.createdAt === null ? "未知" : new Date(_0x23f994.createdAt)) + " / 最后更新 " + new Date(_0x23f994.updatedAt === null ? "未知" : _0x23f994.updatedAt);
          _0x515652.style.flexGrow = "1";
          _0x515652.style.marginRight = "10px";
          let _0x37b18a = document.createElement("button");
          _0x37b18a.textContent = "🔍";
          _0x37b18a.style.cursor = "pointer";
          _0x37b18a.style.marginRight = "5px";
          _0x37b18a.title = "查看合约";
          _0x37b18a.addEventListener("click", () => {
            this.manager.open(new _0x39e1ac(this.manager, this.extension, _0x23f994));
          });
          let _0x1b85ca = document.createElement("span");
          _0x1b85ca.title = _0x1b85ca.textContent = "(" + (_0x23f994.status === "ENABLED" ? "可用" : "不可用") + ") " + (_0x4732fe[_0x23f994.type] ?? "未知") + " / " + _0x23f994.balance + " 币";
          _0x1b85ca.style.textWrap = "nowrap";
          _0x1b85ca.style.overflow = "hidden";
          _0x1b85ca.style.textOverflow = "ellipsis";
          _0x1b85ca.style.maxWidth = "400px";
          _0x1b85ca.style.color = "#666";
          _0x1b85ca.style.width = "100%";
          _0xe77d0e.appendChild(_0x515652);
          _0xe77d0e.appendChild(_0x37b18a);
          _0x12a7b0.appendChild(_0xe77d0e);
          _0x12a7b0.appendChild(_0x1b85ca);
          _0x1abedf.appendChild(_0x12a7b0);
        });
        _0x2fe934.appendChild(_0x1abedf);
      } else {
        if (!this.fetching) {
          (async () => {
            let _0x43e390 = await this.extension.apis.getSmartContractList();
            for (let _0x5ed315 of _0x43e390) _0x5ed315.balance = await this.extension.apis.getSmartContractAccountByContractId(_0x5ed315.id);
            this.fetching = false;
            this.pools = _0x43e390;
            this.manager.requestUpdate();
          })();
        }
        this.fetching = true;
        let _0x579f3f = document.createElement("strong");
        _0x579f3f.style.color = "#999";
        _0x579f3f.textContent = "加载中...";
        _0x579f3f.style.display = "block";
        _0x579f3f.style.textAlign = "center";
        _0x2fe934.appendChild(_0x579f3f);
      }
      this.manager.target.appendChild(_0x2fe934);
    }
    ["dispose"]() {}
  };
  var _0x12853e = class {
    static ["title"] = "MMO 审查";
    constructor(_0x57a833, _0x2f3895) {
      this.manager = _0x57a833;
      this.extension = _0x2f3895;
    }
    ["render"]() {
      let _0x1fb1c5 = document.createElement("strong");
      _0x1fb1c5.style.color = "#999";
      _0x1fb1c5.textContent = "该功能尚未完成。";
      _0x1fb1c5.style.display = "block";
      _0x1fb1c5.style.textAlign = "center";
      this.manager.target.appendChild(_0x1fb1c5);
    }
    ["dispose"]() {}
  };
  var _0x27aae9 = class {
    constructor(_0x329c0e, _0x376d7e, _0x170980) {
      this.manager = _0x329c0e;
      this.isSuccess = _0x376d7e;
      this.message = _0x170980;
      setTimeout(() => {
        this.manager.removeOverlay(this);
      }, 3000);
    }
    ["render"]() {
      let _0x1cc359 = this.manager.target;
      let _0x543a15 = document.createElement("div");
      _0x543a15.textContent = this.message;
      _0x543a15.style.width = "100%";
      _0x543a15.style.backgroundColor = this.isSuccess ? "green" : "red";
      _0x543a15.style.color = "white";
      _0x543a15.style.textAlign = "center";
      _0x543a15.style.padding = "5px";
      _0x543a15.style.fontSize = "12px";
      _0x543a15.style.boxSizing = "border-box";
      _0x543a15.animate([{
        "transform": "translateY(-100%)"
      }, {
        "transform": "translateY(0)"
      }], {
        "duration": 0x12c,
        "easing": "ease-in-out"
      });
      _0x543a15.style.position = "relative";
      _0x543a15.style.zIndex = "-1";
      _0x1cc359.appendChild(_0x543a15);
    }
    ["dispose"]() {}
  };
  _0x24e9df(new URL("https://cdn.jsdelivr.net/npm/monaco-editor@0.50.0/min/vs/editor/editor.main.css"));
  window.MonacoEnvironment = {
    "getWorkerUrl"(_0x528f5c) {
      if (_0x528f5c === "workerMain.js") {
        return "data:text/javascript;base64," + btoa("(function(fetch){globalThis.fetch=function(url,...args){return fetch.call(this,'https://cdn.jsdelivr.net/npm/monaco-editor@0.50.0/min/vs/base/worker/'+url,...args);};})(globalThis.fetch);importScripts('https://cdn.jsdelivr.net/npm/monaco-editor@0.50.0/min/vs/base/worker/workerMain.js');");
      }
    }
  };
  var _0xf53ebd = import('https://cdn.jsdelivr.net/npm/monaco-editor@0.50.0/+esm');
  var _0x45c98c = class {
    static ["title"] = "高级";
    constructor(_0x46910a) {
      this.manager = _0x46910a;
      this.Monaco = null;
      _0xf53ebd.then(_0x3c16c9 => {
        this.Monaco = _0x3c16c9;
        this.manager.requestUpdate();
      });
      this.editor = null;
      this.overlay = null;
    }
    ["run"](_0x5115cc) {
      let _0x5abb99 = {
        async "vm"() {
          let _0x500324 = await promise;
          return new _0x174f87(_0x500324);
        }
      };
      return new async function () {}.constructor("engine", _0x5115cc)(_0x5abb99);
    }
    ["render"]() {
      if (this.Monaco) {
        if (this.editor) {
          this.editor.dispose();
        }
        let _0x3b2a86 = document.createElement("div");
        _0x3b2a86.style.display = "flex";
        _0x3b2a86.style.flexDirection = "column";
        _0x3b2a86.style.alignItems = "center";
        _0x3b2a86.style.padding = "10px";
        let _0x24bf95 = document.createElement("p");
        _0x24bf95.textContent = "你可以指定一个自定义脚本用于进行自动化操作。可使用命令面板运行脚本。";
        _0x24bf95.style.marginBottom = "10px";
        _0x3b2a86.appendChild(_0x24bf95);
        let _0x532e24 = document.createElement("div");
        _0x532e24.style.width = "100%";
        _0x532e24.style.height = "300px";
        _0x532e24.style.marginBottom = "10px";
        let _0x58538c = window.localStorage.getItem("__csense-storaged-script") ?? "// 这是 CSense Scripting API 的使用示例。\nconst vm = await engine.vm()\nconst target = vm.sprite('Stage').clones[0]\ntarget.var('我的变量').set('你好').watch(function (before, after) {\nreturn '你好，' + after\n}) // .freezing = true\n";
        const _0x5717a6 = {
          value: _0x58538c,
          automaticLayout: true,
          language: "javascript"
        };
        this.editor = this.Monaco.editor.create(_0x532e24, _0x5717a6);
        this.editor.addAction({
          "id": "csense.execute",
          "label": "运行脚本",
          "contextMenuGroupId": "csense",
          "run": () => {
            let _0x44807e = this.run(this.editor.getValue());
            this.overlay = new _0x27aae9(this.manager, true, "脚本已运行。");
            this.manager.addOverlay(this.overlay);
            _0x44807e.then(() => {}, _0x2abdee => {
              console.error(_0x2abdee);
              if (this.overlay) {
                this.overlay.isSuccess = false;
                this.overlay.message = "发生错误。请检查 DevTools 控制台。";
                this.manager.requestUpdate();
              }
            });
          }
        });
        this.editor.onDidChangeModelContent(() => {
          window.localStorage.setItem("__csense-storaged-script", this.editor.getValue());
        });
        _0x3b2a86.appendChild(_0x532e24);
        this.manager.target.appendChild(_0x3b2a86);
      } else {
        let _0x485f72 = document.createElement("strong");
        _0x485f72.style.color = "#999";
        _0x485f72.textContent = "加载中...";
        _0x485f72.style.display = "block";
        _0x485f72.style.textAlign = "center";
        this.manager.target.appendChild(_0x485f72);
      }
    }
    ["dispose"]() {
      this.editor.dispose();
      this.manager.removeOverlay(this.overlay);
      this.overlay = null;
    }
  };
  var _0x474049 = class {
    static ["title"] = "关于";
    constructor(_0x5af059) {
      this.manager = _0x5af059;
    }
    ["pSmall"](_0x18f199) {
      let _0x560cf3 = document.createElement("p");
      _0x560cf3.textContent = _0x18f199;
      _0x560cf3.style.textAlign = "center";
      _0x560cf3.style.fontSize = "small";
      return _0x560cf3;
    }
    ["render"]() {
      let _0xd3ad1d = _0x2e30e0();
      let _0x5673fd = document.createElement("div");
      let _0x4d8612 = document.createElement("img");
      _0x4d8612.src = "data:image/svg+xml,<?xml version=\"1.0\" encoding=\"UTF-8\"?>%0A<svg fill=\"none\" version=\"1.1\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\">%0A  <g transform=\"matrix(1,0,0,-1,0,80)\">%0A    <g transform=\"matrix(1,0,0,-1,0,160)\">%0A      <path%0A        d=\"m9.4332 86.067-1.7864-1.782c-4.6571 3.6624-7.6468 9.3405-7.6468 15.715 0 5.3448 2.1018 10.2 5.5258 13.788l1.7728-1.7684c-2.9708-3.1349-4.7924-7.365-4.7924-12.019 0-5.6848 2.7174-10.737 6.927-13.933zm2.7405 29.575-1.8541 1.8496c2.8814 1.5984 6.1991 2.5088 9.7299 2.5088 10.396 0 18.945-7.8934 19.95-18h-2.5205c-0.9949 8.7231-8.4191 15.5-17.43 15.5-2.8321 0-5.5075-0.6695-7.8758-1.8584zm19.256-28.96 1.6169-1.9102c-3.5-2.9753-8.0385-4.7712-12.997-4.7712-1.6482 0-3.2499 0.19838-4.7825 0.57251l2.1313 2.126c0.8646-0.13074 1.75-0.19853 2.6512-0.19853 4.3427 0 8.3169 1.574 11.38 4.1814z\"%0A        fill=\"%2330D34B\" fill-rule=\"evenodd\" />%0A      <path%0A        d=\"m20.05 86.045v-0.045285c-6.0798 0-11.257 3.8564-13.207 9.2507-1.9631 5.3748-0.47868 11.63 4.1686 15.519 5.4162 4.5336 13.258 4.2889 18.375-0.2846l-0.0192-0.0161c2.4219-2.1464 4.0939-5.1163 4.5748-8.4695h-5.0945q-0.1527 0.6663-0.4092 1.3128-0.6879 1.7331-2.0091 3.0512-1.3213 1.318-3.0587 2.0041-1.6001 0.6319-3.3211 0.6319-1.7209 0-3.321-0.6319-1.7374-0.6861-3.0587-2.0041-1.3213-1.3181-2.0091-3.0512-0.63347-1.5961-0.63346-3.3128 0-1.5702 0.52996-3.0395 0.54154-1.4842 1.5643-2.7 1.1062-1.3151 2.62-2.1316 1.6437-0.8866 3.5051-1.049 1.8615-0.16246 3.6345 0.42595 1.633 0.54193 2.9513 1.6454l3.2219-3.8302c-2.6269-2.1988-5.8244-3.2736-9.0047-3.2757z\"%0A        fill=\"%231E9F33\" fill-rule=\"evenodd\" />%0A    </g>%0A  </g>%0A</svg>";
      _0x4d8612.alt = "CSense";
      _0x4d8612.style.display = "block";
      _0x4d8612.style.margin = "0 auto";
      _0x4d8612.style.width = "120px";
      _0x4d8612.style.height = "120px";
      _0x4d8612.style.marginTop = "30px";
      _0x4d8612.style.marginBottom = "20px";
      _0x5673fd.appendChild(_0x4d8612);
      let _0x88198a = document.createElement("p");
      _0x88198a.textContent = "一个 CCW 安全审计工具。";
      _0x88198a.style.textAlign = "center";
      _0x88198a.style.fontWeight = "bold";
      _0x88198a.style.fontSize = "small";
      _0x5673fd.appendChild(_0x88198a);
      _0x5673fd.appendChild(this.pSmall("此工具属于 Public Domain。"));
      _0x5673fd.appendChild(this.pSmall("使用此工具即代表您愿意为您的所有行为负全部责任，与此工具的开发者无关。"));
      _0x5673fd.appendChild(this.pSmall("如果能力允许，您可以对此工具进行自由修改、分发、二次创作。但为了避免它遭到滥用，我们对工具添加了加密和完整性保护。"));
      _0x5673fd.appendChild(this.pSmall("请勿将此工具用于非法用途。"));
      _0x5673fd.appendChild(this.pSmall("感谢 axolotl 先生提供的技术支持。"));
      _0xd3ad1d.appendChild(_0x5673fd);
      this.manager.target.appendChild(_0xd3ad1d);
    }
    ["dispose"]() {}
  };
  var _0x456ec9 = class {
    static ["title"] = "云数据管理";
    constructor(_0x1a42db, _0x38e1cb) {
      this.manager = _0x1a42db;
      this.extension = _0x38e1cb;
      this.selected = "project";
      this.disposed = false;
      this.lastFocused = null;
      this.noResultsItem = null;
      this.inputs = {};
      let _0x4788fa = () => {
        let _0x59cbc2 = infoDataVm.ccwdata[this.selected];
        const _0x4b6076 = {
          color: ''
        };
        const _0x11caa5 = {
          duration: 0x12c
        };
        for (let [_0x58e393, _0x269fed] of Object.entries(_0x59cbc2)) if (this.inputs[_0x58e393]) {
          if (this.inputs[_0x58e393].value !== _0x269fed && this.inputs[_0x58e393] !== this.lastFocused) {
            this.inputs[_0x58e393].animate([{
              "color": "red"
            }, _0x4b6076], _0x11caa5);
            this.inputs[_0x58e393].value = _0x269fed;
          }
        } else {
          let _0x486a77 = this.createListElement(this.selected, _0x58e393);
          this.inputs[_0x58e393] = _0x486a77[1];
          this.manager.target.querySelector("ul").appendChild(_0x486a77[2]);
          if (this.noResultsItem) {
            this.noResultsItem.remove();
            this.noResultsItem = null;
          }
        }
        if (!this.disposed) {
          requestAnimationFrame(_0x4788fa);
        }
      };
      requestAnimationFrame(_0x4788fa);
    }
    ["createListElement"](_0x1957dc, _0x281982) {
      let _0x293f33 = infoDataVm.ccwdata[_0x1957dc][_0x281982];
      let _0x26e931 = document.createElement("li");
      _0x26e931.style.display = "flex";
      _0x26e931.style.alignItems = "center";
      _0x26e931.style.marginBottom = "5px";
      _0x26e931.style.padding = "5px";
      _0x26e931.style.border = "1px solid #ddd";
      _0x26e931.style.borderRadius = "4px";
      _0x26e931.style.backgroundColor = "#f9f9f9";
      let _0x553cf7 = document.createElement("span");
      _0x553cf7.textContent = _0x281982;
      _0x553cf7.style.flexGrow = "1";
      _0x553cf7.style.marginRight = "10px";
      _0x553cf7.className = "item-name";
      let _0x41ecd4 = document.createElement("input");
      _0x41ecd4.type = "text";
      _0x41ecd4.style.fontFamily = "monospace";
      _0x41ecd4.value = Array.isArray(_0x293f33) ? JSON.stringify(_0x293f33) : _0x293f33;
      _0x41ecd4.style.flexGrow = "2";
      _0x41ecd4.style.marginRight = "10px";
      _0x41ecd4.addEventListener("change", () => {
        if (_0x1957dc === "project") {
          this.extension._setValueToProject(_0x281982, _0x41ecd4.value);
        } else {
          this.extension._setValueToUser(_0x281982, _0x41ecd4.value);
        }
      });
      _0x41ecd4.addEventListener("focus", () => {
        this.lastFocused = _0x41ecd4;
      });
      _0x41ecd4.addEventListener("blur", () => {
        this.lastFocused = null;
      });
      _0x26e931.appendChild(_0x553cf7);
      _0x26e931.appendChild(_0x41ecd4);
      return [_0x281982, _0x41ecd4, _0x26e931];
    }
    ["render"]() {
      let _0x1e4d11 = document.createElement("div");
      _0x1e4d11.style.display = "flex";
      _0x1e4d11.style.justifyContent = "center";
      let _0x2c62dd = document.createElement("button");
      _0x2c62dd.textContent = "作品";
      _0x2c62dd.style.flexGrow = "1";
      _0x2c62dd.style.padding = "10px";
      _0x2c62dd.style.border = "1px solid #ddd";
      _0x2c62dd.style.borderBottom = this.selected === "project" ? "none" : "1px solid #ddd";
      _0x2c62dd.style.backgroundColor = this.selected === "project" ? "#f9f9f9" : "#fff";
      _0x2c62dd.style.cursor = "pointer";
      _0x2c62dd.addEventListener("click", () => {
        this.selected = "project";
        this.manager.requestUpdate();
      });
      let _0x4cc841 = document.createElement("button");
      _0x4cc841.textContent = "用户";
      _0x4cc841.style.flexGrow = "1";
      _0x4cc841.style.padding = "10px";
      _0x4cc841.style.border = "1px solid #ddd";
      _0x4cc841.style.borderBottom = this.selected === "user" ? "none" : "1px solid #ddd";
      _0x4cc841.style.backgroundColor = this.selected === "user" ? "#f9f9f9" : "#fff";
      _0x4cc841.style.cursor = "pointer";
      _0x4cc841.addEventListener("click", () => {
        this.selected = "user";
        this.manager.requestUpdate();
      });
      _0x1e4d11.appendChild(_0x2c62dd);
      _0x1e4d11.appendChild(_0x4cc841);
      this.manager.target.appendChild(_0x1e4d11);
      let _0x387d1e = document.createElement("input");
      _0x387d1e.type = "text";
      _0x387d1e.placeholder = "搜索变量...";
      _0x387d1e.style.padding = "5px";
      _0x387d1e.style.border = "1px solid #ddd";
      _0x387d1e.style.width = "100%";
      _0x387d1e.style.boxSizing = "border-box";
      _0x387d1e.addEventListener("input", () => {
        let _0x23b44e = _0x387d1e.value.toLowerCase();
        let _0x4b3085 = _0x5c21f2.children;
        let _0x3079d9 = false;
        Array.from(_0x4b3085).forEach(_0x487efb => {
          if (_0x487efb.className !== "no-results" && _0x487efb.querySelector(".item-name").textContent.toLowerCase().includes(_0x23b44e)) {
            _0x487efb.style.display = "flex";
            _0x3079d9 = true;
          } else if (_0x487efb.className !== "no-results") {
            _0x487efb.style.display = "none";
          }
        });
        if (_0x3079d9) {
          let _0x5b8098 = _0x5c21f2.querySelector(".no-results");
          if (_0x5b8098) {
            _0x5c21f2.removeChild(_0x5b8098);
          }
        } else {
          if (!_0x5c21f2.querySelector(".no-results")) {
            let _0x1fd4e5 = document.createElement("li");
            _0x1fd4e5.textContent = "(无结果)";
            _0x1fd4e5.className = "no-results";
            _0x1fd4e5.style.display = "flex";
            _0x1fd4e5.style.justifyContent = "center";
            _0x1fd4e5.style.alignItems = "center";
            _0x1fd4e5.style.width = "100%";
            _0x1fd4e5.style.height = "100%";
            _0x1fd4e5.style.color = "#999";
            _0x5c21f2.appendChild(_0x1fd4e5);
          }
        }
      });
      this.manager.target.appendChild(_0x387d1e);
      let _0x46cd0e = _0x2e30e0();
      let _0x31fe7b = infoDataVm.ccwdata[this.selected];
      let _0x5c21f2 = document.createElement("ul");
      _0x5c21f2.style.padding = "0";
      _0x5c21f2.style.margin = "0";
      _0x5c21f2.style.listStyleType = "none";
      _0x5c21f2.style.marginTop = "10px";
      if (Object.keys(_0x31fe7b).length === 0) {
        let _0x4f751a = document.createElement("li");
        _0x4f751a.textContent = "(无结果)";
        _0x4f751a.className = "no-results";
        _0x4f751a.style.display = "flex";
        _0x4f751a.style.justifyContent = "center";
        _0x4f751a.style.alignItems = "center";
        _0x4f751a.style.width = "100%";
        _0x4f751a.style.height = "100%";
        _0x4f751a.style.color = "#999";
        this.noResultsItem = _0x4f751a;
        _0x5c21f2.appendChild(_0x4f751a);
      } else {
        this.inputs = Object.fromEntries(Object.keys(_0x31fe7b).map(_0x5157f9 => {
          let _0x244035 = this.createListElement(this.selected, _0x5157f9);
          _0x5c21f2.appendChild(_0x244035[2]);
          return [_0x5157f9, _0x244035[1]];
        }));
      }
      _0x46cd0e.appendChild(_0x5c21f2);
      this.manager.target.appendChild(_0x46cd0e);
    }
    ["dispose"]() {
      this.disposed = true;
    }
  };
  var _0x19d1c9 = class _0x285dc1 {
    static ["title"] = "主页";
    static ["orderBy"](_0x3c0c85, _0x5ad14f) {
      return Array.from(_0x3c0c85.entries()).sort((_0x5a29b6, _0x2be305) => _0x5ad14f.indexOf(_0x5a29b6[0]) - _0x5ad14f.indexOf(_0x2be305[0]));
    }
    constructor(_0x4e82cd) {
      infoDataVm.userInfo = null;
      let _0x3d7696 = _0x9362fc => {
        if (_0x9362fc.detail.url.endsWith("/students/self/detail")) {
          let _0x674b76 = JSON.parse(_0x9362fc.detail.data);
          if (_0x674b76.body) {
            let {
              body: _0x41f255
            } = _0x674b76;
            if (!this.isProfilePage) {
              infoDataVm.userInfo = {
                "userId": _0x41f255.studentNumber,
                "userName": _0x41f255.name,
                "uuid": _0x41f255.oid,
                "oid": _0x41f255.oid,
                "avatar": _0x41f255.avatar,
                "constellation": -1,
                "following": 0x0,
                "followers": 0x0,
                "liked": 0x0,
                "gender": ["MALE", "FEMALE"].indexOf(_0x41f255.gender),
                "pendant": '',
                "reputationScore": _0x41f255.reputationScore
              };
              _0x4e82cd.requestUpdate();
            }
            eventTarget.removeEventListener("load", _0x3d7696);
          }
        }
      };
      eventTarget.addEventListener("load", _0x3d7696);
      if (window.location.pathname.startsWith("/student/")) {
        this.isProfilePage = true;
        let _0x2614fe = _0x819f40 => {
          if (_0x819f40.detail.url.endsWith("/students/profile")) {
            let _0x5cd966 = JSON.parse(_0x819f40.detail.data);
            if (_0x5cd966.body) {
              let {
                body: _0x29ffa5
              } = _0x5cd966;
              infoDataVm.userInfo = {
                "userId": _0x29ffa5.studentNumber,
                "userName": _0x29ffa5.name,
                "uuid": _0x29ffa5.studentOid,
                "oid": _0x29ffa5.studentOid,
                "avatar": _0x29ffa5.avatar,
                "constellation": -1,
                "following": 0x0,
                "followers": 0x0,
                "liked": 0x0,
                "gender": ["MALE", "FEMALE"].indexOf(_0x29ffa5.gender),
                "pendant": '',
                "reputationScore": _0x29ffa5.reputationScore
              };
              _0x4e82cd.requestUpdate();
              eventTarget.removeEventListener("load", _0x2614fe);
            }
          }
        };
        eventTarget.addEventListener("load", _0x2614fe);
      } else {
        this.isProfilePage = false;
        promise.then(_0x1aa34e => {
          infoDataVm.vm = _0x1aa34e;
          _0x1aa34e.runtime.on("PROJECT_LOADED", () => {
            this.featureList.set("📝 作品数据", () => this.manager.open(new _0x4b005b(this.manager)));
            this.manager.requestUpdate();
          });
          let _0x4d8d2d = _0x296190 => {
            _0x296190.getUserInfo = async function () {
              return null;
            };
          };
          if (_0x1aa34e.runtime.ccwAPI) {
            _0x4d8d2d(_0x1aa34e.runtime.ccwAPI);
          }
          let _0x284c5d = _0x1aa34e.runtime.setCCWAPI;
          _0x1aa34e.runtime.setCCWAPI = function (_0xa76086) {
            _0x284c5d.call(this, _0xa76086);
            _0x4d8d2d(_0xa76086);
          };
          let _0x18aba8 = _0x1aa34e.runtime.ioDevices.userData._username;
          Object.defineProperty(_0x1aa34e.runtime.ioDevices.userData, "_username", {
            "get": () => null.userName,
            "set"(_0xc34400) {
              _0x18aba8 = _0xc34400;
            }
          });
          let _0x13238d = _0x1aa34e.runtime.constructor.prototype.compilerRegisterExtension;
          let _0x552999 = _0x4fcb36 => {
            Object.defineProperties(_0x4fcb36, {
              "UserId": {
                "get"() {
                  return null.userId;
                },
                "set"() {}
              },
              "ccwUserNickname": {
                "get"() {
                  return null.userName;
                },
                "set"() {}
              },
              "ccwUserUUID": {
                "get"() {
                  return null.userId;
                },
                "set"() {}
              }
            });
          };
          _0x1aa34e.runtime.compilerRegisterExtension = (_0x4f3a51, _0x2a909b) => {
            switch (_0x4f3a51) {
              case "community":
                {
                  _0x2a909b.getCoinCount = () => Infinity;
                  _0x2a909b.isUserLikedOtherProject = _0x2a909b.isLiked = _0x2a909b.isMyFans = _0x2a909b.isFanOfSomeone = _0x2a909b.requestFollow = _0x2a909b.isUserFavoriteOtherProject = () => true;
                  let _0x21f46a = _0x2a909b.insertCoinAndWaitForResult;
                  _0x2a909b.insertCoinAndWaitForResult = function (_0x2de09c) {
                    return confirm("作品请求投 " + _0x2de09c.COUNT + " 个币，是否伪造结果？") ? true : _0x21f46a.call(this, _0x2de09c);
                  };
                  break;
                }
              case "GandiAchievementAndLeaderboard":
                {
                  this.featureList.set("🏆 成就相关功能", () => {
                    this.manager.open(new _0x2f450b(this.manager, _0x2a909b));
                  });
                  this.manager.requestUpdate();
                  break;
                }
              case "GandiEconomy":
                {
                  _3callset1dot2(_0x2a909b, "requestFundReturn", _0xc0d96f => function (_0xa1cc92) {
                    let _0x3f4298 = prompt("作品正在请求合约无偿注资。请输入伪造的注资金额。\n当不输入任何内容时，将自动回落到官方实现。");
                    if (_0x3f4298 === null || _0x3f4298 === '') {
                      return _0xc0d96f.call(this, _0xa1cc92);
                    }
                    let _0x539a57 = Number(_0x3f4298);
                    return Number.isNaN(_0x539a57) || _0x539a57 < 0 ? 0 : _0x539a57;
                  });
                  this.featureList.set("📜 经济合约", () => {
                    this.manager.open(new _0x4cb0d8(this.manager, _0x2a909b));
                  });
                  break;
                }
              case "CCWMMO":
                {
                  _0x552999(_0x2a909b);
                  this.featureList.set("🎮 MMO 框架", () => {
                    this.manager.open(new _0x12853e(this.manager, _0x2a909b));
                  });
                  break;
                }
              case "CCWData":
                {
                  _0x552999(_0x2a909b);
                  this.featureList.set("🌩️ 云数据", () => {
                    this.manager.open(new _0x456ec9(this.manager, _0x2a909b));
                  });
                  _0x2a909b.sendPlayEventCode = () => {};
                  _3callset1dot2(_0x2a909b, "_getValueFromProject", _0x5ab110 => async function (_0x2ee47a) {
                    return infoDataVm.ccwdata.project[_0x2ee47a] = await _0x5ab110.call(this, _0x2ee47a);
                  });
                  _3callset1dot2(_0x2a909b, "_setValueToProject", _0x201760 => async function (_0x58a01c, _0x265ddc) {
                    infoDataVm.ccwdata.project[_0x58a01c] = _0x265ddc;
                    return await _0x201760.call(this, _0x58a01c, _0x265ddc);
                  });
                  _3callset1dot2(_0x2a909b, "_getValueFromUser", _0x2ae1bd => async function (_0x53e39e) {
                    return infoDataVm.ccwdata.user[_0x53e39e] = await _0x2ae1bd.call(this, _0x53e39e);
                  });
                  _3callset1dot2(_0x2a909b, "_setValueToUser", _0x454855 => async function (_0xb1f828, _0x46192e) {
                    infoDataVm.ccwdata.user[_0xb1f828] = _0x46192e;
                    return await _0x454855.call(this, _0xb1f828, _0x46192e);
                  });
                  break;
                }
            }
            _0x13238d.call(_0x1aa34e.runtime, _0x4f3a51, _0x2a909b);
          };
        });
      }
      this.manager = _0x4e82cd;
      this.animationFrame = null;
      this.avatarRotation = 0;
      this.featureList = new Map([["⚙️ 高级", () => {
        this.manager.open(new _0x45c98c(this.manager));
      }], ["ℹ️ 关于", () => {
        this.manager.open(new _0x474049(this.manager));
      }]]);
    }
    static ["createListButton"](_0x2e59a2, _0x3db269) {
      let _0x3160d9 = document.createElement("li");
      _0x3160d9.textContent = _0x2e59a2;
      _0x3160d9.style.padding = "10px";
      _0x3160d9.style.margin = "5px 0";
      _0x3160d9.style.backgroundColor = "#f0f0f0";
      _0x3160d9.style.borderRadius = "8px";
      _0x3160d9.style.cursor = "pointer";
      _0x3160d9.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
      _0x3160d9.addEventListener("mouseover", () => {
        _0x3160d9.style.transform = "scale(1.05)";
        _0x3160d9.style.transition = "transform 0.2s ease-in-out";
      });
      _0x3160d9.addEventListener("mouseout", () => {
        _0x3160d9.style.transform = "scale(1)";
      });
      _0x3160d9.addEventListener("click", _0x3db269);
      return _0x3160d9;
    }
    ["renderFeatureList"]() {
      let _0x18dbd1 = document.createElement("ul");
      _0x285dc1.orderBy(this.featureList, ["📝 作品数据", "🎮 MMO 框架", "🌩️ 云数据", "🏆 成就相关功能", "📜 经济合约", "⚙️ 高级", "ℹ️ 关于"]).forEach(_0x5b4840 => {
        _0x18dbd1.appendChild(_0x285dc1.createListButton(_0x5b4840[0], _0x5b4840[1]));
      });
      _0x18dbd1.style.padding = "0";
      _0x18dbd1.style.margin = "0";
      _0x18dbd1.style.listStyleType = "none";
      return _0x18dbd1;
    }
    ["render"]() {
      let _0x170f39 = _0x2e30e0();
      let _0x4780ff = document.createElement("div");
      _0x4780ff.style.display = "flex";
      _0x4780ff.style.marginTop = "10px";
      _0x4780ff.style.flexDirection = "column";
      _0x4780ff.style.alignItems = "center";
      _0x4780ff.style.marginBottom = "10px";
      let _0x1d1cb0 = document.createElement("img");
      _0x1d1cb0.src = null?.["avatar"] ?? "data:image/svg+xml,<?xml version=\"1.0\" encoding=\"UTF-8\"?>%0A<svg fill=\"none\" version=\"1.1\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\">%0A  <g transform=\"matrix(1,0,0,-1,0,80)\">%0A    <g transform=\"matrix(1,0,0,-1,0,160)\">%0A      <path%0A        d=\"m9.4332 86.067-1.7864-1.782c-4.6571 3.6624-7.6468 9.3405-7.6468 15.715 0 5.3448 2.1018 10.2 5.5258 13.788l1.7728-1.7684c-2.9708-3.1349-4.7924-7.365-4.7924-12.019 0-5.6848 2.7174-10.737 6.927-13.933zm2.7405 29.575-1.8541 1.8496c2.8814 1.5984 6.1991 2.5088 9.7299 2.5088 10.396 0 18.945-7.8934 19.95-18h-2.5205c-0.9949 8.7231-8.4191 15.5-17.43 15.5-2.8321 0-5.5075-0.6695-7.8758-1.8584zm19.256-28.96 1.6169-1.9102c-3.5-2.9753-8.0385-4.7712-12.997-4.7712-1.6482 0-3.2499 0.19838-4.7825 0.57251l2.1313 2.126c0.8646-0.13074 1.75-0.19853 2.6512-0.19853 4.3427 0 8.3169 1.574 11.38 4.1814z\"%0A        fill=\"%2330D34B\" fill-rule=\"evenodd\" />%0A      <path%0A        d=\"m20.05 86.045v-0.045285c-6.0798 0-11.257 3.8564-13.207 9.2507-1.9631 5.3748-0.47868 11.63 4.1686 15.519 5.4162 4.5336 13.258 4.2889 18.375-0.2846l-0.0192-0.0161c2.4219-2.1464 4.0939-5.1163 4.5748-8.4695h-5.0945q-0.1527 0.6663-0.4092 1.3128-0.6879 1.7331-2.0091 3.0512-1.3213 1.318-3.0587 2.0041-1.6001 0.6319-3.3211 0.6319-1.7209 0-3.321-0.6319-1.7374-0.6861-3.0587-2.0041-1.3213-1.3181-2.0091-3.0512-0.63347-1.5961-0.63346-3.3128 0-1.5702 0.52996-3.0395 0.54154-1.4842 1.5643-2.7 1.1062-1.3151 2.62-2.1316 1.6437-0.8866 3.5051-1.049 1.8615-0.16246 3.6345 0.42595 1.633 0.54193 2.9513 1.6454l3.2219-3.8302c-2.6269-2.1988-5.8244-3.2736-9.0047-3.2757z\"%0A        fill=\"%231E9F33\" fill-rule=\"evenodd\" />%0A    </g>%0A  </g>%0A</svg>";
      _0x1d1cb0.alt = "用户头像";
      _0x1d1cb0.style.width = "120px";
      _0x1d1cb0.style.height = "120px";
      _0x1d1cb0.style.cursor = "pointer";
      _0x1d1cb0.style.borderRadius = "50%";
      _0x1d1cb0.style.marginBottom = "10px";
      if (!this.isProfilePage && null) {
        let _0x3ab73c = _0x2749c2 => {
          if (_0x2749c2 && _0x2749c2.type.startsWith("application/json")) {
            let _0x4c52ed = new FileReader();
            _0x4c52ed.onload = _0x23a0bf => {
              infoDataVm.userInfo = JSON.parse(_0x23a0bf.target.result);
              this.manager.requestUpdate();
            };
            _0x4c52ed.readAsText(_0x2749c2);
          }
        };
        _0x1d1cb0.style.transition = "opacity 0.3s ease-in-out";
        _0x1d1cb0.title = "导入用户配置文件";
        _0x1d1cb0.addEventListener("dragover", _0x1d0235 => {
          _0x1d1cb0.style.opacity = "0.5";
          _0x1d0235.preventDefault();
        });
        _0x1d1cb0.addEventListener("dragleave", _0x3d4c7a => {
          _0x1d1cb0.style.opacity = "1";
          _0x3d4c7a.preventDefault();
        });
        _0x1d1cb0.addEventListener("mouseover", () => {
          _0x1d1cb0.style.opacity = "0.5";
        });
        _0x1d1cb0.addEventListener("mouseout", () => {
          _0x1d1cb0.style.opacity = "1";
        });
        _0x1d1cb0.addEventListener("drop", _0x37f98d => {
          _0x1d1cb0.style.opacity = "1";
          let _0x3c1d9a = _0x37f98d.dataTransfer.files[0];
          _0x3ab73c(_0x3c1d9a);
          _0x37f98d.preventDefault();
        });
        _0x1d1cb0.addEventListener("click", () => {
          let _0xa7b811 = document.createElement("input");
          _0xa7b811.type = "file";
          _0xa7b811.accept = "application/json";
          _0xa7b811.style.display = "none";
          _0xa7b811.addEventListener("change", _0x404007 => {
            let _0x3b044a = _0x404007.target.files[0];
            _0x3ab73c(_0x3b044a);
          });
          _0xa7b811.click();
        });
      } else {
        _0x1d1cb0.style.transition = "opacity 0.3s ease-in-out";
        _0x1d1cb0.title = "下载用户配置文件";
        _0x1d1cb0.addEventListener("click", () => {
          const _0x179e08 = {
            type: "application/json"
          };
          let _0x4be083 = new Blob([JSON.stringify(null, null, 2)], _0x179e08);
          let _0x4e982b = URL.createObjectURL(_0x4be083);
          let _0x1d0247 = document.createElement("a");
          _0x1d0247.download = null.uuid + ".json";
          _0x1d0247.href = _0x4e982b;
          _0x1d0247.click();
          URL.revokeObjectURL(_0x4e982b);
        });
        _0x1d1cb0.addEventListener("mouseover", () => {
          _0x1d1cb0.style.opacity = "0.5";
        });
        _0x1d1cb0.addEventListener("mouseout", () => {
          _0x1d1cb0.style.opacity = "1";
        });
      }
      let _0x306ae1 = () => {
        this.avatarRotation = 0;
        this.animationFrame = null;
      };
      if (!this.animationFrame) {
        _0x306ae1();
      }
      let _0x1deba3 = document.createElement("div");
      _0x1deba3.textContent = null?.["userName"] ?? "请稍等...";
      _0x1deba3.style.fontSize = "16px";
      _0x1deba3.style.fontWeight = "bold";
      _0x4780ff.appendChild(_0x1d1cb0);
      _0x4780ff.appendChild(_0x1deba3);
      _0x170f39.appendChild(_0x4780ff);
      let _0x57cb07 = this.renderFeatureList();
      _0x170f39.appendChild(_0x57cb07);
      let _0x2d2163 = document.createElement("strong");
      _0x2d2163.style.color = "#999";
      _0x2d2163.textContent = "CSense v0.1";
      _0x2d2163.style.display = "block";
      _0x2d2163.style.textAlign = "center";
      _0x170f39.appendChild(_0x2d2163);
      this.manager.target.appendChild(_0x170f39);
    }
    ["dispose"]() {}
  };
  _0x24e9df("\n  .csense-window input, textarea !important {\n    font-family: unset;\n  }\n");
  var _0x3b5495 = document.createElement("div");
  var _0x371923 = new _0x2ebdaf(_0x3b5495);
  _0x371923.addOverlay(new _0x1133e7(_0x371923));
  _0x371923.open(new _0x19d1c9(_0x371923));
  _0x371923._doSetTitle = _0xd349a3(_0x3b5495, () => !_0x371923.back());
  _0x371923._updateTitle();
})();
