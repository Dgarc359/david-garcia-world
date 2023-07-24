// import {Axios} from 'axios';

export async function getRepoLanguages (account: string, repo: string) {
  const res = await fetch(`https://api.github.com/repos/${account}/${repo}/languages`, {
    method: "GET",
    redirect: "follow",
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.text())
  .catch(e => console.error(e));

  return res ?? "{}"
}