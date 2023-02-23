class GuessingGame {
    constructor() {
        }

   /* constructor(number) {
        this.number = number;
      }*/

    setRange(min, max) {
     /*   const game = new GuessingGame();
        game.setRange(min, max)*/
     this.min = min;
     this.max = max;   
    }

    guess() {
        return this.middle = Math.floor((this.max+this.min)/2);
       /* this.middle = Math.floor((this.max+this.min)/2);
        if (this.number === this.middle)
           {return this.middle}
        else
          {if (this.number < this.middle)
               {return this.greater()}
           else
               {return this.lower()}
           }*/
    }

    lower() {
      return  this.min = this.middle;
     /*   return this.guess();*/
    }

    greater() {
       return this.max = this.middle;
     /*  return this.guess();*/
    }
}
/*const game = new GuessingGame ();
game.setRange();
game.number*/

module.exports = GuessingGame;
