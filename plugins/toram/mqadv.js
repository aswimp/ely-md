const floor = Math.floor;

const mq_data = {
    "Chapter 1":"",
    "First Time Visit":30,
    "Straye Brother and Sister":80,
    "A Golem on a Rampage":730,
    "The Goddess of Wisdom":2050,
    "The Dragon's Den":4700,
    "The Ruined Temple":9330,
    "The First Magic Stone":16700,
    "Purification Incense":27900,
    "The Dragon and Black Crystal":43000,
    "Chapter 2":"",
    "The Merchant Girl":64000,
    "Where Are the Gems?":92000,
    "Who is the Black Knight?!":118200,
    "Trials in the Palace":149000,
    "The Moon Wizard":172000,
    "The Follower and Hater":227000,
    "The Wizard's Cave":240000,
    "The Star Wizard":255000,
    "Chapter 3":"",
    "The Invincible... Enemy??":270000,
    "The Ancient Empress":284000,
    "The Culprit":319000,
    "Fate of the Fortress":335000,
    "Memory in the Lost Town":398000,
    "The Stolen Sorcery Gem":417000,
    "Living with a Dragon":462300,
    "Monsters from Outerworld":540000,
    "Chapter 4":"",
    "The Mage Diels":562000,
    "Journey for Reconstruction":585000,
    "The Sacred Gem in Akaku":710000,
    "The King of Darkan":740000,
    "The Lurking Evil":803000,
    "Find the False Black Knight!":913000,
    "Technista's Movement":1000000,
    "The Falling Feather of Death":1100000,
    "Chapter 5":"",
    "In The Unknown Darkness":1150000,
    "The Charm":1310000,
    "Parching Dark Mirror":1370000,
    "Fierce Battle in the Garden":1550000,
    "A Light in the Darkness":1750000,
    "The Ones Nesting in the Manor":1970000,
    "The Dark Castle":2210000,
    "To The Living World":2220000,
    "Chapter 6":"",
    "Demi Machina":2600000,
    "The Town of Pax Faction":2700000,
    "Mechanical Heart":2800000,
    "Black Knights of Lyark":2820000,
    "The Mysterious Artifact":3030000,
    "Truth of the Artifact":3099000,
    "The Price of Treachery":3320000,
    "The Blasphemous Factory":3640000,
    "Mystery of the Black Knights":4020000,
    "Chapter 7":"",
    "Monster's Forest":4730000,
    "The Underground Town":4820000,
    "The Elves in Lyark":5070000,
    "The Mad Laboratory":5500000,
    "Tragedy in the Jail":6000000,
    "Calamity in Droma Square":6400000,
    "Head for Ultimea Palace":6900000,
    "The Chaotic Truth":7400000,
    "Chapter 8":"",
    "The Mine Where Monsters Lurk":8400000,
    "The Mysterious Shadow":8500000,
    "The New Diel Country":8600000,
    "The Ruins of the Gods":8800000,
    "The Former God of Justice":9100000,
    "The Remaining Thrones in the Shrine":9700000,
    "Gods' Whereabouts":10400000,
    "The Wait at Specia's Shrine":11100000,
    "The Warden of Ice & Snow":11800000,
    "At Mountains' End":12500000,
    "Chapter 9":"",
    "Deadly Road to Eldenbaum":15800000,
    "Unforeseen Traps":17100000,
    "Traces of Technological Progress":18200000,
    "An Unexpected Acquaintance":19200000,
    "Front Line Base Operation":20300000,
    "Strategy to Redeem the Treetop Harbor":21500000,
    "The Teleporter Left Behind":22700000,
    "The Man Who Seeks Death":23900000,
    "The Battle to Recapture Eldenbaum":25000000,
    "A New Beginning":13000000,
    "Chapter 10":"",
    "Off to the Fateful Land":26000000,
    "The Inhabitants Under the Cliff":27400000,
    "The Nightmare Returns":28800000,
    "The Whereabouts of the Missing Monks":30200000,
    "The Goddess of Justice and the Squatters":31600000,
    "Navigator of the Ark":33100000,
    "Witch in the Woods": 34600000,
    "The Duel in Nov Diela": 36200000,
    "Chapter 11":"",
    "Flying the Ark":37800000,
    "Land of the Unknown":49000000,
    "The Strolling Forest":51000000,
    "Eumanos the Forest Dwellers": 53400000,
    "A Sproutling is Born": 55700000,
    "The Blessing-Bearer": 58100000,
    "Intense Battle in Coenubia's Stronghold": 60500000,
    "The Shadow of a Smoky Mountain": 63000000,
    "The Weredragons & the Underground World": 65500000,
    "Chapter 12": "",
    "The Sky with a Ceiling": 73400000,
    "Rivalry Between Dragons and Weredragons": 76300000,
    "Weredragon Couple and a Baby": 79300000,
    "Weredragons' Vital Point": 82300000,
    "Intense Battle in Propulsion System": 85300000,
    "Discovering a New Technology": 44200000,
    "Ark Repair": 92700000,
    "Weredragon Dispute": 96000000,
    "Cocoon in the Ice Wall": 99300000,
    "Chapter 13":"",
    "Underwater Inhabitants": 112600000,
    "Water Dome": 116500000,
    "Underwater City": 60200000,
    "The Thing in the Abandoned District": 125800000,
    "Shadow from the Abyss": 129900000,
    "The Ruthless Council": 67000000,
    "Mysterious Entity in the Little Shrine": 139900000,
    "The Great Battle Underwater": 144200000
 };

