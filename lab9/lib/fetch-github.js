const githubUsername = "phuwadon663040128-2";
const profileContainer = document.querySelector("#github-profile");

async function loadGithubProfile() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${githubUsername}`,
    );

    if (!response.ok) {
      throw new Error(`GitHub API error with status ${response.status}`);
    }

    const user = await response.json();
    const heading = document.createElement("h1");
    const profileLink = document.createElement("a");
    const avatar = document.createElement("img");

    profileLink.href = user.html_url;
    profileLink.target = "_blank";
    profileLink.rel = "noopener noreferrer";
    profileLink.textContent = user.name || user.login;

    avatar.src = user.avatar_url;
    avatar.alt = `${user.name || user.login}'s GitHub avatar`;
    avatar.width = 260;
    avatar.height = 260;
    avatar.addEventListener("error", () => {
      if (avatar.dataset.fallbackUsed === "true") {
        return;
      }

      avatar.dataset.fallbackUsed = "true";
      avatar.src = "images/github-avatar.png";
    });

    heading.appendChild(profileLink);
    profileContainer.replaceChildren(heading, avatar);
  } catch (error) {
    const errorMessage = document.createElement("p");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = `Error: ${error.message}`;
    profileContainer.replaceChildren(errorMessage);
    alert(errorMessage.textContent);
  }
}

loadGithubProfile();
