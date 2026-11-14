import { useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setSuccess('')

    if (!email.trim() || !password) {
      setError('Ingresa tu correo y contraseña para continuar.')
      return
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Ingresa un correo electrónico válido.')
      return
    }

    setSuccess('Tus datos son válidos. Estamos preparando tu acceso.')
  }

  function handleForgotPassword(event) {
    event.preventDefault()
    setError('')
    setSuccess('Te enviaremos instrucciones para recuperar tu contraseña.')
  }

  return (
    <main className="login-page">
      <section className="login-panel" aria-labelledby="login-title">
        <div className="brand-mark" aria-hidden="true">
          <img src={heroImg} alt="" />
        </div>

        <div className="intro">
          <p className="eyebrow">Bienvenido de nuevo</p>
          <h1 id="login-title">Inicia sesión</h1>
          <p className="subtitle">Accede a tu cuenta para continuar.</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="email">Correo electrónico</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="tu@correo.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              aria-invalid={Boolean(error)}
            />
          </div>

          <div className="field">
            <div className="password-label">
              <label htmlFor="password">Contraseña</label>
              <a href="#forgot-password" onClick={handleForgotPassword}>
                ¿La olvidaste?
              </a>
            </div>
            <div className="password-input">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                placeholder="••••••••"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                aria-invalid={Boolean(error)}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword((visible) => !visible)}
                aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              >
                {showPassword ? 'Ocultar' : 'Mostrar'}
              </button>
            </div>
          </div>

          {error && (
            <p className="form-message error" role="alert">
              {error}
            </p>
          )}
          {success && (
            <p className="form-message success" role="status">
              {success}
            </p>
          )}

          <button className="submit-button" type="submit">
            Entrar
            <span aria-hidden="true">→</span>
          </button>
        </form>

        <p className="signup">
          ¿Aún no tienes una cuenta? <a href="#signup">Crear cuenta</a>
        </p>
      </section>
    </main>
  )
}

export default App
