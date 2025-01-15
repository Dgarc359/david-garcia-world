import useSWR from "swr";
import { serialize } from "next-mdx-remote/serialize";

export function useMdxSerializer(mdxData: any) {
  return useSWR("mdx-serialize", () => serialize(mdxData).then((data) => data));
}
