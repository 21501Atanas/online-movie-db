// Избиране на базата данни
use onlineMovieDB

// === ДИРЕКТОРИ ===
db.directors.insertMany([
  { _id: 1, name: "Christopher Nolan", birthDate: new Date("1970-07-30"), nationality: "British-American" },
  { _id: 2, name: "Steven Spielberg", birthDate: new Date("1946-12-18"), nationality: "American" },
  { _id: 3, name: "Martin Scorsese", birthDate: new Date("1942-11-17"), nationality: "American" },
  { _id: 4, name: "Hayao Miyazaki", birthDate: new Date("1941-01-05"), nationality: "Japanese" },
  { _id: 5, name: "Quentin Tarantino", birthDate: new Date("1963-03-27"), nationality: "American" },
  { _id: 6, name: "James Cameron", birthDate: new Date("1954-08-16"), nationality: "Canadian" },
  { _id: 7, name: "Ridley Scott", birthDate: new Date("1937-11-30"), nationality: "British" },
  { _id: 8, name: "Denis Villeneuve", birthDate: new Date("1967-10-03"), nationality: "Canadian" },
  { _id: 9, name: "Peter Jackson", birthDate: new Date("1961-10-31"), nationality: "New Zealander" },
  { _id: 10, name: "George Lucas", birthDate: new Date("1944-05-14"), nationality: "American" }
]);

// === ФИЛМИ ===
db.movies.insertMany([
  { title: "Inception", director: 1, genre: "Sci-Fi", year: 2010, rating: 8.8, tags: ["dream", "mind", "action"] },
  { title: "Jurassic Park", director: 2, genre: "Adventure", year: 1993, rating: 8.1, tags: ["dinosaurs", "island"] },
  { title: "The Irishman", director: 3, genre: "Crime", year: 2019, rating: 7.8, tags: ["mafia", "drama"] },
  { title: "Spirited Away", director: 4, genre: "Animation", year: 2001, rating: 8.6, tags: ["fantasy", "spirits"] },
  { title: "Pulp Fiction", director: 5, genre: "Crime", year: 1994, rating: 8.9, tags: ["dialogue", "nonlinear"] },
  { title: "Avatar", director: 6, genre: "Sci-Fi", year: 2009, rating: 7.9 },
  { title: "Blade Runner", director: 7, genre: "Sci-Fi", year: 1982, rating: 8.1 },
  { title: "Dune", director: 8, genre: "Sci-Fi", year: 2021, rating: 8.0, languages: ["English", "Fremen"] },
  { title: "The Lord of the Rings", director: 9, genre: "Fantasy", year: 2001, rating: 8.8, trilogy: true },
  { title: "Star Wars", director: 10, genre: "Sci-Fi", year: 1977, rating: 8.6 }
]);

// === ПОТРЕБИТЕЛИ ===
db.users.insertMany([
  { _id: 1, name: "Ivan Petrov", email: "ivan@movie.bg", registered: new Date(), country: "Bulgaria" },
  { _id: 2, name: "Maria Dimitrova", email: "maria@movie.bg", registered: new Date(), country: "Bulgaria" },
  { _id: 3, name: "John Doe", email: "john@example.com", registered: new Date(), country: "USA" },
  { _id: 4, name: "Jane Smith", email: "jane@example.com", registered: new Date(), country: "UK" },
  { _id: 5, name: "Ali Hassan", email: "ali@egypt.com", registered: new Date(), country: "Egypt" },
  { _id: 6, name: "Wei Chen", email: "wei@china.cn", registered: new Date(), country: "China" },
  { _id: 7, name: "Lina Karlsson", email: "lina@sweden.se", registered: new Date(), country: "Sweden" },
  { _id: 8, name: "Carlos Ruiz", email: "carlos@spain.es", registered: new Date(), country: "Spain" },
  { _id: 9, name: "Fatima Ali", email: "fatima@pakistan.pk", registered: new Date(), country: "Pakistan" },
  { _id: 10, name: "Emily Zhang", email: "emily@china.cn", registered: new Date(), country: "China" }
]);

// === СПИСЪЦИ ЗА ГЛЕДАНЕ ===
db.watchlists.insertMany([
  { userId: 1, movies: [1, 2, 3], createdAt: new Date() },
  { userId: 2, movies: [4, 5], createdAt: new Date() },
  { userId: 3, movies: [6, 7], createdAt: new Date() },
  { userId: 4, movies: [8, 9], createdAt: new Date() },
  { userId: 5, movies: [10], createdAt: new Date() },
  { userId: 6, movies: [1, 4, 7], createdAt: new Date() },
  { userId: 7, movies: [2, 5], createdAt: new Date() },
  { userId: 8, movies: [3, 6], createdAt: new Date() },
  { userId: 9, movies: [8, 9], createdAt: new Date() },
  { userId: 10, movies: [1, 2, 3, 4, 5], createdAt: new Date() }
]);

// === РЕЦЕНЗИИ ===
db.reviews.insertMany([
  { movieId: 1, userId: 1, rating: 9, comment: "Уникален филм!", date: new Date() },
  { movieId: 2, userId: 2, rating: 8, comment: "Много напрегнат!", date: new Date() },
  { movieId: 3, userId: 3, rating: 7, comment: "Дълъг, но добър.", date: new Date() },
  { movieId: 4, userId: 4, rating: 10, comment: "Анимацията е страхотна.", date: new Date() },
  { movieId: 5, userId: 5, rating: 9, comment: "Невероятни диалози.", date: new Date() },
  { movieId: 6, userId: 6, rating: 8, comment: "Визуално страхотен.", date: new Date() },
  { movieId: 7, userId: 7, rating: 7, comment: "Класика!", date: new Date() },
  { movieId: 8, userId: 8, rating: 8, comment: "Епичен!", date: new Date() },
  { movieId: 9, userId: 9, rating: 10, comment: "Любим филм!", date: new Date() },
  { movieId: 10, userId: 10, rating: 9, comment: "Много добра история.", date: new Date() }
]);
