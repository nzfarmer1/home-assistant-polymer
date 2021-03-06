import Polymer from '../polymer';

export default new Polymer({
  is: 'partial-base',

  properties: {
    narrow: {
      type: Boolean,
      value: false,
    },

    showMenu: {
      type: Boolean,
      value: false,
    },
  },

  computeMenuButtonClass(narrow, showMenu) {
    return !narrow && showMenu ? 'invisible' : '';
  },

  toggleMenu() {
    this.fire('open-menu');
  },
});
