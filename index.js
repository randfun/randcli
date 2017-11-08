// Requires
const cli = require('commander');
const api = require('randfun');
const config = require('./package.json');

// Vars
let categories = Object.keys(api);

const showCategories = () => {
  console.log(`\n  Available categories:\n`);
  categories.forEach((cat) => {
    console.log(`    - ${cat}`);
  });
}

const showDatasetsOf = (category) => {
  console.log(`\n  Available datasets for ${category}:\n`);
  Object.keys(api[category]).forEach((gen) => {
    console.log(`    - ${gen}`);
  });
}

// Initialize the CLI
cli
  .version(config.version)
  .usage('<category> [dataset]')
  .arguments('<category> [dataset]')
  .action((category, dataset) => {
    if(categories.indexOf(category) > -1) {
      if (!dataset) {
        console.log(`\n  Usage: randcli ${category} <dataset>`);
        showDatasetsOf(category);
      } else {
        if (typeof api[category][dataset] === 'function') {
          api[category][dataset]()
            .then((res) => {
              // Print without \n
              process.stdout.write(res.result.toString());
            })
            .catch((err) => {
              console.error(`Ups! There was an error contacting the API: ${err}`);
            });
        } else {
          console.log(`\n  Ups! The dataset "${dataset} doesn't exist in the ${category} category".`);
          showDatasetsOf(category);
        }
      }
    } else {
      console.log(`\n  I'm sorry but the category "${category}" doesn't exist.`);
      showCategories();
    }
  });

cli.on('--help', function(){
  showCategories();
  console.log(`\n  [NOTE] If no dataset selected, the CLI will show the list of`);
  console.log('         datasets of the category.');

  console.log(`\n  Examples:\n`);
  console.log(`    $ randcli number`);
  console.log(`    $ randcli number integer`);
});

// Parse
cli.parse(process.argv);

// Display help if no args passed
if (!cli.args.length) cli.help();
