
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
const bindStyles = function (selector, ...styles /*...otherTypes*/) {console.log('testing...');
  let identifier = selector.toString();
  let element = document.querySelector(`.${identifier}`);
  if (element) {
    for(let i in styles) {
      Object.keys(styles[i]).map((prop) => {
        element.style[prop] = styles[i][prop];
      });
    }
    //thing.style.backgroundColor = 'maroon';
    //thing.style.color = 'white';
  }
  /*let types = Object.assign({}, type1);
  if (otherTypes.length) {
    for (let i in otherTypes) {
      Object.assign(types, otherTypes[i]);
    }
  }
  return {
    style: types
  };*/
};

export {
  fontstyle,
  background,
  borders,
  bindStyles
};
