import { AppHost } from "./const";

interface IMap {
  [key:string]: string
}
const map:IMap = {
  [AppHost.React16]: "//wujie-micro.github.io/demo-react16/",
  [AppHost.React17]: "//wujie-micro.github.io/demo-react17/",
};

export default function hostMap(host: string) {
  if (process.env.NODE_ENV === "production") return map[`${host}`];
  return host;
}
