while true do
    Citizen.Wait(1000)
    SendNUIMessage({
        type = "playerHealth", -- This type matches what you're expecting in JavaScript
        playerHealth = GetEntityHealth(GetPlayerPed(-1)) - 100,
        playerArmor = GetPedArmour(GetPlayerPed(-1))
    })
end