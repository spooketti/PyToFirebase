
const firebaseConfig = {
  apiKey: "AIzaSyBsj_t8Q_z0LbJuYU0uUPfQW8nW1w6wptw",
  authDomain: "pytojs-dc469.firebaseapp.com",
  databaseURL: "https://pytojs-dc469-default-rtdb.firebaseio.com",
  projectId: "pytojs-dc469",
  storageBucket: "pytojs-dc469.appspot.com",
  messagingSenderId: "189854765506",
  appId: "1:189854765506:web:c987489853c74e0e4a065b",
  measurementId: "G-NZGT5D4C4K"
};

  firebase.initializeApp(firebaseConfig);

const db = firebase.database();
const servers = db.ref("Books/")




servers.on("child_added", function(snapshot)
{
    console.log("PLEASE")
})



//T

