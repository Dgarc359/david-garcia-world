import path from "path";
import getConfig from "next/config";

export function getServerPath(staticFilePath: string) {
  return path.join(
    getConfig().serverRuntimeConfig.PROJECT_ROOT,
    staticFilePath,
  );
}
