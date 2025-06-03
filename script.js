const username = "lundbergsimon";

async function fetchRepositories() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?type=owner&sort=updated&per_page=100`
    );
    const repos = await response.json();

    repos.forEach((repo) => {
      const repositoryCard = document.createElement("a");
      repositoryCard.href = repo.html_url;
      repositoryCard.target = "_blank";
      repositoryCard.innerHTML = `
          <div class="github-repository-card card">
            <div class="repo-name">${repo.name}</div>
            <div class="repo-description">${
              repo.description || "No description"
            }</div>
          </div>
      `;
      const repositoryCardList = document.getElementById("github-repositories");
      repositoryCardList.appendChild(repositoryCard);
    });
  } catch (error) {
    console.error(error);
  }
}

fetchRepositories();
