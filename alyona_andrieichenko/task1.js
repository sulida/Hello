// Уменьшить на 3% баланс пользователей, которые не из Germany и не из France, имеющие положительный баланс
db.users.updateMany(
    { country: { $nin: 'Germany', 'France'}, balance: { $gt: 0 } },
    { $mul: { balance: .97 } }
);