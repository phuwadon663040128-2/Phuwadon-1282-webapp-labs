import { GitHubAvatar, GitHubRepoURL } from '../shared/GitHubComponents.jsx'
import './App.css'

export default function App() {
  const userInfo = {
    url: 'https://github.com/phuwadon663040128-2',
    imgURL: 'https://avatars.githubusercontent.com/u/150763834?v=4',
    alt: 'Phuwadon Thongrong',
  }

  return (
    <main className="App">
      <h1>{userInfo.alt}</h1>
      <GitHubAvatar imgURL={userInfo.imgURL} alt={userInfo.alt} size={200} />
      <div><GitHubRepoURL url={userInfo.url} /></div>
    </main>
  )
}
