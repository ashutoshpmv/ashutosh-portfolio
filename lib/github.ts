const GITHUB_USERNAME = "ashutoshpmv";

export async function getGithubRepos() {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub repositories");
  }

  return response.json();
}