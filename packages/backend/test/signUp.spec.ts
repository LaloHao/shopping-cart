require('dotenv').config();
import driver from '../src/driver';
import { mkContext, mkServer } from '../src/server';
import { SignUpDocument, SignUpMutationVariables } from '@shopping-cart/types';
import { testProp as test, fc } from 'ava-fast-check';
import faker = require('faker');
faker.locale = 'es_MX';

// TODO: find a way of running multiple databases to run tests in parallel
async function createDatabase(name: string) {
  const session = driver.session();
  try {
    // this should fail on neo4j-community-edition
    return await session.run(`
:use system
CREATE DATABASE ${name};
`);
  } catch(e) {
    console.error('database creation failed', e);
  } finally {
    await session.close();
  }
}

async function dropDatabase(t) {
  try {
    await driver.verifyConnectivity();
    t.log('Driver created');
  } catch (e) {
    t.error('Driver failed', e);
  }

  try {
    const r = await session.run(
      'MATCH (u:User) DELETE u',
    )
    // t.log('result', r);
  } catch (e) {
    // t.log('errored', e);
  } finally {
    return await session.close();
  }
}

// test.before('Limpia la base de datos antes de empezar con las pruebas', async t => await dropDatabase(t));

const database = 'foo';
test.before('Limpia la base de datos antes de empezar con las pruebas', async t => {
  await createDatabase(database);
});

const context = mkContext({ driver, database });
const server = mkServer(context);
const session = driver.session({ database });

const fakerToArb = (fakerGen) => {
  return fc.integer()
    .noBias()   // same probability to generate each of the allowed integers
    .noShrink() // shrink on a seed makes no sense
    .map(seed => {
      faker.seed(seed);  // seed the generator
      return fakerGen(); // call it
    });
};

const username = fakerToArb(faker.internet.userName);
const name = fakerToArb(() => faker.fake('{{name.firstName}} {{name.lastName}}'));

let ultimoUsuario = null;
test('deberia registar un nombre de usuario que aun no existe', [username, name], async (t, u, n) => {
  let result;
  try {
    result = await server.executeOperation({
      query: SignUpDocument,
      variables: {
        name: n,
        // name: "Ju ju",
        username: u,
        password: "facil",
      },
    });
  } catch (error) {
    console.log(error);
  }

  t.true(!result.errors);

  console.log('se creo el usuario con nombre', n);
  ultimoUsuario = u;
}, { numRuns: 25 });

test.serial('deberia de fallar cuando intentas crear un usuario que ya existe', [name], async (t, n) => {
  let result;
  try {
    result = await server.executeOperation({
      query: SignUpDocument,
      variables: {
        name: n,
        // name: "Ju ju",
        username: ultimoUsuario,
        password: "facil",
      },
    });
  } catch (error) {
    // console.log(error);
  }

  t.true(!!result.errors);
}, { numRuns: 1 });

test.after(async t => {
  return await driver.close();
})
