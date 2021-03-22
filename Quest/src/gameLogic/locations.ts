const Prompt: any = require('prompt-sync')();
import { Scene} from "./classes"

export let next : any;
export let progress : boolean = true;
export let userName : string = '?';
export let won : boolean = true;



export let scene1 = new Scene(
    `Привет! Давай играть!
    `);
    scene1.action1 = function(){
        console.log(this.text);
        
        this.selection = Prompt('Назовите Ваше имя _ ');
    }
    scene1.action2 = function(){
       if(this.selection.length > 0){
           userName = this.selection;
           console.log(`Приятно познакомиться, ${userName}!
            
    _______________
         ____
    ______________`);
           next = scene2;
       }
       
       else {
           console.log(`Я с незнакомыми не играю.
               Пока`);
            progress = false;
        
       }
  
    }
export let scene2 = new Scene(
`В одной деревне жила маленькая девочка, у которой была красная шапка 
и поэтому звали ее "Красная Шапочка. У девочки была мама и бабушка. 
Бабушка жила за лесом и очень любила пирожки. А в темном-темном лесу 
жил одинокий голодный волк, которого никто не любил и не кормил пирожками. 
Чью историю хочешь узнать? 
______________
1 - eсли Шапки 
и 
2 - если Волка 
`);

scene2.action2 = function(){
   if(this.selection == '2'){
       console.log(`Отличный выбор, Волк!`);
       next = scene3;
       progress = true;
   }
   else if(this.selection == '1'){
       console.log(`С девчонками не играю! Пока!`);
       next = 'finish';
       progress = false;
       won = false;
    
   }
   else {
       console.log(`${scene1.selection}, это не ответ давай еще раз.`);
       scene2.text = `\uD83D\uDE0D`;
       scene2.action1();
       scene2.action2()
    
   }

}


export let scene3 = new Scene(
    `В один прекрасный день Вы встечаете в лесу Красную Шапку.
    Что Вы ей скажете?
    ______________
    1 - Bonjour!
    или 
    2 - Привет!
    или 
    3 - Стой! Буду стрелять! Ха-ха-ха! 
    `);
    
    scene3.action2 = function(){
       if(this.selection == '2' || this.selection == '1'){
           console.log(`Именно! Вежливость - главное оружие волка.`);
           next = 'scene4';
           progress = false;
       }
       else if(this.selection == '3'){
           console.log(`Скорее всего, Шапка начнет кричать "Спасите! Помогите! Волка зарубите!" 
           На крики рибегут охотники и все - game over.`);
           next = 'finish';
           progress = false;
           won = false;
        
       }
       else {
           console.log(`${scene1.selection}, это не ответ давай еще раз.`);
           scene3.text = `\uD83D\uDE0D`;
           scene3.action1();
           scene3.action2()
        
       }
    
    }
    
next = scene1;

