# MCPToolkits

The ultimate toolkit for managing and optimizing your Model Context Protocol servers.

## About MCPToolkits

MCPToolkits is a comprehensive suite of tools designed to help you manage, optimize, and enhance your Model Context Protocol servers more efficiently. With MCPToolkits, you can save time, reduce complexity, and focus on what matters most.

## Features

- **MCP Server Directory**: Easily manage and organize all your MCP servers in one central location.
- **Import MCP Configurations**: Easily import your existing configurations from JSON files or other formats.
- **Sync Detection**: Automatically detect which MCP configs are out of sync across your clients.
- **Unified Deployment**: Deploy a single MCP server list to all your clients with one click.
- **Advanced Configuration Tools**: Fine-tune your MCP servers with specialized configuration tools.
- **Performance Analytics**: Monitor and optimize your MCP server performance with detailed analytics.
- **Interactive Dashboard**: Real-time monitoring and management through an intuitive dashboard interface.

## Getting Started

### Quick Start

1. Clone this repository
   ```bash
   git clone https://github.com/ajeetraina/mcptoolkits.git
   cd mcptoolkits
   ```

2. Access the dashboard
   - Open `dashboard.html` in your browser for the interactive dashboard
   - Open `index.html` for the main portal

### Using Docker

1. Build and run with Docker
   ```bash
   docker build -t mcptoolkits .
   docker run -p 8080:80 mcptoolkits
   ```

2. Access the application
   - Dashboard: http://localhost:8080/dashboard.html
   - Portal: http://localhost:8080

For detailed installation instructions, see [INSTALL.md](./INSTALL.md).  
For dashboard-specific setup, see [DASHBOARD-SETUP.md](./DASHBOARD-SETUP.md).

## Configuration

Configure your MCP servers in the `config/servers.json` file:

```json
{
  "servers": [
    {
      "name": "Production Server",
      "host": "mcp-prod.example.com",
      "port": 443,
      "protocol": "https",
      "apiKey": "your-api-key-here",
      "region": "us-west"
    }
  ]
}
```

Customize application settings in `config/app.json`.

## Dashboard Features

The interactive dashboard provides:

- **Real-time Server Monitoring**: View server status, latency, and uptime in real-time
- **Configuration Management**: Monitor and sync server configurations with one click
- **Performance Analytics**: Track server performance with interactive charts
- **User Activity Tracking**: Monitor user activity across all your servers
- **Alerts and Notifications**: Get notified of issues immediately

## Development

### Prerequisites

- Basic understanding of HTML, CSS, and JavaScript
- Familiarity with web development tools

### Local Development Setup

```bash
# Clone the repository
git clone https://github.com/ajeetraina/mcptoolkits.git
cd mcptoolkits

# Start a local server
python -m http.server
# OR with Node.js
npx serve
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

If you have any questions or suggestions, please open an issue in this repository.
