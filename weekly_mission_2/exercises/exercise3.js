class issue {
    constructor(title, repositoryNameAssociated, status, numberOfComments, author){
     this.title = title
     this.repositoryNameAssociated = repositoryNameAssociated
     this.status = status
     this.numberOfComments = numberOfComments
     this.author = author
    }
    getInfo(){ 
      return `Issue ${this.title} has ${this.numberOfComments} comments and was created by ${this.author}`
    }
  }
  console.log("Clase de issue")
  const myIssue = new issue ("02 Live 2 Semana 1 [Miércoles 6 de Abril]", "LaunchX", "Open", 10, "CeViMu")
  console.log(myIssue.getInfo())

class pullrequest {
    constructor(title,branchName,status,author, repositoryNameAssociated){
        this.title = title
        this.branchName = branchName
        this.status = status
        this.author = author
        this.repositoryNameAssociated = repositoryNameAssociated
    }    
    getInfo(){
        return `The pullrequest with name ${this.title} was created by ${this.author}`
    }
}
console.log("Clase de pull request")
const myPullrequest = new pullrequest("Sending my blog","Main","CeViMu","launch-x-explorers")
console.log(myPullrequest.getInfo())

class twitter{
    constructor(username, age, followers, following,likes){
        this.username = username
        this.age = age
        this.followers =followers
        this.following = following
        this.likes = likes
    }
    getInfo(){
        return `My username in twitter is ${this.username} and I have ${this.followers} followers`
    }
}
console.log("Clase de twitter")
const myTwitter = new twitter("@CeciliaMuC", 23,32,40,12)
console.log(myTwitter.getInfo())

class facebook{
    constructor(user,post,followers,numberOfFriends,photos,Workplace,University,City,Celphone){
        this.user = user
        this.post = post
        this.followers = followers
        this.numberOfFriends = numberOfFriends
        this.photos = photos
        this.Workplace =Workplace
        this.University = University
        this.City = City
        this.Celphone = Celphone
    }
    getInfo(){
        return `My user of facebook is ${this.user}, I have ${this.post} post, ${this.followers} followers,
        ${this.numberOfFriends} friends, ${this.photos} photos. I work in ${this.Workplace}. I studied in
        ${this.University}. I live in ${this.City}.`
    }
}
console.log("Clase de facebook")
const myFacebook = new facebook("Cecy Muñoz",3,12,167,5,"Preparatoria Tierra Blanca","Universidad Autónoma de Querétaro","Tierra Blanca",4428646672)
console.log(myFacebook.getInfo())
