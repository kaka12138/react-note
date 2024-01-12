import dayjs from "dayjs"
import SidebarNoteItemContent from "@/components/SidebarNoteItemContent"

export default function SidebarNoteItem({ noteId, note }) {
  const { title, content = "", updateTime } = note
  console.log("content", content)
  return (
    <SidebarNoteItemContent
      id={noteId}
      title={title}
      expandedChildren={
        <p className="my-expanded-text">
          {content || <i>(No content)</i>}
        </p>
      }
    >
      <header className="sidebar-note-header">
        <small>{dayjs(updateTime).format('YYYY-MM-DD hh:mm:ss')}</small>
      </header>
    </SidebarNoteItemContent>
  )
}
