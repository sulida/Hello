db.users.updateMany(
    {country: {$nin['Germany','France']},
        $gt: {balance: 0}
    },
    {$mul: {balance: 1.03}}
)
