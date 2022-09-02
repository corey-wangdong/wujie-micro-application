import { AppHost, AppName } from "./const";
import hostMap from "./hostMap";

// 判断环境
export const isProduction = process.env.NODE_ENV === 'production';

// 获取子APP地址映射
export const getAppUrl = (appName:AppName) => hostMap(AppHost[appName]);

// 获取子APP的 属性
export const getAppAttrs = (appName:AppName) => isProduction ? { src: getAppUrl(appName) } : {}

// 获取子APP的配置
export const getAppConfigure = (appName:AppName) => {
  return {
    name: appName,
    url: getAppUrl(appName),
    attrs: getAppAttrs(appName),
    exec: true,
    alive: true
  }
}