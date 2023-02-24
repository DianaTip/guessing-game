class GuessingGame {
      constructor(number) {
        this.number = number;
      }

    setRange(min, max) {
     this.min = min;
     this.max = max;   
    }

    guess() {
       return  this.middle = Math.round((this.max+this.min)/2);
         }

    lower() {
     return this.max = this.middle;
    }

    greater() {
     return this.min = this.middle;
    }
}

module.exports = GuessingGame;
