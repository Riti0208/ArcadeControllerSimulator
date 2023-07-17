import { format } from "url";
import getConfig from "next/config";

const { publicRuntimeConfig = {} } = getConfig() || {};
const { basePath } = publicRuntimeConfig;

const exportBasePath = (path: string): string =>
  format((basePath || "") + (path || ""));

export default exportBasePath;
