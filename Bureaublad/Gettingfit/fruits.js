fruits = ['apples','oranges','pears','apricots']
i = 0
for (;i< fruits.length;i++){console.log('I love: '+fruits[i])}


recipe = [
'cut and bake vegetables in a frying pan',
'stir 6 eggs and 100 gram of ricotta',
'add ricotta to the baked vegetables',
'after 5 minutes, turn frittata, sprinkle parmaggiano over it',
'bake frittata, under a cover, and in the oven for 8 minutes']



for (index = 0;index<fruits.length;index++){console.log(`${index}: ${recipe[index]}`)}
counter= 0
recipe.forEach(console.log(`${counter}: ${recipe[counter]}; counter++))
