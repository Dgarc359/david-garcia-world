// import {Axios} from 'axios';

export async function getRepoLanguages (account: string, repo: string) {
  const res = await fetch(`https://api.github.com/repos/${account}/${repo}/languages`, {
    method: "GET",
    redirect: "follow",
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.json())
  .catch(e => console.error(e));

  return res ?? {}
}

export async function getRepoMilestones(account: string, repo: string) {
  const res = await fetch(`https://api.github.com/repos/${account}/${repo}/milestones?state=all&direction=desc`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.json())
  .catch(e => console.error(e));

  return res ?? {}
}
