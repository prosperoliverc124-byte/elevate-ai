export default function Home() {
  return (
    <main style={{
      backgroundColor: '#06000f',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    }}>
      <img src="https://i.postimg.cc/15bRJjJw/181324196-1782545815145541.jpg" style={{width: '100px', borderRadius: '20px'}} />
      <h1 style={{fontSize: '3rem'}}>ELEVATE AI</h1>
      <div className="glass" style={{padding: '20px', marginTop: '20px'}}>
        <button style={{padding: '10px 20px', borderRadius: '10px', border: 'none', fontWeight: 'bold'}}>
          Continue with Google
        </button>
      </div>
    </main>
  )
            }
