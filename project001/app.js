new Vue({
    el: '#app',

    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },

    methods: {
        startGame: function () {
            console.log("Game started!")
            this.gameIsRunning = true
            this.playerHealth = 100
            this.monsterHealth = 100
            this.turns = []
        },

        attack: function () {
            console.log("attack!")
            if(this.playerAttack()) {
                return
            }
            
            this.monsterAttack()
        },

        specialAttack: function () {
            console.log("special attack!")

            var damage = this.calculateDamge(20, 10)
            this.turns.unshift({
                player: true,
                text: 'Player hits Monster hard for ' + damage
            })
            this.monsterHealth -= damage
            if (this.checkWin()) {
                return
            }

            this.monsterAttack()
        },

        heal: function () {
            console.log("heal!")
            if (this.playerHealth <= 90) {
                this.playerHealth += 10
            } else {
                this.playerHealth = 100
            }
            this.turns.unshift({
                player: true,
                text: 'Player heals for 10'
            })

            this.monsterAttack()
        },


        giveup: function () {
            console.log("giveup!")
            alert("You gave up!")
            this.gameIsRunning = false
        },

        calculateDamge: function (max, min) {
            return Math.max((Math.floor(Math.random() * max) + 1), min)
        },

        checkWin: function () {
            if (this.monsterHealth <= 0) {
                if (confirm("You win! New game?")) {
                    this.startGame()
                } else {
                    this.gameIsRunning = false
                }
                return true
            } else if (this.playerHealth <= 0) {
                if (confirm("You lose! New game?")) {
                    this.startGame()
                } else {
                    this.gameIsRunning = false
                }
                return true
            }

            return false
        },

        playerAttack: function() {
            var damage = this.calculateDamge(10, 3)
            this.turns.unshift({
                player: true,
                text: 'Player hits Monster for ' + damage
            })

            this.monsterHealth -= damage
            if (this.checkWin()) {
                return true
            }
            return false
        },

        monsterAttack: function() {
            var damage = this.calculateDamge(12, 5)
            this.turns.unshift({
                player: false,
                text: 'Monster hits player for ' + damage
            })
            this.playerHealth -= damage
            this.checkWin()
        }
    },
})