
/** snake-cased properties need to be made camelCased **/
const fontstyle = {
  fontFamily: 'helvetica',
  fontSize: '50px'
};

const background = {
  backgroundColor: '#cdcdef',
  backgroundAttachment: 'fixed'
};

const borders = {
  borderColor: '#ccc',
  borderWidth: '4px',
  borderStyle: 'solid'
}

/** puts all given object properties into a
    single 'style' object for use in inline css **/
const bindStyles = function (...styles) {
  console.log(styles);
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

export {
  fontstyle,
  background,
  borders,
  bindStyles
};
