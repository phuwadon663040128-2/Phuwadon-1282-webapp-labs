import './App.css'
import '../shared/index.css'

function GitHubAvatar() {
  return (
    <img
      src="https://avatars.githubusercontent.com/u/150763834?v=4"
      alt="Phuwadon Thongrong"
      width="250"
      height="250"
    />
  )
}

function GitHubRepoURL() {
  return (
    <a href="https://github.com/phuwadon663040128-2"
       target="_blank" rel="noopener noreferrer">
      My GitHub repository
    </a>
  )
}

export default function GitHubInfo() {
  return (
    <main className="github-info">
      <h1>My GitHub Information</h1>
      <GitHubAvatar />
      <GitHubRepoURL />
    </main>
  )
}
