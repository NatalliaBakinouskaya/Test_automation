import { Greating } from "./classes"
import { scene1 } from "./locations"

export const winner : Greating = {
    greating:  `! Вы выиграли!` ,
    conversation() {
          console.log('Игра окончена, ', scene1.selection + this.greating);
    },
}
export const loser : Greating = {
    greating:  `! Вы проиграли!` ,
    conversation() {
        console.log('Игра окончена, ', scene1.selection + this.greating);
    },
}
    