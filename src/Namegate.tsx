import './Namegate.css'

type NamegateProps = {
  onContinue?: () => void
}

function Namegate({ onContinue }: NamegateProps) {
  return (
    <div className="namegate-screen">
      <div className="namegate-container">
        <nav className="namegate-nav">
          <div className="namegate-nav-inner">
            <div className="namegate-brand-row">
              <p className="namegate-brand">MealMate</p>
              <p className="namegate-date">Fri, Aug 14</p>
            </div>
            <div className="namegate-tabs">
              <button type="button" className="namegate-tab namegate-tab--active" aria-current="page">
                staff
              </button>
              <button type="button" className="namegate-tab">
                admin
              </button>
            </div>
          </div>
        </nav>

        <main className="namegate-main">
          <div>
            <h1 className="namegate-title">Welcome to MealMate</h1>
            <p className="namegate-intro">
              Enter your name once and this device will remember you.
            </p>
          </div>

          <form className="namegate-form" onSubmit={(e) => {
              e.preventDefault()
              onContinue?.()
            }}>
            <label className="namegate-field">
              <span className="namegate-field-label">Your name</span>
              <input className="namegate-input" type="text" placeholder="e.g. Jordan Lee" />
            </label>
            <button type="submit" className="namegate-continue">
              Continue
            </button>
          </form>
        </main>
      </div>
    </div>
  )
}

export default Namegate
