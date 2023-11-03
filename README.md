![FileUploader](public/img/banner.png)

# FileUploader

FileUploader is a simple image uploader application that allows you to upload images and store them in MongoDB. Once the images are uploaded successfully, the app displays them.

<p dir="auto"><a href="https://github.com/sindresorhus/awesome"><img src="https://camo.githubusercontent.com/abb97269de2982c379cbc128bba93ba724d8822bfbe082737772bd4feb59cb54/68747470733a2f2f63646e2e7261776769742e636f6d2f73696e647265736f726875732f617765736f6d652f643733303566333864323966656437386661383536353265336136336531353464643865383832392f6d656469612f62616467652e737667" alt="Awesome" data-canonical-src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg" style="max-width: 100%;"></a> <a href="https://github.com/chetanraj/awesome-github-badges"><img src="https://camo.githubusercontent.com/ff817852f0d676a36eaa3108d380e0052e689d9e0bc3eb42818fb21008708420/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d616465253230576974682d4c6f76652d6f72616e67652e737667" alt="Made With Love" data-canonical-src="https://img.shields.io/badge/Made%20With-Love-orange.svg" style="max-width: 100%;"></a>
<a href="http://commitizen.github.io/cz-cli/"><img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg" alt="commitizen-friendly" style="max-width: 100%;"></a>
</p>

[![Star this project](https://img.shields.io/badge/-⭐%20Star%20this%20project-yellow?style=for-the-badge)](https://github.com/Silent-Watcher/fileUploader)

## Table of Contents

-   [demo](https://github.com/Silent-Watcher/fileUploader#demo)
-   [Features](https://github.com/Silent-Watcher/fileUploader#features)
-   [Prerequisites](https://github.com/Silent-Watcher/fileUploader#Prerequisites)
-   [Installation](https://github.com/Silent-Watcher/fileUploader#Installation)
-   [usage](https://github.com/Silent-Watcher/fileUploader#usage)
-   [Contributing](https://github.com/Silent-Watcher/fileUploader#Contributing)
-   [Contact](https://github.com/Silent-Watcher/fileUploader#Contact)
-   [License](https://github.com/Silent-Watcher/fileUploader#License)

## Demo

Experience the power of the fileUploader by visiting the demo page.

<p>
 
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/Silent-Watcher/fileUploader)

</p>

## Features

-   **Image Uploading**: Easily upload images from your device.
-   **MongoDB Integration**: Images are stored in MongoDB, ensuring data persistence.
-   **Responsive Design**: The web application is designed to work seamlessly on various devices and screen sizes, ensuring a responsive and user-friendly experience.
-   **Image Display**:View the uploaded images after they have been successfully stored in the database.
-   **User-Friendly Interface**: The web interface is designed with a clean and intuitive layout, making it easy for users to understand and play the game.
-   **Open Source**: The project is hosted on GitHub and is open source, allowing developers to explore the codebase, contribute to the project, or use it as a learning resource.

## Prerequisites

In order to run this project, you will need to have the following installed on your computer:

-   nodejs
-   yarn | npm | pnpm
-   A running instance of MongoDB for database storage.

## Installation

To install the application, follow these steps:

1.  Clone the repository to your local machine:

```bash
git clone https://github.com/Silent-Watcher/fileUploader
```

2. Navigate to the project directory in your terminal.

```bash
  cd fileUploader
```

3. Run `npm install` to install the necessary packages.

```bash
  npm install
```

4. Run `npm run prepare` to install husky.

```bash
  npm run prepare
```

5. Create a `.env` file in the project's root directory and configure the following variables:

```bash
  APP_ENV = value
```

checkout .env.example file for possible values

6. navigate to env.config.js file inside of config directory for important env variables. you have to define these variables before running the app

## usage

To start the application, run `npm run start` . This will start the application on http://localhost:${env.port}.

```bash
npm run start
```

## Technologies

<p>

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

</p>

## Contributing 🤝🏾

Contributions to this project are welcome.
If you encounter any issues or have suggestions for improvement, please open an issue on the GitHub repository.

Before contributing, please review the contribution guidelines.

## Contact

For additional information or inquiries, you can reach out to the project maintainer:

-   Name: Silent-Watcher
-   Email: alitabatabaee20@mail.com

Feel free to contact the maintainer for any questions or feedback regarding the project.

## License 🔐

[MIT](https://choosealicense.com/licenses/mit/)

This project is licensed under the MIT License. You are free to modify, distribute, and use the code for personal and commercial purposes. See the LICENSE file for details.

## Sponsor ❤

If you like this project, please give it a star ⭐ and/or consider buying me a coffee(s). Every donation is appreciated.

<a href="https://www.coffeete.ir/silentwatcher" rel="nofollow">
    <img width="120px" src="https://camo.githubusercontent.com/ab6dddafd2bdfc2a0e66b6f4eae6f508a308c085a3093bea8b1a143ac909f14a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4275795f4d655f415f436f666665652d4646444430303f7374796c653d666f722d7468652d6261646765266c6f676f3d6275792d6d652d612d636f66666565266c6f676f436f6c6f723d626c61636b" data-canonical-src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&amp;logo=buy-me-a-coffee&amp;logoColor=black" style="max-width: 100%;">
</a>

<a target="_blank" rel="noopener noreferrer nofollow" href="https://camo.githubusercontent.com/6038c8f1fd8f60de75477470e5a87210e9256202e01dfba9986446304a0f0254/68747470733a2f2f63617073756c652d72656e6465722e76657263656c2e6170702f6170693f747970653d776176696e6726636f6c6f723d6772616469656e74266865696768743d36302673656374696f6e3d666f6f746572"><img src="https://camo.githubusercontent.com/6038c8f1fd8f60de75477470e5a87210e9256202e01dfba9986446304a0f0254/68747470733a2f2f63617073756c652d72656e6465722e76657263656c2e6170702f6170693f747970653d776176696e6726636f6c6f723d6772616469656e74266865696768743d36302673656374696f6e3d666f6f746572" data-canonical-src="https://capsule-render.vercel.app/api?type=waving&amp;color=gradient&amp;height=60&amp;section=footer" style="max-width: 100%;"></a>
