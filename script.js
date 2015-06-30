$(function() {

 var $shoppingUL = $('#shopping_list');
 console.log(typeof $shoppingUL);


 var $newItemForm = $('#new_shopping_item');

 var $itemNameBlank = $('#item_name');

 $newItemForm.on('submit', function(event) {
   event.preventDefault();
   console.log($('#item_name').val());
   var listItem = $('#item_name').val();
   console.log(listItem)

   // store our new shopping list item
   //if (listItem)
 //  if listItem
   if (listItem===""){
      console.log("this has nothing inside");
      alert("Enter something!");
      } else {
      console.log("this has value");
      }
   shoppingList.push(listItem);

   // clear the form
   $itemNameBlank.val("");

   //append our new item to the page's shopping list
   $shoppingUL.append('<li class="item">' + listItem + '</li>');
 });

 $shoppingUL.on('click', '.item', function() {
   $(this).addClass('purchased');
   $(this).animate({opacity: '0.60'}, 1000);
   $(this).wrap('<strike>');
   console.log(typeof $shoppingUL)
 });




});

var shoppingList = [];
