import fs from 'fs';

function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path+'/'+file).isDirectory();
  });
}

var pageChoices = getDirectories('./src/pages');

export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Введи название компонента:'
      },
      {
        type: 'confirm',
        name: 'isCommon',
        message: 'Это общий компонент?',
        default: false,
      },
      {
        when: function (response) {
          return !response.isCommon
        },
        type: "list",
        name: "page",
        message: "Выбери страницу компонента:",
        choices: pageChoices,
      }
    ],
    actions: (data) => {
      const { isCommon, page } = data;
      const pathPrefix = isCommon ? 'src/components/' : `src/pages/${page}/components/`;

      return [
          {
            type: 'add',
            path: pathPrefix + '{{pascalCase name}}/{{pascalCase name}}.tsx',
            templateFile: 'templates/Component.tsx.hbs',
            skipIfExists: true
          },
          {
            type: 'add',
            path: pathPrefix + '{{pascalCase name}}/{{pascalCase name}}.style.tsx',
            templateFile: 'templates/Style.tsx.hbs',
            skipIfExists: true
        },
        {
          type: 'add',
          path: pathPrefix + '{{pascalCase name}}/index.ts',
          templateFile: 'templates/Index.ts.hbs',
          skipIfExists: true
        },
        ]
    }
  });
};
