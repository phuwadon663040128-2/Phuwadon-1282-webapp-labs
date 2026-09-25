import { useEffect, useState } from 'react'

const username = 'phuwadon663040128-2'
const repositoryUrl = `https://github.com/${username}/Phuwadon-1282-webapp-labs`

function App() {
  const [profile, setProfile] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`)

        if (!response.ok) {
          throw new Error('Cannot load GitHub profile')
        }

        setProfile(await response.json())
      } catch (err) {
        setError(err.message)
      }
    }

    loadProfile()
  }, [])

  return (
    <main className="profile-card">
      <h1>My GitHub Information</h1>

      {profile ? (
        <>
          <img
            className="avatar"
            src={profile.avatar_url}
            alt={`${profile.login}'s GitHub avatar`}
          />
          <p className="username">@{profile.login}</p>
        </>
      ) : (
        <p className="status">{error || 'Loading GitHub profile...'}</p>
      )}

      <a href={repositoryUrl} target="_blank" rel="noreferrer">
        My GitHub repository
      </a>
    </main>
  )
}

export default App
