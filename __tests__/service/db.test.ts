import {UserInterface} from "@/models/User";
import {Repository} from "@/services/db";

describe('REPOSITORIES', () => {
    describe('USERS', () => {
        const user1: UserInterface = {
            id: '123456',
            email: '123456.789@test.fr',
            password: '123456789',
            lastname: '789',
            firstname: '123456'
        };
        const user2: UserInterface = {
            id: 'azerty',
            email: 'azerty.uiop@test.fr',
            password: 'azertyuiop',
            lastname: 'uiop',
            firstname: 'azerty'
        };

        const users: UserInterface[] = [user1, user2];

        const userRepository: Repository<UserInterface> = new Repository<UserInterface>(users);

        test('findAll', () => {
            const findAll: UserInterface[] = userRepository.findAll();

            expect(findAll.length).toBe(users.length);

            expect(findAll[0].id).toBe(user1.id);
            expect(findAll[1].id).toBe(user2.id);
        });

        test('find', () => {
            const find: UserInterface | undefined = userRepository.find(user1.id);

            expect(find.id).toBe(user1.id);

            expect(JSON.stringify(find)).toBe(JSON.stringify(user1));
        });

        test('find undefined', () => {
            const find: UserInterface | undefined = userRepository.find('65465465454654');

            expect(find).toBeUndefined();
        });

        test('findBy', () => {
            const findBy: UserInterface[] = userRepository.findBy([{key: "firstname", value: user1.firstname}]);

            expect(findBy.length).toBe(1);

            expect(findBy[0].id).toBe(user1.id);
            expect(findBy[0].firstname).toBe(user1.firstname);
        });

        test('findBy no criterias', () => {
            const findBy: UserInterface[] = userRepository.findBy([]);

            expect(findBy.length).toBe(users.length);

            expect(findBy[0].id).toBe(user1.id);
            expect(findBy[1].id).toBe(user2.id);
        });

        test('findOneBy', () => {
            const findBy: UserInterface | undefined = userRepository.findOneBy([{
                key: "firstname",
                value: user1.firstname
            }]);

            expect(findBy.id).toBe(user1.id);
            expect(findBy.firstname).toBe(user1.firstname);
        });

        test('findOneBy no criterias', () => {
            const findBy: UserInterface | undefined = userRepository.findOneBy([]);

            expect(findBy).toBeUndefined();
        });

        test('findOneBy bad criterias', () => {
            const findBy: UserInterface | undefined = userRepository.findOneBy([{key: "firstname", value: '12311231'}]);

            expect(findBy).toBeUndefined();
        });
    });
});