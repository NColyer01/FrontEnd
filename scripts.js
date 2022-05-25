var request = new XMLHttpRequest()

request.open('GET', 'https://zj86ft7ood.execute-api.us-west-2.amazonaws.com/prod/randomcharacter', true)

request.onload = function() {
    const randomData = JSON.parse(request.responseText);
    console.log(randomData);
    const age = randomData.physicalAttribute.age;
    const fname = randomData.physicalAttribute.name.firstName;
    const lname = randomData.physicalAttribute.name.lastName;
    const fullName = fname + " " + lname;
    console.log(age);
    console.log(fullName);
    const elem = document.createElement('div');
    const elemText = document.createTextNode('age');
}

request.send()