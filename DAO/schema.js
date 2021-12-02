// Definition package
const graphql = require("graphql");
const User = require("../models/User");
const Project = require("../models/Project");
const Registration = require("../models/Registration");
const Progress = require("../models/Progress");
const {GraphQLObjectType,
       GraphQLSchema,
       GraphQLString,
       GraphQLFloat,  
       GraphQLID,
       GraphQLList
     } = graphql;

// Definition Types Graphql
// User Type
const UserType = new GraphQLObjectType({
    name : "User",
    fields : () => ({
        id : {type : GraphQLID},
        mail : {type: GraphQLString},
        identification: {type: GraphQLString},
        name : {type: GraphQLString},
        password : {type: GraphQLString},
        type : {type: GraphQLString},
        status : {type: GraphQLString}
    })
});

// Project Type
const ProjectType = new GraphQLObjectType({
    name : "Project",
    fields : () => ({
        id : {type : GraphQLID},
        name : {type: GraphQLString},
        generalobj: {type: GraphQLString},
        specificobj : {type: GraphQLString},
        budget : {type: GraphQLFloat},
        startdate : {type: GraphQLString},
        enddate : {type: GraphQLString},
        leaderid : {type : GraphQLID},
        status : {type: GraphQLString},
        stage : {type: GraphQLString}
    })
});

// Registration Type
const RegistrationType = new GraphQLObjectType({
    name : "Registration",
    fields : () => ({
        id : {type : GraphQLID},
        projectid : {type: GraphQLID},
        studentid : {type: GraphQLID},
        status: {type: GraphQLString},
        startdate : {type: GraphQLString},
        enddate : {type: GraphQLString}
    })
});

// Progress Type
const ProgressType = new GraphQLObjectType({
    name : "Progress",
    fields : () => ({
        id : {type : GraphQLID},
        projectid : {type: GraphQLID},
        date: {type: GraphQLString},
        description : {type: GraphQLString},
        observations : {type: GraphQLString}
    })
});

// Query Type (Get by Id, Get all)
const RootQuery = new GraphQLObjectType({
    name : "RootQuery",
    fields : {
        user : {
            type: UserType,
            args : {
                id : {
                    type: GraphQLID
                }
            },
            resolve(parent, args){
                return User.findById(args.id)
            }
        },
        users : {
            type: new GraphQLList(UserType),
            resolve(){
                return User.find();
            }
        },
        project : {
            type: ProjectType,
            args : {
                id : {
                    type: GraphQLID
                }
            },
            resolve(parent, args){
                return Project.findById(args.id)
            }
        },
        projects : {
            type: new GraphQLList(ProjectType),
            resolve(){
                return Project.find();
            }
        },
        registration : {
            type: RegistrationType,
            args : {
                id : {
                    type: GraphQLID
                }
            },
            resolve(parent, args){
                return Registration.findById(args.id)
            }
        },
        registrations : {
            type: new GraphQLList(RegistrationType),
            resolve(){
                return Registration.find();
            }
        },
        progress : {
            type: ProgressType,
            args : {
                id : {
                    type: GraphQLID
                }
            },
            resolve(parent, args){
                return Progress.findById(args.id)
            }
        },
        progresses : {
            type: new GraphQLList(ProgressType),
            resolve(){
                return Progress.find();
            }
        }
    }   
});

