import React from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'

const NotFoundComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const wrapper = {
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  }

  const card = {
    maxWidth: 720,
    width: '100%',
    textAlign: 'center',
    padding: '2rem',
    borderRadius: 12,
    boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
    background: 'linear-gradient(180deg,#fff,#f8f6f3)'
  }

  const title = { fontSize: '4.5rem', margin: 0, lineHeight: 1 }
  const message = { marginTop: '0.5rem', marginBottom: '0.25rem', color: '#333' }
  const pathStyle = { color: '#666', fontSize: '0.95rem', marginBottom: '1.25rem' }
  const kbd = { background: '#eee', padding: '0.15rem 0.5rem', borderRadius: 6, fontFamily: 'monospace' }
  const actions = { display: 'flex', gap: '0.75rem', justifyContent: 'center' }
  const btn = { padding: '0.6rem 1rem', borderRadius: 8, border: '1px solid rgba(0,0,0,0.08)', background: 'white', cursor: 'pointer' }
  const primary = { ...btn, background: '#aacd1bff', color: 'white', border: 'none' }

  return (
    <div style={wrapper}>
      <div style={card}>
        <h1 style={title}>404</h1>
        <p style={message}>We couldn't find the page you're looking for.</p>
        <p style={pathStyle}>Attempted path: <span style={kbd}>{location.pathname}</span></p>

        <div style={actions}>
          <button aria-label="Go back" onClick={() => navigate(-1)} style={btn}>Go back</button>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <button aria-label="Go home" style={primary}>Go home</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundComponent