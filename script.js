var extra_open_days = [
  ['2016-04-21', 'dagen før Store Bededag'],
  ['2016-05-04', 'dagen før Kristi Himmelfartsdag'],
  ['2016-05-30', 'sidste dag i 4. kvarter'],
  ['2016-12-21', 'sidste dag i 2. kvarter'],
  ['2017-04-11', 'dagen før dagen før Skærtorsdag'],
  ['2017-05-11', 'dagen før Store Bededag'],
  ['2017-05-24', 'dagen før Kristi Himmelfartsdag']
];
var extra_open_days_amount = extra_open_days.length;



function is_same_date(A, B) {
  return (A.getFullYear() == B.getFullYear()
    && A.getMonth() == B.getMonth()
    && A.getDate() == B.getDate());
}

function is_ffb_open(date) {
  // Er det fredag?
  if (date.getDay() == 5) {
    return 'fredag';
  }
  
  for (i = 0; i < extra_open_days_amount; i++) {
    // Er det fredag alligevel?
    if (is_same_date(date, new Date(extra_open_days[i][0]))) {
      return extra_open_days[i][1];
    }
  }
  
  return false;
}

function is_ffb_open_today() {
  return is_ffb_open(new Date());
}

function insert_primary_answer() {
  var primary = document.getElementById('primary_answer');
  var secondary = document.getElementById('secondary_answer');
  var statement = is_ffb_open_today();
  
  if (statement) {
    primary.innerHTML = "Ja, det er " + statement + "!";
    primary.className = "positive";
    secondary.innerHTML = "Tag et smut forbi FFB på førsteårsgangen og få dig en LFP."
  } else {
    primary.innerHTML = "Nej, desværre."
    primary.className = "negative";
    secondary.innerHTML = "";
  }
}
