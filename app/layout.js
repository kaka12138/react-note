import "./style.css"
import SiderBar from "@/components/Sidebar"

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <div className="main">
            <SiderBar />
            <section className="col note-viewer">{ children }</section>
          </div>
        </div>
      </body>
    </html>
  )
}
