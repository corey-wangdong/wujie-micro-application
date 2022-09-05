import React from 'react';
import WujieReact from 'wujie-react';
import { useNavigate, useLocation } from "react-router-dom";
import { getAppUrl } from '../tools/utils';
import { AppName } from '../tools/const';

function Vue3() {
  const navigation = useNavigate();
  const location = useLocation();
  const path = location.pathname.replace("/vue3", "").replace("/", "");

  const vue3Url = getAppUrl(AppName.Vue3) + path;
  console.log('vue3Url---', vue3Url);

  const props = {
    jump: (name: string) => {
      navigation(`/${name}`);
    },
  };
  return (
    // 单例模式，name相同则复用一个无界实例，改变url则子应用重新渲染实例到对应路由
    <>
      <h2>Vue3</h2>
      <WujieReact
        width="100%"
        height="100%"
        name={AppName.Vue3}
        url={vue3Url}
        sync={true}
        props={props}
      ></WujieReact>
    </>
  )
}

export default Vue3;