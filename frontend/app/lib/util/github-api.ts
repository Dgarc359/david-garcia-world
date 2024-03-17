// import {Axios} from 'axios';
import useSWR from "swr";
import { Endpoints } from "@octokit/types";
import { Project } from "@/app/lib/types";

type ListUserReposResponse =
  Endpoints["GET /repos/{owner}/{repo}"]["response"]["data"];

const getFetcher = (url: string) =>
  // @ts-ignore
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res: any) => res.json())
    .catch((e: any) => console.error(e));

const SWRConfig = {
  refreshInterval: 1000 * 60 * 30,
  // TODO: DEV MODE only
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
};

export async function getRepoLanguages(account: string, repo: string) {
  // @ts-ignore
  const res = await fetch(
    `https://api.github.com/repos/${account}/${repo}/languages`,
    {
      method: "GET",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
      },
    },
  )
    .then((res: any) => res.json())
    .catch((e: any) => console.error(e));

  return res ?? {};
}

export function useGetRepoMilestones(account: string, repo: string) {
  const url = `https://api.github.com/repos/${account}/${repo}/milestones?state=all&direction=desc&per_page=5&page=1`;

  return useSWR(url, getFetcher, SWRConfig);
}

export function useGetIssueByMilestone(params: {
  account: string;
  repo: string;
  milestoneName: string;
  issueLimit: number;
}) {
  const { account, repo, milestoneName, issueLimit } = params;

  // @ts-ignore
  const queryParams = encodeURIComponent(
    `repo:${account}/${repo} type:issue milestone:"${milestoneName}"`,
  );

  const url = `https://api.github.com/search/issues?q=${queryParams}&sort=created&per_page=${issueLimit}`;

  return useSWR(url, getFetcher, SWRConfig);
}

/**
 * Returns a list of repositories with the 'generally-available' tag
 * @param account: The github account to search through repositories
 */
export function getGenerallyAvailableRepositories(account: string): {
  isLoading: boolean;
  error: any;
  data: undefined | Project[];
} {
  const url = `https://api.github.com/users/${account}/repos`;
  const { data, error, isLoading } = useSWR(url, getFetcher, SWRConfig);
  console.log("swr ga data", data);
  if (isLoading || error) {
    return { isLoading, error, data };
  }

  if (data) {
    if (!data.length) {
      return { isLoading, error, data: undefined };
    }
    const parsedRepositories: Project[] = data
      .filter((repo: ListUserReposResponse) =>
        repo.topics?.includes("generally-available"),
      )
      .map((repo: ListUserReposResponse) => {
        const accountName = repo.owner.name
          ? repo.owner.name
          : repo.full_name.split("/")[0];
        console.log(repo);
        const p: Project = {
          account: accountName,
          displayTitle: repo.name,
          description: repo.description ?? "",
          href: `/projects/${repo.name}`,
          filterableMetadata: {
            language: new Set([repo.language! as any]),
          },
          githubPayload: {},
        };
        return p;
      });
    return {
      isLoading,
      error,
      data: parsedRepositories,
    };
  }

  return {
    isLoading,
    error,
    data,
  };
}

export function getRepositoryMetadata(
  accountName: string,
  repoName: string,
): { readme: { data: unknown; error: unknown; isLoading: boolean } } {
  return {
    readme: getRepositoryReadme(accountName, repoName),
  };
}

export function getRepositoryReadme(accountName: string, repoName: string) {
  const url = `https://raw.githubusercontent.com/${accountName}/${repoName}/main/readme.md`;
  return useSWR("get-repo-md", () =>
    fetch(url, {
      method: "GET",
      headers: { "content-type": "text/plain; charset=utf-8" },
    }).then((data) => {
      return data.text();
    }),
  );
}
