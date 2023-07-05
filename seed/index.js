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

    // await Admin.collection.drop()
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
        gender: "Female"
      }
    ];

    // await UserAccount.collection.drop()
    await UserAccount.deleteMany()
    await UserAccount.insertMany(userAccounts);

    const allUserAccount= await UserAccount.find()

    console.log(allUserAccount)

    console.log("User accounts inserted successfully!");

    const posts = [
      {
        lat: 40,
        lon: -74,
        post_date: "2023-06-30",
        post_time: "02:23",
        user_account: allUserAccount[0]._id,
        incident_type: "Harassment",
        comment: "Your post has been submitted and is under review. Thank you for your patience. We will contact you within 10-20 minutes."
      }
    ];

    // await Post.collection.drop()
    await Post.deleteMany()
    await Post.insertMany(posts);

    const allPost= await Post.find()

    console.log(allPost)

    console.log("Posts inserted successfully!");
    
  };

  await main();
  db.close()
});
