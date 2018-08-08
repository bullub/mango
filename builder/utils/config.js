import environment from './environment';
import atkConfig from '../config/atk-config';
import rule from '../config/rule';
import devAccessConfig from '../config/access.dev';
import stgAccessConfig from '../config/access.stg';
import uatAccessConfig from '../config/access.uat';
import prdAccessConfig from '../config/access.prd';
import buildConfig from '../config/build-config';

import _ from 'lodash';

const ENV_DEV = 'dev';
const ENV_STG = 'stg';
const ENV_UAT = 'uat';
const ENV_PRD = 'prd';

const CONFIG = {
  buildConfig,
  atkConfig,
  rule,
  access: {
    dev: devAccessConfig,
    stg: stgAccessConfig,
    uag: uatAccessConfig,
    prd: prdAccessConfig
  }
};

export default {
  getConfig
};

/**
 * 根据访问环境获取访问环境信息
 * @param {String} accessEnv 访问环境
 * @returns {Object} 对应访问环境的所有配置信息
 */
function readConfigByAccessEnv(accessEnv) {
  return {
    buildConfig: _.merge(CONFIG.atkConfig, CONFIG.access[accessEnv].buildConfig),
    atkConfig: _.merge(CONFIG.atkConfig, CONFIG.access[accessEnv].atkConfig),
    rule: CONFIG.rule
  };
}

/**
 * 响应所有配置信息
 * @returns {Object} 所有配置信息
 */
function getConfig() {
  let accessEnvironment = environment.getAccessEnvironment();

  switch (accessEnvironment) {
    case "":
    case ENV_DEV:
    case ENV_STG:
    case ENV_UAT:
    case ENV_PRD:
      return readConfigByAccessEnv(accessEnvironment);
    default:
      throw new Error(`未知的访问环境: --[${accessEnvironment}] `);
  }
}