Article.destroy_all
User.destroy_all

user1 = User.create(name: 'Rob Test', email: 'rob@test.com', password: '123456')

journey = Article.create!(
  title: 'Chuck Norris Ipsum',
  content: 'Chuck Norris can slam a revolving door. 
           Chuck Norris can have his cake and eat it, too. 
           Chuck Norris is currently suing NBC, 
           claiming Law and Order are trademarked names for his left and 
           right legs Chuck Norris can slice meat so thin is only has one side, 
           When Chuck Norris sends in his taxes, he sends blank forms and includes only a picture of himself,
           crouched and ready to attack. Chuck Norris has not had to pay taxes, 
           ever Chuck Norris is the only man to ever defeat a brick wall in a game of tennis.
           Chuck Norris looks gift horses in the mouth. Chuck Norris doesn’t wear a watch. HE decides what time it is,
           The Great Wall of China was originally created to keep Chuck Norris out. It failed miserably.',
  description: 'Ipsum of Chuck Norris',
  image_url: 'https://www.lifewire.com/thmb/oAtFP4na0oUEfvRARvwjGYuGsCU=/996x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chucknorrisshowercry-5ac2b2f63418c60037493750.JPG',
  user_id: user1.id

)

cupcake = Article.create!(
  title: 'Cupcake  Ipsum',
  content: 'Wafer icing cotton candy oat cake. Toffee muffin jelly jelly beans toffee. 
  Tart topping tiramisu tiramisu jelly. Danish chocolate chupa chups ice cream tootsie roll topping chocolate. 
  Sesame snaps jelly topping tiramisu gummi bears. Cheesecake marzipan bonbon lemon drops. 
  Wafer macaroon donut macaroon pudding pudding cupcake. Pie candy icing pastry fruitcake biscuit jelly beans chupa chups jelly. 
  Powder cookie liquorice danish chocolate. Soufflé lemon drops jelly beans tart wafer.
   Bear claw tiramisu muffin jelly-o donut cake. Cupcake macaroon pudding halvah pudding tootsie roll cupcake. 
   Cake cake jelly tart biscuit biscuit wafer icing. Macaroon cupcake cake cupcake tart brownie.',
  description: 'Ipsum of Cup Cake',    
  image_url: 'https://images.unsplash.com/photo-1565299543923-37dd37887442?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=714&q=80',
  user_id: user1.id

)

cosmos = Article.create!(
  title: 'Cosmos Ipsum',
  content: 'Billions upon billions! Globular star cluster tendrils of gossamer clouds Vangelis dream of the mind’s eye network of wormholes a very small stage in a vast cosmic arena worldlets take root and flourish stirred by starlight, 
  Flatland concept of the number one. Dispassionate extraterrestrial observer of brilliant syntheses not a sunrise but a galaxyrise intelligent beings, rings of Uranus tingling of the spine shores of the cosmic ocean gathered by gravity. 
  Emerged into consciousness encyclopaedia galactica rich in heavy atoms, 
  billions upon billions are creatures of the cosmos, 
  the ash of stellar alchemy consciousness tingling of the spine ship of the imagination.',
  description: 'Ipsum of The Cosmos', 
  image_url: 'https://images.unsplash.com/photo-1564053489984-317bbd824340?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=814&q=80',   
  user_id: user1.id

)