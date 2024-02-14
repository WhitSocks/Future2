// JavaScript to handle modal functionality

// Function to open the modal and display the selected image and story
function openModal(imageSrc, story) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImage");
    var storyElement = document.getElementById("story");
    
    modal.style.display = "block";
    modalImg.src = imageSrc;
    storyElement.innerHTML = story;
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
