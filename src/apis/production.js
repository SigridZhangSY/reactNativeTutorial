const mockData = [
    {
        id: 1,
        name: "The Shawshank Redemption",
        poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SY1000_CR0,0,672,1000_AL_.jpg",
        price: 34.5,
        releaseDate: "1994"
    },
    {
        id: 2,
        name: "The Godfather",
        poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BZTRmNjQ1ZDYtNDgzMy00OGE0LWE4N2YtNTkzNWQ5ZDhlNGJmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY268_CR3,0,182,268_AL_.jpg",
        price: 44,
        releaseDate: "1972"
    },
    {
        id: 3,
        name: "The Godfather: Part II",
        poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjZiNzIxNTQtNDc5Zi00YWY1LThkMTctMDgzYjY4YjI1YmQyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY268_CR3,0,182,268_AL_.jpg",
        price: 47,
        releaseDate: "1974"
    },
    {
        id: 4,
        name: "The Dark Night",
        poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        price: 23.7,
        releaseDate: "2008"
    },
    {
        id: 5,
        name: "12 Angry Men",
        poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BYzNlNWRmNjgtYWZlOS00MTQ1LTk5MjItODFmNThjNzM1MTM5L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        price: 32.8,
        releaseDate: "1957"
    },
    {
        id: 6,
        name: "Schindler's List",
        poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
        price: 30,
        releaseDate: "1993"
    },
    {
        id: 7,
        name:"Pulp Fiction",
        poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_UX182_CR0,0,182,268_AL_.jpg",
        price: 25,
        releaseDate: "1994"
    },
];

export const fetchProductions = () =>(
    Promise.resolve(mockData)
);