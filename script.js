// JavaScript to handle smooth scroll and automatic scrolling of the carousel
const books = {
	1: {
		title: "The Great Gatsby",
		author: "F. Scott Fitzgerald",
		description:
			"A novel set in the Roaring Twenties, exploring themes of decadence, idealism, resistance to change, social upheaval, and excess.",
		image: "https://imgs.search.brave.com/mfgzwdy78E1rOwpGZ9eUmZlOmWS9DVjbMAW176TgKRo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxejBNckI2cU9T/LmpwZw",
		rating: 5, // Rating for this book (out of 5)
	},
	2: {
		title: "To Kill a Mockingbird",
		author: "Harper Lee",
		description: "A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice.",
		image: "https://imgs.search.brave.com/6cHanWSOw3NplyogoydjJCgKzh-Bvvd-7gLWvRbG3OE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxYVkxbHhrKzlM/LmpwZw",
		rating: 4, // Rating for this book (out of 5)
	},
	3: {
		title: "1984",
		author: "George Orwell",
		description:
			"A dystopian novel set in a totalitarian society controlled by Big Brother, where truth is manipulated and individualism is crushed.",
		image: "https://imgs.search.brave.com/Nr7DGZhDC4TfRVGhaPtMcMNJzsZVQfBwNNgyePW8_c8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzYw/MzMyMjc5MzIxYzZm/NmNjODdjZjhmZS8y/MmVjZDYwNy05NTRk/LTQxYWUtYjJkYi01/NGJiOTJiMTAyNjUv/MTk4NC5qcGc",
		rating: 5, // Rating for this book (out of 5)
	},
	4: {
		title: "Pride and Prejudice",
		author: "Jane Austen",
		description:
			"The romantic clash of two strong-willed characters—Elizabeth Bennet and Mr. Darcy—who challenge the social mores of the early 19th-century England.",
		image: "https://imgs.search.brave.com/BQvNVt5ypNUsYzgDx9nKrjLMnR7ArfMmNN75T0tO4k8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnRo/cmlmdGJvb2tzLmNv/bS9hcGkvaW1hZ2Vo/YW5kbGVyL20vREE3/NzYzOEFBMUQ4ODA4/NUEyRTkxRjQyODc5/OTlCREM1Q0ZFMEEx/OC5qcGVn",
		rating: 3, // Rating for this book (out of 5)
	},
	5: {
		title: "The Catcher in the Rye",
		author: "J.D. Salinger",
		description: "A story about the troubled teenager Holden Caulfield, his experiences in New York, and his reflections on society.",
		image: "https://imgs.search.brave.com/8ivvsrkU1Wi0FuprV9e6KHxLLp6drgHr639U07914CQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFUSSt3NTZxRkwu/anBn",
		rating: 4, // Rating for this book (out of 5)
	},
	6: {
		title: "Harry Potter and the Sorcerer's Stone",
		author: "J.K. Rowling",
		description: "A young boy discovers he's a wizard and embarks on an adventure at a magical school, uncovering secrets of his past.",
		image: "https://imgs.search.brave.com/ET85mxXEvXNpcVp-psRLaqX9kd_E26XGH-XYYU5AgAo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxREkrQkFOMlNM/LmpwZw",
		rating: 5, // Rating for this book (out of 5)
	},
};

document.addEventListener("DOMContentLoaded", function () {
	// Get the navigation links
	const navLinks = document.querySelectorAll(".navbar a");

	// Add event listener to each link for smooth scrolling
	navLinks.forEach((link) => {
		link.addEventListener("click", function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute("href"));
			target.scrollIntoView({ behavior: "smooth" });
		});
	});
});
// Toggle the navigation menu when hamburger icon is clicked
document.getElementById("hamburger").addEventListener("click", function (event) {
	console.log("Clicked hamburger");
	const navbar = document.getElementById("nav");
	navbar.classList.toggle("active"); // Toggle the visibility of navbar links
	const body = document.body;
	// const header = document.querySelector("header");
	const mainContent = document.getElementById("main-content");
	if (navbar.classList.contains("active")) {
		mainContent.style.opacity = 0.8;
	} else {
		mainContent.style.opacity = 1;
	}
	if (navbar.classList.contains("active")) {
		// Listen for clicks on the body to close the navbar
		body.addEventListener("click", closeNavbarOnClickOutside);
	}

	// Prevent the click event from propagating to the body
	event.stopPropagation();
	// if (navbar.classList.contains("active")) {
	// 	header.style.backgroundColor = "rgba(51, 51, 51, 0.6)"; // Make the header semi-transparent
	// } else {
	// 	body.style.overflow = "auto"; // Enable scrolling when navbar is closed
	// 	header.style.backgroundColor = "#333"; // Reset the header background to normal
	// }
});
function closeNavbarOnClickOutside(event) {
	const navbar = document.getElementById("nav");

	// Check if the click happened outside the navbar
	if (!navbar.contains(event.target)) {
		navbar.classList.remove("active");
		document.getElementById("main-content").style.opacity = 1;

		// Remove the body event listener to stop listening for clicks
		document.body.removeEventListener("click", closeNavbarOnClickOutside);
	}
}

document.addEventListener("DOMContentLoaded", function () {
	const viewButtons = document.querySelectorAll(".view-details-btn");
	const modalOverlay = document.getElementById("modal-overlay");
	const closeModalButton = document.getElementById("close-modal");

	// Sample book data (can be replaced with dynamic data)

	// Event listener for "View Details" button
	viewButtons.forEach((button) => {
		button.addEventListener("click", function () {
			const bookId = button.dataset.book;

			// Set modal content based on book data
			const book = books[bookId];
			document.getElementById("modal-book-title").textContent = book.title;
			document.getElementById("modal-book-author").textContent = book.author;
			document.getElementById("modal-book-description").textContent = book.description;
			document.getElementById("modal-book-image").src = book.image;

			// Show modal
			modalOverlay.style.display = "flex";
			const ratingStars = generateStars(book.rating);
			document.getElementById("modal-book-rating").innerHTML = ratingStars;
		});
	});
	function generateStars(rating) {
		let stars = "";
		for (let i = 1; i <= 5; i++) {
			if (i <= rating) {
				stars += "&#9733; "; // Filled star (Unicode character)
			} else {
				stars += "&#9734; "; // Empty star (Unicode character)
			}
		}
		return stars;
	}
	// Close the modal when the close button is clicked
	closeModalButton.addEventListener("click", function () {
		modalOverlay.style.display = "none";
	});

	// Close the modal if the user clicks outside of the modal content
	modalOverlay.addEventListener("click", function (event) {
		if (event.target === modalOverlay) {
			modalOverlay.style.display = "none";
		}
	});
});
