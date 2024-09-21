const SecondComponent = () => {

    const books = [
        "Libro 1",
        "Libro 2",
        "Libro 3",
        "Libro 4",
        "Libro 5",
        "Libro 6",
        "Libro 7",
        "Libro 8",
        "libro 9 nuevo "
    ];

    return(
        <>
            <h1>Second Component</h1>
            <div>
                <ul>
                    {books.length >= 1 ? (
                        books.map((book, index) => {
                            return <li key={index}>{book}</li>;
                        })
                    ) : (
                        <p>No hay libros</p>
                    )}
                </ul>
            </div>
        </>
    )
}

export default SecondComponent