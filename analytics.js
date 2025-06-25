// This file will contain code for analytics tracking.

console.log("Analytics script loaded.");

function trackPageView() {
    // In a real application, you would send this data to your analytics service.
    console.log(`Page viewed: ${window.location.pathname}`);
}

function trackButtonClick(buttonName) {
    // In a real application, you would send this data to your analytics service.
    console.log(`Button clicked: ${buttonName}`);
}

document.addEventListener("DOMContentLoaded", () => {
    trackPageView();

    document.querySelectorAll("a.btn").forEach(button => {
        button.addEventListener("click", () => {
            trackButtonClick(button.textContent.trim());
        });
    });
});
