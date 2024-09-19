var RobotSummary = {
    "robotA": {
        hitpoints: 500,
        position: {
            x: 1,
            y: 2
        },
        parts: {
            head: "mega",
            leftarm: "mega",
            rightarm: "mega",
            legs: "mega"
        },
        attacks: {
            leftarm: {
                name: "Charged Shot",
                damage: 4,
                delay: 1000,
                cooldown: 2000,
            },
            rightarm: {
                name: "Mega Buster",
                damage: 3,
                delay: 500,
                cooldown: 1000,
            }
        },
        stats: {
            hp: 10, /* Multiplied by 50 */
            power: 10, /* Multiplied with attack value */
            armor: 9, /* 5% damage reduction per armor? */
            charge: 14,
            speed: 14,
        }   
    },
    "robotB": {
        hitpoints: 300
    }
}