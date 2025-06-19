# Online Movie DB

## Общо описание

`Online Movie DB` е MongoDB проект, който симулира база данни за онлайн платформа за филми. Системата включва информация за филми, режисьори, потребители, списъци за гледане и рецензии. Проектът демонстрира всички основни операции с MongoDB – създаване (insert), четене (find), редактиране (update), изтриване (delete) и агрегиране (aggregate pipeline).

---

## Колекции и структура на документите

### `movies`
Съхранява информация за филмите:
```json
{
  "title": "Inception",
  "director": 1,
  "genre": "Sci-Fi",
  "year": 2010,
  "rating": 8.8,
  "tags": ["dream", "action"],
  "trilogy": true,
  "languages": ["English", "Japanese"]
}
```

### `directors`
Съдържа биографични данни за режисьори:
```json
{
  "_id": 1,
  "name": "Christopher Nolan",
  "birthDate": "1970-07-30T00:00:00Z",
  "nationality": "British-American"
}
```

### `users`
Потребители на платформата:
```json
{
  "_id": 1,
  "name": "Ivan Petrov",
  "email": "ivan@movie.bg",
  "registered": "2024-06-01T12:00:00Z",
  "country": "Bulgaria"
}
```

### `watchlists`
Списъци с филми за гледане от конкретни потребители:
```json
{
  "userId": 1,
  "movies": [1, 2, 3],
  "createdAt": "2024-06-01T15:30:00Z"
}
```

### `reviews`
Рецензии на филми, дадени от потребители:
```json
{
  "movieId": 1,
  "userId": 1,
  "rating": 9,
  "comment": "Уникален филм!",
  "date": "2024-06-02T10:15:00Z"
}
```

---

## Инсталация и стартиране

1. **Инсталирайте MongoDB** на компютъра си.
2. **Стартирайте MongoDB Shell** (`mongosh`).
3. **Заредете файловете в следния ред**:

```bash
load("create_collections.js")   // Създава базата данни и колекциите
load("insert.js")               // Добавя начални данни в колекциите
load("queries.js")              // Изпълнява CRUD и агрегатни заявки
```

> Забележка: Уверете се, че `insert.js` се изпълнява след `create_collections.js`, тъй като използва `findOne()` върху вече съществуващи данни.

---

## Основни възможности

- CRUD операции върху 5 колекции
- Работа с различни типове данни: стрингове, числа, масиви, дати, вложени обекти
- Aggregate pipeline: групиране, сортиране, усредняване и филтриране
- Индекси за оптимизация

---

Проектът е съвместим с MongoDB Community Edition и може да бъде разширен за реално уеб приложение с Node.js и Mongoose.
