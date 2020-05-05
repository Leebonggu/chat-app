module.exports = plop => {
  plop.setGenerator('folder', {
    description: 'Create a new folder',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your folder name?'
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{camelCase name}}/container/{{camelCase name}}.js',
        templateFile: 'plop-templates/container/container.js.hbs',
      },
      {
        type: 'add',
        path: 'src/{{camelCase name}}/container/__tests__/{{camelCase name}}.test.js',
        templateFile: 'plop-templates/container/__tests__/container.test.js.hbs',
      },
      {
        type: 'add',
        path: 'src/{{camelCase name}}/component/{{camelCase name}}Component.js',
        templateFile: 'plop-templates/component/component.js.hbs',
      },
      {
        type: 'add',
        path: 'src/{{camelCase name}}/component/__tests__/{{camelCase name}}Component.test.js',
        templateFile: 'plop-templates/component/__tests__/component.test.js.hbs',
      },
      {
        type: 'add',
        path: 'src/{{camelCase name}}/actions/{{camelCase name}}.js',
        templateFile: 'plop-templates/actions/action.js.hbs',
      },
      {
        type: 'add',
        path: 'src/{{camelCase name}}/actions/initializer.js',
        templateFile: 'plop-templates/actions/initializer.js.hbs',
      },
      {
        type: 'add',
        path: 'src/{{camelCase name}}/actions/__tests__/{{camelCase name}}.test.js',
        templateFile: 'plop-templates/actions/__tests__/action.test.js.hbs',
      },
      {
        type: 'add',
        path: 'src/{{camelCase name}}/reducers/{{camelCase name}}Reducer.js',
        templateFile: 'plop-templates/reducers/combineReducer.js.hbs',
      },
      {
        type: 'add',
        path: 'src/{{camelCase name}}/reducers/{{camelCase name}}.js',
        templateFile: 'plop-templates/reducers/reducer.js.hbs',
      },
      {
        type: 'add',
        path: 'src/{{camelCase name}}/reducers/__tests__/{{camelCase name}}.test.js',
        templateFile: 'plop-templates/reducers/__tests__/reducer.test.js.hbs',
      },
      {
        type: 'add',
        path: 'src/{{camelCase name}}/{{camelCase name}}RouteConfig.js',
        templateFile: 'plop-templates/routeConfig.js.hbs',
      },
      {
        type: 'append',
        path: 'src/rootReducer.js',
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{camelCase name}} from './{{camelCase name}}/reducers/{{camelCase name}}Reducer';`,
      },
      {
        type: 'append',
        path: 'src/rootReducer.js',
        pattern: `/* PLOP_INJECT_REDUCER */`,
        template: `\t{{camelCase name}},`,
      },
      {
        type: 'append',
        path: 'src/routes/routeConfig.js',
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import { {{camelCase name}}RouteConfig } from '../{{camelCase name}}/{{camelCase name}}RouteConfig';`,
      },
      {
        type: 'append',
        path: 'src/routes/routeConfig.js',
        pattern: `/* PLOP_INJECT_ROUTE */`,
        template: `\t...{{camelCase name}}RouteConfig,`,
      },
      {
        type: 'append',
        path: 'src/routes/index.js',
        pattern: `/* PLOP_INJECT_CONSTANT */`,
        template: `\t...{{camelCase name}}RouteConstants,`,
      },
      {
        type: 'append',
        path: 'src/routes/index.js',
        pattern: `/* PLOP_INJECT_CONSTANT_IMPORT */`,
        template: `import { {{camelCase name}}RouteConstants } from '../{{camelCase name}}/{{camelCase name}}RouteConfig';`,
      },
      {
        type: 'append',
        path: 'src/appInitializer.js',
        pattern: `/* PLOP_INJECT_INITIALIZER_IMPORT */`,
        template: `import {{camelCase name}} from './{{camelCase name}}/actions/initializer';`,
      },
      {
        type: 'append',
        path: 'src/appInitializer.js',
        pattern: `/* PLOP_INJECT_INITIALIZER */`,
        template: `\t\tdispatch({{camelCase name}}()),`,
      },
    ],
  });
};