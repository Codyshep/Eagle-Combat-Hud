function updateHealthBar(playerHealth, playerArmor) {
    const healthBar = document.getElementById("healthFill");
    const armorBar = document.getElementById("armorFill");

    // Calculate the fill percentage based on currentHealth and playerMaxHealth

    // Set width of health bar to the fill percentage
    healthBar.style.width = playerHealth + "%";
    armorBar.style.width = playerArmor + "%"
}

window.addEventListener("message", function (event) {
    if (event.data.type === 'playerHealth') {
        updateHealthBar(event.data.playerHealth, event.data.playerArmor);
    }
});
