/**
 * This Object function define a player object.
 */
function Player( name ){
    this.name = name;   // Player Name.
    this.hp = 100;      // Health Points
    this.sp = 100;      // Special Points

    /**
     * Heal the target player.
     * @param targetPlayer Target player.
     */
    this.heal = function( targetPlayer ){
        if(this.sp >= 40){
        console.info("Player " + this.name + " is healing " + targetPlayer.name);
        this.sp -= 40;
        targetPlayer.hp += 20;
        } else {
            console.warn("The healing process requires 40 or more special points. Current: " + this.sp);
        }
        this.status( targetPlayer );
    };

    /**
     * Print the HP and SP values for current and target player.
     * @param targetPlayer Target player.
     */
    this.status = function( targetPlayer ){
        console.log("+------------------------------------------------------------------+");
        console.log("|                          PLAYERS STATUS                          |");
        console.log("+------------------------------------------------------------------+");
        console.log("\t- "+ this.name + "\t\tHP: "+ this.hp + "\t\tSP: "+ this.sp + (this.hp <= 0 ? "\t\tDEFEATED" : ""));
        console.log("\t- "+ targetPlayer.name + "\t\tHP: "+ targetPlayer.hp + "\t\tSP: "+ targetPlayer.sp + (targetPlayer.hp <= 0 ? "\t\tDEFEATED" : ""));
        console.log("+------------------------------------------------------------------+\n\n\n")
    };

    /**
     * Attack method.
     * @param targetPlayer Target player.
     */
    this.attack = function( targetPlayer ){
        if(targetPlayer.hp > 0){
            console.info("The player " + this.name + " is attacking " + targetPlayer.name);
            targetPlayer.hp -= 20;
        } else {
            targetPlayer.hp = 0;
            console.error("The player " + targetPlayer.name + " is defeated.");
        }
        this.status(targetPlayer);
    }
}

/**
 * ============================================
 *   GAME
 * ============================================
 */
var gandalf = new Player("Gandalf");    // Player 1
var legolas = new Player("Legolas");    // Player 2

console.info("ROUND 1:");
gandalf.attack(legolas);
console.info("ROUND 2:");
gandalf.attack(legolas);
console.info("ROUND 3:");
gandalf.attack(legolas);
console.info("ROUND 4:");
gandalf.attack(legolas);
console.info("ROUND 5:");
gandalf.attack(legolas);
console.info("ROUND 6:");
gandalf.attack(legolas);
console.info("ROUND 7:");
gandalf.heal(legolas);
console.info("ROUND 8:");
gandalf.heal(legolas);
console.info("ROUND 9:");
gandalf.heal(legolas);