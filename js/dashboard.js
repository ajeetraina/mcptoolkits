// Sample data for dashboard
const serverData = [
    { name: 'Server 1', status: 'online', latency: 15, uptime: 99.9, users: 120, region: 'us-west' },
    { name: 'Server 2', status: 'online', latency: 22, uptime: 99.7, users: 85, region: 'us-east' },
    { name: 'Server 3', status: 'warning', latency: 38, uptime: 98.5, users: 210, region: 'eu-central' },
    { name: 'Server 4', status: 'offline', latency: 0, uptime: 0, users: 0, region: 'ap-east' },
    { name: 'Server 5', status: 'online', latency: 18, uptime: 99.8, users: 156, region: 'us-central' },
];

const performanceData = [
    { name: '00:00', latency: 18 },
    { name: '02:00', latency: 15 },
    { name: '04:00', latency: 16 },
    { name: '06:00', latency: 14 },
    { name: '08:00', latency: 22 },
    { name: '10:00', latency: 24 },
    { name: '12:00', latency: 28 },
    { name: '14:00', latency: 32 },
    { name: '16:00', latency: 27 },
    { name: '18:00', latency: 22 },
    { name: '20:00', latency: 19 },
    { name: '22:00', latency: 17 },
];

const userActivityData = [
    { name: '00:00', users: 78 },
    { name: '02:00', users: 52 },
    { name: '04:00', users: 41 },
    { name: '06:00', users: 67 },
    { name: '08:00', users: 132 },
    { name: '10:00', users: 198 },
    { name: '12:00', users: 221 },
    { name: '14:00', users: 234 },
    { name: '16:00', users: 247 },
    { name: '18:00', users: 186 },
    { name: '20:00', users: 157 },
    { name: '22:00', users: 113 },
];

const configStatusData = [
    { name: 'Synced', value: 18, color: '#4ade80' },
    { name: 'Out of Sync', value: 3, color: '#f87171' },
];

const activityData = [
    { type: 'success', icon: 'check-circle', message: 'Server 2 - Configuration synced successfully', time: '20 minutes ago' },
    { type: 'warning', icon: 'exclamation-triangle', message: 'Server 3 - High latency warning (38ms)', time: '45 minutes ago' },
    { type: 'danger', icon: 'info-circle', message: 'Server 4 - Connection lost', time: '1 hour ago' },
    { type: 'info', icon: 'cog', message: 'Configuration update - Security parameters updated', time: '2 hours ago' },
];

// Load configuration from API or local storage
async function loadConfiguration() {
    try {
        // In a real app, this would fetch from the server
        // For now, we'll try to load from local config files
        // or use the sample data if not available
        console.log('Loading configuration...');
        return {
            serverData,
            configStatusData,
            performanceData,
            userActivityData
        };
    } catch (error) {
        console.error('Error loading configuration:', error);
        return {
            serverData,
            configStatusData,
            performanceData,
            userActivityData
        };
    }
}

// Initialize dashboard
document.addEventListener('DOMContentLoaded', async function() {
    // Update last updated time
    document.getElementById('lastUpdated').textContent = `Last updated: ${new Date().toLocaleTimeString()}`;
    
    // Load configuration
    await loadConfiguration();
    
    // Initialize configuration chart
    initConfigChart();
    
    // Initialize performance chart
    initPerformanceChart();
    
    // Initialize user activity chart
    initUserActivityChart();
    
    // Set up refresh button
    document.getElementById('refreshBtn').addEventListener('click', refreshDashboard);
    
    // Set up sync config button
    if (document.getElementById('syncConfigBtn')) {
        document.getElementById('syncConfigBtn').addEventListener('click', syncConfigurations);
    }

    // Set up navigation tabs
    setupNavigation();
});

// Set up navigation tabs
function setupNavigation() {
    // Dashboard View is shown by default
    
    // Servers Tab
    const serversTab = document.querySelector('a[href="servers"]');
    if (serversTab) {
        serversTab.addEventListener('click', function(e) {
            e.preventDefault();
            showServersView();
        });
    }
    
    // Configuration Tab
    const configTab = document.querySelector('a[href="configuration"]');
    if (configTab) {
        configTab.addEventListener('click', function(e) {
            e.preventDefault();
            showConfigView();
        });
    }
    
    // Analytics Tab
    const analyticsTab = document.querySelector('a[href="analytics"]');
    if (analyticsTab) {
        analyticsTab.addEventListener('click', function(e) {
            e.preventDefault();
            showAnalyticsView();
        });
    }
    
    // Home Tab - goes back to main page
    const homeTab = document.querySelector('a[href="index.html"]');
    if (homeTab) {
        // This already works as a direct link
    }
}

