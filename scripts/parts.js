const partsList = {
    "heads": {
      "mega": {
        "hp": 2,
        "power": 3,
        "armor": 2,
        "charge": 4,
        "speed": 3,
        "description": "Balanced head unit with good charge capability and mobility."
      },
      "proto": {
        "hp": 2,
        "power": 4,
        "armor": 2,
        "charge": 3,
        "speed": 3,
        "description": "Head unit with a focus on power and moderate defense."
      },
      "cut": {
        "hp": 1,
        "power": 4,
        "armor": 1,
        "charge": 4,
        "speed": 4,
        "description": "Light head with high speed and cutting precision."
      },
      "guts": {
        "hp": 4,
        "power": 3,
        "armor": 4,
        "charge": 1,
        "speed": 1,
        "description": "Heavy head with high defense but low speed."
      },
      "elec": {
        "hp": 1,
        "power": 5,
        "armor": 1,
        "charge": 5,
        "speed": 3,
        "description": "Head unit focused on maximizing electrical power and charge."
      },
      "bomb": {
        "hp": 3,
        "power": 4,
        "armor": 3,
        "charge": 1,
        "speed": 2,
        "description": "Durable head designed for explosive attacks."
      },
      "ice": {
        "hp": 2,
        "power": 2,
        "armor": 3,
        "charge": 2,
        "speed": 4,
        "description": "Balanced head with good speed and moderate armor."
      },
      "fire": {
        "hp": 3,
        "power": 5,
        "armor": 2,
        "charge": 2,
        "speed": 1,
        "description": "Head optimized for powerful fire-based attacks."
      },
      "oil": {
        "hp": 3,
        "power": 3,
        "armor": 2,
        "charge": 2,
        "speed": 4,
        "description": "Head designed for agility and oil-based combat."
      },
      "time": {
        "hp": 2,
        "power": 2,
        "armor": 2,
        "charge": 5,
        "speed": 4,
        "description": "Head focused on maximizing speed and rapid charge."
      }
    },
    "leftArms": {
      "mega": {
        "hp": 3,
        "power": 4,
        "armor": 2,
        "charge": 4,
        "speed": 2,
        "attack": "Charged Shot",
        "description": "Arm with a strong charge attack capability."
      },
      "proto": {
        "hp": 2,
        "power": 3,
        "armor": 3,
        "charge": 3,
        "speed": 4,
        "attack": "Shield Throw",
        "description": "Arm equipped with a shield for ranged throwing."
      },
      "cut": {
        "hp": 2,
        "power": 4,
        "armor": 1,
        "charge": 4,
        "speed": 4,
        "attack": "Rolling Cutter",
        "description": "Arm designed for throwing boomerang-like blades."
      },
      "guts": {
        "hp": 4,
        "power": 5,
        "armor": 3,
        "charge": 1,
        "speed": 1,
        "attack": "Boulder Toss",
        "description": "Heavy arm for throwing large rocks."
      },
      "elec": {
        "hp": 1,
        "power": 5,
        "armor": 1,
        "charge": 4,
        "speed": 4,
        "attack": "Electric Shot",
        "description": "Arm designed for quick, high-power electric bolts."
      },
      "bomb": {
        "hp": 3,
        "power": 3,
        "armor": 3,
        "charge": 2,
        "speed": 2,
        "attack": "Mini Bomb",
        "description": "Arm that can quickly throw small explosive bombs."
      },
      "ice": {
        "hp": 2,
        "power": 3,
        "armor": 2,
        "charge": 3,
        "speed": 3,
        "attack": "Ice Shard",
        "description": "Arm for shooting small ice projectiles."
      },
      "fire": {
        "hp": 3,
        "power": 5,
        "armor": 2,
        "charge": 2,
        "speed": 1,
        "attack": "Fire Blast",
        "description": "Arm specialized in launching bursts of fire."
      },
      "oil": {
        "hp": 3,
        "power": 2,
        "armor": 3,
        "charge": 2,
        "speed": 3,
        "attack": "Oil Shooter",
        "description": "Arm designed to shoot streams of oil."
      },
      "time": {
        "hp": 2,
        "power": 2,
        "armor": 3,
        "charge": 5,
        "speed": 3,
        "attack": "Time Ray",
        "description": "Arm for firing quick, low-damage energy rays."
      }
    },
    "rightArms": {
      "mega": {
        "hp": 3,
        "power": 3,
        "armor": 2,
        "charge": 3,
        "speed": 4,
        "attack": "Mega Buster",
        "description": "Arm with a rapid-firing buster cannon."
      },
      "proto": {
        "hp": 2,
        "power": 4,
        "armor": 2,
        "charge": 4,
        "speed": 2,
        "attack": "Proto Buster",
        "description": "Arm with a focused energy shot capability."
      },
      "cut": {
        "hp": 2,
        "power": 4,
        "armor": 2,
        "charge": 4,
        "speed": 3,
        "attack": "Cutter Shot",
        "description": "Arm designed for firing sharp, fast blades."
      },
      "guts": {
        "hp": 5,
        "power": 4,
        "armor": 4,
        "charge": 1,
        "speed": 1,
        "attack": "Rock Barrage",
        "description": "Arm for launching multiple rocks in quick succession."
      },
      "elec": {
        "hp": 1,
        "power": 5,
        "armor": 2,
        "charge": 4,
        "speed": 3,
        "attack": "Thunder Beam",
        "description": "Arm capable of shooting powerful electric beams."
      },
      "bomb": {
        "hp": 3,
        "power": 5,
        "armor": 2,
        "charge": 2,
        "speed": 1,
        "attack": "Hyper Bomb",
        "description": "Arm specialized in hurling large, powerful bombs."
      },
      "ice": {
        "hp": 2,
        "power": 4,
        "armor": 2,
        "charge": 3,
        "speed": 2,
        "attack": "Ice Slasher",
        "description": "Arm for firing larger, piercing ice blades."
      },
      "fire": {
        "hp": 3,
        "power": 5,
        "armor": 2,
        "charge": 2,
        "speed": 1,
        "attack": "Flame Cannon",
        "description": "Arm optimized for powerful, sustained fire attacks."
      },
      "oil": {
        "hp": 3,
        "power": 3,
        "armor": 2,
        "charge": 3,
        "speed": 2,
        "attack": "Oil Bomb",
        "description": "Arm for throwing oil bombs that explode on impact."
      },
      "time": {
        "hp": 2,
        "power": 3,
        "armor": 2,
        "charge": 4,
        "speed": 4,
        "attack": "Clock Beam",
        "description": "Arm for releasing concentrated energy beams."
      }
    },
    "legs": {
      "mega": {
        "hp": 2,
        "power": 2,
        "armor": 3,
        "charge": 3,
        "speed": 5,
        "description": "Lightweight legs optimized for speed and mobility."
      },
      "proto": {
        "hp": 2,
        "power": 3,
        "armor": 3,
        "charge": 2,
        "speed": 5,
        "description": "Legs designed for high speed and moderate durability."
      },
      "cut": {
        "hp": 1,
        "power": 3,
        "armor": 2,
        "charge": 4,
        "speed": 5,
        "description": "Quick legs that enhance speed for cutting attacks."
      },
      "guts": {
        "hp": 5,
        "power": 4,
        "armor": 4,
        "charge": 1,
        "speed": 1,
        "description": "Heavy-duty legs with maximum defense."
      },
      "elec": {
        "hp": 2,
        "power": 5,
        "armor": 1,
        "charge": 3,
        "speed": 4,
        "description": "Legs designed for quick movements and power attacks."
      },
      "bomb": {
        "hp": 3,
        "power": 3,
        "armor": 4,
        "charge": 1,
        "speed": 2,
        "description": "Stable legs with good armor for bomb deployment."
      },
      "ice": {
        "hp": 2,
        "power": 2,
        "armor": 4,
        "charge": 3,
        "speed": 4,
        "description": "Balanced legs with moderate speed and defense."
      },
      "fire": {
        "hp": 3,
        "power": 4,
        "armor": 4,
        "charge": 2,
        "speed": 2,
        "description": "Legs designed to handle the heat of fire-based combat."
      },
      "oil": {
        "hp": 3,
        "power": 2,
        "armor": 2,
        "charge": 3,
        "speed": 5,
        "description": "Light legs with high speed for evasive euvers."
      },
      "time": {
        "hp": 2,
        "power": 2,
        "armor": 2,
        "charge": 4,
        "speed": 5,
        "description": "Legs specialized in fast, time-based movements."
      }
    }
  }
  