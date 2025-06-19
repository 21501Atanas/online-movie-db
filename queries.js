use onlineMovieDB

// ===== MOVIES =====

// Всички филми
db.movies.find()

// Филми по жанр
db.movies.find({ genre: "Sci-Fi" })

// Филми по жанр и година
db.movies.find({ genre: "Sci-Fi", year: { $gte: 2010 } })

// Актуализация: промяна на рейтинг на даден филм
db.movies.updateOne(
  { title: "Inception" },
  { $set: { rating: 9.0 } }
)

// Изтриване на филм по заглавие
db.movies.deleteOne({ title: "The Irishman" })

// Агрегиране: среден рейтинг по жанр
db.movies.aggregate([
  { $group: { _id: "$genre", avgRating: { $avg: "$rating" }, total: { $sum: 1 } }},
  { $sort: { avgRating: -1 } }
])

// ===== DIRECTORS =====

// Всички директори
db.directors.find()

// Филтриране по националност
db.directors.find({ nationality: "American" })

// Филтриране по рождена дата
db.directors.find({ birthDate: { $lt: new Date("1950-01-01") } })

// Актуализация: промяна на националност
db.directors.updateOne(
  { name: "Christopher Nolan" },
  { $set: { nationality: "British" } }
)

// Изтриване на директор
db.directors.deleteOne({ name: "Martin Scorsese" })

// Агрегиране: брой филми по режисьор
db.movies.aggregate([
  { $group: { _id: "$director", count: { $sum: 1 } }},
  { $sort: { count: -1 } }
])

// ===== USERS =====

// Всички потребители
db.users.find()

// Филтриране по държава
db.users.find({ country: "Bulgaria" })

// Филтриране по имейл (regex)
db.users.find({ email: /@movie.bg$/ })

// Актуализация: смяна на име
db.users.updateOne(
  { email: "ivan@movie.bg" },
  { $set: { name: "Ivan G. Petrov" } }
)

// Изтриване на потребител по имейл
db.users.deleteOne({ email: "john@example.com" })

// Агрегиране: брой потребители по държава
db.users.aggregate([
  { $group: { _id: "$country", totalUsers: { $sum: 1 } }},
  { $sort: { totalUsers: -1 } }
])

// ===== WATCHLISTS =====

// Всички списъци
db.watchlists.find()

// Списък по потребител ID
db.watchlists.find({ userId: 1 })

// Списъци с поне 3 филма
db.watchlists.find({ $expr: { $gte: [ { $size: "$movies" }, 3 ] } })

// Актуализация: добавяне на филм към списък
db.watchlists.updateOne(
  { userId: 1 },
  { $addToSet: { movies: 10 } }
)

// Изтриване на списък
db.watchlists.deleteOne({ userId: 5 })

// Агрегиране: брой филми в списъците
db.watchlists.aggregate([
  { $project: { userId: 1, totalMovies: { $size: "$movies" } }},
  { $sort: { totalMovies: -1 } }
])

// ===== REVIEWS =====

// Всички рецензии
db.reviews.find()

// Рецензии с рейтинг 9 или повече
db.reviews.find({ rating: { $gte: 9 } })

// Филтриране по потребител и оценка
db.reviews.find({ userId: 1, rating: 9 })

// Актуализация: смяна на коментар
db.reviews.updateOne(
  { userId: 1, movieId: 1 },
  { $set: { comment: "Невероятен филм!" } }
)

// Изтриване на рецензия
db.reviews.deleteOne({ userId: 3, movieId: 3 })

// Агрегиране: средна оценка по филм
db.reviews.aggregate([
  { $group: { _id: "$movieId", avgRating: { $avg: "$rating" }, totalReviews: { $sum: 1 } }},
  { $sort: { avgRating: -1 } }
])
