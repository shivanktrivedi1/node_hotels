const passport  = require('passport')
const localStretegy = require('passport-local').Strategy
const Person = require('./models/Persons')

passport.use(new localStretegy(async (username, password, done) => {
    try {
        // console.log('Recieved Credential: ', username , password)
        const user = await Person.findOne({ username })
        if (!user)
            return done(null, false, {message: "Incorrect Username"})

        // const isPasswordMatched = user.password === password ? true : false
        const isPasswordMatched = await user.comparePassword(password);
        if (isPasswordMatched) {
            done(null, user)
        } else {
            return done(null, false, {message: "Incorrect Password"})
        }
    } catch (error) {
        done(error)
    }
}))

module.exports = passport