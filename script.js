
function submitForm(e){
  e.preventDefault();
  const form = e.target;
  alert('Thanks! Your inquiry was recorded. (Demo site — no actual booking will be made.)');
  form.reset();
}
