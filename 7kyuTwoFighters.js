// Instructions: 

// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.
// Example:

//   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
//   Lew attacks Harry; Harry now has 3 health.
//   Harry attacks Lew; Lew now has 6 health.
//   Lew attacks Harry; Harry now has 1 health.
//   Harry attacks Lew; Lew now has 2 health.
//   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.

// function Fighter(name, health, damagePerAttack) {
//         this.name = name;
//         this.health = health;
//         this.damagePerAttack = damagePerAttack;
//         this.toString = function() { return this.name; }
// }

// Comment: Like a game! :D


function declareWinner(fighter1, fighter2, firstAttacker) {
    const a = [fighter1, fighter2].find((v) => v.name === firstAttacker)
    const b = [fighter1, fighter2].find((v) => v.name !== firstAttacker)
    
    return Math.ceil(b.health / a.damagePerAttack) <= Math.ceil(a.health / b.damagePerAttack) ? a.name : b.name;
};

function declareWinner(fighter1, fighter2, firstAttacker) {
    let f2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
    let f1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
    if(f1 < f2) {
        return fighter2.name;
    } else if (f2 < f1) {
        return fighter1.name;
     } else {
        return firstAttacker
    }
};