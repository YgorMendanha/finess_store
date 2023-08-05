'use client'

import React, { useId } from 'react'
import { ImSpinner10 } from 'react-icons/im'

interface PropsComponent {
  label?: string
}

export function CheckboxComponent({
  label,
  className = ''
}: {
  label?: string
  className?: string
}) {
  const id = useId()

  return (
    <div className={`flex flex-row ${className}`}>
      <input
        type="checkbox"
        id={id}
        className="
       appearance-none h-6 w-6 bg-gray-400 rounded-full 
       checked:bg-indigo-300 checked:scale-75
       transition-all duration-200 peer
   "
      />
      <div
        className="h-6 w-6 absolute rounded-full pointer-events-none
   peer-checked:border-indigo-300 peer-checked:border-2
   "
      />
      <label
        htmlFor={id}
        className="flex flex-col justify-center px-2 peer-checked:text-indigo-400  select-none"
      >
        {label}
      </label>
    </div>
  )
}
