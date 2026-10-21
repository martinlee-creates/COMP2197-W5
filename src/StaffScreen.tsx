import checkSmallIcon from './assets/icon-check-small.svg'
import checkIcon from './assets/icon-check.svg'
import './StaffScreen.css'

type MenuItem = {
  name: string
  price: string
  selected: boolean
}

const menu: MenuItem[] = [
  { name: 'Grilled Chicken Wrap', price: '$9.50', selected: false },
  { name: 'Caesar Salad', price: '$8.00', selected: true },
  { name: 'Falafel Bowl', price: '$8.50', selected: false },
]

function StaffScreen() {
  return (
    <div className="staff-screen">
      <div className="staff-container">
        <nav className="staff-nav">
          <div className="staff-nav-inner">
            <div className="staff-brand-row">
              <p className="staff-brand">MealMate</p>
              <p className="staff-date">Fri, Aug 14</p>
            </div>
            <div className="staff-tabs">
              <button type="button" className="staff-tab staff-tab--active" aria-current="page">
                staff
              </button>
              <button type="button" className="staff-tab">
                admin
              </button>
            </div>
          </div>
        </nav>

        <main className="staff-main">
          <div className="staff-user-row">
            <p className="staff-user-name">Leo Yeung</p>
            <div className="staff-user-actions">
              <div className="staff-demo-clock">
                <span className="staff-mono-label">Demo</span>
                <span className="staff-time-picker" aria-hidden="true" />
              </div>
              <button type="button" className="staff-not-you">
                Not you?
              </button>
            </div>
          </div>

          <div className="staff-cutoff">
            <span className="staff-cutoff-dot" aria-hidden="true" />
            <p>Orders closed — cutoff was 10:30 AM</p>
          </div>

          <section className="staff-menu">
            <h2 className="staff-mono-label staff-mono-label--medium">Today's Menu</h2>
            <div className="staff-menu-list">
              {menu.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  className={`staff-menu-item${item.selected ? ' staff-menu-item--selected' : ''}`}
                  aria-pressed={item.selected}
                  disabled={!item.selected}
                >
                  <span className="staff-menu-item-main">
                    <span className="staff-radio" aria-hidden="true">
                      {item.selected && <img src={checkSmallIcon} alt="" />}
                    </span>
                    <span className="staff-menu-item-name">{item.name}</span>
                  </span>
                  <span className="staff-menu-item-price">{item.price}</span>
                </button>
              ))}
            </div>
          </section>

          <div className="staff-order-status">
            <img src={checkIcon} alt="" />
            <p>Order placed — Caesar Salad</p>
          </div>

          <div className="staff-spend">
            <p className="staff-mono-label staff-mono-label--medium">
              Your lunch spend — August 2026
            </p>
            <p className="staff-spend-amount">$8.00</p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default StaffScreen
