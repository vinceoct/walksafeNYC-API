const db = require('../db');
const { Admin, Post, UserAccount } = require('../models');
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

    const posts = [
      {
        post_id: 0,
        post_date: "2023-06-30-0100",
        user_account: 1,
        status: true,
        post_type: "Harassment",
        post_reply: "Your post has been submitted and is under review. Thank you for your patience. We will contact you within 10-20 minutes."
      }
    ];

    const userAccounts = [
      {
        user_account: "AnneBelleJ00",
        first_name: "Annebell",
        last_name: "Jones",
        email: "annabelljones00@gmail.com",
        password: "wonderWoman2001!",
        date_of_birth: "1986-02-23",
        gender: "Female"
      }
    ];

    await Admin.insertMany(admins);
    console.log("Admins inserted successfully!");
    await Post.insertMany(posts);
    console.log("Posts inserted successfully!");
    await UserAccount.insertMany(userAccounts);
    console.log("User accounts inserted successfully!");
  };

  await main();
});
