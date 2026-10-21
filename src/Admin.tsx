import closeIcon from './assets/icon-close.svg'
import './Admin.css'

type Dish = {
  name: string
  price: string
  ordered: number
}

const dishes: Dish[] = [
  { name: 'Grilled Chicken Wrap', price: '$9.50', ordered: 0 },
  { name: 'Caesar Salad', price: '$8.00', ordered: 1 },
  { name: 'Falafel Bowl', price: '$8.50', ordered: 0 },
]

type AdminProps = {
  onSelectStaff?: () => void
}

function Admin({ onSelectStaff }: AdminProps) {
  return (
    <div className="admin-screen">
      <div className="admin-container">
        <nav className="admin-nav">
          <div className="admin-nav-inner">
            <div className="admin-brand-row">
              <p className="admin-brand">MealMate</p>
              <p className="admin-date">Fri, Aug 14</p>
            </div>
            <div className="admin-tabs">
              <button type="button" className="admin-tab" onClick={onSelectStaff}>
                staff
              </button>
              <button type="button" className="admin-tab admin-tab--active" aria-current="page">
                admin
              </button>
            </div>
          </div>
        </nav>

        <main className="admin-main">
          <section>
            <h2 className="admin-mono-label">Publish Today's Menu</h2>
            <form className="admin-form" onSubmit={(e) => e.preventDefault()}>
              <label className="admin-field">
                <span className="admin-field-label">Dish name</span>
                <input className="admin-input" type="text" placeholder="e.g. Grilled Chicken Wrap" />
              </label>
              <label className="admin-field">
                <span className="admin-field-label">Price ($)</span>
                <input className="admin-input" type="number" placeholder="0.00" />
              </label>
              <button type="submit" className="admin-submit">
                Add to Menu
              </button>
            </form>
          </section>

          <section className="admin-menu">
            <h2 className="admin-mono-label">Menu · {dishes.length} dishes</h2>
            <ul className="admin-dish-list">
              {dishes.map((dish) => (
                <li key={dish.name} className="admin-card admin-dish">
                  <div className="admin-dish-info">
                    <p className="admin-dish-name">{dish.name}</p>
                    <p className="admin-dish-price">{dish.price}</p>
                  </div>
                  <div className="admin-dish-actions">
                    <div className="admin-ordered">
                      <p className="admin-ordered-count">{dish.ordered}</p>
                      <p className="admin-ordered-label">ordered</p>
                    </div>
                    <button type="button" className="admin-remove" aria-label={`Remove ${dish.name}`}>
                      <img src={closeIcon} alt="" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="admin-card admin-summary">
              <p className="admin-summary-orders">1 order today</p>
              <p className="admin-summary-total">$8.00</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Admin
