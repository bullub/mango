import Eagle from 'eagle';

const Index = Eagle.extend({
  // eslint-disable-next-line
  constructor: function Index() {
    Index._Parent(this, arguments);
  },
  b: function b() {

  }
});

new Index();

export default Index;