// import { driver } from '../database/_index';
import fs from 'fs';

export type Step = {
  id: string;
  title: string;
  content: string;
};

export class StepService {
  steps: Step[] = [];

  saveInFile() {
    fs.writeFileSync('./steps.json', JSON.stringify(this.steps));
  }

  loadFromFile() {
    try {
      const data = fs.readFileSync('./steps.json', 'utf8');
      this.steps = JSON.parse(data.toString());
    } catch (err) {
      console.error(err);
    }
  }

  create(step: Step) {
    this.loadFromFile();
    const newStep = {
      id: step.id,
      title: step.title,
      content: step.content,
    };

    this.steps.push(newStep);
    this.saveInFile();
    return newStep;

    //adicionando no neo4j
    // const session = await driver.session();
      //try {
      //  await session.run(
      //    `CREATE (s:Step {id: $id, title: $title, content: $content}) RETURN s`,
      //    {
      //      id: step.id,
      //      title: step.title,
      //      content: step.content,
      //    }
      //  );
      //} finally {
      //  await session.close();
      //}
  }

  getSteps() {
    this.loadFromFile();
    return this.steps;

    //buscando no neo4j
    // const session = await driver.session();
    // try {
    //   const result = await session.run(`MATCH (s:Step) RETURN s`);
    //   return result.records.map((record) => record.get('s').properties);
    // } finally {
    //   await session.close();
    // }
  }
}