admin> db.user.insertMany(
    [
      {
        
        id: 1,
        name: 'Sree',
        coursename: 'FSD',
        taskssubmiited: '02-oct-2020',
        placement: 'infosys',
        status:"present"
      },
      {
        _id: ObjectId("647e0e86a76e8b9d5deeba71"),
        id: 2,
        name: 'SreeHary',
        email: 'sreehary@gmail.com',
        coursename: 'FSD',
        taskssubmiited: '02-oct-2020',
        placement: 'infosys',
        status:"present"
      },
      {
        _id: ObjectId("647f5acf141b46441ea06239"),
        id: 3,
        name: 'Mahesh',
        email: 'mahesh@mail.com',
        coursename: 'FSD',
        tasksSubmitted: '03-oct-2020',
        placement: 'HCL',
        status:"present"
      },
      {
        _id: ObjectId("647f5b67141b46441ea0623a"),
        id: 4,
        name: 'Anbu',
        email: 'anbu@mail.com',
        coursename: 'FSD',
        tasksSubmitted: '03-oct-2020',
        placement: 'TCS',
        status:"present"
      }
    ])
    
    
    db.codekata.insertMany([
        {
            id:1,
            name:'sree',
            email:'sree@mail.com',
            problems: 24
        },
        {
            id:2,
            name:'mathu',
            email:'mathu@mail.com',
            problems:19
        },
        {
            id:3,
            name:'Vel',
            email:'vel@mail.com',
            problems:67
        },
        {
            id:4,
            name:'Thiksha',
            email:'thiksha@mail.com',
            problems:63
        },
        {
            id:5,
            name:'risha',
            email:'risha@mail.com',
            problems:71
        }
    ])
    
    
    
    db.attendance.insertMany([
        {
            id:1,
            name:'sree',
            email:'sree@mail.com',
            attendance: '63%'
        },
        {
            id:2,
            name:'Riya',
            email:'riya@mail.com',
            attendance:'65%'
        },
        {
            id:3,
            name:'shikas',
            email:'shikas@mail.com',
            attendance:'88%'
        },
        {
            id:4,
            name:'Mani',
            email:'mani@mail.com',
            attendance:'76%'
        },
        {
            id:5,
            name:'risha',
            email:'risha@mail.com',
            attendance:'93%'
        }
    ])
    
    
    
    db.topics.insertMany([
        {
            id:1,
            topics:'React',
            topicDate :new Date('18-oct-20')
        },
        {
            id:2,
            topics:'HTML',
            topicDate :new Date('9-oct-20')
        },
        {
            id:3,
            topics:'MongoDB',
            topicDate :new Date('22-oct-20')
        },
        {
            id:4,
            topics:'CSS',
            topicDate :new Date('2-oct-20')
        },
        {
            id:5,
            topics:'Javascript',
            topicDate :new Date('14-oct-20')
        }
    ])
    
    
    
    
    db.tasks.insertMany([
        {
            tasksId: 1,
            topic: 'React',
            startDate: new Date("18-Oct-2020"),
            endDate: new Date("20-Oct-2020"),
            remarks:'nil'
        },
        {
            tasksId: 2,
            topic: 'HTML',
            startDate: new Date("9-Oct-2020"),
            endDate: new Date("11-Oct-2020"),
            remarks:'nil'
        },
        {
            tasksId: 3,
            topic: 'MongoDB',
            startDate: new Date("22-Oct-2020"),
            endDate: new Date("24-Oct-2020"),
            remarks:'nil'
        },
        {
            tasksId: 4,
            topic: 'CSS',
            startDate: new Date("12-oct-2020"),
            endDate: new Date("14-0ct-2020"),
            remarks:'nil'
        },
        {
            tasksId: 5,
            topic: 'Javascript',
            startDate: new Date("25-Oct-2020"),
            endDate: new Date("28-Oct-2020"),
            remarks:'nil'
        },
    ]);
    
    
    
    db.drives.insertMany([
        {
            id:1,
            drivename:'HCL',
            date: new Date("19-oct-2020")
        },
        {
            id:2,
            drivename:'Infotech',
            date: new Date("17-oct-2020")
        },
        {
            id:3,
            drivename:'Infosys',
            date: new Date("26-oct-2020")
        },
        {
            id:4,
            drivename:'Tcs',
            date: new Date("14-oct-2020")
        },
        {
            id:5,
            drivename:'Cts',
            date: new Date("12-oct-2020")
        }
    ]);
    
    
    
    db.mentors.insertMany([
        {
            id:'Manikandan',
            menteecount:35,
            topics:'html',
            email:'mani@mail.com'
        },
        
        {
            id:'Ruban',
            menteecount:28,
            topics:'Javascript',
            email:'ruban@mail.com'
        }
    {
            id:'vishnu',
            menteecount:35,
            topics:'css',
            email:'vishnu@mail.com'
        },
        
        {
            id:'Mohan',
            menteecount:28,
            topics:'mongodb',
            email:'mohan@mail.com'
        }
    ])