let handler = async (m, {conn, usedPrefix, command, text}) => {

    const splitMqInfo = function () {
        let mqKeys = []
        let mqValues = []
        let currentChapter = 0
        const keys = Object.keys(mq_data)
        for (let i = 0; i < keys.length; i++) {
          if (keys[i].startsWith("Chapter")) {
            currentChapter += 1
          } else {
            mqKeys.push(`CH${currentChapter} - ${keys[i]}`);
            mqValues.push(i);
          }
        }
        return [mqKeys, mqValues];
      };
      
      const [mqKeys, mqValues] = splitMqInfo();
    
      if (!text) {
        let ext = `Cara Penggunaan : *${usedPrefix}${command} <level>|<percentage>|<mq awal>|<target level>|<skip venena(0/1), 0 = false, 1 = true> (Using | or / for splitting)* \n\n`;
        ext += `Contoh :\n *${usedPrefix}${command} 1|2|0|280|0*\n Or\n *${usedPrefix}${command} 1/1/0/280/1* \n\n`;
        ext += `*note: for skip venena 0 = false, 1 = true*\n\n`
        ext += `List Mq & Code : \n\n`;
        ext += mqKeys.map((key, index) => `${mqValues[index]} - ${key}`).join('\n');
    
        m.reply(ext);
      }
    
      let [level, percentage, mqBegin, targetLv, skipVenena] = text.split(/[^\w\s]/g).map(Number)
    
      skipVenena == 0 ? 'true' : 'false'
    
      let mqEnd = Math.max(...mqValues)
      let xp
    
      console.log(level, percentage, mqBegin, mqEnd, skipVenena)
    
      const getXP = (lv) => floor(0.025 * lv ** 4 + 2 * lv);
    
      const getTotalXP = function (begin, beginPercentage, end) {
        let xp = floor((1 - beginPercentage / 100) * getXP(begin));
        for (let i = begin + 1; i < end; i++) {
          xp += getXP(i);
        }
        return xp;
      };
    
      const addXP = function (begin, beginPercentage, extraXP) {
        let remainingXP = extraXP;
        let lv, lvPercentage;
    
        let XPRequiredNextLv = (1 - beginPercentage / 100) * getXP(begin);
    
        if (extraXP < XPRequiredNextLv) {
          let currentXP = (beginPercentage / 100) * getXP(begin) + extraXP;
          return [begin, floor((100 * currentXP) / getXP(begin))];
        } else {
          remainingXP -= XPRequiredNextLv;
          lv = begin + 1;
          while (getXP(lv) <= remainingXP) {
            remainingXP -= getXP(lv);
            lv += 1;
          }
          lvPercentage = floor((100 * remainingXP) / getXP(lv));
          return [lv, lvPercentage];
        }
      }
      try {
        const keys = Object.keys(mq_data)
    let lv = level
    let lvP = percentage
    // let targetLv = 280
    let targetXP = getTotalXP(lv, lvP, targetLv)

    let mqXP = 0
    for (let i = mqBegin; i <= mqEnd; i++) {
        mqXP += Number(mq_data[keys[i]])
        if (i == 85 && !skipVenena) {
            mqXP += 12500000;
        }
    }

    const runs = Math.floor(targetXP / mqXP);

    let txt = `Level awal : ${level}\n`
        txt += `Percentage awal : ${lvP}\n`
        txt += `Target Level : ${targetLv}\n`
        txt += `Mq awal : ${mqBegin}\n`
        txt += `Mq akhir : ${mqEnd}\n`
        txt += `Main Quest XP : ${mqXP}\n`
        txt += `Total XP yang dibutuhkan : ${targetXP}\n`
        txt += `Total Pengulangan : ${runs}\n\n`
        
        if (runs <= 100) {
            for (let i = 1; i <= runs; i++) {
                [lv, lvP] = addXP(lv, lvP, mqXP);
                txt +=`Run ${i}: Lv ${lv} (${lvP}%)\n`;
            }
            await m.reply(txt)
    } else {
        console.log("Error : Terlalu Banyak Pengulangan");
    }
      }catch (e) {
        console.log(e)

      }

}


handler.menutoram = ["spamadv <text>"];
handler.tagstoram = ["toram"];
handler.command = /^(mqadv|spamadv)$/i;

export default handler