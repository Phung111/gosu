import React, { useState, useEffect, useRef } from 'react'

const SelectCustom = ({ className, children }) => {
  const [selectedChild, setSelectedChild] = useState(children[0])
  const [showOptions, setShowOptions] = useState(false)
  const selectRef = useRef(null)

  const handleSelectChange = (child) => {
    setSelectedChild(child)
    setShowOptions(false)
    setShowOptions((prevShowOptions) => !prevShowOptions)
  }

  const toggleOptions = () => {
    setShowOptions((prevShowOptions) => !prevShowOptions)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setShowOptions(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const borderClasses = className
    .split(' ')
    .filter((cls) => cls.includes('border') || cls.includes('round'))
    .join(' ')

  return (
    <>
      <div ref={selectRef} onClick={toggleOptions} className={`${className} relative z-30 flex cursor-pointer items-center justify-between gap-3`}>
        <div className={`${selectedChild.props.className}`}>{selectedChild.props.children}</div>
        <div>
          <i className="fa-solid fa-angle-down"></i>
        </div>
        {showOptions && (
          <div className={`${borderClasses} absolute left-0 top-full w-full overflow-hidden pt-1`}>
            {React.Children.map(children, (child, index) => (
              <div className={`${className} relative z-0 flex items-center !rounded-none !border-none`} key={index} onClick={() => handleSelectChange(child)}>
                {React.cloneElement(child, { className: `${child.props.className}` })}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default SelectCustom
