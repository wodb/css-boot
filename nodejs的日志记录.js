import { configure, getLogger } from 'log4js'


configure({
  appenders: {
    stdout: { //控制台输出
      type: 'stdout'
    },
    req: { //请求日志
      type: 'dateFile',
      filename: 'logs/request/req',
      pattern: 'yyyy-MM-dd.log',
      alwaysIncludePattern: true
    },
    err: { //错误日志
      type: 'dateFile',
      filename: 'logs/error/err',
      pattern: 'yyyy-MM-dd.log',
      alwaysIncludePattern: true
    }
  },
  categories: {
    // level: trace < debug < info < warn < error < fatal
    default: { appenders: ['stdout', 'req'], level: 'trace' },
    err: { appenders: ['stdout', 'err'], level: 'warn' }
  }
})


export const logger = getLogger()
export const loggerErr = getLogger('err')