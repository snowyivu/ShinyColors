const win = window.unsafeWindow || window

win.eval = new Proxy(win.eval, {
  apply(target, _this, [code]) {
    if (code.includes('var n=window.csobb3pncbpccs;')) {
      code = code.replace(
        'var n=window.primJsp;',
        'var n=window.csobb3pncbpccs;window._require=t;'
      )
      code = code.replace(
        'Object.freeze({addHeader:',
        '({addHeader:'
      )
    }
    return Reflect.apply(target, _this, [code])
  }
})

win.eval.toString = () => 'function eval() { [native code] }'
