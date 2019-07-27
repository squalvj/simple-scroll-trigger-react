import React from 'react'
import './ContentGrid.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const ContentGrid = props => {
   const {
      data
   } = props
   return (
      <div className="content-grid" id="content-grid">
        {
           (data||[]).map((e, i) => (
              <div key={i} className="grid">
                 <div className="wrapper-title">
                    <h2>
                       {e.title}
                    </h2>
                    <FontAwesomeIcon icon={e.icon} />
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