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
- **MCP Server and Client**: Browse through a curated list of [MCP Servers and Clients](./server-client.md) to enhance your implementation.

## Dashboard

The MCPToolkits interactive dashboard provides real-time monitoring and management for your MCP servers:

### Dashboard Metrics Explained

- **Active Servers**: Number of servers that are currently online and responding
- **Warnings**: Total count of configuration and performance issues requiring attention
- **Avg. Latency**: Average response time across all your active MCP servers
- **Active Users**: Total number of users currently connected to your MCP servers

### Server Status Table

The server status table displays:

- **Status**: Current server state (Online, Warning, Offline)
- **Latency**: Response time in milliseconds
- **Uptime**: Percentage of time the server has been available
- **Region**: Geographic location of the server

### Configuration Status

The configuration status chart shows:

- **Synced**: Percentage of configurations that are in sync across your servers
- **Out of Sync**: Configurations that need to be synchronized

## Quick Start

### Using Docker Compose (Recommended)

1. Clone this repository
   ```bash
   git clone https://github.com/ajeetraina/mcptoolkits.git
   cd mcptoolkits
   ```

2. Start with Docker Compose
   ```bash
   docker-compose up -d
   ```

3. Access MCPToolkits
   - Portal: http://localhost:8080
   - Dashboard: http://localhost:8080/dashboard.html

### Manual Installation

1. Clone this repository
   ```bash
   git clone https://github.com/ajeetraina/mcptoolkits.git
   cd mcptoolkits
   ```

2. Start a local server
   ```bash
   # Using Python
   python -m http.server 8080
   
   # OR using Node.js
   npx serve -l 8080
   ```

3. Access MCPToolkits
   - Portal: http://localhost:8080
   - Dashboard: http://localhost:8080/dashboard.html

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

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

If you have any questions or suggestions, please open an issue in this repository.
