const day = 'tuesday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan your weekly works');
    console.log('go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare for your unit test 1');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Finish your Assignments');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy your weekend 🥳');
    break;
  default:
    console.log('Invalid day');
}