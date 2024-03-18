db.users.updateMany(
    {
        country: { $ne: 'Germany', $ne: 'France'},
        balance: { $gt: 0 },
    },
    {
        $mul: { balance: .97 }
    }
)