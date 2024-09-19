function moveRobotA(direction) {
    switch(direction) {
        case 'down':
            if(RobotSummary.robotA.position.y < 3) RobotSummary.robotA.position.y +=1;
            break;
        case 'up':
            if(RobotSummary.robotA.position.y > 1) RobotSummary.robotA.position.y -=1;
            break;
    }
    renderRobotA();
}

function renderRobotA() {
    // Clear all cells in the first column (column 1) by setting innerHTML to empty
    for (let i = 1; i <= 3; i++) { // Assuming rows are from 1 to 3
        let oldCell = document.getElementById(`cell-1-${i}`); // Clear only the first column (column 1) cells
        if (oldCell) {
            oldCell.innerHTML = ''; // Clear the content if the cell exists
        }
    }

    // Get the new cell based on the updated row position (y value)
    let newCell = document.getElementById(`cell-1-${RobotSummary.robotA.position.y}`);
    if (newCell) {
        newCell.innerHTML = `
            <div class="robot-container">
                <img id="arenaLegs" class="robot-part" src="img/parts/${RobotSummary.robotA.parts.legs}legs.png" alt="Legs">
                <img id="arenaRightArm" class="robot-part" src="img/parts/${RobotSummary.robotA.parts.rightarm}right.png" alt="Right Arm">
                <img id="arenaLeftArm" class="robot-part" src="img/parts/${RobotSummary.robotA.parts.leftarm}left.png" alt="Left Arm">
                <img id="arenaHead" class="robot-part" src="img/parts/${RobotSummary.robotA.parts.head}head.png" alt="Head">
            </div>`;
    } else {
        console.error(`New cell with id cell-1-${RobotSummary.robotA.position.y} not found. Check the robot position.`);
    }
}
