(function () {
  'use strict';

  var Home = Eagle.extend({
    constructor: function Home() {
      //调用父类构造器
      Home._Parent(this, arguments);
      this.$root.html('123');
    },
    /**********************************请求回调******************************************/
    responseHandlers: {},
    /**********************************事件声明******************************************/
    events: {},
    /*********************************事件处理器*****************************************/
    eventHandlers: {}
  });
  var home = new Home();

}());