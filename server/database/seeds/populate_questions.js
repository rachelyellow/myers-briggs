
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {id: 1, category: 'E', text: 'I feel invigorated from my time being around other people.'},
        {id: 2, category: 'I', text: 'I’m comfortable being by myself and use this time to recharge.'},
        {id: 3, category: 'S', text: 'I’m a practical person who tends to be concerned with the bottom line.'},
        {id: 4, category: 'N', text: 'I like to solve problems by leaping between different possibilities and ideas.'},
        {id: 5, category: 'T', text: 'I pride myself on making decisions with my head and being both fair and consistent.'},
        {id: 6, category: 'F', text: 'I make decisions with my heart and strive to be compassionate.'},
        {id: 7, category: 'J', text: 'I like to get my work done before playing.'},
        {id: 8, category: 'J', text: 'I prefer to have things decided.'},
        {id: 9, category: 'P', text: 'I prefer to keep things loose/casual. I’m not concerned with making a plan.'},
        {id: 10, category: 'P', text: 'I am energized/stimulated by an approaching deadline.'}
      ]);
    });
};
