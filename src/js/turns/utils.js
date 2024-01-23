function calculateChance(targetValue, currentStat){
    let chance = 5-(Math.abs(targetValue-currentStat))

    if (chance < 3){
        chance = 0
    }

    return chance;
}

export {calculateChance}