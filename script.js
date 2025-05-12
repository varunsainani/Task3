function toggleDropdown() {
    const content = document.getElementById("dropdown-content");
    content.style.display = content.style.display === "block" ? "none" : "block";
  }
  
  function openModal() {
    document.getElementById("modal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  
  function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("formMessage");
  
    if (name === "" || email === "") {
      message.textContent = "Please fill in all fields.";
      message.style.color = "red";
      return false;
    }
  
    if (!email.includes("@")) {
      message.textContent = "Enter a valid email.";
      message.style.color = "red";
      return false;
    }
  
    message.textContent = "Form submitted successfully!";
    message.style.color = "green";
    return false;
  }
  