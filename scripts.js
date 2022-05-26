var request = new XMLHttpRequest()

request.open('GET', 'https://zj86ft7ood.execute-api.us-west-2.amazonaws.com/prod/randomcharacter', true)

request.onload = function() {
    const randomData = JSON.parse(request.responseText)
    console.log(randomData)
    const wrapper = document.createElement('div')
    wrapper.setAttribute('class', 'wrapper')
    document.body.appendChild(wrapper)
    const charSheetDimensions = document.createElement('div')
    charSheetDimensions.setAttribute('class', 'charSheetDimensions')
    wrapper.appendChild(charSheetDimensions)
    const charSheet = document.getElementsByClassName('stats')[0]
    charSheetDimensions.appendChild(charSheet)
    const characterData = document.createElement('div')
    characterData.setAttribute('class', 'characterInfo')
    const characterAge = document.createElement('div')
    characterAge.setAttribute('class', 'characterAge')
    characterAge.set
    characterAge.innerHTML = randomData.physicalAttribute.age
    charSheetDimensions.appendChild(characterData)
    characterData.appendChild(characterAge)
    const characterEyeColor = document.createElement('div')
    characterEyeColor.setAttribute('class','characterEyeColor')
    characterEyeColor.innerHTML = randomData.physicalAttribute.eyeColor
    characterData.appendChild(characterEyeColor)
    const characterGender = document.createElement('div')
    characterGender.setAttribute('class', 'characterGender')
    characterGender.innerHTML = randomData.physicalAttribute.gender
    characterData.appendChild(characterGender)
    const characterHairColor = document.createElement('div')
    characterHairColor.setAttribute('class','characterHairColor')
    characterHairColor.innerHTML = randomData.physicalAttribute.hair.hairColor
    characterData.appendChild(characterHairColor)
    const characterHairStyle = document.createElement('div')
    characterHairStyle.setAttribute('class','characterHairStyle')
    characterHairStyle.innerHTML = randomData.physicalAttribute.hair.hairStyle
    characterData.appendChild(characterHairStyle)
    const characterHeight = document.createElement('div')
    characterHeight.setAttribute('class', 'characterHeight')
    characterHeight.innerHTML = randomData.physicalAttribute.height
    characterData.appendChild(characterHeight)
    const characterRace = document.createElement('div')
    characterRace.setAttribute('class','characterRace')
    characterRace.innerHTML = randomData.physicalAttribute.race
    characterData.appendChild(characterRace)
    const characterSkinTone = document.createElement('div')
    characterSkinTone.setAttribute('class','characterSkinTone')
    characterSkinTone.innerHTML = randomData.physicalAttribute.skin
    characterData.appendChild(characterSkinTone)
    const characterWeight = document.createElement('div')
    characterWeight.setAttribute('class','characterWeight')
    characterWeight.innerHTML = randomData.physicalAttribute.weight + " lbs"
    characterData.appendChild(characterWeight)
    const characterName = document.createElement('div')
    characterName.setAttribute('class','characterName')
    characterName.innerHTML = randomData.physicalAttribute.name.firstName + " " + randomData.physicalAttribute.name.lastName
    characterData.appendChild(characterName)

    const characterFamilyHistory = document.createElement('div')
    characterFamilyHistory.setAttribute('class', 'characterFamilyHistory')
    characterFamilyHistory.innerHTML = randomData.backgroundAttribute.familyHistory.profession
    characterData.appendChild(characterFamilyHistory)
    const characterAlignment = document.createElement('div')
    characterAlignment.setAttribute('class', 'characterAlignment')
    characterAlignment.innerHTML = randomData.backgroundAttribute.flaws.alignment
    characterData.appendChild(characterAlignment)
    const characterFlaw = document.createElement('div')
    characterFlaw.setAttribute('class', 'characterFlaw')
    characterFlaw.innerHTML = randomData.backgroundAttribute.flaws.flaw
    characterData.appendChild(characterFlaw)
    const characterTalent = document.createElement('div')
    characterTalent.setAttribute('class', 'characterTalent')
    characterTalent.innerHTML = randomData.backgroundAttribute.talents.talent
    characterData.appendChild(characterTalent)
}

request.send()