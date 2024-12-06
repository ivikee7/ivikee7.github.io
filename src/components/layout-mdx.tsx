export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
    return (
        <div className="prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white">
            <div className="left-sidebar bg-gray">
                <h1>Left Sidebar</h1>
            </div>
            <div className="content">
                {children}
            </div>
            <div className="right-sidebar">
                <h1>Right Sidebar</h1>
            </div>
            <div className="bg-black text-white auto mb-0">
                <h1>All rights reserved.</h1>
            </div>
        </div>
    )
}