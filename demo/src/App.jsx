import { AlignJustify } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./components/ui/sheet";
import { Button } from "./components/ui/button";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="outer-container">
        {/* Navbar */}
        <nav
          className="bg-black w-full flex justify-between h-[50px] items-center navbar"
          style={{ padding: "20px" }}
        >
          {/* Left Content */}
          <div className="nav-left-content flex gap-10">
            {/* Sidebar */}
            <Sheet>
              <SheetTrigger>
                <div className="menu-icon-container">
                  <AlignJustify className="text-white" />
                </div>
              </SheetTrigger>
              <SheetContent side="left" className="bg-black text-white">
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
            <ul className="flex gap-4">
              <li className="inline-block px-4 py-2 text-white">
                <a href="/">Home</a>
              </li>
              <li className="inline-block px-4 py-2 text-white">
                <a href="/about">About</a>
              </li>
              <li className="inline-block px-4 py-2 text-white">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Right Content */}
          <div className="nav-right-content">
            <Button
              variant={"primary"}
              className="bg-blue-500  hover:bg-blue-700 text-white font-bold  rounded cursor-pointer "
              style={{ padding: "10px 20px" }}
              onClick={() => alert("Login clicked!")}
            >
              Signup
            </Button>
          </div>
        </nav>

        {/* Main Content */}

        <main>
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/about" element={<div>About Page</div>} />
            <Route path="/*" element={<div>404 Not Found</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
