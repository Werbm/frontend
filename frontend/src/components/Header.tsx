

export function Header() {
    return (
        <header>
            <nav className="h-20 bg-slate-600 flex justify-between items-center p-8">
                <span className="text-7xl font-extrabold">Filmes</span>
                <section className="flex gap-4 text-white no-">
                    <a href="#" className="text-decoration-none text-white text-xl font-bold">Home</a>
                    <a href="#" className="text-decoration-none text-white text-xl font-bold">Link</a>
                </section>
            </nav>
        </header>
    );
}