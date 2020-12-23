class AppBootHook {

  constructor(app) {
    this.app = app;
  }

  async didReady() {
    // console.log('didReady------------------')
    // 请将您的 app.beforeStart 中的代码置于此处。
  }

  async didLoad() {
    // console.log('didLoad------------------')
    // 请将你的插件项目中 app.beforeStart 中的代码置于此处。
  }

  async willReady() {
    // console.log('willReady------------------')
    // 请将你的应用项目中 app.beforeStart 中的代码置于此处。
  }

  async beforeClose() {
    // console.log('beforeClose------------------')
    // 请将您的 app.beforeClose 中的代码置于此处。
  }
}

module.exports = AppBootHook;
