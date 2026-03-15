//не успели на уроке
//1.
interface User {
   id: number;
   email: string;
   first_name: string;
   last_name: string;
   avatar: string;
   age: number;
}
const users: User[] = [
   {
      "id": 7,
      "email": "michael.lawson@reqres.in",
      "first_name": "Michael",
      "last_name": "Lawson",
      "avatar": "https://reqres.in/img/faces/7-image.jpg",
      "age": 23
   },
   {
      "id": 8,
      "email": "lindsay.ferguson@reqres.in",
      "first_name": "Lindsay",
      "last_name": "Ferguson",
      "avatar": "https://reqres.in/img/faces/8-image.jpg",
      "age": 20
   }
];
//2.
interface Product {
   id: number;
   name: string;
   price: number;
   currency: string;
   ingredients: string[];
   type: string;
   available: boolean;
}
const products: Product[] = [
   {
      id: 1,
      name: "Burger Premium",
      price: 6,
      currency: "euro",
      ingredients: ["flour", "beef", "salad", "cheese", "sauce"],
      type: "burger",
      available: true
   },
   {
      id: 2,
      name: "Burger Lite",
      price: 2.3,
      currency: "euro",
      ingredients: ["flour", "beef", "cheese", "sauce", "cucumber"],
      type: "burger",
      available: true
   },
];
//3.
const getUser = (id: number, users: User[]): User | undefined => users.find((user) => user.id === id);
//домашнее задание
interface Faculties {
   id: number;
   faculty: string;
   subjects: string[];
   countStudents: number;
}
//1.
const faculties: Faculties[] = [
   {
      id: 1,
      faculty: "History department",
      subjects: ["The World History", "History of Rome"],
      countStudents: 44
   },
   {
      id: 2,
      faculty: "Department of Biology",
      subjects: ["biology", "chemistry"],
      countStudents: 50
   },
   {
      id: 3,
      faculty: "Faculty of Mathematics",
      subjects: ["mathematics", "geometry", "trigonometry"],
      countStudents: 72
   },
   {
      id: 4,
      faculty: "Faculty of Design",
      subjects: ["ui", "ux", "graphic design"],
      countStudents: 37
   }
];

interface Movie {
   id: number;
   title: string;
   year: number;
   released: string;
   runtime: string;
   genre: string[];
   director: string;
   writer: string;
   actors: string[];
   plot: string;
   country: string,
   poster: string;
   imdbRating: number;
   imdbVotes: number;
   type: string;
   boxOffice: string;
   production: string;
}
//2.
const movies: Movie[] = [
   {
      id: 1,
      title: "Black Widow",
      year: 2021,
      released: "09 Jul 2021",
      runtime: "134 min",
      genre: ["Action", "Sci-Fi", "Adventure"],
      director: "Cate Shortland",
      writer: "Eric Pearson, Jac Schaeffer, Ned Benson",
      actors: ["Scarlett Johansson", "Florence Pugh", "DavidHarbour"],
      plot: "Natasha Romanoff confronts the darker parts of herledger when a dangerous conspiracy with ties to her past arises.",
      country: "United States",
      poster: "https://m.media-amazon.com / images / M / MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
      imdbRating: 6.9,
      imdbVotes: 121932,
      type: "movie",
      boxOffice: "$138,027,361",
      production: "Marvel Studios",
   },
   {
      id: 2,
      title: "Harry Potter and the Deathly Hallows: Part 2",
      year: 2011,
      released: "15 Jul 2011",
      runtime: "130 min",
      genre: ["Adventure", "Drama", "Fantasy"],
      director: "David Yates",
      writer: "Steve Kloves, J.K. Rowling",
      actors: ["Daniel Radcliffe", "Emma Watson", "RupertGrint"],
      plot: "Harry, Ron, and Hermione search for Voldemort'sremaining Horcruxes in their effort to destroy the Dark Lord as thefinal battle rages on at Hogwarts.",
      country: "United Kingdom, United States",
      poster: "https://m.media-amazon.com / images / M / MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
      imdbRating: 8.1,
      imdbVotes: 790377,
      type: "movie",
      boxOffice: "$381,409,310",
      production: "Heyday Films, Moving Picture Company, WarnerBros.",
   },
];