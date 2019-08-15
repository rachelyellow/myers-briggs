
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {id: 1, category: 'I', text: 'You find it takes effort to introduce yourself to other people.'},
        {id: 2, category: 'S', text: 'You consider yourself more practical than creative.'},
        {id: 3, category: 'F', text: 'Winning a debate matters less to you than making sure no one gets upset.'},
        {id: 4, category: 'E', text: 'You get energized going to social events that involve many interactions.'},
        {id: 5, category: 'N', text: 'You often spend time exploring unrealistic and impractical yet intriguing ideas.'},
        {id: 6, category: 'P', text: 'Deadlines seem to you to be of relative rather than absolute importance.'},
        {id: 7, category: 'T', text: 'Logic is usually more important than heart when it comes to making important decisions.'},
        {id: 8, category: 'J', text: 'Your home and work environments are quite tidy.'},
        {id: 9, category: 'E', text: 'You do not mind being at the center of attention.'},
        {id: 10, category: 'P', text: 'Keeping your options open is more important than having a to-do list.'}
      ]);
    });
};
