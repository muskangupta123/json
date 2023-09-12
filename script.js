// Function to fetch and display books
function fetchAndDisplayBooks() {
  const bookList = document.getElementById("bookList");
  
  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // Define the URL to your JSON file or API
  const url = "https://books-api-rz6d.onrender.com/books"; // Replace with your API URL if needed

  // Configure the request
  xhr.open("GET", url, true);

  // Set up an event listener for when the request is complete
  xhr.onload = function () {
      if (xhr.status === 200) {
          // Parse the JSON response
          const books = JSON.parse(xhr.responseText);

          // Display the books
          displayBooks(books);
      } else {
          // Handle errors here (e.g., display an error message)
          bookList.innerHTML = "Failed to fetch books.";
      }
  };

  // Send the request
  xhr.send();
}

// Function to display books
function displayBooks(books) {
  const bookList = document.getElementById("bookList");

  // Clear any existing content
  bookList.innerHTML = "";

  // Create an unordered list for the books
  const ul = document.createElement("ul");

  // Loop through the list of books and create list items
  books.forEach(function (book) {
      const li = document.createElement("li");
      li.textContent = book.title;
      ul.appendChild(li);
  });

  // Append the list to the bookList div
  bookList.appendChild(ul);
}

// Add a click event listener to the "Fetch Books" button
document.getElementById("fetchBooks").addEventListener("click", fetchAndDisplayBooks);