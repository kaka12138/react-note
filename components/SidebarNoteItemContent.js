"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
export default function SidebarNoteContent({ id, title, expandedChildren, children }) {
  const router = useRouter()
  const [isExpanded, setIsExpanded] = useState(false)
  const toggle = (e) => {
    e.stopPropagation()
    setIsExpanded((oldExpanded) => !oldExpanded)
  }
  const gotoNoteDetail = () => {
    router.push(`/note/${id}`)
  }
  return (
    <div className="my-note-list-item" onClick={gotoNoteDetail}>
      <div className="title">
        <span>{title}</span>
        <button className={ ['btn', isExpanded ? 'is-active' : ""].join(" ") } onClick={toggle}>
          {isExpanded ? <img src="/chevron-up.svg" /> : <img src="/chevron-down.svg" />}
        </button>
      </div>
      {children}
      {isExpanded && expandedChildren}
    </div>
  )

}
