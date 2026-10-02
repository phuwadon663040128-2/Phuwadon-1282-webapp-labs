import personalAvatar from './images/phuwadon.png'
import reactAvatar from './images/react.png'
import nextAvatar from './images/nextjs.png'

const profiles = [
  {
    name: 'Phuwadon Thongrong',
    avatar: personalAvatar,
    repository: 'https://github.com/phuwadon663040128-2/Phuwadon-1282-webapp-labs/tree/main/lab11',
  },
  {
    name: 'react',
    avatar: reactAvatar,
    repository: 'https://github.com/facebook/react',
  },
  {
    name: 'next.js',
    avatar: nextAvatar,
    repository: 'https://github.com/vercel/next.js',
  },
]

function Profile({ name, avatar, repository, isStudent }) {
  const Heading = isStudent ? 'h1' : 'h2'

  return (
    <section className="profile">
      <Heading>{name}</Heading>
      <img src={avatar} alt={`${name}'s GitHub avatar`} width="166" height="166" />
      <a href={repository} target="_blank" rel="noreferrer">
        GitHub repository
      </a>
    </section>
  )
}

export default function App() {
  return (
    <main>
      {profiles.map((profile, index) => (
        <Profile key={profile.name} {...profile} isStudent={index === 0} />
      ))}
    </main>
  )
}
