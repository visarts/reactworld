/** puts all given object properties into a
    single 'style' object for use in inline css **/
export default function bindStyles (...styles) {
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
