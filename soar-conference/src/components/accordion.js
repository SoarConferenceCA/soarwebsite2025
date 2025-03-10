'use client'
import { useState } from "react"

export default function Accordion(info) {
  const [open, setOpen] = useState(-1)

  const handleOpen = (value)=> setOpen(open === value ? -1: value)

  return(
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-5">
      {
        info.list.map((data, index) => (
          
          <div>
            <button onClick={() => handleOpen(index)} type="button" class="flex items-center justify-between w-full p-5 text-xl rtl:text-right text-gray-500 border border-gray-200 rounded-t-xl dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 h-20" >
              <span>{data.question}</span>
              { open === index
              ?
              <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
              </svg>
              &&
              <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
              </svg>
              :
              <svg data-accordion-icon class="w-3 h-3 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
              </svg>
              &&
              <svg data-accordion-icon class="w-3 h-3  shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
              </svg>
              }
            </button>
            {
              open === index
              &&
              <div class="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">{data.answer}</p>
              </div>
            }
          </div>)
        )
      }
    </div>
  )
}