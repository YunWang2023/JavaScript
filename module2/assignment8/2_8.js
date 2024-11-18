        // Function to concatenate an array of strings
        function concat(stringsArray) {
            return stringsArray.join(""); // Joins the array elements into a single string
        }

        // Example usage
        function main() {
            let inputArray = ["I am ", " ", "Wang Yun", "!"]; // Example array
            let result = concat(inputArray);
            document.getElementById("output").textContent = `Concatenated String: ${result}`;
        }

        window.onload = main;