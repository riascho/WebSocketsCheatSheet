# WebSockets Guide

A comprehensive guide to understanding and implementing WebSockets for real-time communication between client and server.

## Table of Contents

- [What Are WebSockets?](#what-are-websockets)
- [How WebSockets Work](#how-websockets-work)
- [CORS and WebSockets](#cors-and-websockets)
- [WebSocket Headers](#websocket-headers)
- [Setting Up a WebSocket Server](#setting-up-a-websocket-server)
- [Connecting from Client-Side](#connecting-from-client-side)
- [Common Use Cases](#common-use-cases)

## What Are WebSockets?

WebSockets provide a persistent, two-way communication channel between a client (typically a browser) and a server. Unlike traditional HTTP, which follows a request-response pattern, WebSockets enable real-time data transfer in both directions without needing to constantly establish new connections.

Think of WebSockets like a phone call, while traditional HTTP is more like sending letters back and forth. With WebSockets, once the connection is established, both parties can freely talk to each other at any time.

## How WebSockets Work

WebSockets work in three main phases:

### 1. Handshake

The connection begins with a standard HTTP request that includes special headers indicating a desire to upgrade the connection to WebSockets. The browser automatically handles this HTTP request when you create a new WebSocket object.

### 2. Data Transfer

After the handshake, the HTTP connection is upgraded to a WebSocket connection, and both client and server can send messages independently:

- Messages can be sent in either direction at any time
- Communication is full-duplex (simultaneous two-way)

### 3. Closing

Either the client or server can close the connection by sending a close frame.

## CORS and WebSockets

Cross-Origin Resource Sharing (CORS) works differently with WebSockets:

- During the initial handshake (which is HTTP), browsers include the `Origin` header
- WebSocket servers should check this Origin header to decide whether to accept the connection
- Unlike HTTP CORS, there's no preflight request with WebSockets
- Once the connection is established, CORS doesn't apply to subsequent messages

## WebSocket Headers

During the initial handshake, several important headers are sent:

- `Upgrade: websocket`: Indicates a request to upgrade to WebSocket protocol
- `Connection: Upgrade`: Signals that HTTP should be upgraded
- `Sec-WebSocket-Key`: A random value that helps prevent caching proxies from interfering
- `Sec-WebSocket-Version`: The WebSocket protocol version (usually 13)
- `Origin`: The origin of the requesting page

## Setting Up a WebSocket Server

### Prerequisites

- Node.js installed on your system
- npm (Node Package Manager)

### Installation

1. Create a new directory for your project and navigate to it:

```bash
mkdir websocket-server
cd websocket-server
```

2. Initialize a new Node.js project:

```bash
npm install
```

3. Start the server:

```bash
node-ts server.ts
```

## Connecting from Client-Side

1. Make sure your node.js server is running
2. Then launch the [client.html](/client.html) in a browser
3. Once the connection has been established you can send messages to the server!

## Common Use Cases

WebSockets are ideal for applications requiring real-time updates:

- Chat applications
- Live sports scores and updates
- Collaborative editing tools
- Trading platforms with real-time data
- Multiplayer games
- Notifications and alerts

## Key Points to Remember

1. The client always initiates the WebSocket connection, never the server
2. Once connected, both client and server can send messages at any time
3. The initial HTTP upgrade request is handled automatically by the browser
4. WebSockets provide true bi-directional communication unlike HTTP polling
