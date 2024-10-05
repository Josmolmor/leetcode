import fetchData, {User} from "../async-js-and-callbacks.ts";

describe('Async JS and callback', () => {
    test('Expect name to be returned by callback function', async () => {
        function returnName(data: User) {
            return data.name;
        }
        const name = await fetchData(returnName);
        expect(name).toBe('John');
    })
});