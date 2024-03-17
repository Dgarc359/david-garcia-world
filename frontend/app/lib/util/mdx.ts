import useSWR from "swr";
import { serialize } from "next-mdx-remote/serialize";

export function serializeMdx(mdxData: any) {
  return useSWR("mdx-serialize", () => serialize(mdxData).then((data) => data));
}
