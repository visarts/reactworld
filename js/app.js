//just importing something with the file name imports everything from the file
import '../less/main.less';
import header from './header.js';
import home from './home.js';
//use 'import * as varName from ...' if the exporting file has multiple export statements
//then you'd access each exported object by referencing varName.objectName

header();
home();
