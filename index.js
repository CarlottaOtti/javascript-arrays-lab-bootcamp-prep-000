var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){

  kittens.push(name)

}

destructivelyAppendKitten("Luna")

function destructivelyPrependKitten(name){

kittens.unshift(name)

}

destructivelyPrependKitten("Tom")

function destructivelyRemoveLastKitten(){

  kittens.pop()
}

destructivelyRemoveLastKitten()
