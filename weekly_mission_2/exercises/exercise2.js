const explorers = [
 {
   name: "Explorer 1",
   exercises_completed: 10,
   rate: 99,
   city: "CDMX",
   stack: [
     "js",
     "c#"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: true,
       exercisesFinished: true
     }
   }
 },
 {
   name: "Explorer 2",
   exercises_completed: 9,
   city: "Veracruz",
   rate: 50,
   stack: [
     "js"
   ],
   missions: {
     onboarding: {
       isFinished: false,
       exercisesFinished: false
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 },
 {
   name: "Explorer 3",
   exercises_completed: 3,
   city: "Sonora",
   rate: 100,
   stack: [
     "elixir"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 }
]


console.log("Imprime el nombre de cada explorer")
explorers.forEach(explorer => console.log(explorer.name))

console.log("Imprime el stack de cada explorer")
explorers.forEach(explorer => console.log(explorer.stack))

console.log("Lista de stacks")
const ListStacks = explorers.map(explorer => explorer.stack)
console.log(ListStacks)

console.log('lista de explorers que tengan en su stack "js"')
const explorersContainingJs = explorers.filter((explorer) =>
  explorer.stack.includes('js')
)
console.log(explorersContainingJs)

console.log("Primer explorer de la CDMX")
const explorerCDMX = explorers.find(explorerCDMX => explorerCDMX.city === 'CDMX')
console.log(explorerCDMX)

console.log("Suma de todos los exercises_completed")
const sumExercisesCompleted = explorers.reduce((acc, explorer) => acc + explorer.exercises_completed, 0) //acc es una variable acumulada
console.log(sumExercisesCompleted)

console.log("Validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true")
const areSomePropertyExercisesFinished = explorers.some((explorer) =>  explorer.exercisesFinished === true)
console.log(areSomePropertyExercisesFinished)

console.log("Validación si todos los explorers tienen la propiedad isFinished del onboarding como true")
const propertyIsFinished = explorers.every((isFinished) => isFinished === true)
console.log(propertyIsFinished)
