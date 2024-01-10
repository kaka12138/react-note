// 'use client' 如果是客户端组件，day.js会被打包到客户端的bundle中
import dayjs from "dayjs"
export default function SidebarNoteList({ notes }) {
  const arr = Object.entries(notes)
  if (arr.length === 0) {
    return (
      <div className="notes-empty">
        {'No notes created yet!'}
      </div>
    )
  }

  return <ul className="notes-list">
    {arr.map(([noteId, note]) => {
      const { title, updateTime } = JSON.parse(note)
      return <li key={noteId}>
        <header className="sidebar-note-header">
          <strong>{title}</strong>
          <small>{dayjs(updateTime).format("YYYY-MM-DD hh:mm:ss")}</small>
        </header>
      </li>
    })}
  </ul>
}
