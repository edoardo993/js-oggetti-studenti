// 1. Creare un oggetto che descriva uno studente con le seguenti proprietà:
//    nome, cognome e età. Stampare a schermo attraverso il for tutte le proprietà.    ---DONE
// 2. Creare un array di oggetti di studenti. Ciclare su tutti gli studenti
//    e stampare per ognuno nome e cognome    ---DONE
// 3. Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo
//    oggetto studente inserendo nell’ordine: nome, cognome e età.      ---DONE

// 1
var student={
    'name': 'John',
    'lastname': 'Wisley',
    'age': '25'
};
for(key in student){
    console.log(key + ': ' + student[key])
};

// 2
var studentsObjects=[
    student1={
        'name': 'Brian',
        'surname': 'Lauren',
        'age': '21'
    },
    student2={
        'name': 'Lucy',
        'surname': 'Gold',
        'age': '22'
    },
    student3={
        'name': 'Harold',
        'surname': 'Light',
        'age': '23'
    },
    student4={
        'name': 'Jennifer',
        'surname': 'Triplehorne',
        'age': '24'
    }
];
for(var x=0; x<studentsObjects.length; x++) {
    console.log('This is the student number: ' + (x+1));
    console.log('Name: ' + studentsObjects[x].name);
    console.log('Surname: ' + studentsObjects[x].surname)
};

// 3
function isNumValid(num,min,max){
    if(isNaN(num)){
        return false
    }
    if(num<min || num>max){
        return false
    }
    return true
};
function isValid(word){
    if(!isNaN(word)){
        return false
    }
    if(word===''){
        return false
    }
    return true
};
var newStudent={};
var minAge=6;
var maxAge=30;
newStudent.name=prompt('Inserisci il nome del nuovo studente:');
while(!isValid(newStudent.name)){
    alert('Inserisci un nome valido.');
    newStudent.name=prompt('Inserisci il nome del nuovo studente:')
};
newStudent.name = newStudent.name[0].toUpperCase() + newStudent.name.slice(1).toLowerCase();
newStudent.surname=prompt('Inserisci il cognome del nuovo studente:');
while(!isValid(newStudent.surname)){
    alert('Inserisci un cognome valido');
    newStudent.surname=prompt('Inserisci il cognome del nuovo studente:')
}
newStudent.surname = newStudent.surname[0].toUpperCase() + newStudent.surname.slice(1).toLowerCase();
newStudent.age=prompt('Inserisci l\'età del nuovo studente:');
while(!isNumValid(newStudent.age,minAge,maxAge)){
    alert('Inserisci un numero corretto, tenendo conto del limite di età 6-30');
    newStudent.age=prompt('Inserisci l\'età del nuovo studente:');
}
newStudent.age = newStudent.age[0].toUpperCase() + newStudent.age.slice(1).toLowerCase();
studentsObjects.push(newStudent);
console.log(studentsObjects)