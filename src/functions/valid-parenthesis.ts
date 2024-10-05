type Parenthesis = string;

export default function validParenthesis(parenthesisString: Parenthesis) {
    // Create a stack to keep track of the open parenthesis.
    const stack: Parenthesis[] = [];
    // Create sets for open parenthesis.
    const openParenthesis = new Set(['(', '[', '{']);
    // Create sets for close parenthesis.
    const closeParenthesis = new Set([')', ']', '}']);
    // Create a map to match open and close parenthesis.
    const matchingParenthesis = new Map([
        ['(', ')'],
        ['[', ']'],
        ['{', '}']
    ]);

    // Iterate through the string of parenthesis.
    for (const parenthesis of parenthesisString) {
        // If the current parenthesis is an open parenthesis, push it to the stack.
        if (openParenthesis.has(parenthesis)) {
            stack.push(parenthesis as Parenthesis);
        // If the current parenthesis is a close parenthesis, check if it matches the last open parenthesis
        } else if (closeParenthesis.has(parenthesis)) {
            const lastParenthesis = stack.pop();
            // If the last open parenthesis does not match the current close parenthesis, return false.
            if (lastParenthesis !== matchingParenthesis.get(parenthesis)) {
                return false;
            }
        }
    }

    // If the stack is empty, all parenthesis have been matched.
    return stack.length === 0;
}