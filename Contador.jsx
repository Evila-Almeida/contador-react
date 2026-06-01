import { useState } from 'react'

const styles = {
  card: {
    background: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
    padding: '2.5rem 2rem',
    width: '100%',
    maxWidth: '420px',
    textAlign: 'center',
  },
  header: {
    marginBottom: '2rem',
  },
  badge: {
    display: 'inline-block',
    background: '#ebf3fb',
    color: '#2E6DA4',
    fontSize: '0.75rem',
    fontWeight: '700',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    padding: '0.3rem 0.8rem',
    borderRadius: '50px',
    marginBottom: '0.75rem',
  },
  titulo: {
    fontSize: '1.6rem',
    fontWeight: '700',
    color: '#2d3748',
    marginBottom: '0.3rem',
  },
  subtitulo: {
    fontSize: '0.9rem',
    color: '#718096',
  },
  visor: {
    background: '#f0f4f8',
    borderRadius: '12px',
    padding: '1.5rem',
    marginBottom: '2rem',
  },
  label: {
    fontSize: '0.8rem',
    fontWeight: '600',
    color: '#718096',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    marginBottom: '0.5rem',
  },
  valor: {
    fontSize: '4rem',
    fontWeight: '800',
    lineHeight: 1,
    transition: 'color 0.3s ease',
  },
  controles: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    marginBottom: '1.5rem',
  },
  btnBase: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    border: 'none',
    fontSize: '1.8rem',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'transform 0.15s ease, box-shadow 0.15s ease',
    lineHeight: 1,
  },
  btnMenos: {
    background: '#fdecea',
    color: '#c0392b',
  },
  btnMais: {
    background: '#ebf3fb',
    color: '#2E6DA4',
  },
  btnReset: {
    background: 'transparent',
    border: '1.5px solid #e2e8f0',
    borderRadius: '8px',
    padding: '0.5rem 1.5rem',
    fontSize: '0.85rem',
    fontWeight: '600',
    color: '#718096',
    cursor: 'pointer',
    transition: 'border-color 0.2s ease, color 0.2s ease',
  },
  info: {
    marginTop: '1.25rem',
    fontSize: '0.8rem',
    color: '#a0aec0',
  },
}

function Contador() {
  const [contador, setContador] = useState(0)

  const incrementar = () => setContador(prev => prev + 1)
  const decrementar = () => setContador(prev => prev - 1)
  const resetar = () => setContador(0)

  const corValor = contador > 0
    ? '#2E6DA4'
    : contador < 0
    ? '#c0392b'
    : '#2d3748'

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <span style={styles.badge}>⚛ React + useState</span>
        <h1 style={styles.titulo}>Contador</h1>
        <p style={styles.subtitulo}>Fametro | Desenvolvimento Front-End</p>
      </div>

      <div style={styles.visor}>
        <p style={styles.label}>Valor atual</p>
        <p style={{ ...styles.valor, color: corValor }}>
          {contador}
        </p>
      </div>

      <div style={styles.controles}>
        <button
          style={{ ...styles.btnBase, ...styles.btnMenos }}
          onClick={decrementar}
          aria-label="Decrementar"
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.1)'
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(192,57,43,0.3)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          −
        </button>

        <button
          style={{ ...styles.btnBase, ...styles.btnMais }}
          onClick={incrementar}
          aria-label="Incrementar"
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.1)'
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(46,109,164,0.3)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          +
        </button>
      </div>

      <button
        style={styles.btnReset}
        onClick={resetar}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = '#2E6DA4'
          e.currentTarget.style.color = '#2E6DA4'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = '#e2e8f0'
          e.currentTarget.style.color = '#718096'
        }}
      >
        Resetar
      </button>

      <p style={styles.info}>
        {contador === 0
          ? 'Clique + ou − para começar'
          : contador > 0
          ? `${contador} incremento${contador !== 1 ? 's' : ''} realizados`
          : `${Math.abs(contador)} decremento${Math.abs(contador) !== 1 ? 's' : ''} realizados`}
      </p>
    </div>
  )
}

export default Contador
