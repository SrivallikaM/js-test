import './style.css';

var acctData = [
  {
    "acctNum": "AAA - 1234", "user": "Alice"
  }, {
    "acctNum": "AAA - 5231", "user": "Bob"
  }, {
    "acctNum": "AAA - 9921", "user": "Alice"
  }, {
    "acctNum": "AAA - 8191", "user": "Alice"
  }];
var balance = {
  "AAA - 1234": 4593.22, "AAA - 9921": 0, "AAA - 5231": 232142.5, "AAA - 8191": 4344
};

function getSortedData(...c) {
  var user = "";
  var sortBy = "";
  var sortDir = "asc";
  var acctNum = "";
  var filterByUser = [];
  var newObj = {};
  var outputArr = [];
  var output = ""
  if (c.length > 0) {
    for (let input of c) {
      if (input != "acctNum" && input != "balance" && input != "asc" && input != "desc") {
        user = input

      }
      else if (input == "acctNum" || input == "balance") {
        sortBy = input;

      }
      else {
        sortDir = input
      }

    }
    if (user != "") {
      filterByUser = acctData.filter((element) => {
           
          if( element['user'] == user )
          {
            
              
              return true; 
          }
       
      });
     
    }
    if (sortBy == "acctNum") {
      acctData.sort((a, b) => {
        if (a['acctNum'] < b['acctNum']) {
          return sortDir == "asc" ? -1 : 1;
        }
        if (a['acctNum'] > b['acctNum']) {
          return sortDir == "asc" ? 1 : -1;
        }
        return 0;
      })
    }

    else if (sortBy == "balance") {
      let keys = Object.keys(balance)
      keys.sort((a, b) => {
        if (balance[a] < balance[b]) {
          return sortDir == "asc" ? -1 : 1;
        }
        if (balance[a] > balance[b]) {
          return sortDir == "asc" ? 1 : -1;
        }
        return 0;
      })

      keys.forEach((key)=>{newObj[key] = balance[key];})
     
    }
outputArr.push(filterByUser);
outputArr.push(acctData);
outputArr.push(newObj)
console.log(outputArr)
  }

  else
  {
      
      
  output = acctData.reduce((total,index)=>{
      total.push({"acctNum":index['acctNum']})
     
      return total;
    },[]);
    
    
  }
  return output;
}

var out = getSortedData()
console.log(out)


