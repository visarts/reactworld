/** puts all given object properties into a
    single 'style' object for use in inline css **/



export const browserCheck = {
  // Opera 8.0+
  isOpera: (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0,
  // Firefox 1.0+
  isFirefox: typeof InstallTrigger !== 'undefined',

  // Safari 3.0+ '[object HTMLElementConstructor]'
  isSafari: /constructor/i.test(window.HTMLElement) || ((p) => { return p.toString() === '[object SafariRemoteNotification]'; })(!window['safari'] || safari.pushNotification),

  // Internet Explorer 6-11
  isIE: /*@cc_on!@*/false || !!document.documentMode,

  // Edge 20+
  //const isEdge = !isIE && !!window.StyleMedia;

  // Chrome 1+
  isChrome: !!window.chrome && !!window.chrome.webstore

  // Blink engine detection
  //const isBlink = (isChrome || isOpera) && !!window.CSS;
}

export function bindStyles (..._styles) {
  let styles = _styles;
  if (styles.length) {
    let element = {
      style: {}
    }
    for (let i in styles) {
      Object.keys(styles[i]).map((prop) => {
        element.style[prop] = styles[i][prop];
      });
    }
    return element;
  }

};
