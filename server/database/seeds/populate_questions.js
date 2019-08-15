
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {id: 1, dimension: 'EI', direction: 1, meaning: 'I', text: 'You find it takes effort to introduce yourself to other people.'},
        {id: 2, dimension: 'SN', direction: -1, meaning: 'S', text: 'You consider yourself more practical than creative.'},
        {id: 3, dimension: 'TF', direction: 1, meaning: 'F', text: 'Winning a debate matters less to you than making sure no one gets upset.'},
        {id: 4, dimension: 'EI', direction: -1, meaning: 'E', text: 'You get energized going to social events that involve many interactions.'},
        {id: 5, dimension: 'SN', direction: 1, meaning: 'N', text: 'You often spend time exploring unrealistic and impractical yet intriguing ideas.'},
        {id: 6, dimension: 'JP', direction: 1, meaning: 'P', text: 'Deadlines seem to you to be of relative rather than absolute importance.'},
        {id: 7, dimension: 'TF', direction: -1, meaning: 'T', text: 'Logic is usually more important than heart when it comes to making important decisions.'},
        {id: 8, dimension: 'JP', direction: -1, meaning: 'J', text: 'Your home and work environments are quite tidy.'},
        {id: 9, dimension: 'EI', direction: -1, meaning: 'E', text: 'You do not mind being at the center of attention.'},
        {id: 10, dimension: 'JP', direction: 1, meaning: 'P', text: 'Keeping your options open is more important than having a to-do list.'}
      ]);
    });
};
