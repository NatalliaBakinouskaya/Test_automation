const Prompt: any = require('prompt-sync')();

interface UserI{
    text: string,
    opt1?: string,
    opt2?: string,
    opt3?: string,
    selection?: string,
    action1() : void,
    action2() : void
}
 export class Scene implements UserI{

    selection: string = '';
    constructor(
        public text: string,
    ){}

    action1() : void {
        console.log(this.text);
        
        this.selection = Prompt('Выберите номер ответа _ ');
    }
    action2() : void {    
    }

    action3() : void {
        this.action1();
        this.action2();
    }
   
}
export interface Greating {
    greating: string,
    conversation() : void,
}
