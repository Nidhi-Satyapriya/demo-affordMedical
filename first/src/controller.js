

// const fetchNumbers = require("./fetchNumbers");

// const WINDOW_SIZE = 10;
// let windowNumbers = [];

// async function getNumbers(req, res) {
//     const { numberid } = req.params;
    
//     if (!["p", "f", "e", "r"].includes(numberid)) {
//         return res.status(400).json({ error: "Invalid number type" });
//     }

//     const prevState = [...windowNumbers];

//     try {
//         // Fetch numbers from the test API
//         const fetchedNumbers = await fetchNumbers(numberid);

//         if (fetchedNumbers.length === 0) {
//             return res.status(500).json({ error: "Failed to fetch numbers from test server" });
//         }

//         // Filter unique numbers
//         const uniqueNumbers = fetchedNumbers.filter(num => !windowNumbers.includes(num));

//         // Maintain sliding window (FIFO approach)
//         uniqueNumbers.forEach(num => {
//             if (windowNumbers.length >= WINDOW_SIZE) {
//                 windowNumbers.shift(); // Remove the oldest number
//             }
//             windowNumbers.push(num);
//         });

//         // Calculate the average
//         const avg = windowNumbers.length > 0
//             ? (windowNumbers.reduce((sum, num) => sum + num, 0) / windowNumbers.length).toFixed(2)
//             : 0.00;

//         // Return final response
//         res.json({
//             windowPrevState: prevState,
//             windowCurrState: windowNumbers,
//             numbers: fetchedNumbers,
//             avg: parseFloat(avg)
//         });

//     } catch (error) {
//         res.status(500).json({ error: "Error processing request" });
//     }
// }

// module.exports = { getNumbers };

// const fetchNumbers = require("./fetchNumbers");

// const WINDOW_SIZE = 10;
// let windowNumbers = [];

// async function getNumbers(req, res) {
//     const { numberid } = req.params;
    
//     if (!["p", "f", "e", "r"].includes(numberid)) {
//         return res.status(400).json({ error: "Invalid number type" });
//     }

//     console.log("Fetching numbers for:", numberid);

//     const prevState = [...windowNumbers];

//     const fetchedNumbers = await fetchNumbers(numberid);
//     console.log("Fetched numbers:", fetchedNumbers);

//     if (fetchedNumbers.length === 0) {
//         return res.status(500).json({ error: "No numbers fetched from the test server" });
//     }

//     const uniqueNumbers = fetchedNumbers.filter(num => !windowNumbers.includes(num));

//     uniqueNumbers.forEach(num => {
//         if (windowNumbers.length >= WINDOW_SIZE) {
//             windowNumbers.shift(); // Remove the oldest number
//         }
//         windowNumbers.push(num);
//     });

//     const avg = windowNumbers.length > 0
//         ? (windowNumbers.reduce((sum, num) => sum + num, 0) / windowNumbers.length).toFixed(2)
//         : 0.00;

//     console.log("Updated Window:", windowNumbers);
//     console.log("Average:", avg);

//     res.json({
//         windowPrevState: prevState,
//         windowCurrState: windowNumbers,
//         numbers: fetchedNumbers,
//         avg: parseFloat(avg)
//     });
// }

// module.exports = { getNumbers };
const fetchNumbers = require("./fetchNumbers");

const WINDOW_SIZE = 10;
let windowNumbers = [];

async function getNumbers(req, res) {
    const { numberid } = req.params;
    
    if (!["p", "f", "e", "r"].includes(numberid)) {
        return res.status(400).json({ error: "Invalid number type" });
    }

    console.log("Fetching numbers for:", numberid);

    const prevState = [...windowNumbers];

    const fetchedNumbers = await fetchNumbers(numberid);
    console.log("Fetched numbers:", fetchedNumbers);

    if (fetchedNumbers.length === 0) {
        return res.status(500).json({ error: "No numbers fetched from the test server" });
    }

    const uniqueNumbers = fetchedNumbers.filter(num => !windowNumbers.includes(num));

    uniqueNumbers.forEach(num => {
        if (windowNumbers.length >= WINDOW_SIZE) {
            windowNumbers.shift(); // Remove the oldest number
        }
        windowNumbers.push(num);
    });

    const avg = windowNumbers.length > 0
        ? (windowNumbers.reduce((sum, num) => sum + num, 0) / windowNumbers.length).toFixed(2)
        : 0.00;

    console.log("Updated Window:", windowNumbers);
    console.log("Average:", avg);

    res.json({
        windowPrevState: prevState,
        windowCurrState: windowNumbers,
        numbers: fetchedNumbers,
        avg: parseFloat(avg)
    });
}

module.exports = { getNumbers };
