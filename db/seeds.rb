puts "Seeding..."

#User seeds
30.times {User.create(
                         first_name: Faker::Name.first_name,
                         last_name: Faker::Name.last_name,
                         user_role: ['Employee', 'Manager'].sample,
                         email: Faker::Internet.email,
                         password: Faker::Internet.password,
                         avatar: Faker::Avatar.image,
                         
)}

#project seeds
10.times {Project.create(
                        project_title: Faker::Marketing.buzzwords,
                        end_date: Faker::Date.between(from: '2022-01-01', to: '2022-07-01'),
                        detail: Faker::Marketing.buzzwords
)}
2.times{Task.create(
                    content: Faker::Marketing.buzzwords,
                    project_id: rand(1..10)

)}

#task seeds
10.times {Task.create(
                      content: Faker::Marketing.buzzwords,
                      project_id: rand(1..10),
                      user_id: rand(1..30)
)}
puts "Completed!"