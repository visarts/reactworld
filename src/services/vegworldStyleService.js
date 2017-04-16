
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
const bindStyles = function (type1, ...otherTypes) {
  let types = Object.assign({}, type1);
  if (otherTypes.length) {
    for (let i in otherTypes) {
      Object.assign(types, otherTypes[i]);
    }
  }
  return {
    style: types
  };
};

export {
  fontstyle,
  background,
  borders,
  bindStyles
};
