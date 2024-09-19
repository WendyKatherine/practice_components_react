export const SecondComponent = () => {

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
                {/* <ul>
                    <li> {books[0]} </li>
                    <li> {books[1]} </li>
                    <li> {books[2]} </li>
                    <li> {books[3]} </li>
                    <li> {books[4]} </li>
                    <li> {books[5]} </li>
                    <li> {books[6]} </li>
                    <li> {books[7]} </li>
                </ul> */}
                <ul>
                    {
                        books.map((book, index) => {
                            return <li key={index}>{book}</li>;
                        })
                    }
                </ul>
            </div>
        </>
    )
}