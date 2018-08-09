import Eagle from 'eagle';
const Home = Eagle.extend({
  // eslint-disable-next-line
  constructor: function Home(rootElement) {
    Home._Parent(this, arguments);
    this.$root.html('123');
  },
  /**********************************事件声明******************************************/
  events: {

  },
  /*********************************事件处理器*****************************************/
  eventHandlers: {
  }
});

new Home();

export default Home;