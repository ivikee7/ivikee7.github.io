export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
    return (
      <div>
        <div className="navbar"></div>
        <div className="sidebar"></div>
        <div className="content">
        {children}
        </div>
        <div className="footer"></div>
      </div>
    )
  }