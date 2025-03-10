import neo4j from 'neo4j-driver';

export const driver = neo4j.driver(
  'bolt://localhost:7687',
  neo4j.auth.basic('neo4j', 'masterkey')
);

//criando os nós e relações no neo4j

// CREATE (s:Step {
//   id: 'step-1', 
//   title: 'O primeiro passo', 
//   content: 'O conteúdo do primeiro passo'
// })
// CREATE (t:Trail {
// id: 'trail-1',
// title: 'A primeira trilha'
// }) 
// CREATE (tm:Theme {
// id: 'theme-1',
// title: 'O primeiro tema'
// })
// CREATE (a:Academy {
// id: 'academy-1',
// title: 'A primeira academia'
// })

// MATCH (t:Trail {id: 'trail-1'})
// MATCH (s:Step {id: 'step-1'})
// CREATE (t)-[:HAS_STEP]->(s)

// MATCH (tm:Theme {id: 'theme-1'})
// MATCH (t:Trail {id: 'trail-1'})
// CREATE (tm)-[:HAS_TRAIL]->(t)

// MATCH (a:Academy {id: 'academy-1'})
// MATCH (tm:Theme {id: 'theme-1'})
// CREATE (a)-[:HAS_THEME]->(tm)