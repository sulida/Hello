//Задача. Вывести все статьи, в которых есть теги alpha, beta (оба тега сразу)
db.articles.find(
    {tags: {$all: ["alpha", "beta"]}}
)