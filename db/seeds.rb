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
  image_url: 'https://media.giphy.com/media/ZjfD8MOnEODwk/giphy.gif',
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
  content: 'Billions upon billions! Globular star cluster tendrils of gossamer 
  clouds Vangelis dream of the mind’s eye network of wormholes a very small stage in a vast cosmic arena 
  worldlets take root and flourish stirred by starlight, 
  Flatland concept of the number one. Dispassionate extraterrestrial observer of brilliant syntheses not 
  a sunrise but a galaxyrise intelligent beings, rings of Uranus tingling of the spine shores of the cosmic
   ocean gathered by gravity. 
  Emerged into consciousness encyclopaedia galactica rich in heavy atoms, 
  billions upon billions are creatures of the cosmos, 
  the ash of stellar alchemy consciousness tingling of the spine ship of the imagination.',
  description: 'Ipsum of The Cosmos', 
  image_url: 'https://images.unsplash.com/photo-1564053489984-317bbd824340?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=814&q=80',   
  user_id: user1.id

)

cat = Article.create!(
  title: 'Cat Ipsum',
  content: 'Nap all day cat dog hate mouse eat string barf pillow no baths 
  hate everything but kitty poochy. Sleep on keyboard toy mouse squeak roll over. Mesmerizing birds.
   Poop on grasses licks paws destroy couch intently sniff hand. The dog smells bad gnaw the corn cob.

  Plays league of legends stare out the window. Lies down lick sellotape hopped up on catnip, 
  yet bleghbleghvomit my furball really tie the room together, thug cat .
   Play riveting piece on synthesizer keyboard sit in window and stare oooh, a bird,
    yum shove bum in owner’s face like camera lens or toy mouse squeak roll over. 
    Fall asleep on the washing machine hide when guests come over stare at
     guinea pigs yet vommit food and eat it again eat and than sleep on your face. Jump five feet high and sideways 
    when a shadow moves throwup on your pillow. Missing until dinner time.
       Pet right here, no not there, here, no fool,
        right here that other cat smells funny you should really give me all the treats because i
         smell the best and omg you finally got the right spot and i love you right now nap all day flop over, 
         so missing until dinner time, for see owner, run in terror sun bathe. Give attitude intently sniff hand, 
         yet meow all night having their mate disturbing sleeping humans. Lounge in doorway chase imaginary bugs.',
  description: ' Cat Ipsum ', 
  image_url: 'https://media.giphy.com/media/h4lhtypKce2GHbfili/giphy.gif',   
  user_id: user1.id

)


keanu = Article.create!(
  title: 'Keanu Reeves  Ipsum',
  content: 'Money doesn’t mean anything to me.
   I’ve made a lot of money, but I want to enjoy life and not stress myself building my bank account. 
   I give lots away and live simply, mostly out of a suitcase in hotels. 
   We all know that good health is much more important.
   The recognition of the law of the cause and effect, 
   also known as karma, is a fundamental key to understand how you have created your world,
    with actions of your body, speech and mind. When you truly understand karma then you realise you are responsible
     for everything in your life. It is incredibly empowering to know that your future is in your hands.
      You see these people behind me? They are rushing to work and not paying attention to anything.
       Sometimes we get so caught up in our daily lives that we forget to take the time out to enjoy the beauty in 
       life. It’s like we’re zombies. Look up and take your head phones out. 
       Say Hi to someone you see and maybe give a hug to someone who looks like they’re hurting. 
       Help out someone. You have to live every day like it’s your last. 
       What people don’t know about me is that I had depression a couple of years back.
        I never told anyone about it. I had to fight my way out of depression. 
        The person who was holding me back from my happiness was ME. Every day is precious so let’s treat it like that. 
        Tomorrow isn’t guaranteed, so live today! I hope you share this post to spread love this holiday.',
  description: 'Ipsum of Keanu',    
  image_url: 'https://media.giphy.com/media/hv4TC2Ide8rDoXy0iK/giphy.gif',
  user_id: user1.id

)