// Mutation Type (Insert, Update, Delete)
const Mutation = new GraphQLObjectType({
    name : "Mutation",
    fields: {
        addUser : {
            type : UserType,
            args : {
                mail : {type: GraphQLString},
                identification: {type: GraphQLString},
                name : {type: GraphQLString},
                password : {type: GraphQLString},
                type : {type: GraphQLString},
                status : {type: GraphQLString}
            },
            async resolve(parent, args){
                const user = new User({
                    mail : args.mail,
                    identification: args.identification,
                    name : args.name,
                    password : args.password,
                    type : args.type,
                    status : args.status
                });

                return await user.save();
            }
        },
        updateUser : {
            type : UserType,
            args : {
                id : {type: GraphQLID},
                mail : {type: GraphQLString},
                identification: {type: GraphQLString},
                name : {type: GraphQLString},
                password : {type: GraphQLString},
                type : {type: GraphQLString},
                status : {type: GraphQLString}
            },
            async resolve(parent, args){
                return await User.findByIdAndUpdate(args.id, {
                    mail : args.mail,
                    identification: args.identification,
                    name : args.name,
                    password : args.password,
                    type : args.type,
                    status : args.status    
                },{
                    new : true
                })
            }
        },
        deleteUser : {
            type : UserType,
            args: {
                id : {type: GraphQLID} 
            },
            async resolve(parent, args){
                return await User.findByIdAndDelete(args.id)
            }   
        },
        addProject : {
            type : ProjectType,
            args : {
                name : {type: GraphQLString},
                generalobj: {type: GraphQLString},
                specificobj : {type: GraphQLString},
                budget : {type: GraphQLFloat},
                startdate : {type: GraphQLString},
                enddate : {type: GraphQLString},
                leaderid : {type : GraphQLID},
                status : {type: GraphQLString},
                stage : {type: GraphQLString}
            },
            async resolve(parent, args){
                const project = new Project({
                    name : args.name,
                    generalobj: args.generalobj,
                    specificobj : args.specificobj,
                    budget : args.budget,
                    startdate : args.startdate,
                    enddate : args.enddate,
                    leaderid : args.leaderid,
                    status : args.status,
                    stage : args.stage
                });

                return await project.save();
            }
        },
        updateProject : {
            type : ProjectType,
            args : {
                id : {type: GraphQLID},
                name : {type: GraphQLString},
                generalobj: {type: GraphQLString},
                specificobj : {type: GraphQLString},
                budget : {type: GraphQLFloat},
                startdate : {type: GraphQLString},
                enddate : {type: GraphQLString},
                leaderid : {type : GraphQLID},
                status : {type: GraphQLString},
                stage : {type: GraphQLString}
            },
            async resolve(parent, args){
                return await Project.findByIdAndUpdate(args.id, {
                    name : args.name,
                    generalobj: args.generalobj,
                    specificobj : args.specificobj,
                    budget : args.budget,
                    startdate : args.startdate,
                    enddate : args.enddate,
                    leaderid : args.leaderid,
                    status : args.status,
                    stage : args.stage    
                },{
                    new : true
                })
            }
        },
        deleteProject : {
            type : ProjectType,
            args: {
                id : {type: GraphQLID} 
            },
            async resolve(parent, args){
                return await Project.findByIdAndDelete(args.id)
            }   
        },
        addRegistration : {
            type : RegistrationType,
            args : {
                projectid : {type: GraphQLID},
                studentid : {type: GraphQLID},
                status: {type: GraphQLString},
                startdate : {type: GraphQLString},
                enddate : {type: GraphQLString}
            },
            async resolve(parent, args){
                const registration = new Registration({
                    projectid : args.projectid,
                    studentid : args.studentid,
                    status: args.status,
                    startdate : args.startdate,
                    enddate : args.enddate
                });

                return await registration.save();
            }
        },
        updateRegistration : {
            type : RegistrationType,
            args : {
                id : {type: GraphQLID},
                projectid : {type: GraphQLID},
                studentid : {type: GraphQLID},
                status: {type: GraphQLString},
                startdate : {type: GraphQLString},
                enddate : {type: GraphQLString}
            },
            async resolve(parent, args){
                return await Registration.findByIdAndUpdate(args.id, {
                    projectid : args.projectid,
                    studentid : args.studentid,
                    status: args.status,
                    startdate : args.startdate,
                    enddate : args.enddate    
                },{
                    new : true
                })
            }
        },
        deleteRegistration : {
            type : RegistrationType,
            args: {
                id : {type: GraphQLID} 
            },
            async resolve(parent, args){
                return await Registration.findByIdAndDelete(args.id)
            }   
        },
        addProgress : {
            type : ProgressType,
            args : {
                projectid : {type: GraphQLID},
                date: {type: GraphQLString},
                description : {type: GraphQLString},
                observations : {type: GraphQLString}
            },
            async resolve(parent, args){
                const progress = new Progress({
                    projectid : args.projectid,
                    date: args.date,
                    description : args.description,
                    observations : args.observations
                });

                return await progress.save();
            }
        },
        updateProgress : {
            type : ProgressType,
            args : {
                id : {type: GraphQLID},
                projectid : {type: GraphQLID},
                date: {type: GraphQLString},
                description : {type: GraphQLString},
                observations : {type: GraphQLString}
            },
            async resolve(parent, args){
                return await Progress.findByIdAndUpdate(args.id, {
                    projectid : args.projectid,
                    date: args.date,
                    description : args.description,
                    observations : args.observations    
                },{
                    new : true
                })
            }
        },
        deleteProgress : {
            type : ProgressType,
            args: {
                id : {type: GraphQLID} 
            },
            async resolve(parent, args){
                return await Progress.findByIdAndDelete(args.id)
            }   
        }
    }
})

module.exports = new GraphQLSchema({
    query : RootQuery,
    mutation : Mutation
})