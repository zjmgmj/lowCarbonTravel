import test from './test'
const server = {
  crmProxy: 'http://192.168.80.200:8080/crmserver/api/v1/', // crm测试环境
  urlProxy: 'http://192.168.80.147:8980/', // ERP测试环境
  appUrlProxy: 'http://192.168.80.147:8080/' // 仓储测试环境
}

const api = {
  logoApi: {
    loadData: server.urlProxy + test.loadData
  }
}

export default api
