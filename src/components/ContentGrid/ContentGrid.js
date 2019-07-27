import React from 'react'
import './ContentGrid.scss'
const ContentGrid = props => {
   const {
      data
   } = props
   return (
      <div className="content-grid">
        {
           (data||[]).map(e => (
              <div className="grid">
                 <div className="wrapper-title">
                    <h2>
                       {e.title}
                    </h2>
                    <img alt="grid" src={e.icon} />
                 </div>
                 <p className="wrapper-content-grid">
                    {e.content}
                 </p>
              </div>
           ))
        }
      </div>
   )
}

export default ContentGrid