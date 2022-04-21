export default function ResponsiveSearch() {
    return (
        <>
            {/* Responsive-Search */}
            <div className="responsive-search-wrapper">
                <button
                    type="button"
                    className="button ion ion-md-close"
                    id="responsive-search-close-button"
                />
                <div className="responsive-search-container">
                    <div className="container">
                        <p>Start typing and press Enter to search</p>
                        <form className="responsive-search-form">
                            <label className="sr-only" htmlFor="search-text">
                                Search
                            </label>
                            <input
                                id="search-text"
                                type="text"
                                className="responsive-search-field"
                                placeholder="PLEASE SEARCH"
                            />
                            <i className="fas fa-search" />
                        </form>
                    </div>
                </div>
            </div>
            {/* Responsive-Search /- */}
        </>
    )
}