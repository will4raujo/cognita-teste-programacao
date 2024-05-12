// import { driver } from '../database/_index';
import fs from 'fs';
import { Step } from './step';

type Trail = {
  id: string;
  title: string;
  steps: Step[];
};

export class TrailService {
  trails: Trail[] = [];

  loadFromFile() {
    try {
      const data = fs.readFileSync('./trails.json', 'utf8');
      this.trails = JSON.parse(data.toString());
    } catch (err) {
      console.error(err);
    }
  }

  getTrails() {
    this.loadFromFile();
    return this.trails;

    //buscando no neo4j
    // const session = await driver.session();
    // try {
    //   const result = await session.run(`MATCH (s:Trail) RETURN s`);
    //   return result.records.map((record) => record.get('s').properties);
    // } finally {
    //   await session.close();
    // }
  }

  getTrailById(id: string) {
    this.loadFromFile();
    return this.trails.find((trail) => trail.id === id);

    //buscando no neo4j
    // const session = await driver.session();
    // try {
    //   const result = await session.run(
    //     `MATCH (s:Trail {id: $id}) RETURN s`,
    //     { id }
    //   );
    //   return result.records[0].get('s').properties;
    // } finally {
    //   await session.close(); 
    // }
  }

  createStep(trailId: string, step: Step) {
    this.loadFromFile();
    const newStep = {
      id: step.id,
      title: step.title,
      content: step.content,
    };

    for (let i = 0; i < this.trails.length; i++) {
      if (this.trails[i].id === trailId) {
        if (this.trails[i].steps.findIndex((step) => step.id === newStep.id) === -1) {
          this.trails[i].steps.push(newStep);
        }else {
          for (let j = 0; j < this.trails[i].steps.length; j++) {
            if (this.trails[i].steps[j].id === newStep.id) {
              this.trails[i].steps[j] = newStep;
            }
          }
        }
        break
      }
    }

    this.saveInFile();
    return newStep;
  }

  //adicionando no neo4j
  // const session = await driver.session();
  // try {
  //   await session.run(
  //     `CREATE (t:Trail {id: $id, title: $title}) RETURN t`,
  //     {
  //       id: trail.id,
  //       title: trail.title,
  //     }
  //   );
  // } finally {
  //   await session.close();
  // }

  saveInFile() {
    fs.writeFileSync('./trails.json', JSON.stringify(this.trails));
  }
}