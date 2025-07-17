// script.js

// Placeholder for future JavaScript functionalities
console.log("Website loaded successfully.");

document.addEventListener("DOMContentLoaded", function () {
  const rows = document.querySelectorAll(".submission-table tbody tr");
  const today = new Date().toISOString().split("T")[0]; // Format YYYY-MM-DD

  rows.forEach((row) => {
    const tanggalCell = row.cells[2]; // Kolom ke-3
    if (!tanggalCell.textContent.trim()) {
      tanggalCell.textContent = today;
    }
  });
});
