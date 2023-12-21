import { User } from "./types";

export const users: User[] = [
    {
        id: '1',
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        password: '123456',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: '2',
        name: 'foe Doe',
        email: 'foedoe@gmail.com',
        password: '123456',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
    }
]