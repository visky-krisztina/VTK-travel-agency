import React from 'react'

const Title = ({title, subtitle}) => {
  return (
    
    <section className="section" id="about">
      <div className="section-title">
        <h2>{title} <span>{subtitle}</span></h2>
      </div>
    </section>

  )
}

export default Title;