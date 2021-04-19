alert('hello in Calories page');
alert('To calculate the calories you need, enter the following information:');

var Length=prompt('Enter your height');
var Weight=prompt('Enter your Weight');
if(length<=160&& Weight<=50)
{
  alert('Your daily calorie needs 1686');
}else if (length<=170&& Weight<=60)
{
alert('Your daily calorie needs 2420');

}else if (length<=180&& Weight<=70)
{
alert('Your daily calorie needs 2516');

}else{
  alert('Please follow a diet')
}
var i=prompt('Enter your number of exercises you do');
while(i>0&&i<10){
  alert('Doing a good job');
  var img='<img src="imag/e.jfif" alt="sport">';
  document.write(img)
  i++;
}
  var sporttype= prompt('Enter your favorite sport you do;water sport, Climbing sport, Walking sport');
  if (sporttype=='water sport')
  {
     alert('Nice sport');
  } else if(sporttype=='Climbing sport'){
    alert('An amazing sport');

  }else if(sporttype=='Walking sport'){
    alert('An enjoyable sport');

  }else{
    alert('If allowed, enter the required sport.');
  }

  function Inforetrieval(length,Weight,sporttype )
  {

    console.log('your weight ' + Weight);
    console.log('your height ' + length);
    console.log('Your favorite sport  ' + sporttype);
  }
  Inforetrieval(160,75,'Walking sport');


  
