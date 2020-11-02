// function to generate markdown for README
function generateMarkdown(data) {
  // Creating variable and conditions to determine which license badge to display (if any)
  let licenseBadge = ``;
  if (data.license === "None") {
    licenseBadge = ``;
  } else if (data.license === "MIT") {
    licenseBadge = `# [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (data.license === "APACHE 2.0") {
    licenseBadge = `# [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (data.license === "GPL 3.0") {
    licenseBadge = `# [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (data.license === "BSD 3") {
    licenseBadge = `# [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  }

  // Markdown structure
  return `
  # ${data.title}

  ${licenseBadge}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  > ${data.install}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contrib}

  ## Tests
  > ${data.testing}

  ## Questions
  - Github: [${data.username}](#https://github.com/${data.username})
  - Email: ${data.email}
  *The best time to reach me is from 8:00am-5:00pm EST, Monday-Friday. All questions will be answered in a timely manner. Emails are preferred.*
`;
}

module.exports = generateMarkdown;
