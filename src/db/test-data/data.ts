export = {
    users: [
        {
            email: 'blue@email.com',
            name: '아이유',
            nickname: 'blue',
            team: {
              connectOrCreate: {
                where: {
                  id: 1
                },
                create: {
                  name: 'business'
                }
              }
            }
        },
        {
            email: 'yellow@email.com',
            name: '백예린',
            nickname: 'yellow',
            team: {
              connectOrCreate: {
                where: {
                  id: 2
                },
                create: {
                  name: 'development'
                }
              }
            }
        }
    ]
}