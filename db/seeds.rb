Article.destroy_all
User.destroy_all

user1 = User.create(name: 'Rob Test', email: 'rob@test.com', password: '123456')

20.times do
  Article.create(
    title: Faker::Lorem.word,
    content: Faker::Lorem.paragraphs(number: 3),
    user_id: user1.id
  )
end