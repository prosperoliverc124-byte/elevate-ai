export default function Home() {
  return (
    <main style={{
      backgroundColor: '#06000f',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      textAlign: 'center'
    }}>
      <img 
        src="https://i.postimg.cc/15bRJjJw/181324196-1782545815145541.jpg" 
        style={{ width: '100px', height: '100px', borderRadius: '20px', marginBottom: '20px' }}
      />
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white', margin: '0' }}>
        ELEVATE<span style={{ color: '#00d2ff' }}>AI</span>
      </h1>
      <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '10px' }}>Your intelligence, amplified.</p>
      
      <div className="glass" style={{ marginTop: '30px', padding: '30px', width: '100%', maxWidth: '350px' }}>
        <button style={{
          width: '100%',
          padding: '15px',
          backgroundColor: 'white',
          color: 'black',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '12px',
          cursor: 'pointer'
        }}>
          Continue with Google
        </button>
      </div>
    </main>
  )
  }
