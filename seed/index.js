const db = require('../db');
const { Admin, Post, UserAccount } = require('../Models');
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
console.log("index.js in seed is running");

db.once('open', async () => {
  console.log('Connected to MongoDB');



  const main = async () => {
    const admins = [
      {
        admin_id: 'Vince Vullo',
        userName: 'winceton',
        password: 'helloWorld1'
      },
      {
        admin_id: 'Margaret Camilletti',
        userName: 'margaretcamiletti',
        password: 'helloWorld2'
      },
      {
        admin_id: 'Daniel Mulka',
        userName: 'danmulka',
        password: 'helloWorld3'
      },
      {
        admin_id: 'Lowell Caraballo',
        userName: 'lowellC86',
        password: 'helloWorld4'
      }
    ];

    await Admin.deleteMany()
    await Admin.insertMany(admins);

    const allAdmin= await Admin.find()

    console.log(allAdmin)

    console.log("Admins inserted successfully!");

    const userAccounts = [
      {
        first_name: "Annebell",
        last_name: "Jones",
        email: "annabelljones00@gmail.com",
        password: "wonderWoman2001!",
        date_of_birth: "1986-02-23",
        gender: "Female",
      },
      {
        first_name: "Vincent",
        last_name: "Vullo",
        email: "vincevullo@gmail.com",
        password: "1morePassword2remember!",
        date_of_birth: "2023-04-03",
        gender: "Male",
      },
      {
        first_name: "Dan",
        last_name: "Mulka",
        email: "openmail1121@gamil.com",
        password: "Koolbrahh@100",
        date_of_birth: "1992-07-29",
        gender: "Male",
      },
      {
        first_name: "Britney",
        last_name: "Minaj",
        email: "nickiminaj@gmail.com",
        password: "Nickiminaj123!",
        date_of_birth: "2023-07-09",
        gender: "Female",
      },
      {
        first_name: "Max",
        last_name: "Camilletti",
        email: "mhcamilletti@gmail.com",
        password: "Password123!",
        date_of_birth: "1999-09-16",
        gender: "Female"
      },
    ];

    // await UserAccount.collection.drop()
    await UserAccount.deleteMany()
    await UserAccount.insertMany(userAccounts);

    const allUserAccount= await UserAccount.find()

    console.log(allUserAccount)

    console.log("User accounts inserted successfully!");

    const posts = [
      {
        lat: 40.7633794,
        lon: -73.988705,
        post_date: "2023-06-30",
        post_time: "02:23",
        user_account: allUserAccount[0]._id,
        incident_type: "Verbal Harassment",
        comment:
          "A man yelled at me, and made inappropriate comments about my outfit.",
      },
    ];

    await Post.deleteMany()
    await Post.insertMany(posts);

    const allPost= await Post.find()

    console.log(allPost)

    console.log("Posts inserted successfully!");    
  };

  await main();
  db.close()
});
