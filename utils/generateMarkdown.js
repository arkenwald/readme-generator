// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GNU') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  // If there is no license, return an empty string
    else{}
      return '';
  }
// TODO: Create a function that returns the license link
  function renderLicenseLink(license) {
    if (license === 'Apache') {
      return 'https://choosealicense.com/licenses/apache-2.0/';
    } else if (license === 'GNU') {
      return 'https://choosealicense.com/licenses/gpl-3.0/';
    } else if (license === 'MIT'){
      return 'https://choosealicense.com/licenses/mit/';
    }
    // If there is no license, return an empty string
      else{}
        return '';
    }
// TODO: Create a function that returns the license section of README
    function renderLicenseSection(license) {
      if (license === 'Apache') {
        return 'this is where you copy and paste the license section for apache';
      } else if (license === 'GNU') {
        return 'this is where tyou copy and paste the license section for GNU';
      } else if (license === 'MIT'){
        return 'this is where you copy and paste the license section for MIT.';
      }
      // If there is no license, return an empty string
        else{}
          return '';
      }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
`;
}

module.exports = {generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection};