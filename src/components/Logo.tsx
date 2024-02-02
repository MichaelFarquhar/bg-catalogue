export const Logo = () => {
    return (
        <div className="flex items-center p-4 space-x-4">
            <img
                src={'/logo.svg'}
                className="logo w-12 h-12 rounded-lg fill-th-text"
                alt="Vite logo"
            />
            <h1 className="text-5xl font-bold">BG Catalogue</h1>
        </div>
    );
};