// Switch to Servers View
function showServersView() {
    // In a full implementation, this would fetch server data and show the servers view
    alert('Servers view is under development. Check back soon!');
}

// Switch to Configuration View
function showConfigView() {
    // In a full implementation, this would fetch configuration data and show the configuration view
    alert('Configuration view is under development. Check back soon!');
}

// Switch to Analytics View
function showAnalyticsView() {
    // In a full implementation, this would fetch analytics data and show the analytics view
    alert('Analytics view is under development. Check back soon!');
}

// Initialize configuration chart
function initConfigChart() {
    const ctx = document.getElementById('configChart');
    if (!ctx) return;
    
    const chartCtx = ctx.getContext('2d');
    
    new Chart(chartCtx, {
        type: 'doughnut',
        data: {
            labels: configStatusData.map(item => item.name),
            datasets: [{
                data: configStatusData.map(item => item.value),
                backgroundColor: configStatusData.map(item => item.color),
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '60%',
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const total = context.dataset.data.reduce((sum, val) => sum + val, 0);
                            const percentage = Math.round((context.raw / total) * 100);
                            return `${context.label}: ${context.raw} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

// Initialize performance chart
function initPerformanceChart() {
    const ctx = document.getElementById('performanceChart');
    if (!ctx) return;
    
    const chartCtx = ctx.getContext('2d');
    
    new Chart(chartCtx, {
        type: 'line',
        data: {
            labels: performanceData.map(item => item.name),
            datasets: [{
                label: 'Latency (ms)',
                data: performanceData.map(item => item.latency),
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                borderColor: 'rgba(99, 102, 241, 1)',
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        drawBorder: false
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top'
                }
            }
        }
    });
}

// Initialize user activity chart
function initUserActivityChart() {
    const ctx = document.getElementById('userActivityChart');
    if (!ctx) return;
    
    const chartCtx = ctx.getContext('2d');
    
    new Chart(chartCtx, {
        type: 'bar',
        data: {
            labels: userActivityData.map(item => item.name),
            datasets: [{
                label: 'Active Users',
                data: userActivityData.map(item => item.users),
                backgroundColor: 'rgba(99, 102, 241, 0.8)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        drawBorder: false
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top'
                }
            }
        }
    });
}

// Refresh dashboard
function refreshDashboard() {
    // Simulate refresh with animation
    const refreshBtn = document.getElementById('refreshBtn');
    refreshBtn.classList.add('fa-spin');
    
    // Update timestamp
    setTimeout(async () => {
        document.getElementById('lastUpdated').textContent = `Last updated: ${new Date().toLocaleTimeString()}`;
        refreshBtn.classList.remove('fa-spin');
        
        // In a real app, we would fetch fresh data here
        await loadConfiguration();
        
        // Refresh charts
        initConfigChart();
        initPerformanceChart();
        initUserActivityChart();
    }, 1000);
}

// Sync configurations
function syncConfigurations() {
    const syncBtn = document.getElementById('syncConfigBtn');
    if (!syncBtn) return;
    
    const originalText = syncBtn.textContent;
    
    syncBtn.textContent = 'Syncing...';
    syncBtn.disabled = true;
    
    // Simulate sync operation
    setTimeout(() => {
        // Update the configuration status data
        configStatusData[0].value = configStatusData[0].value + configStatusData[1].value;
        configStatusData[1].value = 0;
        
        // Update display
        if (document.getElementById('syncedCount')) {
            document.getElementById('syncedCount').textContent = configStatusData[0].value;
        }
        if (document.getElementById('outOfSyncCount')) {
            document.getElementById('outOfSyncCount').textContent = configStatusData[1].value;
        }
        
        // Refresh the dashboard
        refreshDashboard();
        
        // Reset button
        syncBtn.textContent = originalText;
        syncBtn.disabled = false;
        
        // Show a success message
        alert('All configurations synced successfully!');
    }, 2000);
}