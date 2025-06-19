// Създаване на база данни и колекции за онлайн филмова база

use onlineMovieDB

// Изчистване на съществуващите колекции
db.movies.drop()
db.directors.drop()
db.users.drop()
db.watchlists.drop()
db.reviews.drop()

// Създаване на колекции
db.createCollection("movies")
db.createCollection("directors")
db.createCollection("users")
db.createCollection("watchlists")
db.createCollection("reviews")

// Индекси
db.movies.createIndex({ title: 1 })
db.movies.createIndex({ genre: 1 })
db.directors.createIndex({ name: 1 })
db.users.createIndex({ email: 1 }, { unique: true })
db.watchlists.createIndex({ userId: 1 })
db.reviews.createIndex({ movieId: 1, userId: 1 })
