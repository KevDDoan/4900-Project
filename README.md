# 4900-Project
This is a webpage project done for my 4900 Project
Getting Started:
-After pulling the code type "npm i" to install the necessary modules
-Then in the terminal type "npm run serverStart" to get the program running
-Create a .env folder and in it I have two variables 
-"session = secret" and "ATLAS_URL = ______" in the empty space put your MongoDB link
Overview:
This project contains the following features...
-Login System with Passport User Auth 
-Login System also is linked to MongoDB with Encryption + Decryption feature
-File Upload System
-Data Fetch System
Login System with Passport User Auth + Encryption and MongoDB:
-MongoDB connection is functional
-Login System is fully functional and will send and save User login information + encrypting password when registering to my User model which is connected to my MongoDB cluster
-When logging in my passport model takes care of comparing user input to the data in my User model 
--If there is a match with the User then we decrypt the password to compare if theres a match
--If there's a match we authenticate the User and sign them in and store their session 
--Otherwise we display a flash message indictating the error letting the User know if they inputted the incorrect email or password respectively
-Additonal features include access to certain pages only if you're authenticated and vice versa not allowing you to access certain sites if you're logged in already
-For example there is no reason to access a register or login page if you're already logged in and no reason to give just anyone access to their data if they aren't logged in
File Upload:
-Was able to upload files to the server and even save the fileName to my User model however ran into many struggles
Issues I had with File Upload
-My User model has a fileName section in it and my goal was to update that field whenever the logged in User uploads a file
-My assumption is with my passport feature my server knows who is currently logged in or not however I'm not sure if that is the case or not
-Regardless I believe if I the proper syntax for that I can then do something along the lines of User.findOne(currentUser, fileName) something along the lins of that
-the findOne command is to find a certain collection based off of your search field and the second parameter is what you want to add to it
-so depsite not knowing what could be done my thought process would've been this if I could somehow do.//
--"const x = curretLoggedInUser;" "const y = req.file.fileName;" and then "User.findOneandUpdate(currentLoggedInUser or x, and req.file.fileName or y)
Data Fetch:
-Data fetching at a basic level gave me some issues however I was able to print out all the data in my User model onto "/data"