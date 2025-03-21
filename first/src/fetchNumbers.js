
const axios = require("axios");

const API_URLS = {
    p: "http://20.244.56.144/test/primes",
    f: "http://20.244.56.144/test/fibo",
    e: "http://20.244.56.144/test/even",
    r: "http://20.244.56.144/test/rand"
};

// Store access token
const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNTY0MDk5LCJpYXQiOjE3NDI1NjM3OTksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImZmOTliMWU0LWE4NWYtNDY4NS05NWJlLTEzZjYxYjgxZTE0YiIsInN1YiI6Im5pZGhpLjIyMDExODZjc0BpaWl0YmguYWMuaW4ifSwiY29tcGFueU5hbWUiOiJnb01hcnQiLCJjbGllbnRJRCI6ImZmOTliMWU0LWE4NWYtNDY4NS05NWJlLTEzZjYxYjgxZTE0YiIsImNsaWVudFNlY3JldCI6Im5NRXRZZ2FFdWJjQ1BhbXEiLCJvd25lck5hbWUiOiJOaWRoaSIsIm93bmVyRW1haWwiOiJuaWRoaS4yMjAxMTg2Y3NAaWlpdGJoLmFjLmluIiwicm9sbE5vIjoiMTg2In0.gCgYn0XZyRhkJrx-0MZxaWJSHqh5ElDqMr4wtEHsrV8"; // Replace with a fresh token

async function fetchNumbers(type) {
    if (!API_URLS[type]) {
        throw new Error("Invalid number type");
    }

    try {
        const response = await axios.get(API_URLS[type], {
            headers: {
                Authorization: `Bearer ${ACCESS_TOKEN}`
            }
        });

        return response.data.numbers || [];
    } catch (error) {
        console.error(`Error fetching ${type} numbers:`, error.message);
        return [];
    }
}

module.exports = fetchNumbers;
