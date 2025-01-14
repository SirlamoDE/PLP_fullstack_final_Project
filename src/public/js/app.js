document.getElementById("registration-form").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const formData = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
  
    try {
      const response = await fetch("/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        alert(result.message);
        window.location.href = "/success.html";
      } else {
        alert(result.error || "Registration failed.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred. Please try again.");
    }
  });
  