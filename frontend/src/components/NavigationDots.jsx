import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
      {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className='app__navigation-dot'
          style={active === item ? { backgroundColor: '#313BAC' } : {}}
          aria-label={`Go to ${item} section`}
        >
          {/* You can add a visually hidden span if you prefer */}
        </a>
      ))}
    </div>
  )
}

export default NavigationDots
