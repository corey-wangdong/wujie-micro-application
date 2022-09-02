import React from 'react';
import hostMap from '../tools/hostMap';
import WujieReact from 'wujie-react';
import { useNavigate, useLocation } from "react-router-dom";

function React16() {
  const navigation = useNavigate();
  const location = useLocation();
  const path = location.pathname.replace("/react16-sub", "").replace("/react16", "").replace("/", ""); ////

  const react16Url = hostMap("//localhost:8600/") + path;
  console.log('react16Url---', react16Url);

  const props = {
    jump: (name: string) => {
      navigation(`/${name}`);
    },
  };
  return (
    // 单例模式，name相同则复用一个无界实例，改变url则子应用重新渲染实例到对应路由
    <WujieReact
      width="100%"
      height="100%"
      name="react16"
      url={react16Url}
      sync={true}
      props={props}
    ></WujieReact>
  )
}

export default React16