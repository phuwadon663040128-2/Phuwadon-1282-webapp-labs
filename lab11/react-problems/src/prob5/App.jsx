import './App.css'
import { GitHubAvatar } from '../shared/GitHubComponents.jsx'
import { users } from '../shared/users.js'

export default function App() {
  const popularUsers = users.filter((user) => user.followers > 10000)

  return (
    <main className="user-list">
      <h1>Popular GitHub Repositories</h1>
      <ol>
        {popularUsers.map((user) => (
          <li key={user.url}>
            <GitHubAvatar imgURL={user.imgURL} alt={user.alt} size={100} />
            {' '}
            <a href={user.url} target="_blank" rel="noopener noreferrer">
              {user.alt}
            </a>
            { ` (${user.followers} followers)` }
          </li>
        ))}
      </ol>
    </main>
  )
}
