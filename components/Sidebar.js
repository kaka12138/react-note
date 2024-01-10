import Link from "next/link"
import SidebarNoteList from "@/components/SidebarNoteList"
import { getAllNotes } from "@/lib/redis"

export default async function SiderBar() {
  const notes = await getAllNotes()
  return (
    <>
      <section className="col sidebar">
        <section >
          <Link href={'/'} className="link--unstyled">
            <section className="sidebar-header">
              <img
                className="logo"
                src="/logo.svg"
                width="22px"
                height="20px"
                alt=""
                role="presentation"
              />
              <strong>React Notes</strong>
            </section>
          </Link>
        </section>
        <section className="sidebar-menu" role="menubar">
          {/* serachArea */}
        </section>
        <nav>
          <SidebarNoteList notes={notes} />
        </nav>
      </section>
    </>
  )
}
