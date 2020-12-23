// 处理链上数据相关
const { Controller } = require('egg');

class BlockchainController extends Controller {
  constructor(ctx) {
    super(ctx);
  }
  async info() {
    const { ctx, app } = this;

    console.log('查询链上数据来了')

    // if (error) {
    //   ctx.logger.error(
    //     '链上查询数据出错！',
    //     error,
    //     ctx.url,
    //   );
    // }
    ctx.type = 'text/plain';
    ctx.status = 200;
    ctx.body = 'ok 链上数据来了';
  }
}

module.exports = BlockchainController;
