'use strict';

class ClassmateController {
  * index(req, res) {
    const Database = use('Database');
    const firstName = req.input('firstName');

    const query = {};
    if (firstName) {
      query['first_name'] = firstName;
    }

    // Get all posts
    const classmates = yield Database.table('classmates')
      .where(query).select();
    // Send to user...
    res.send(classmates);

    // Not Using Yield
    // Database.table('classmates').select().then((classmates) => {
    //   res.send(classmates);
    // });
  }
}

module.exports = ClassmateController;
