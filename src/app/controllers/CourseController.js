const Course = require('../models/Course')
const { mongooseToObject } = require('../../util/mongoose')

class CourseController {

        //[GET] /courses/:slug
        show(req, res, next) {
            Course.findOne({ slug: req.params.slug })
            .then( course => {
                res.render('courses/show', {course : mongooseToObject(course)})
            })
            .catch(next)
        }

        //[GET] /courses/create
        create(req, res, next) {
            res.render('courses/create')
        }
        
        //[POST] /courses/store
        store(req, res, next) {
            const model = new Course(req.body)
            model.save

            res.send('INSERT DATA')
        }
}

module.exports = new CourseController()