import React from 'react'
/* STYLES */
import { Wrapper } from './Tooltip.style'
/* TOOLTIP */
import ReactTooltip from 'react-tooltip'

const Tooltip: React.FC = () => {
  return (
    <Wrapper>
      <button>
        <i className="fas fa-info-circle" data-tip='You can press "Enter" to make your search.'/>
      </button>
      <ReactTooltip/>
    </Wrapper>

  )
}

export default Tooltip
