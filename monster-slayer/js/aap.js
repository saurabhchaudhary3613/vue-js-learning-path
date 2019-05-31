var app = new Vue({
    el: '#app',
    data: {
      isGameisRunning: false,
      palyerHealth: 100,
      monsterHealth: 100,
      turns: []
    },
    methods: {
      onClickStart: function() {
        this.isGameisRunning = true;
        this.palyerHealth = 100;
        this.monsterHealth = 100;
        this.turns = [];
      },
      onClickAttack: function() {
        let damage = this.calculateDamage(3, 10);
        this.monsterHealth -= damage;

        this.turns.unshift({
          isPlayer: true,
          text: 'Player hits Monster for ' + damage
        });
        if(this.checkWin()) {
          return;
        }
        this.monstersAttack();
       
      },
      onClickSpecialAttack: function() {
        let damage = this.calculateDamage(10, 20)
        this.monsterHealth -= damage;
        this.turns.unshift({
          isPlayer: true,
          text: 'Player hits Monster hard for ' + damage
        });
        if(this.checkWin()) {
          return;
        }
        this.monstersAttack();
      },
      onClickHeal: function() {
        if(this.palyerHealth <= 90) {
          this.palyerHealth +=10;
        }else {
          this.palyerHealth =100;
        }
        this.turns.unshift({
          isPlayer: true,
          text: 'Player heals for 10'
        });
        this.monstersAttack();
      },
      onClickGiveUp: function() {
        this.isGameisRunning = false;
      },
      calculateDamage: function(min, max) {
        return Math.max(Math.floor(Math.random() * max) + 1, min)
      },
      monstersAttack: function() {
        let damage = this.calculateDamage(5, 12)
        this.palyerHealth -= damage;
        this.turns.unshift({
          isPlayer: false,
          text: 'Monster hits palyer for ' + damage
        });
        this.checkWin();
      },
      checkWin: function() {
        if(this.monsterHealth <=0) {
          if(confirm('You Won ! New Game?')) {
            this.onClickStart();
          }else {
            this.isGameisRunning = false;
          }
          return true;
        } else if(this.palyerHealth <=0) {
          if(confirm('You Lost ! New Game?')) {
            this.onClickStart();
          }else {
            this.isGameisRunning = false;
          }
          return true;
        }
        return false;
      }
    }
    
  });