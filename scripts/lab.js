const rbp = RobotSummary.robotA.parts
const rbs = RobotSummary.robotA.stats

function calculateRobotAssembly() {
    rbp.head = document.getElementById("selectHead").value;
    rbp.leftarm = document.getElementById("selectLeftArm").value;
    rbp.rightarm = document.getElementById("selectRightArm").value;
    rbp.legs = document.getElementById("selectLegs").value;
    let statsHead = partsList.heads[rbp.head];
    let statsLeftArm = partsList.leftArms[rbp.leftarm];
    let statsRightArm = partsList.rightArms[rbp.rightarm];
    let statsLegs = partsList.legs[rbp.legs];
    let statsTotal = {
        hp: statsHead.hp + statsLeftArm.hp + statsRightArm.hp + statsLegs.hp,
        power: statsHead.power + statsLeftArm.power + statsRightArm.power + statsLegs.power,
        armor: statsHead.armor + statsLeftArm.armor + statsRightArm.armor + statsLegs.armor,
        charge: statsHead.charge + statsLeftArm.charge + statsRightArm.charge + statsLegs.charge,
        speed: statsHead.speed + statsLeftArm.speed + statsRightArm.speed + statsLegs.speed,
    }
    rbs.hp = statsHead.hp + statsLeftArm.hp + statsRightArm.hp + statsLegs.hp,
    rbs.power = statsHead.power + statsLeftArm.power + statsRightArm.power + statsLegs.power,
    rbs.armor = statsHead.armor + statsLeftArm.armor + statsRightArm.armor + statsLegs.armor,
    rbs.charge = statsHead.charge + statsLeftArm.charge + statsRightArm.charge + statsLegs.charge,
    rbs.speed = statsHead.speed + statsLeftArm.speed + statsRightArm.speed + statsLegs.speed,
    RobotSummary.robotA.hitpoints = rbs.hp * 50;
    attacksRobotAssembly();
    renderRobotAssembly();
    renderRobotAssemblyTable();
}

function renderRobotAssembly() {
    rbp.head = document.getElementById("selectHead").value;
    rbp.leftarm = document.getElementById("selectLeftArm").value;
    rbp.rightarm = document.getElementById("selectRightArm").value;
    rbp.legs = document.getElementById("selectLegs").value;
    document.getElementById("labHead").src = "img/parts/" + RobotSummary.robotA.parts.head + "head.png";
    document.getElementById("labLeftArm").src = "img/parts/" + RobotSummary.robotA.parts.leftarm + "left.png";
    document.getElementById("labRightArm").src = "img/parts/" + RobotSummary.robotA.parts.rightarm + "right.png";
    document.getElementById("labLegs").src = "img/parts/" + RobotSummary.robotA.parts.legs + "legs.png";
    document.getElementById("arenaHead").src = "img/parts/" + RobotSummary.robotA.parts.head + "head.png";
    document.getElementById("arenaLeftArm").src = "img/parts/" + RobotSummary.robotA.parts.leftarm + "left.png";
    document.getElementById("arenaRightArm").src = "img/parts/" + RobotSummary.robotA.parts.rightarm + "right.png";
    document.getElementById("arenaLegs").src = "img/parts/" + RobotSummary.robotA.parts.legs + "legs.png";
    document.getElementById("arenaHPRobotA").value = RobotSummary.robotA.hitpoints;
    document.getElementById("arenaHPRobotB").value = RobotSummary.robotB.hitpoints;
}

function renderRobotAssemblyTable() {
    document.getElementById("labHP").innerText = rbs.hp;
    document.getElementById("labPower").innerText = rbs.power;
    document.getElementById("labArmor").innerText = rbs.armor;
    document.getElementById("labCharge").innerText = rbs.charge;
    document.getElementById("labSpeed").innerText = rbs.speed;
    document.getElementById("labLeftAttack").innerText = RobotSummary.robotA.attacks.leftarm.name;
    document.getElementById("labRightAttack").innerText = RobotSummary.robotA.attacks.rightarm.name;
}

function attacksRobotAssembly() {
    var selectedLeftArm = RobotSummary.robotA.parts.leftarm;
    var selectedRightArm = RobotSummary.robotA.parts.rightarm;
    var partLeftArm = partsList.leftArms[selectedLeftArm];
    var partRightArm = partsList.rightArms[selectedRightArm];
    var leftAttackName = partLeftArm.attack;
    var rightAttackName = partRightArm.attack;
    var leftAttackDetails = attacksList[leftAttackName];
    var rightAttackDetails = attacksList[rightAttackName];
    RobotSummary.robotA.attacks.leftarm = {
            name: leftAttackName,
            damage: leftAttackDetails.damage,
            delay: leftAttackDetails.delay,
            cooldown: leftAttackDetails.cooldown
        };
    RobotSummary.robotA.attacks.rightarm = {
            name: rightAttackName,
            damage: rightAttackDetails.damage,
            delay: rightAttackDetails.delay,
            cooldown: rightAttackDetails.cooldown
        };
}

function showDiv(divId) {
    let divs = document.querySelectorAll('.content-container');
    divs.forEach(div => {
        div.classList.remove('active');
    });
    document.getElementById(divId).classList.add('active');
}