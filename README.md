# Learn React Monorepo

A monorepo containing multiple React projects for learning and prototyping with React. This repository demonstrates different approaches and best practices for building scalable React applications.

## Core Technologies

- React (with Create React App)
- JavaScript (ES6+)
- Modern CSS
- Monorepo structure for multiple prototypes

## Project Structure Overview

- `protoype a/my-app/` – A basic React app scaffolded with Create React App.
- `prototype b/counter-app/` – A React app featuring a counter component, demonstrating component composition and state management.
- `prototype c/vidly/` – A more advanced React app simulating a movie rental service, with services, components, and routing.

Each prototype contains its own `src/` directory with components and assets. Example subfolders:

- `components/` – Reusable React components (e.g., `counter.jsx`, `navbar.jsx`, `movies.jsx`)
- `services/` – Service modules for data fetching and business logic (e.g., `fakeMovieService.js`)

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm (v9 or later)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/learn-react.git
   cd learn-react
   ```
2. Install dependencies for each prototype:
   ```sh
   cd protoype a/my-app && npm install
   cd ../../prototype b/counter-app && npm install
   cd ../../prototype c/vidly && npm install
   ```

### Running a Project

Navigate to the desired prototype and start the development server:

```sh
cd protoype a/my-app
npm start
```

## License

This project is licensed under the MIT License. See [LICENCE.md](LICENCE.md) for details.

## Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) for guidelines on contributing to this project.

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for more information.

## Security

If you discover a security vulnerability, please see our [Security Policy](SECURITY.md) and report it responsibly.

## Support

For questions or support, please open an issue in this repository.

## Contact

Maintained by joaquintelleria@gmail.com

## Acknowledgements

- [React documentation](https://react.dev/)
- [Create React App](https://create-react-app.dev/)
- Open source community for inspiration and resources.
