// import {Axios} from 'axios';
import useSWR from "swr";

const fetcher = (url: string) =>
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((e) => console.error(e));

export async function getRepoLanguages(account: string, repo: string) {
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
    .then((res) => res.json())
    .catch((e) => console.error(e));

  return res ?? {};
}

export function useGetRepoMilestones(account: string, repo: string) {
  const url = `https://api.github.com/repos/${account}/${repo}/milestones?state=all&direction=desc&per_page=5&page=1`;

  return useSWR(url, fetcher);
}

export async function getIssueByMilestone(params: {
  account: string;
  repo: string;
  milestoneName: string;
  issueLimit: number;
}) {
  const { account, repo, milestoneName, issueLimit } = params;

  const queryParams = encodeURIComponent(
    `repo:${account}/${repo} type:issue milestone:"${milestoneName}"`,
  );

  const res = await fetch(
    `https://api.github.com/search/issues?q=${queryParams}&sort=created&per_page=${issueLimit}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  )
    .then((res) => res.json())
    .catch((e) => console.error(e));

  return res ?? {};
}
