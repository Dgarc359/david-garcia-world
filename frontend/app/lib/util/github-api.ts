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
export function useGenerallyAvailableRepositories(account: string): {
  isLoading: boolean;
  error: any;
  data: undefined | Project[];
} {
  const url = `https://api.github.com/users/${account}/repos?per_page=100`;
  const { data, error, isLoading } = useSWR(url, getFetcher, SWRConfig);
  console.log("swr ga data", data);
  if (isLoading || error) {
    return { isLoading, error, data };
  }

  if (data && !data.length) {
    return { isLoading, error, data: undefined };
  }

  if (data) {
    const parsedRepositories: Project[] = data
      .filter(
        (repo: ListUserReposResponse) =>
          repo.topics?.includes("generally-available"),
      )
      .map(repositoryToProject);
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

function repositoryToProject(repo: ListUserReposResponse) {
  const account = repo.owner.name
    ? repo.owner.name
    : repo.full_name.split("/")[0];

  // const href = `projects/${repo.name}/`
  const href = repo.name
  console.log(href)

  console.log(repo);
  const p: Project = {
    href,
    account,
    displayTitle: repo.name,
    description: repo.description ?? "",
    filterableMetadata: {
      language: new Set([repo.language! as any]),
    },
    githubPayload: {},
  };
  return p;
}

export function useRepositoryMetadata(
  accountName: string,
  repoName: string,
): { readme: { data: unknown; error: unknown; isLoading: boolean } } {
  return {
    readme: useRepositoryReadme(accountName, repoName),
  };
}

export function useRepositoryReadme(accountName: string, repoName: string) {
  const url = `https://raw.githubusercontent.com/${accountName}/${repoName}/main/readme.md`;
  const failoverUrl = `https://raw.githubusercontent.com/${accountName}/${repoName}/main/README.md`;
  const fetchReadme = (url: string) =>
    fetch(url, {
      method: "GET",
      headers: { "content-type": "text/plain; charset=utf-8" },
    }).then((data) => {
      return data.text();
    });
  return useSWR(`get-repo-md-${repoName}`, () =>
    fetch(url, {
      method: "GET",
      headers: { "content-type": "text/plain; charset=utf-8" },
    })
      .then((data) => {
        if (data.status === 404) {
          return fetchReadme(failoverUrl);
        }
        return data.text();
      })
      .catch((e) => {
        return fetchReadme(failoverUrl);
      }),
  );
}
