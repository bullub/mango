import environment from './environment';
import atkConfig from '../config/atk-config';
import rule from '../config/ax-rule';
import devAccessConfig from '../config/ax-access.dev';
import stgAccessConfig from '../config/ax-access.stg';
import uatAccessConfig from '../config/ax-access.uat';
import prdAccessConfig from '../config/ax-access.prd';

import _ from 'lodash';

const ENV_DEV = 'dev';
const ENV_STG = 'stg';
const ENV_UAT = 'uat';
const ENV_PRD = 'prd';

const CONFIG = {
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
    atkConfig: _.merge(CONFIG.atkConfig, CONFIG.access[accessEnv]),
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
    case ENV_DEV:
    case ENV_STG:
    case ENV_UAT:
    case ENV_PRD:
      return readConfigByAccessEnv(accessEnvironment);
    default:
      throw new Error(`未知的访问环境: --[${accessEnvironment}] `);
  }
}