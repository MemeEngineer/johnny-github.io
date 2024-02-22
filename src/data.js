export const projects = [
    {
       link: 'https://memeengineer.github.io/RNGRPG/',
       description: "Analog key based action game: Defeat the enemies to retrieve the Gem of Swag (1/10 chance) ",
       tech:["JavaScript (OOP)", "HTML", "CSS"],
       title: "RNGRPG (Random Number Generator Role-Playing Game)",
       github: 'https://github.com/MemeEngineer/RNGRPG',
        image: require('./assets/RNGRPG.gif'),

    },
    {link: 'https://www.loom.com/share/eb26caf8424a46dbb5ef72b0afc564ca',
    description: "An app for sharing hunting and fishing spots",
    tech:["JavaScript", "HTML", "CSS","Ruby on Rails", "Material-UI", "React", "PostgreSQL"],
    title: "Yeehaw! Wind, Woods, & Water",
    github: 'https://github.com/MemeEngineer/Yeehaw',
     image: require('./assets/yeehaw.gif'),
     
    },
    {link: 'https://yourbizhere.onrender.com',
    description: "Template E-commerce website for business (restaurants or retail) with administrative capabilities",
    tech:["JavaScript", "HTML", "CSS","Node.js", "Material-UI", "React", "MongoDB", "Express"],
    title: "YourBizHere",
    github: 'https://github.com/MemeEngineer/YourBizHere',
     image: require('./assets/YourBizHere.gif'),
     
    },
]

export const skills = [
    {
        program: "JavaScript",
        logo: require('./assets/JavaScript.svg').default
    },
    {
        program: "HTML",
        logo: require('./assets/HTML.svg').default
    },
    {
        program: "CSS",
        logo: require('./assets/CSS.svg').default
    },
    {
        program: "Ruby on Rails",
        logo: require('./assets/Ruby.svg').default
    },
    {
        program: "React",
        logo: require('./assets/React-Dark.svg').default
    },
    {
        program: "MaterialUI",
        logo: require('./assets/MaterialUI-Dark.svg').default
    },
    {
        program: "Express",
        logo: require('./assets/ExpressJS-Dark.svg').default
    },
    {
        program: "Node.js",
        logo: require('./assets/NodeJS-Dark.svg').default
    },
    {
        program: "MongoDB",
        logo: require('./assets/MongoDB.svg').default
    }

]

export const DSAbank = [
    {
      title: "FizzBuzz",
      difficulty: "Easy",
      link:"https://leetcode.com/problems/fizz-buzz/description/",
      problem: `Given an integer n, return a string array answer (1-indexed) where:

      answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
      answer[i] == "Fizz" if i is divisible by 3.
      answer[i] == "Buzz" if i is divisible by 5.
      answer[i] == i (as a string) if none of the above conditions are true.`,
      code: `/**
      * @param {number} n
      * @return {string[]}
      */
     var fizzBuzz = function(n) {
         let arr = [];
         for(let i = 1; i <= n; i++){
             if( i % 15 == 0){
                 arr.push("FizzBuzz")
             }else if( i % 5 == 0) {
                 arr.push("Buzz")
             }else if( i % 3 == 0) {
                 arr.push("Fizz")
             }else{
                 arr.push(i + '')
             }
         }
         return arr
     };`
    },
]