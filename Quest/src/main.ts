import { next, progress, won } from "./gameLogic/locations"
import { winner, loser } from "./gameLogic/greatings"

while(progress == true){
    next.action3();
}
won === true? winner.conversation(): loser.conversation();
