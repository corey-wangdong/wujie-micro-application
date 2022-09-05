import { AppHost } from "./const";

interface IMap {
  [key:string]: string
}
const map:IMap = {
  [AppHost.React18]: "//wujie-micro.github.io/demo-react18/",
  [AppHost.Vue3]: "//wujie-micro.github.io/demo-vue3/",
  [AppHost.Vue2]: "//wujie-micro.github.io/demo-react17/",
};

export default function hostMap(host: string) {
  if (process.env.NODE_ENV === "production") return map[`${host}`];
  return host;
}
