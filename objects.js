// Setup
function phoneticLookup(val) {
    let result = "";
  
    const res = {
      "alpha":"Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    }
  
    result = res[val];
  
    // Only change code above this line
    return result;
  }
  
  phoneticLookup("charlie");

  function checkObj(obj, checkProp) {
    // Only change code below this line
    if(obj.hasOwnProperty(checkProp)){
      return obj[checkProp];
    } else {
      return 'Not Found';
    }
    
    // Only change code above this line
  }

  const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    }
  ];
  
  myMusic.push({
    artist:"Amila",
    title:"JS album",
    release_year:2023,
    'formats':[
      "USB",
      "8K"
    ]
  })

  // Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    console.log(id , prop, value)
    if(value ===''){
      delete records[id][prop];
    }
    if(prop !== 'tracks' && value !== ''){
      console.log(records[id]);
      records[id][prop]=value;
    } 
    if(prop === 'tracks' && value !==''){
      if(records[id][prop])
      records[id][prop].push(value);
      else {
        records[id][prop]=[];
        records[id][prop].push(value);
      }
    }
    return records;
  }
  
  updateRecords(recordCollection, 2548, 'artist', '');