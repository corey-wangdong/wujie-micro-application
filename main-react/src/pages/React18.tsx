import React from 'react';
import WujieReact from 'wujie-react';
import { useNavigate, useLocation } from "react-router-dom";
import { getAppUrl } from '../tools/utils';
import { AppName } from '../tools/const';

function React18() {
  const navigation = useNavigate();
  const location = useLocation();
  const path = location.pathname.replace("/react16-sub", "").replace("/react16", "").replace("/", ""); ////

  const react18Url = getAppUrl(AppName.React18) + path;
  console.log('react18Url---', react18Url);

  const props = {
    jump: (name: string) => {
      navigation(`/${name}`);
    },
  };
  return (
    // 单例模式，name相同则复用一个无界实例，改变url则子应用重新渲染实例到对应路由
    <>
      <h2>React18</h2>
      <WujieReact
        width="100%"
        height="100%"
        name={AppName.React18}
        url={react18Url}
        sync={true}
        props={props}
      ></WujieReact>
    </>
  )
}

export default React18;