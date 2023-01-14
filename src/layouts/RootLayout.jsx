import { Outlet } from "react-router-dom"

const RootLayout = () => {
    return (
        <main className="App">
         {/* NAVBAR & REST OF THE COMMON CONTENT GOES HERE */}
            <h2>Root Layout with navbar and all</h2>
            <Outlet />
        </main>
    )
}

export default RootLayout
