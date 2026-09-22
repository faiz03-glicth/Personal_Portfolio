const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Project" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonial", label: "Testimonial" },

]
export const NavBar = () => {
    return <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
        <nav className="container mx-auto px-6 flex items-center justify-between">
            <a>
            Snoopy<span>Dev</span>
            </a>
            <div>
                <div>
                    {navLinks.map((link, index) => (
                        <a href={link.href} key={index}>
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    </header>};