const issue ={
    title: "02 Live 2 Semana 1 [Miércoles 6 de Abril] ",
    repositoryNameAssociated: "LaunchX",
    status: "Open",
    numberOfComments: 10,
    labels: ["Live 2","Finalizado","Semana-1"],
    author: "CeViMu",
    dateCreated: "April 1st 2022",
    lastUpdate: "18 days ago",
    getTitleAndAuthor: function(){
        return `${this.title} was created by ${this.author}`
    },
    getGeneralInformation: function(){
        return `Status: ${this.status} \nDate created: ${this.dateCreated} \n Number of comments: ${this.numberOfComments}
        \nLabels: ${this.labels} \nLast update: ${this.lastUpdate}`
    }
}
console.log(issue)
console.log(issue.getTitleAndAuthor())
console.log("General Information")
console.log(issue.getGeneralInformation())
