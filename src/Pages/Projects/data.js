class Project {
    constructor(title,description,websiteLink,repoLink){
        this.title = title
        this.description = description
        this.websiteLink = websiteLink
        this.repoLink = repoLink
    }
}

export const projectData = [
   new Project("The 19th Hole", "Helping you find the nearest golf courses and places to drink based off your zip code entered", "https://dscoderman.github.io/the-19th-hole/", "https://github.com/DScoderman/the-19th-hole"),
   new Project("LFG Forum", "The staples for an online forum in finding people to game with", "www.google.com", "https://github.com/DScoderman/lfg-gameboard-Fork"),
   new Project("Password Generator", "Generating a password based on prompted inputs from user", "https://dscoderman.github.io/Password-Generator-V2/", "https://github.com/DScoderman/Password-Generator-V2"),
   new Project("E-commerce Database", "A backend system for connecting various retail goods in a database", "https://github.com/DScoderman/E-Commerce-Database", "https://github.com/DScoderman/E-Commerce-Database"),
   new Project("Text Browser Editor", "A progressive web app for downloading Javascript as a text editor", "https://young-dusk-78061.herokuapp.com/", "www.github.com/DScoderman"),
   new Project("Code Quiz", "A quiz made in Javascript to help users learn CS material", "www.codequiz.com", "www.github.com/DScoderman"),
]