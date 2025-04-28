// Main JavaScript file for the MCPToolkits portal

document.addEventListener('DOMContentLoaded', function() {
    // Initialize any interactive elements
    initializeNavigation();
    setupDashboardLinks();
});

// Mobile navigation toggle
function initializeNavigation() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    if (mobileMenuButton) {
        const mobileMenu = document.querySelector('.mobile-menu');
        mobileMenuButton.addEventListener('click', () => {
            if (mobileMenu) {
                mobileMenu.classList.toggle('hidden');
            }
        });
    }
}

// Set up dashboard links with query parameters if needed
function setupDashboardLinks() {
    const dashboardLinks = document.querySelectorAll('a[href="dashboard.html"]');
    dashboardLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Add any query parameters if needed (e.g., for demo mode)
            // e.preventDefault();
            // window.location.href = 'dashboard.html?demo=true';
            
            // Track dashboard views (in a real app, this would call analytics)
            console.log('Dashboard link clicked');
        });
    });
}

// Show a welcome message in the console
console.log('Welcome to MCPToolkits - The ultimate MCP server management solution!');
console.log('Visit dashboard.html to view the interactive dashboard.');
