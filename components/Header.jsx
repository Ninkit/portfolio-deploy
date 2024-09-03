import Link from "next/link";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

import Nav from "./Nav";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        True
                        <span className="text-accent">SOME.</span>
                        <span className="text-xs"> tech</span>
                    </h1>
                </Link>

                <div className="hidden xl:flex gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>Hire me</Button>
                    </Link>

                </div>

                {/* mobile nav */}
                <div className="xl:hidden">
                <MobileNav />
                </div>
            </div>
        </header>)
    
} 
export default Header;