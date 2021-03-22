import { Greating } from "./classes"
import { userName} from "./locations"

export const winner : Greating = {
    greating:  `! Вы выиграли!` ,
    conversation() {
          console.log('Игра окончена, ', userName + this.greating);
    },
}
export const loser : Greating = {
    greating:  `! Вы проиграли!` ,
    conversation() {
        console.log('Игра окончена, ', userName + this.greating);
    },
}
    