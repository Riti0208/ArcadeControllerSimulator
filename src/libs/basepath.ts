import { format } from "url";
import getConfig from "next/config";

const { publicRuntimeConfig = {} } = getConfig() || {};
const { basePath } = publicRuntimeConfig;

const exportBasePath = (path: string) => {
  const formatPath = format((basePath || "") + (path || ""));
  return formatPath;
};

export default exportBasePath;
