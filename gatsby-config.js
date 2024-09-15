module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://MonibaChaparian.github.io/`,
    // Your Name
    name: 'Moniba Chaparian',
    // Main Site Title
    title: `Moniba Chaparian | Software Engineer`,
    // Description that goes under your name in main bio
    description: `Software Engineer passionate about machine learning, computer vision, UI/UX design, and exploring LLMs to drive innovation.`,
    // Optional: Twitter account handle
    // author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/MonibaChaparian`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/moniba-chaparian/`,
    email: 'Monibachaparian@gmail.com',  // Add your email here
    cv: 'https://drive.google.com/drive/folders/1ppMCuqtj_ZfZ5u9TYjy6CLnXvrOhdY7-?usp=sharing',  // Add the Google Drive link to your CV
    resume: 'https://drive.google.com/drive/folders/191KY6BAEGi1m5doHz2OsagQHAo5pQAib?usp=sharing',
    // publications: 'Your Publications Link', 
    // Content of the About Me section
    about: `Software Engineer with a strong background in machine learning, computer vision, and UI/UX design. Adept at building intuitive user interfaces and developing intelligent systems that leverage advanced machine learning techniques. Passionate about exploring the potential of Large Language Models (LLMs) and enthusiastic about working with the Java programming language to create innovative, scalable solutions. Eager to apply technical expertise to solve complex problems and contribute to impactful projects.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Food Recipe Application',
        description:
          'In this project I worked with Figma and I learned to understand the needs, wants, and pain points of users, I learned about user research, such as interviews, surveys, and usability testing Information architecture and I was able to design user flows, wireframes, and prototypes to test and iterate on designs. ',
        link: ' ',
      },
      {
        name: 'Skin Cancer Classification with Deep Learning',
        description:
          'In this project, I applied deep learning techniques to classify skin lesions using the HAM10000 dataset. The goal was to develop an accurate and efficient model for detecting various types of skin cancer.\n Key Highlights:\n Achieved 98% accuracy in classifying skin lesions using an advanced CNN with multiple layers for feature extraction. Applied data augmentation to address class imbalance and improve generalization. Comprehensive evaluation included performance metrics, confusion matrices, and classification reports. This project demonstrates the potential of deep learning in medical diagnostics and emphasizes robust data handling and model evaluation. ',
        link: 'https://github.com/MonibaChaparian/Skin_Cancer_Classification',
      },
      {
        name: 'Human Activity Recognition with Deep Learning',
        description:
          'This project involves classifying human activities using deep learning techniques on sensor data from smartphones. Achieving an impressive accuracy of 95.39%, the project demonstrates the effectiveness of deep learning in real-world applications.\n Key Highlights: \n Applied standardization and PCA for sensor data preprocessing. Developed a neural network with dropout and L1 regularization to reduce overfitting. Evaluated performance using accuracy, confusion matrix, and classification reports, complemented by visualization of loss, accuracy trends, and heatmaps. Demonstrated the effectiveness of neural networks in activity recognition, highlighting the significance of data preprocessing and thorough evaluation.',
        link: 'https://github.com/MonibaChaparian/Human_activities_recognition',
      },
      {
        name: 'Trie Tree Implementation',
        description:
          'This project implements a Trie data structure for efficient string storage and retrieval. Users can insert, search, delete, and display words through a simple menu interface. The Trie is useful for applications like auto-complete and spell checking, offering fast prefix-based searching.',
        link: 'https://github.com/MonibaChaparian/Trie_Tree'
      },
      {
        name: 'GoldMine',
        description:
          'This project implements an algorithm that calculates the maximum gold collectible in a grid-based gold mine. The miner can move right, right-up, or right-down, and the algorithm finds the most profitable path. It identifies the cell with the highest gold value and traces the optimal route to collect it. This solution efficiently handles grid-based pathfinding, making it ideal for resource optimization problems.',
        link: 'https://github.com/MonibaChaparian/Gold_Mine',
      },
      {
        name: 'Maze',
        description:
          'This project is a visual Maze Generator and Solver built in Java. It generates random mazes using recursive algorithms and solves them with Breadth-First Search (BFS). The interactive interface allows users to see the maze generation and solving process in real time. Press SPACE to solve the maze or R to generate a new one! ',
        link: 'https://github.com/MonibaChaparian/Maze',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'freelancer',
        description: 'Software engineer , October 2023 - present',
        // link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Dade Kavan (Internship)',
        description: 'UI/UX Designer, 1 July 2023 - 31 September 2023',
        // link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Programming Languages & Frameworks',
        description:
          'Python, Java, Keras, Tensorflow, numpy, pandas, yolo, colab',
      },
      {
        name: 'Design platforms',
        description: 'Photoshop, Figma, Adobe XD, Illustrator',
      },
      {
        name: 'User Experience Research and User Interface Design',
        description:
          'DesignThinking, StoryTelling, Prototyping, Wireframing, Userflow, User Research, Usability Testing ',
      },
      {
        name: 'Others',
        description:
          'Microsoft Word, Microsoft PowerPoint, Microsoft Excel, Microsoft Visio ',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/content/blog`,
    //     name: `blog`,
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.jpg`,
      },
    },
  ],
};
