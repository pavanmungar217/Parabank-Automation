
# ParaBank Automation

This project contains UI and API automation scripts for the [ParaBank](https://parabank.parasoft.com/parabank/index.htm) application, utilizing the Playwright framework.

## Table of Contents

- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The ParaBank Automation project aims to automate both the user interface and API testing of the ParaBank application. By leveraging the capabilities of the Playwright framework, the project ensures comprehensive test coverage and reliability.

## Prerequisites

Before setting up the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (Node package manager)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/pavanmungar217/Parabank-Automation.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd Parabank-Automation
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

## Running Tests

To execute the tests, use the following command:

```bash
npx playwright test
```

This command will run all the tests defined in the project.

## Project Structure

The project is organized as follows:

- `config/`: Contains configuration files for the project.
- `src/`: Includes the source code and utility functions.
- `testdata/`: Holds test data files.
- `tests/`: Contains the test scripts for both UI and API testing.
- `playwright.config.js`: Configuration file for Playwright.
- `package.json`: Manages project dependencies and scripts.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
