# Basic Informational Site

## Overview

This project is a simple informational website built with Node.js and Express.js. It demonstrates how to create a basic HTTP server using Express that serves different HTML pages based on the requested URL.

The project includes four pages:

* **Home** (`index.html`)
* **About** (`about.html`)
* **Contact** (`contact-me.html`)
* **404 Error** (`404.html`)

The server uses Express routing to deliver the appropriate HTML file for each request and returns a custom 404 page when users navigate to a route that does not exist.

---

## Features

* Node.js HTTP server
* URL-based routing
* Serves static HTML files
* Custom 404 error page
* No external dependencies

---

## Project Structure

```text
basic-informational-site/
│
├── backend/
│   └── index.js
│
├── frontend/
│   ├── index.html
│   ├── about.html
│   ├── contact-me.html
│   └── 404.html
│
└── README.md
```
---

## Routes

| Route           | Page Served       |
| --------------- | ----------------- |
| `/`             | `index.html`      |
| `/about`        | `about.html`      |
| `/contact-me`   | `contact-me.html` |
| Any other route | `404.html`        |

---

## Getting Started

### Prerequisites

* Node.js installed on your computer
* Express.js package

### Installation

1. Clone the repository:

```bash
git clone https://github.com/KTAGit/Basic-Informational-Site
```

2. Navigate to the project folder:

```bash
cd basic-informational-site/back-end
```

3. Start the server:

```bash
node index.js
```

4. Open your browser and visit:

```text
http://localhost:3000
```

---

## Technologies Used

* Node.js
* Express.js
* JavaScript
* HTML5

---

## Learning Objectives

This project demonstrates how to:

* Create a basic HTTP server with Node.js
* Handle incoming requests
* Implement simple routing based on URL paths
* Read and serve HTML files
* Return a custom 404 page for invalid routes

---

## License

This project is for educational purposes as part of The Odin Project curriculum.
