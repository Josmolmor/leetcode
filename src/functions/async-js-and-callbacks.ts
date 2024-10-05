/*
This question dives into asynchronous programming in JavaScript and challenges developers to work with callbacks to handle asynchronous operations.
Task: Write a JavaScript function called fetchData that simulates an asynchronous API call and takes a callback function as an argument. The callback function should be invoked with the retrieved data as its parameter.
Input Format: The input will be a callback function.
Output Format: The output will be the retrieved data passed to the callback function.
Sample Input:
function handleData(data) {
    console.log(“Received data:”, data);
}
fetchData(handleData);
Sample Output:
Received data: { name: ‘John’, age: 28, city: ‘New York’ }
*/
export type User = {
    name: string;
    age: number;
    city: string;
};

type Callback = (data: User) => void;

export default async function fetchData(
    callback?: Callback
): Promise<User | void> {
    return new Promise<User | void>((resolve) => {
        const data = { name: 'John', age: 28, city: 'New York' };
        setTimeout(() => {
            if (!callback) return resolve();
            resolve(callback(data));
        }, 3000);
    });
}
